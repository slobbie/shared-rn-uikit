#!/usr/bin/env node
/**
 * docs:check — 패키지 공개 API와 문서 동기화 검사.
 *
 * 규칙: src/index.web.ts + src/index.native.ts에서 export 되는 컴포넌트는
 * docs/components/<name>.mdx 문서가 있어야 한다.
 * (Docs/package-documentation-portal-goal.md의 CI 동기화 조건)
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PACKAGES = [
  {
    name: '@package/design-system',
    dir: path.join(root, 'packages/design-system'),
    entries: ['src/index.web.ts', 'src/index.native.ts'],
  },
];

// export { Name } from './components/<tier>/Name/...' 형태 수집 — tier(atoms/molecules)도 기록
const collectComponentExports = (source) => {
  const entries = new Map(); // name → tier
  const pattern =
    /export\s+\{\s*([A-Za-z0-9_,\s]+?)\s*\}\s+from\s+'\.\/components\/([a-z]+)\//g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    for (const raw of match[1].split(',')) {
      const name = raw.trim();
      if (name) entries.set(name, match[2]);
    }
  }
  return entries;
};

let failed = false;

for (const pkg of PACKAGES) {
  const exported = new Map(); // name → tier (atoms | molecules)
  for (const entry of pkg.entries) {
    const file = path.join(pkg.dir, entry);
    if (!existsSync(file)) {
      console.error(`[docs:check] ${pkg.name}: 진입점 없음 — ${entry}`);
      failed = true;
      continue;
    }
    for (const [name, tier] of collectComponentExports(readFileSync(file, 'utf8'))) {
      exported.set(name, tier);
    }
  }

  const missing = [];
  for (const [name, tier] of [...exported.entries()].sort()) {
    // 문서는 소스와 같은 분류 폴더에 있어야 한다: docs/components/<tier>/<name>.mdx
    const doc = path.join(
      pkg.dir,
      'docs/components',
      tier,
      `${name.toLowerCase()}.mdx`,
    );
    if (!existsSync(doc)) missing.push({ name, tier });
  }

  if (missing.length > 0) {
    failed = true;
    console.error(
      `[docs:check] ${pkg.name}: 문서 누락/분류 불일치 ${missing.length}개`,
    );
    for (const { name, tier } of missing) {
      console.error(
        `  - ${name} → docs/components/${tier}/${name.toLowerCase()}.mdx 필요`,
      );
    }
  } else {
    console.log(
      `[docs:check] ${pkg.name}: OK — 컴포넌트 ${exported.size}개 문서·분류 일치`,
    );
  }
}

// motion은 Components/Hooks 문서를 분리 검사하고 Web/Native 공개 API parity를 강제한다.
const motion = {
  name: '@package/motion',
  dir: path.join(root, 'packages/motion'),
  entries: ['src/index.web.ts', 'src/index.native.ts'],
};

const collectValueExports = (source) => {
  const values = new Set();
  const pattern = /export\s+\{\s*([A-Za-z0-9_,\s]+?)\s*\}\s+from/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    for (const raw of match[1].split(',')) {
      const name = raw.trim();
      if (name) values.add(name);
    }
  }
  return values;
};

const collectFolderExports = (source, folder) => {
  const values = new Set();
  const pattern = new RegExp(
    `export\\s+\\{\\s*([A-Za-z0-9_,\\s]+?)\\s*\\}\\s+from\\s+'\\.\\/${folder}\\/`,
    'g',
  );
  let match;
  while ((match = pattern.exec(source)) !== null) {
    for (const raw of match[1].split(',')) {
      const name = raw.trim();
      if (name) values.add(name);
    }
  }
  return values;
};

const motionEntryExports = motion.entries.map((entry) => {
  const file = path.join(motion.dir, entry);
  if (!existsSync(file)) {
    failed = true;
    console.error(`[docs:check] ${motion.name}: 진입점 없음 — ${entry}`);
    return new Set();
  }
  return collectValueExports(readFileSync(file, 'utf8'));
});

const [webExports, nativeExports] = motionEntryExports;
const parityDiff = [
  ...[...webExports].filter((name) => !nativeExports.has(name)),
  ...[...nativeExports].filter((name) => !webExports.has(name)),
];
if (parityDiff.length > 0) {
  failed = true;
  console.error(
    `[docs:check] ${motion.name}: Web/Native 공개 API 불일치 — ${parityDiff.join(', ')}`,
  );
}

const motionEntrySources = motion.entries.map((entry) =>
  readFileSync(path.join(motion.dir, entry), 'utf8'),
);
const hookNames = [
  ...new Set(
    motionEntrySources.flatMap((source) => [
      ...collectFolderExports(source, 'hooks'),
    ]),
  ),
];
const componentNames = [
  ...new Set(
    motionEntrySources.flatMap((source) => [
      ...collectFolderExports(source, 'components'),
    ]),
  ),
];
const toSlug = (name) =>
  name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const missingHookDocs = hookNames.filter((name) => {
  const slug = toSlug(name);
  return !existsSync(path.join(motion.dir, `docs/hooks/${slug}.mdx`));
});
const missingComponentDocs = componentNames.filter((name) => {
  const slug = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  return !existsSync(path.join(motion.dir, `docs/components/${slug}.mdx`));
});

if (missingHookDocs.length > 0) {
  failed = true;
  console.error(
    `[docs:check] ${motion.name}: Hooks 문서 누락 — ${missingHookDocs.join(', ')}`,
  );
}
if (missingComponentDocs.length > 0) {
  failed = true;
  console.error(
    `[docs:check] ${motion.name}: Components 문서 누락 — ${missingComponentDocs.join(', ')}`,
  );
}
if (
  missingHookDocs.length === 0 &&
  missingComponentDocs.length === 0 &&
  parityDiff.length === 0
) {
  console.log(
    `[docs:check] ${motion.name}: OK — 공개 API parity, Components ${componentNames.length}개·Hooks ${hookNames.length}개 문서 분리 일치`,
  );
}

process.exit(failed ? 1 : 0);

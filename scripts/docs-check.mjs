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

process.exit(failed ? 1 : 0);

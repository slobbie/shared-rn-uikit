#!/usr/bin/env node
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'packages/motion/src');

const files = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(target);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(target);
  }
};
visit(sourceRoot);

let failed = false;
for (const file of files) {
  const source = readFileSync(file, 'utf8');
  const relative = path.relative(root, file);

  if (source.includes('@package/design-system') || source.includes('@shared')) {
    failed = true;
    console.error(`[motion:check] 역방향 의존성 금지 — ${relative}`);
  }

  if (
    file.endsWith('.native.ts') ||
    file.endsWith('.native.tsx')
  ) {
    if (/import\s*\{[^}]*\bAnimated\b[^}]*\}\s*from\s*['"]react-native['"]/.test(source)) {
      failed = true;
      console.error(`[motion:check] RN 내장 Animated 사용 금지 — ${relative}`);
    }
  }
}

const readSource = (relative) =>
  readFileSync(path.join(sourceRoot, relative), 'utf8');

const webBox = readSource('components/MotionBox/MotionBox.web.tsx');
if (!webBox.includes("from 'motion/react'") || !webBox.includes('AnimatePresence')) {
  failed = true;
  console.error('[motion:check] Web MotionBox는 Motion AnimatePresence를 사용해야 함');
}

const nativeBox = readSource('components/MotionBox/MotionBox.native.tsx');
if (!nativeBox.includes("from 'react-native-reanimated'")) {
  failed = true;
  console.error('[motion:check] Native MotionBox는 Reanimated.View를 사용해야 함');
}

const nativePresence = readSource('core/useNativePresence.native.ts');
for (const api of ['useSharedValue', 'withTiming', 'runOnJS']) {
  if (!nativePresence.includes(api)) {
    failed = true;
    console.error(`[motion:check] Reanimated ${api} 사용 누락`);
  }
}

if (!failed) {
  console.log(
    `[motion:check] OK — ${files.length}개 파일, Web Motion + Native Reanimated + 단방향 의존성 준수`,
  );
}

process.exit(failed ? 1 : 0);

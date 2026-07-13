import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createMDX } from 'fumadocs-mdx/next';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const designSystemSrc = path.resolve(dirname, '../../packages/design-system/src');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // 홈 디렉토리의 잡동사니 lockfile 오인 방지
  outputFileTracingRoot: path.resolve(dirname, '../..'),
  transpilePackages: ['@package/design-system'],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias['@shared'] = designSystemSrc;
    return webpackConfig;
  },
  turbopack: {
    resolveAlias: {
      '@shared': designSystemSrc,
    },
  },
};

export default withMDX(config);

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createMDX } from 'fumadocs-mdx/next';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const designSystemSrc = path.resolve(dirname, '../../packages/design-system/src');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'shared-rn-uikit';
const basePath = isGitHubPages ? `/${repositoryName}` : '';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // 루트 ESLint 설정은 Expo 앱 전용 resolver를 사용한다.
  // 문서 앱은 별도 typecheck를 실행하므로 Next build의 중복 lint는 건너뛴다.
  eslint: { ignoreDuringBuilds: true },
  // 홈 디렉토리의 잡동사니 lockfile 오인 방지
  outputFileTracingRoot: path.resolve(dirname, '../..'),
  transpilePackages: ['@package/design-system', '@package/motion'],
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

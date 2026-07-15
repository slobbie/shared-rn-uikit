import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

// 카테고리별 root 폴더 구조. 패키지 문서는 패키지 옆 docs/가 원본이고
// content/docs/ 안에 심링크로 편입된다 (예: design-system → packages/design-system/docs).
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();

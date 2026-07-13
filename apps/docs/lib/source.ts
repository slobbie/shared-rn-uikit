import { loader } from 'fumadocs-core/source';

import { docs } from '@/.source';

const mdxSource = docs.toFumadocsSource();

// fumadocs-mdx 11.x는 런타임에 files를 지연 함수로 반환하지만
// fumadocs-core 15.8의 loader는 배열만 받는다 — 여기서 언랩.
const rawFiles = mdxSource.files as unknown;
const files = (
  typeof rawFiles === 'function' ? rawFiles() : rawFiles
) as typeof mdxSource.files;

export const source = loader({
  baseUrl: '/docs',
  source: { ...mdxSource, files },
});

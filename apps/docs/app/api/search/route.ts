import { createFromSource } from 'fumadocs-core/search/server';

import { source } from '@/lib/source';

export const dynamic = 'force-static';

const search = createFromSource(source);

// GitHub Pages에서는 서버가 없으므로 빌드 시 Orama 인덱스를 JSON으로 내보낸다.
export const GET = search.staticGET;

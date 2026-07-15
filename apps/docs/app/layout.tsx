import './global.css';

import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | Package Docs',
    default: 'Package Docs',
  },
  description: '모노레포 패키지 문서 포털',
};

export default function Layout({ children }: { children: ReactNode }) {
  const searchApi = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/api/search`;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{ options: { type: 'static', api: searchApi } }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

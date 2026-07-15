'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/design-system');
  }, [router]);

  return (
    <main
      style={{
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        padding: 24,
      }}
    >
      <p>
        문서로 이동 중입니다.{' '}
        <Link href="/docs/design-system">바로 이동</Link>
      </p>
    </main>
  );
}

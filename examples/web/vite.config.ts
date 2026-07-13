import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // design-system 내부 소스가 사용하는 alias — 패키지 src로 매핑
      '@shared': path.resolve(__dirname, '../../packages/design-system/src'),
    },
  },
});

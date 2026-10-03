import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
export default defineConfig([...nextVitals, ...nextTs, { files: ['src/particles/engine/**/*.tsx'], rules: { 'react-hooks/immutability': 'off' } }, globalIgnores(['.next/**', 'next-env.d.ts'])]);

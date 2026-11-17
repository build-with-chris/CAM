import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

// Flat Config fuer die ESLint-CLI. `next lint` gibt es seit Next 16 nicht mehr,
// gelintet wird ueber `npm run lint`.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Arbeitskopien von Agenten-Laeufen, keine Quelldateien
    '.claude/**',
  ]),
]);

export default eslintConfig;

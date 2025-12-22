# Vite + React + TypeScript + Tailwind CSS - Projekt Setup Guide

## 1. Projekt initialisieren

```bash
# Projekt mit Vite erstellen
npm create vite@latest my-app -- --template react-ts

# In Projektverzeichnis wechseln
cd my-app

# Dependencies installieren
npm install

# React Router installieren
npm install react-router-dom

# Tailwind CSS installieren
npm install -D tailwindcss postcss autoprefixer

# Tailwind initialisieren
npx tailwindcss init -p

# ESLint & Prettier installieren
npm install -D eslint-config-prettier eslint-plugin-prettier prettier

# Optional: Zusätzliche hilfreiche Packages
npm install clsx tailwind-merge
```

## 2. Konfigurationsdateien

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-gray-900 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }

  /* Focus styles für Barrierefreiheit */
  *:focus-visible {
    @apply outline-none ring-2 ring-primary-500 ring-offset-2 rounded;
  }
}

@layer components {
  /* Beispiel: Wiederverwendbare Button-Klasse */
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors duration-200;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700;
    @apply focus:ring-primary-500;
  }

  .btn-secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
    @apply focus:ring-gray-400;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### `.eslintrc.cjs`

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
}
```

### `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "arrowParens": "always"
}
```

### `.prettierignore`

```
# Dependencies
node_modules

# Production
dist
build

# Misc
.DS_Store
*.log
coverage
.env
.env.local
```

## 3. Empfohlene Ordnerstruktur

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/              # Bilder, Fonts, etc.
│   │   └── react.svg
│   ├── components/          # Wiederverwendbare Komponenten
│   │   ├── ui/             # Basis-UI-Komponenten
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   └── layout/         # Layout-Komponenten
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Layout.tsx
│   ├── pages/              # Seiten-Komponenten
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── lib/                # Utility-Funktionen
│   │   ├── utils.ts
│   │   └── cn.ts           # Tailwind class merge helper
│   ├── content/            # Statische Inhalte, Daten
│   │   └── config.ts
│   ├── hooks/              # Custom React Hooks
│   │   └── useLocalStorage.ts
│   ├── types/              # TypeScript Types/Interfaces
│   │   └── index.ts
│   ├── App.tsx             # Haupt-App-Komponente
│   ├── main.tsx            # Entry Point
│   ├── index.css           # Tailwind Imports
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .prettierrc
├── .prettierignore
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 4. Basis-Komponenten

### `src/lib/cn.ts` (Tailwind Class Merge Helper)

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/components/ui/Button.tsx`

```tsx
import React from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
```

### `src/components/ui/Card.tsx`

```tsx
import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn('bg-white rounded-lg shadow-md p-6', className)}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn('mb-4', className)}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return (
    <h3 className={cn('text-xl font-semibold text-gray-900', className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn('text-gray-700', className)}>{children}</div>;
};
```

### `src/components/layout/Header.tsx`

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Logo
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
```

### `src/components/layout/Footer.tsx`

```tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <p className="text-gray-400">
              Building amazing web experiences with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">contact@example.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
```

### `src/components/layout/Layout.tsx`

```tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
```

## 5. Seiten-Komponenten

### `src/pages/Home.tsx`

```tsx
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Vite + React
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern starter template with TypeScript and Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>⚡ Fast</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lightning-fast development with Vite's instant HMR</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Styled</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Beautiful UI with Tailwind CSS utility classes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📦 TypeScript</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Full type safety with TypeScript support</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
```

### `src/pages/About.tsx`

```tsx
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        This is a starter template built with modern web technologies.
      </p>
    </div>
  );
};
```

### `src/pages/NotFound.tsx`

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link to="/">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
};
```

## 6. App-Konfiguration

### `src/App.tsx`

```tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### `src/main.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### `tsconfig.json` (Path Aliases aktualisieren)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 7. Package.json Scripts erweitern

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css,md}\"",
    "preview": "vite preview"
  }
}
```

## 8. VS Code Settings (Optional)

Erstelle `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## 9. Projekt starten

```bash
# Development Server starten
npm run dev

# Code formatieren
npm run format

# Linting durchführen
npm run lint

# Production Build
npm run build

# Production Preview
npm run preview
```

## 10. Zusätzliche Empfehlungen

### Git Setup

```bash
git init
git add .
git commit -m "Initial commit: Vite + React + TypeScript + Tailwind"
```

### Empfohlene VS Code Extensions

- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- TypeScript Import Sorter (mike-co.import-sorter)

### Nützliche zusätzliche Packages

```bash
# Form Handling
npm install react-hook-form zod @hookform/resolvers

# State Management
npm install zustand

# Icons
npm install lucide-react

# Date Handling
npm install date-fns

# API Requests
npm install axios
```

## Fertig! 🎉

Dein Projekt ist jetzt vollständig konfiguriert und bereit für die Entwicklung.

Die Website läuft unter: http://localhost:5173

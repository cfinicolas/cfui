import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import { UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { name } from './package.json'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    optimizeDeps: {
      exclude: ['@cfui/components'],
    },
    plugins: [
      cssInjectedByJsPlugin(),
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name,
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  })
}

export default app

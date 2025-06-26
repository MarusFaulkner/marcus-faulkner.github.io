import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/marcus-faulkner.github.io/',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
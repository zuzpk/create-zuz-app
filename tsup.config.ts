import { defineConfig } from 'tsup';

export default defineConfig({
  // 1. Entry points: index for the lib, bin for the CLI
  entry: {
    index: 'src/index.ts',
    bin: 'src/bin.ts'
  },
  format: ['cjs'],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: false,
  minify: true,
  treeshake: true,
  external: [],
  // Shims handles __dirname and __filename in ESM
  shims: true,
  // Ensures the bin file has the #!/usr/bin/env node header
  banner: () => ({ js: '/* ZuzJS App Manager */' }),
  onSuccess: async () => {
    console.log('✅ ZuzJS App Manager Build Complete');
  }
});
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const resolve = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const typescript = require('@rollup/plugin-typescript')
const json = require('@rollup/plugin-json')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')

const appPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
  }),
  peerDepsExternal(),
  json(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
]

const frontPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
  }),
  peerDepsExternal(),
  resolve({
    browser: true,
  }),
  json(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  terser(),
]

module.exports = [
  // App chunks
  {
    input: './app/main.ts',
    output: {
      name: 'HelycaApp',
      file: 'dist/app.js',
      format: 'cjs',
    },
    plugins: appPlugins,
  },
  {
    input: './app/preload.ts',
    output: {
      name: 'HelycaPreload',
      file: 'dist/preload.js',
      format: 'cjs',
    },
    plugins: appPlugins,
  },
  // Front chunks
  {
    input: './src/index.tsx',
    output: {
      name: 'HelycaFront',
      file: 'dist/helyca.js',
      format: 'iife',
    },
    plugins: frontPlugins,
  },
]

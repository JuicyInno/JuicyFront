import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import styles from 'rollup-plugin-styles';
import scopedCss from "style-scope/postcss";
import url from '@rollup/plugin-url';
import rename from 'rollup-plugin-rename-node-modules';
import pkg from './package.json';
import path from 'path';
import md5 from 'md5';


const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName.replaceAll('-', '\-')}(\/.*)?`));

export default {
  input: ['src/index.ts', 'src/indexIcon.ts'],
  output: [{
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: 'dist',
    format: 'esm'
  }, {
    entryFileNames: '[name].[format].js',
    dir: 'dist',
    format: 'cjs'
  }],
  external: regexesOfPackages,
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      preferBuiltins: true,
      browser: true
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.esm.json' }),
    babel({
      configFile: './babel.config.esm.js',
      babelHelpers: 'runtime',
      exclude: './node_modules/**',
      extensions
    }),
    styles({
      extract: false,
      inject: true,
      plugins: [scopedCss({ attrPrefix: 'data-v-', rootScope: md5(pkg.version).substr(0, 8) })]
    }),
    rename('dependencies'),
    url({
      limit: Infinity,
      fileName: '[dirname][name][extname]',
      sourceDir: path.join(__dirname, 'src'),
    }),
    json()
  ]
};

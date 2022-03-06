import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import styles from 'rollup-plugin-styles';
import scopedCss from "style-scope/postcss";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: ['src/index.esm.ts', 'src/indexIcon.ts'],
  output: {
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: 'dist',
    format: 'esm'
  },
  external: [/@babel\/runtime/, 'react', 'react-dom'],
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
      plugins: [scopedCss({ rootScope: "sample" })]
    }),
    json()
  ]
};
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("../webpack/lib/container/ModuleFederationPlugin");


const env = process.argv[process.argv.indexOf('--mode') + 1] || 'development';
const isDev = env === 'development'

const fileEnv = dotenv.config({ path: `./.env.${env}` }).parsed;

const envKeys = Object.keys(fileEnv)
  .reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

envKeys['process.env.REACT_APP_V'] = `"${require('../../package.json').version}"`;

const sourceMap = isDev ? [new webpack.SourceMapDevToolPlugin({
  filename: "[file].map"
})] : [];

function common({
  port = 8000,
  applicationName = 'undefined',
  remotes = {},
  exposes = { './app': "./src/Main" },
  shared = {},
  baseUrl = '/',
  russianName = 'Неизвестное приложение'

}) {
  if (applicationName === 'undefined') console.error('НЕ ЗАДАНО ИМЯ ПРИЛОЖЕНИЯ')
  return {

    output: {
      publicPath: 'auto',
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, "../../dist"),
      clean: true,
    },
    optimization: { minimize: !isDev },
    devtool: isDev ? 'source-map' : undefined,
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: isDev ? {
      port,
      hot: true
    } : {},

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
          type: 'asset/resource'
        },

        {
          test: /\.(css|s[ac]ss)$/i,
          use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          ...(env === 'development' ? [] : [{
            loader: 'scoped-css-loader'
          }]),
          {
            loader: 'sass-loader'
          }],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }]
                },
                titleProp: true,
                ref: true
              }
            },
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash].[ext]'
              }
            }
          ]
        }

      ],
    },

    plugins: [

      new ModuleFederationPlugin({
        name: applicationName,
        library: { type: "var", name: applicationName },
        filename: "remoteEntry.js",
        remotes,
        exposes,
        shared,
      }),
      ...sourceMap,
      new webpack.DefinePlugin(envKeys),
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(env) } }),
      new HtmlWebPackPlugin({
        template: "./node_modules/juicyfront/index.html",
        favicon: "./node_modules/juicyfront/favicon.ico",
        baseUrl,
        russianName
      })
    ],

  };
}
exports.config = common;

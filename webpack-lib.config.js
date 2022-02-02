// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin')
// =========================================================================
module.exports = {
  entry: {index:'./src/index.ts',indexIcon:'./src/indexIcon.ts'},
  output: {
    filename: '[name].js',
    // publicPath: '',

    path: __dirname + '/dist',
     libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json'
    ],
    modules: [__dirname, 'node_modules']
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules'), /spec\.(js|jsx|ts|tsx)$/]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.css|\.scss$/,
        use: ['scoped-css-loader'],
        exclude: [path.resolve(__dirname, 'node_modules'), /src\/styles\/vendor\/*/]
      },
      {
        test: /\.css|\.scss$/,
        loader: ['sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader?limit=10000',
            options: { name: 'assets/img/[name].[ext]' }
          }
        ]
      },

    ]
  },
  node: { fs: 'empty' },
  stats: 'errors-only',
  externals: {
    'react': "react",
    'react-dom': "react-dom",
    'react-router-dom':"react-router-dom"
  },
  devServer: {
    historyApiFallback: true,
    writeToDisk: true
  },
  optimization: {
    minimize: true
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new CircularDependencyPlugin({
    //   // exclude detection of files based on a RegExp
    //   exclude: /node_modules/,
    //   // add errors to webpack instead of warnings
    //   failOnError: true,
    //   // allow import cycles that include an asyncronous import,
    //   // e.g. via import(/* webpackMode: "weak" */ './file.js')
    //   allowAsyncCycles: false,
    //   // set the current working directory for displaying module paths
    //   cwd: process.cwd(),
    // })
  ]
};

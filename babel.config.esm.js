const babelPluginJsxSyntax = require('@babel/plugin-syntax-jsx').default
const md5 = require('md5');
const packageJSON = require('./package.json');

const getFilenameFromPath = filePath => {
  const parts = filePath.split('/')
  return parts[parts.length - 1].split('?')[0];
}

const forPlugin = (path, stats) => {
  let { include: includeRegExp } = stats.opts
  if (!includeRegExp) {
    includeRegExp = /\.(sa|sc|c)ss\.js$/
  }
  const filename = getFilenameFromPath(path.node.source.value)
  return filename.match(new RegExp(includeRegExp))
}

function hashPlugin({ types: t }) {

  const hash = md5(packageJSON.version).substr(0, 8);

  return {
    inherits: babelPluginJsxSyntax,
    pre() {
      this.hasScopedCss = false;
    },
    visitor: {
      ImportDeclaration(path, stats) {
        if (!forPlugin(path, stats)) {
          return
        }
        this.hasScopedCss = true
      },
      JSXElement(path, stats) {
        const isFragment = path.node.openingElement.name.name === 'Fragment';

        if (!this.hasScopedCss || path.node.openingElement.name.type === 'JSXMemberExpression' || isFragment) {
          return
        }

        path.node.openingElement.attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier(`data-v-${hash}`),
            t.jsxExpressionContainer(t.stringLiteral('')),
          ),
        )
      },
    },
  }
}

module.exports = {
  "presets": [[
    "@babel/preset-env", { modules: false }
  ],"@babel/preset-react", "@babel/preset-typescript"],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    [
      hashPlugin,
      {
        "include": ".(sa|sc|c)ss$",
        "hashSeed": "hashSeed"
      }
    ]
  ]
}

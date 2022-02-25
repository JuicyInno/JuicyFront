
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
   '@storybook/preset-scss',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "storybook-dark-mode"
  ]

}


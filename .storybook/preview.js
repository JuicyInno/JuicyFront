import "../src/styles/index.scss";
import cssVars from 'css-vars-ponyfill';
import variables from '../src/styles/variables.json';

cssVars({
  watch: true,
  include: 'style,link[rel="stylesheet"]:not([href*="//"])',
  variables
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

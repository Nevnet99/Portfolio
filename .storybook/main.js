const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-docs' // <-- 
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });
    
    return config;
  },
}
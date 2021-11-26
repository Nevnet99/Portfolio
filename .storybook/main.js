module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-docs' // <-- 
  ],
  "core": {
    "builder": "webpack5"
  }
}
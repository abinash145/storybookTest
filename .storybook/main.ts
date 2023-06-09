import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias['@'] = path?.resolve(__dirname, '../src') // Replace with your source directory path
    }
    if (config?.module?.rules) {
      config?.module?.rules.push({
        test: /\.css$/,
        use: ['postcss-loader'],
        include: path?.resolve(__dirname, '../'),
      })
    }

    return config
  },
}
export default config

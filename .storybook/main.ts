import type { StorybookConfig } from '@storybook/nextjs'
const Icons = require('unplugin-icons/webpack')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpack(config) {
    config?.plugins?.push(
      require('unplugin-icons/webpack').default({
        compiler: 'jsx',
        jsx: 'react',
      })
    )

    return config
  },
  staticDirs: ['..\\public'],
}
export default config

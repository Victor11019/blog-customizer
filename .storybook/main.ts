import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';

// Эмуляция __dirname для ESM сред
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../src/*/*.mdx",
    "../src/*/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'fonts': path.resolve(__dirname, '../src/fonts'),
      };
    }

    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src')],
              silenceDeprecations: ['legacy-js-api', 'import'],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default config;



const path = require('path');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@app': path.resolve(__dirname, '../../src/app'),
            '@pages': path.resolve(__dirname, '../../src/pages'),
            '@widgets': path.resolve(__dirname, '../../src/widgets'),
            '@features': path.resolve(__dirname, '../../src/features'),
            '@entities': path.resolve(__dirname, '../../src/entities'),
            '@shared': path.resolve(__dirname, '../../src/shared'),
        };

        // Приоритет: сначала src, потом node_modules
        config.resolve.modules = [
            path.resolve(__dirname, '../../src'),
            'node_modules',
        ];

        return config;
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};

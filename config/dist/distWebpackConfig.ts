import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { distPlugins } from './distPlugins';
import { distLoaders } from './distLoaders';
import { distResolvers } from './distResolvers';
import { distDevServer } from './distDevServer';

export function distWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.dist,
            clean: true,
        },
        plugins: distPlugins(options),
        module: {
            rules: distLoaders(options),
        },
        resolve: distResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? distDevServer(options) : undefined,
    };
}

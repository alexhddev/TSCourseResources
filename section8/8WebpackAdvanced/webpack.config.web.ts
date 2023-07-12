import { Configuration } from 'webpack'
import { resolve } from 'path'

const config: Configuration = {
    mode: 'none',
    entry: {
        'bundle-web': './src/Main.ts'
    },
    target: 'web',
    module: {
        rules: [{
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: 'tsconfig.web.json'
                }
            }
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
}

export default config;
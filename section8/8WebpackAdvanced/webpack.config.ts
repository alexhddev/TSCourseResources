import { Configuration } from 'webpack'
import { resolve } from 'path'

const config: Configuration = {
    mode: 'none',
    entry: {
        'bundle': './src/Main.ts'
    },
    target: 'node',
    module: {
        rules: [{
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
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
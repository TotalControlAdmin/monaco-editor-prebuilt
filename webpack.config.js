import webpack from 'webpack';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';


export default {
  entry: './src/editor.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        new TerserPlugin().apply(compiler);
      },
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new MonacoWebpackPlugin({
      languages: ['json', 'yaml', 'xml'], // Add supported languages here
    }),
  ],
};
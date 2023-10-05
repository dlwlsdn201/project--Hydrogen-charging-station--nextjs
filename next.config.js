/** @type {import('next').NextConfig} */

const TerserPlugin = require('terser-webpack-plugin');

const nextConfig = {
   webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config

    optimization: {
      minimize: false; // minimizer 에 설정된 플러그인을 기반으로 번들을 최소화 시킴.
      minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ];
    }
    return config
  }
}

module.exports = nextConfig

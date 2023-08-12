module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.filename = 'static/js/main.js'
      webpackConfig.output.chunkFilename = 'static/js/main.chunk.js'
      webpackConfig.plugins.forEach((plugin) => {
        if (plugin.constructor.name === 'MiniCssExtractPlugin') {
          plugin.options.filename = 'static/css/main.css'
          plugin.options.chunkFilename = 'static/css/main.chunk.css'
        }
      })

      return webpackConfig
    },
  },
}

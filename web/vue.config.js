const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/public',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
    // 分离打包
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}

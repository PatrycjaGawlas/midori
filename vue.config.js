var merge = require('webpack-merge');

module.exports = {
  lintOnSave: false,

    chainWebpack: config => {
      config.module
          .rule('vue')
              .use("vue-loader")
                  .tap(options => merge(options, { transformAssetUrls:{ 'b-carousel-slide': 'img-src'}} ))
  }
}

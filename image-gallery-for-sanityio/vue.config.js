var path = require("path");

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack(config) {
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue")); //if using yarn rather than npm
  },
  devServer: { allowedHosts: 'all', },
};


const ASSET_PATH = '/';

module.exports = {
  entry: "./frontend/index.js",
  output: {
  	filename: "./bundle.js",
    publicPath: ASSET_PATH
  },
  devtool: 'source-map',
};

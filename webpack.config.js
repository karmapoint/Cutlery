
const ASSET_PATH = '/Cutlery';

module.exports = {
  entry: "./frontend/index.js",
  output: {
  	filename: "./bundle.js",
    publicPath: ASSET_PATH
  },
  devtool: 'source-map',
};

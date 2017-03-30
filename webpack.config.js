
const ASSET_PATH = 'https://karmapoint.github.io/Cutlery/';

module.exports = {
  entry: "./frontend/index.js",
  output: {
  	filename: "./bundle.js",
    publicPath: ASSET_PATH
  },
  devtool: 'source-map',
};

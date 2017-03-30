
// const ASSET_PATH = 'https://karmapoint.github.io/Cutlery/';
const ASSET_PATH = 'http://localhost:8080/';

module.exports = {
  entry: "./frontend/index.js",
  output: {
  	filename: "./bundle.js",
    publicPath: ASSET_PATH
  },
  devtool: 'source-map',
};

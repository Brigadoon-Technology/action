const path = require('path')
const webpack = require('webpack')

const root = process.cwd()

module.exports = {
  context: process.cwd(),
  entry: {
    vendors: [
      'aphrodite-local-styles',
      'auth0-js',
      'core-js',
      'email-addresses',
      'graphql',
      'graphiql',
      'html-entities', // server
      'react',
      'react-async-hoc',
      'react-copy-to-clipboard',
      'react-dnd',
      'react-dnd-html5-backend',
      'react-dom',
      'react-fontawesome',
      'react-helmet',
      'react-hotkey-hoc',
      'react-notification-system',
      'react-portal-hoc',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redbox-react',
      'redux',
      'redux-form',
      'redux-raven-middleware',
      'redux-segment',
      'redux-thunk',
      'tinycolor2'
    ]
  },

  devtool: 'eval',
  output: {
    filename: '[name].dll.js',
    path: path.join(root, 'build'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({name: '[name]', path: path.join(root, 'dll', '[name].json')}) // eslint-disable-line no-new
  ],
  module: {
    loaders: [{test: /\.flow$/, loader: 'ignore-loader'}]
  }
}

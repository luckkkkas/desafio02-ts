
const { override, addWebpackAlias, addWebpackResolve } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    'vm': 'vm-browserify'
  }),
  addWebpackResolve({
    fallback: {
      "vm": require.resolve("vm-browserify")
    }
  })
);

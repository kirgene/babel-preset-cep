const { declare } = require('@babel/helper-plugin-utils');
const env = require('@babel/preset-env');

module.exports = declare((api, opts) => {
  return {
    presets: [env.default],
    plugins: [require('./node-require.js')].filter(Boolean),
  };
});

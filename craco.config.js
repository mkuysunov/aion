const rootPath = require('path');
const getPath = (path) => rootPath.resolve(__dirname, path);

module.exports = {
  webpack: {
    alias: {
      '@components': getPath('./src/components'),
      '@utils': getPath('./src/utils'),
      '@views': getPath('./src/views'),
    },
  },
};

const path = require('path');

module.exports = {
  configureWebpack: (conifg) => {
    Object.assign(conifg, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    });
  },
};

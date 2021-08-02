const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
  env: {
    PUBLIC_URL: ""
  },
  images: {
    domains: ['historyblogkazakhstan.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = withPlugins([withImages(), nextSettings]);

module.exports = withPlugins([withImages(), nextSettings]);

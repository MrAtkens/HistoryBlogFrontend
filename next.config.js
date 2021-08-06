const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
  // exportPathMap: {
  //   '/': { page: '/index' },
  //   '/about': { page: '/about' },
  //   '/blogs': { page: '/blogs' },
  //   '/contact': { page: '/contact' },
  //   '/tags/first': { page: '/tags/[slug]', query: { slug: 'tags' } },
  // }
};


//Основная ошибка в next/link


module.exports = withPlugins([withImages, nextSettings]);

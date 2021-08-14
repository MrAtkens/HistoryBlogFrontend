const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa')

const nextSettings = withPWA({
    //Здесь надо вписывать данные
    env: {
        gtag: 'G-4370VENQX5',
    },
    images: {
        domains: ['historyblogkazakhstan.s3.ap-northeast-2.amazonaws.com'],
    },
    //Здесь надо вписывать данные
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
    },
});


module.exports = withPlugins([withImages, nextSettings]);

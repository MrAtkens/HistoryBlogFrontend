const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')

const nextSettings = withPWA({
    //Здесь надо вписывать данные
    env: {
        //Google Analytics Tag
        gtag: 'G-4370VENQX5',
    },
    //Здесь надо вписывать данные
    images: {
        domains: ['https://historyblogkazakhstan.s3.ap-northeast-2.amazonaws.com'],
        minimumCacheTTL: 60,
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
    },
});


module.exports = withPlugins([nextSettings]);

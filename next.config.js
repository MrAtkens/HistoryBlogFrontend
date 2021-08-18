const withPlugins = require('next-compose-plugins');
//const withImages = require('next-images');
const withPWA = require('next-pwa')

const nextSettings = withPWA({
    //Здесь надо вписывать данные
    env: {
        //Google Analytics Tag
        gtag: 'G-4370VENQX5',
    },
    //Здесь надо вписывать данные
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
    },
});


//module.exports = withPlugins([withImages, nextSettings]);

module.exports = withPlugins([nextSettings]);

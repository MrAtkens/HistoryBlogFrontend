const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')

const nextSettings = withPWA({
    // trailingSlash: true,
    //Здесь надо вписывать данные
    env: {
        //Google Analytics Tag
        gtag: 'G-4370VENQX5',
        SITE_URL: 'https://geeknhistory.kz'
    },
    //Здесь надо вписывать данные
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
    },
});

module.exports = withPlugins([nextSettings]);

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-72c9c03f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/N5pmGNTkY7YhAAJV74kkR/_buildManifest.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/N5pmGNTkY7YhAAJV74kkR/_ssgManifest.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/1bfc9850-101cad4640a9f8e45bec.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/255-a581040eade37cb77da2.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/733-689d71592e5e2659063c.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/842-024793e053d94b75ab69.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/main-747c9c6528e22cca9651.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/404-7918340fc2044e2dcb38.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/_app-4ce23f77d33a5d12cdad.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/_error-4a5d36cf6de80ea8be7a.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/about-c07ded1bac4eabce0367.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-4794d08a83b3ded7677b.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/blogs-604bd7a960fc017093ed.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-476a79493f3f078b3b09.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/contact-b962eefa66683bad47d8.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/index-327e9fd710df36eb7e89.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D-e7079647ef8b3736a54b.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/css/2156150d0dc97eb990fb.css",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/css/6f0f9879fa7b4057c9c4.css",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/css/c4767471f4d2fd445513.css",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_next/static/image/src/assets/image/404.489d590672c79e4c6766cfce491544b0.png",revision:"N5pmGNTkY7YhAAJV74kkR"},{url:"/_redirects",revision:"d9c48e0570f5e7ce982a6b8d7019cf37"},{url:"/manifest.json",revision:"067314fcb785b58caf38a59b73069438"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/static/blog/Installing-Multiple-Versions/index.md",revision:"6cb82137db3b2851fa034f0d5ec70d29"},{url:"/static/blog/Installing-Multiple-Versions/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/an-example-can-be/index.md",revision:"d360bef58d3664169d9361c63137177f"},{url:"/static/blog/an-example-can-be/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/art-of-perfection/index.md",revision:"a47769cb79546fc306f004d72f85b97a"},{url:"/static/blog/art-of-perfection/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/markdown-test/index.md",revision:"3ab146802aacdbd1e509590d8ab9e270"},{url:"/static/blog/markdown-test/preview-1.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/role-of-libraries/index.md",revision:"b11fea0532fadd2b19bb5f6d69b48b18"},{url:"/static/blog/role-of-libraries/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/six-online-store-failed/index.md",revision:"c34e715f0501b47bb8e5fb970e4901ba"},{url:"/static/blog/six-online-store-failed/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/tech-companies-can-do-more/index.md",revision:"5f7d5a055b082a25f13df5b6767505b2"},{url:"/static/blog/tech-companies-can-do-more/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/blog/use-hooks/index.md",revision:"f721f2cb54a3c89c4d957932df635e48"},{url:"/static/blog/use-hooks/preview.jpg",revision:"756dd00204b0e473f73c523440dea61f"},{url:"/static/icons/android-chrome-192x192.png",revision:"37070574cb8e6d027045e87555b60889"},{url:"/static/icons/android-chrome-512x512.png",revision:"5d4b33944610f62a440d61edc317bed2"},{url:"/static/icons/apple-touch-icon.png",revision:"832f8692759ba6c1b199376e4efa8264"},{url:"/static/icons/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"/static/icons/favicon-16x16.png",revision:"7315ffb4f2a245803ac9ff857a6121d5"},{url:"/static/icons/favicon-32x32.png",revision:"d85dc8b54ea5c30ee0865b0e0e4e1446"},{url:"/static/icons/favicon.ico",revision:"13411296687766c0c0fb2f7762ca6276"},{url:"/static/icons/mstile-144x144.png",revision:"d0165eeab23b3c8fdbf7b351082356bc"},{url:"/static/icons/mstile-150x150.png",revision:"702c0c549532148bc6037904640132fe"},{url:"/static/icons/safari-pinned-tab.svg",revision:"a8c7ad92388f6ca4ca34776cccdffe24"},{url:"/static/image/404.png",revision:"3e89880fa3f03870db04c781ec892372"},{url:"/static/image/about.jpg",revision:"6d5f39f47f00ccbc0438761e08a4da9a"},{url:"/static/image/favicon.ico",revision:"c6acedaff906029fc5455d9ec52c7f42"},{url:"/static/image/logo.png",revision:"69e9240c7728eb32c52ce2556dd8fb56"},{url:"/static/image/logoMin.png",revision:"cfcc791931e49fac82b569f92dde7001"},{url:"/static/image/newsletter-bg.webp",revision:"9150812fbf17b9d7e990630713e65296"},{url:"/theme/colors.js",revision:"c1e8205fe2439db4daae619747f8bf79"},{url:"/theme/global.css",revision:"dea493374460d217146f5ac8aa75a6cc"},{url:"/theme/index.js",revision:"bf4e77d6581818776fe9da6d4e774462"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

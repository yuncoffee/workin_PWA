if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-adbef0b70b442f4f.js",revision:"adbef0b70b442f4f"},{url:"/_next/static/chunks/pages/_app-da317fdc3eaa4487.js",revision:"da317fdc3eaa4487"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/idcard-dbaab9ef87b82fcc.js",revision:"dbaab9ef87b82fcc"},{url:"/_next/static/chunks/pages/index-5fecca351058c883.js",revision:"5fecca351058c883"},{url:"/_next/static/chunks/pages/scheduler-886346c2d4dc5f8b.js",revision:"886346c2d4dc5f8b"},{url:"/_next/static/chunks/pages/team-2be2b91f57a2e7a1.js",revision:"2be2b91f57a2e7a1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/3be37ce605ad43aa.css",revision:"3be37ce605ad43aa"},{url:"/_next/static/css/dd2c471b42ea8e17.css",revision:"dd2c471b42ea8e17"},{url:"/_next/static/hkJ51j9w4I3PBRNDGBovc/_buildManifest.js",revision:"9ca4658df01b01f00e299ed3ea83108c"},{url:"/_next/static/hkJ51j9w4I3PBRNDGBovc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/images/icons/apple-icon.png",revision:"2cb3145203fdc86656e1e7f752662acd"},{url:"/images/icons/favicon-16x16.png",revision:"61e0f38ed14c34360c14132f654a44b5"},{url:"/images/icons/favicon-32x32.png",revision:"806a4ca67cd774e409a446c993c18413"},{url:"/images/icons/favicon.ico",revision:"a4b4afabad7709956b67e617f7ee862b"},{url:"/images/icons/icon-128x128.png",revision:"62a8137f76cb9c27a2122f79a322a54e"},{url:"/images/icons/icon-144x144.png",revision:"0e245067d317ef9307c640e32bf3a6bc"},{url:"/images/icons/icon-152x152.png",revision:"b47b35135f6402e2a640d8901a18ec5b"},{url:"/images/icons/icon-192x192.png",revision:"4566a81ba3c0557f78d50caf18638e36"},{url:"/images/icons/icon-384x384.png",revision:"5e2704b73f1f7c76c46dae82669d5848"},{url:"/images/icons/icon-48x48.png",revision:"4a33e7a6c076942903e9a178a1cc4329"},{url:"/images/icons/icon-512x512.png",revision:"8caec09f0b53cc24f551269b00fdf5af"},{url:"/images/icons/icon-72x72.png",revision:"0c89edd1c9e58472af7d54e25f4f2dab"},{url:"/images/icons/icon-96x96.png",revision:"6c182c646286837574314d8f76341360"},{url:"/manifest.json",revision:"04e53046f65456ee82a1c9114302a6e8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

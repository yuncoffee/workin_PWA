if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/242-fd748cdb6147aa4d.js",revision:"fd748cdb6147aa4d"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/561-b66dfae9df397fa2.js",revision:"b66dfae9df397fa2"},{url:"/_next/static/chunks/61-2ae492a49ad149ca.js",revision:"2ae492a49ad149ca"},{url:"/_next/static/chunks/669-d623574e63688ccd.js",revision:"d623574e63688ccd"},{url:"/_next/static/chunks/750.ef77f8219376cfa6.js",revision:"ef77f8219376cfa6"},{url:"/_next/static/chunks/89-5fab50fc889edeb3.js",revision:"5fab50fc889edeb3"},{url:"/_next/static/chunks/965.cc5beb10fc5a1732.js",revision:"cc5beb10fc5a1732"},{url:"/_next/static/chunks/c97d5db8-b93a9bf3880d154f.js",revision:"b93a9bf3880d154f"},{url:"/_next/static/chunks/d6e72859-58a851d68d77c4e5.js",revision:"58a851d68d77c4e5"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-cc9c9e87c59ea4c1.js",revision:"cc9c9e87c59ea4c1"},{url:"/_next/static/chunks/pages/404-e5a12adb3fb86ef5.js",revision:"e5a12adb3fb86ef5"},{url:"/_next/static/chunks/pages/_app-47e5547dc9e81c3a.js",revision:"47e5547dc9e81c3a"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/appsettings-51ad8ab8834ae3bf.js",revision:"51ad8ab8834ae3bf"},{url:"/_next/static/chunks/pages/home-43fbe205ce92939d.js",revision:"43fbe205ce92939d"},{url:"/_next/static/chunks/pages/index-6ea07e726e00d5a9.js",revision:"6ea07e726e00d5a9"},{url:"/_next/static/chunks/pages/schedule-d80af2cf08166389.js",revision:"d80af2cf08166389"},{url:"/_next/static/chunks/pages/schedule/%5B...id%5D-57ce7a019ec70bd3.js",revision:"57ce7a019ec70bd3"},{url:"/_next/static/chunks/pages/settings-84f2ee696862732b.js",revision:"84f2ee696862732b"},{url:"/_next/static/chunks/pages/settings/account-388a32eac5a60886.js",revision:"388a32eac5a60886"},{url:"/_next/static/chunks/pages/settings/notice-53d13134da8c3575.js",revision:"53d13134da8c3575"},{url:"/_next/static/chunks/pages/signin-7196dd50fb262e2b.js",revision:"7196dd50fb262e2b"},{url:"/_next/static/chunks/pages/signup-975f8b50f063ecbb.js",revision:"975f8b50f063ecbb"},{url:"/_next/static/chunks/pages/team-1567964486d49fd5.js",revision:"1567964486d49fd5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1f4b1b5c144aed99.js",revision:"1f4b1b5c144aed99"},{url:"/_next/static/css/24337e12c956875d.css",revision:"24337e12c956875d"},{url:"/_next/static/css/3bef21aa36d92252.css",revision:"3bef21aa36d92252"},{url:"/_next/static/css/469c48afee3246ec.css",revision:"469c48afee3246ec"},{url:"/_next/static/css/4c0057bda06f55fd.css",revision:"4c0057bda06f55fd"},{url:"/_next/static/css/779d261536ae47cd.css",revision:"779d261536ae47cd"},{url:"/_next/static/css/7e29c4d26ae752b5.css",revision:"7e29c4d26ae752b5"},{url:"/_next/static/css/86fc39759e13f345.css",revision:"86fc39759e13f345"},{url:"/_next/static/css/b1fbaa32b2887a9e.css",revision:"b1fbaa32b2887a9e"},{url:"/_next/static/css/ba22d14f70589c38.css",revision:"ba22d14f70589c38"},{url:"/_next/static/css/cfc0b066e7ba2150.css",revision:"cfc0b066e7ba2150"},{url:"/_next/static/z8L7T394QuhA_SBlNAwdY/_buildManifest.js",revision:"4da8abd2a262fb3defb2182298e37d18"},{url:"/_next/static/z8L7T394QuhA_SBlNAwdY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/firebase-messaging-sw.js",revision:"aab7fa7ed0f4b58f2016fa9057ec1282"},{url:"/images/components/mapfin.svg",revision:"386c3989fbde47036d0da6640a7f4cf4"},{url:"/images/icons/apple-icon.png",revision:"2cb3145203fdc86656e1e7f752662acd"},{url:"/images/icons/favicon-16x16.png",revision:"61e0f38ed14c34360c14132f654a44b5"},{url:"/images/icons/favicon-32x32.png",revision:"806a4ca67cd774e409a446c993c18413"},{url:"/images/icons/favicon.ico",revision:"a4b4afabad7709956b67e617f7ee862b"},{url:"/images/icons/icon-128x128.png",revision:"62a8137f76cb9c27a2122f79a322a54e"},{url:"/images/icons/icon-144x144.png",revision:"0e245067d317ef9307c640e32bf3a6bc"},{url:"/images/icons/icon-152x152.png",revision:"b47b35135f6402e2a640d8901a18ec5b"},{url:"/images/icons/icon-192x192.png",revision:"4566a81ba3c0557f78d50caf18638e36"},{url:"/images/icons/icon-384x384.png",revision:"5e2704b73f1f7c76c46dae82669d5848"},{url:"/images/icons/icon-48x48.png",revision:"4a33e7a6c076942903e9a178a1cc4329"},{url:"/images/icons/icon-512x512.png",revision:"8caec09f0b53cc24f551269b00fdf5af"},{url:"/images/icons/icon-72x72.png",revision:"0c89edd1c9e58472af7d54e25f4f2dab"},{url:"/images/icons/icon-96x96.png",revision:"6c182c646286837574314d8f76341360"},{url:"/manifest.json",revision:"04e53046f65456ee82a1c9114302a6e8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

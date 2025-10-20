'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});

importScripts('https://pxl-pz69gr78pumdh8my.dev.altcraft.com/service-worker.js?id=MXw2');

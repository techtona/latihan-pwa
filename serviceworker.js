var CACHE_NAME = 'my-pwa-cache-v1';

var urlsToCache = [
   '/',
   '/css/main.css',
   '/js/jquery.min.js',
   '/js/main.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            function (cache) {
                console.log('service worker do install..',cache);
                return cache.addAll(urlsToCache);
            },
            // function (err) {
            //     console.log('err : ' , err);
            // }
        )
    )
});
var CACHE_NAME = 'chatapp';
var urlsToCache = [
  'static/js/bundle.js',
  'static/js/main.chunk.js',
  'static/js/1.chunk.js',
  'index.html',
 '/',
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
})
self.addEventListener('fetch', function(event) {
  if(navigator.onLine){
    console.log("data is fetching from server")
  }
   else{
     console.log('data is fetching from service worker')
      event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  }
  
});
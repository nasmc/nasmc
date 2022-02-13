'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "72593f27f3c85d5b8fab0bc79a56543a",
"splash/img/light-2x.png": "56c88544fb4344b3c1e0a0e97c3e9856",
"splash/img/dark-4x.png": "58368ce5a5d3384f657b74ab2c48970f",
"splash/img/light-3x.png": "145dd9427ca9ce7882a3838ff7c2789f",
"splash/img/dark-3x.png": "145dd9427ca9ce7882a3838ff7c2789f",
"splash/img/light-4x.png": "58368ce5a5d3384f657b74ab2c48970f",
"splash/img/dark-2x.png": "56c88544fb4344b3c1e0a0e97c3e9856",
"splash/img/dark-1x.png": "c674ba65a858e1ddbbe4ed40f6a2bb6e",
"splash/img/light-1x.png": "c674ba65a858e1ddbbe4ed40f6a2bb6e",
"splash/style.css": "8b7c79ca678c05009729dd4b8d213b4a",
"favicon.ico": "0d768e88f9bcf48ac861b45e710d5333",
"index.html": "df79e41ac8a961e287e1bb68ecba3b48",
"/": "df79e41ac8a961e287e1bb68ecba3b48",
"main.dart.js": "3d35b357923cb646388987e990519d24",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "7c24657757c49d01ef47f4e4aad1d122",
"icons/apple-icon.png": "a287751faa068b6bd07dd8a7533dbe2e",
"icons/apple-icon-144x144.png": "edb09e979bf6f9bbb1d81fbd5e94b250",
"icons/android-icon-192x192.png": "01d47687928167b5379aacfbaed2eae6",
"icons/apple-icon-precomposed.png": "a287751faa068b6bd07dd8a7533dbe2e",
"icons/apple-icon-114x114.png": "0200efdfae3d57a01540c6c68b892207",
"icons/ms-icon-310x310.png": "496f45e6f22ee55ea299ac584281cc65",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "edb09e979bf6f9bbb1d81fbd5e94b250",
"icons/apple-icon-57x57.png": "709560aee31643677d9c560d5ba1142e",
"icons/apple-icon-152x152.png": "88cfdec62e84c03e6253ad8d7a5a8de6",
"icons/ms-icon-150x150.png": "8615dc3ba6015091d01781a76b54c7ed",
"icons/android-icon-72x72.png": "1a7e3be6ec6236aa1f307b58b4d45e1d",
"icons/android-icon-96x96.png": "16ef77f7d066abadb9878edde2d31f3e",
"icons/android-icon-36x36.png": "fef79a13dd007f4ee05a3da1de77869d",
"icons/apple-icon-180x180.png": "c3532b17dfb2b3c4557f2f4c9c30f286",
"icons/favicon-96x96.png": "16ef77f7d066abadb9878edde2d31f3e",
"icons/android-icon-48x48.png": "be4f68ca459597a45fdf31e4d9ab26df",
"icons/apple-icon-76x76.png": "55a6b1f23a6287f1040f599cb1104a9e",
"icons/apple-icon-60x60.png": "4dfc6b1541bc8364463ee9fe857af4e9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "93c98f9c263a2747d8e80bef42b6ffad",
"icons/android-icon-144x144.png": "edb09e979bf6f9bbb1d81fbd5e94b250",
"icons/apple-icon-72x72.png": "1a7e3be6ec6236aa1f307b58b4d45e1d",
"icons/apple-icon-120x120.png": "6e2040cbbc44e67eede01b62491bd4fa",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "f43a6133d3e70da4d2f92039dc171c4e",
"icons/ms-icon-70x70.png": "51e644a94e7e3f3010d4738f4397502a",
"manifest.json": "bf686948b85ff95c901eb2e5e54aca2c",
"assets/AssetManifest.json": "6d8077f1ba83e6c5b86eb62ca8e76cb4",
"assets/NOTICES": "8fabed50d7bf4d919e69d86590b8dc3b",
"assets/FontManifest.json": "850c3f21873499111758c771916d650f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/d-din/D-DINExp-Bold.otf": "831f46bfd2df7b206e553d2f69c68044",
"assets/fonts/d-din/D-DINExp-Italic.otf": "346e0511aa6cffc53488505b3ab39b62",
"assets/fonts/d-din/D-DINExp.otf": "5b5cdbd883cf637f2ab3455a2aedd225",
"assets/assets/nasmc-logo.jpg": "fdbc604d6a85bca7fad5a523c5a2897f",
"assets/assets/h4.gif": "1dfc177f30cc05e61cd8179aca600ce6",
"assets/assets/h3.gif": "fb80711f0f91a865f0c73cef16318f69",
"assets/assets/h2.gif": "7f19f319882d1d10760e3cc7ba31603c",
"assets/assets/h1.gif": "f07dff6966ac48982773fbb149bfde48",
"assets/assets/home.png": "c644c63a56bab434216d184cea9cdf0f",
"assets/assets/l1.gif": "8069fd3e8e3a641261e2dc50b59531ba",
"assets/assets/icons/done.svg": "f7d43fc963051b415a81d37f96731dbb",
"assets/assets/l2.gif": "0999d31df5c083f720be452f21802e1f",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9fe91c7bf45d2f614c714ce2bbbcfe36",
"assets/AssetManifest.bin.json": "34bc1a5336774d39b151bf7786167fe9",
"assets/AssetManifest.json": "5a3fa87eb1850e802d1df1cc6af81f55",
"assets/assets/imgs/background.png": "70e743c37f89ea51d70e5f3e238b3265",
"assets/assets/imgs/business.png": "edb85c9381e04937a53bdec7b1d19b8d",
"assets/assets/imgs/circle.png": "f611d085fec1f8dafb30a85b1698ef5f",
"assets/assets/imgs/code.png": "5c3f7d2d940d928505c512ae0234a059",
"assets/assets/imgs/cube.png": "3197e954acab9edf1f9a083c15622d57",
"assets/assets/imgs/drive.png": "cb353a5f23cd5c3ecd9d22a3422a7556",
"assets/assets/imgs/intro.png": "13391ed8f82c41eb1b24e95dae6192c0",
"assets/assets/imgs/personal.png": "00a6eccd092445bf0c3971cffb57f081",
"assets/assets/imgs/rock1.png": "8294de2cbef1a1a210c61ef26f083cdf",
"assets/assets/imgs/rock2.png": "fc217319d7576390a146cd6338166305",
"assets/assets/imgs/time.png": "54efa2880127194a0c5c8662e8910af1",
"assets/assets/imgs/ui.png": "b064171a4ad014851b4c0c14cd7cb399",
"assets/assets/projects/changing.png": "7456af3208f722c54e38cc55152b387c",
"assets/assets/projects/delivery.png": "26b58dbbaa3aa0cadef4e35e1d6774df",
"assets/assets/projects/haml.png": "f81ff047daf26e4bc00b69dda0f06464",
"assets/assets/projects/raaj.png": "7c39a53eab597fb73c7480002a4c7c60",
"assets/assets/projects/sim.png": "3c9e2edf51a5d13551273fd516721455",
"assets/assets/projects/talabatek.png": "375a5e6887c239600754fb98a0862a0c",
"assets/assets/projects/vanillia.png": "168ea25391fa19dbede3b1dffe68d2eb",
"assets/assets/svg/apple.svg": "6c7c9cec6c4ee8dedc9216181eee6ea0",
"assets/assets/svg/drive.svg": "d24145d60c5b3a3aec7132d64c9e0e11",
"assets/assets/svg/facebook.svg": "6a5e1aaaa2511edd7104d3115a1af359",
"assets/assets/svg/github.svg": "89a989909afe1a0eb813e25558139706",
"assets/assets/svg/gmail.svg": "ab21072fb63e5eb27ce35a3daddf5b95",
"assets/assets/svg/linkedIn.svg": "30c8da57c992a89ac585e61d6f6c1f43",
"assets/assets/svg/play.svg": "4c96f3d73f4e843f1701d2eb5185ca47",
"assets/assets/svg/telegram.svg": "2fbf72d9ce6a5afb393f7d1e7ec5b9f5",
"assets/assets/svg/whatsapp.svg": "182bb5b26a43573039b3243c426a93be",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "193d5f413ccb235aa09fcadee5071dd5",
"assets/NOTICES": "3bfc297d23e6457614c2ba8ac073ba1a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "5d827343614098a301d712b7bc317287",
"favicon.png": "77cfff925184aae5761fa5747852bcc4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "268fcfbf1dc4f419c54bacfc0618d16f",
"/": "268fcfbf1dc4f419c54bacfc0618d16f",
"loader.css": "be45e2960d14f3e825290bf12f946f44",
"logo.jpg": "eb3d84ca0d53a6aec3d9a7c36e7452d2",
"logo.png": "8d742afbf9b29b3eb92bdf367f445114",
"main.dart.js": "390b29ee4b7a8159e3f7460d1f330430",
"manifest.json": "1500f929fedb68a71d992740d9d7697a",
"version.json": "1ada7709bea9122740dd7b482c203ae7",
"web.zip": "a8872a068bd94bcd057edca21f709789"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

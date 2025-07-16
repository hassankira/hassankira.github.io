'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2724239d2c9c95eeae990566d59cd8bc",
"version.json": "adf54f98bac777338661912e9947b79c",
"index.html": "0918da4159041b3839622cd367776256",
"/": "0918da4159041b3839622cd367776256",
"main.dart.js": "30830ef114bebc60456e5dd497759d9f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b99e0807fc4343c480133dc4e0ac516",
".git/config": "5c0fa9936511ef47b2237e46c6468f9f",
".git/objects/92/b1497e68217de3e93fb1fda1a6df42d07fad1c": "fd9f7f7861d7c9a85eb25c4cc697565b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/4bf01da145968eed9bb8f47fefcd1b57f3d1c3": "e113e56f73eee96007ec92802094dab7",
".git/objects/04/0e40d92f241d83bf4a11020dfdf70fd327fed3": "0ee2627543cb7a12845ecc76e4eb3e33",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/30462e39c827190cd3c075da8f8f7b0616abc2": "9a1829dfc9d67bb2b9eac7cdc3a23571",
".git/objects/60/7bf3b56a3c243a347d82007484c1e1319c2771": "09c51bfd4033cb67a679880c2edf586c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b2/af8a9882f805b6c1f1969f36899da60c66a9c0": "0c43b530eb290e4791411f338a7a70c3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/a6203e0ba389ba90d9d5d63a06cc35cfdb157d": "3f1dd35fe8cacee76b76d82f11083f7d",
".git/objects/d0/c19f200e26f28d0b5b97e992178b7c8ac5eb41": "79f30fcc12a880f6cff39ea7dfff54bf",
".git/objects/b3/f9d372b78e25c33dc826e0ae9520a34094e927": "9e85cb3e2760c7a6857aada990a82591",
".git/objects/df/4ed5894e61931cdba01c90901bfcfa128c646e": "a918600523f18fad33cc54eabddae481",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d1d780fa374162b42e08da40fb1087ccf74c20": "1c9639a97eb1aaa764d7dfd10394ef67",
".git/objects/f4/ac0d74e92e6e60bc1b89628b26fbc391d3e208": "565d639770915bbf1657e993ef3f336d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c1/59643235b9502005a73a8332261775d04b9e23": "5f1e8671111edea07d5054983abad80b",
".git/objects/11/ab0508c192ed0e8fb4ffc93e1baed8e6cc54bd": "8b176aea7949eca43880b5255e2c41b4",
".git/objects/29/fb93bcb28513eed71dc3d953792e78bf9ae40c": "eef5f6903e7f00eb04a8a1c9d2478125",
".git/objects/7c/e4a752712bd3bfc51c516fa12f5bfd3b7add19": "52454ea11a7c74dcbdd7ec83542e1e75",
".git/objects/16/38f95e363c020fcd65cf5d44a621294fcb60e5": "4a5e559c05ab66f81b35cf4d7dc7b11a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/d96657a802a7eaf418523fa98d3a2fd6039d08": "3e709f2263eba9fd64cf0368369f1cd6",
".git/objects/72/abf519ef7765e558c9539d83136bf5f9654547": "c2539a886d745addce7ac0a4f7644fdd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/724c27fc38e8b1ff26b961dbb02b13906ebb3e": "0ed208f43e5a5ca0267176d383109937",
".git/objects/00/0113f83be7bbb53e2c422c16c7b86daf6f9cb3": "6ca03a3afa28d792bee8f5e5b810d298",
".git/objects/6e/0f1bbe883c30eaf1b4a9427654bc71c1310c79": "a5782baf5ed9a492f780bfa7d10404b2",
".git/objects/9a/1df907d3da84a33078154e9b0e0910f5512684": "ac70cf8027fc76b09ff226be3a5added",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/0f/225546e670859a255c3d1b7d9327b59e563836": "01fcadde53a457084488e07ed51ddc1d",
".git/objects/d3/bb3ad005b6165c5e6756a3403bfe85a1318f28": "91f4a8b20b1b27ea1beb966218299bab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/2ce94cd17301eaca10fbd4b50837088a96ab49": "e8b25dcb766795143b743699d2bd79bc",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/d5a04ba470b7b2f55b9fff552bcd3c83c0ea59": "ebd32fb14784e5b15952fd122499f069",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/af/33970c880089228c7c9c0f307ee661da2ca27a": "7c66ebdded3b3ad2aa574d5a4a62fd84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/6363f3f12120d6f9b84dc01b41eaae4806bd87": "a606e44d1ee24afb991c45533252bbc8",
".git/objects/f1/c848069e58c1186f1a8a570e29c77ac09d970c": "0b54bfd0b6bb79e304059c799f1fbaf3",
".git/objects/cb/548d500b1fe5c80b608788c0e569fc670cb138": "fd4290fcf348439b0f66ad29390419d5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/238d31470b29f64bb47ed2932ad2ee308e5987": "b1e867a1ce7acc05c742af00e1d2cce0",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/200f2d08c526b51748d35cc997653be00887d3": "dc59fa577e58bc5b6f11fced6a016f95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3364b2a0600de95d0212d32bcc6ce245",
".git/logs/refs/heads/main": "7ed345a01c286bd930979a910b7fe7dd",
".git/logs/refs/remotes/origin/main": "a6679d5a7c1f1167568c5984f6612cf4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "41f8a6abc7bf94d58ce5a6fa1a5ffa10",
".git/refs/remotes/origin/main": "41f8a6abc7bf94d58ce5a6fa1a5ffa10",
".git/index": "4cbcefea8d2af9f8ddff091a3658f1be",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
"assets/AssetManifest.json": "b19ed6916482449c35a693b5e43bf57f",
"assets/NOTICES": "447b7cdf31e6f4fee2fa156bab33dca2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b2be9882b12caff41adb694381c3fc02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55cc0e96cca10f10aceb2450d38ee071",
"assets/fonts/MaterialIcons-Regular.otf": "d190cb7621d2ec6f146e256a4fa900ad",
"assets/assets/login.png": "a9d7439e708040b950f15f0081750239",
"assets/assets/backgroundwheel.png": "87266403f46b13742af50384f2f9d719",
"assets/assets/wheel.png": "97c3fb3b5f85c07141a7531d0798db71",
"assets/assets/rewards/reward6.png": "734151f9fb28fa969298b23e1cdd77d7",
"assets/assets/rewards/reward5.png": "dfe1221a14eda709e6a57b9bd4c17442",
"assets/assets/rewards/reward4.png": "67411106bfce722fb1ce0f9003b3190a",
"assets/assets/rewards/reward1.png": "b4c37670c3a78a0d859a6753abd47588",
"assets/assets/rewards/reward3.png": "841886ef76d99dbfaebe8b6b3d14bd81",
"assets/assets/rewards/reward2.png": "a106ffe52787ae6a5edbde199063cf34",
"assets/assets/pointer_cropped.png": "9068109ca822c6039c5db9c295a4753e",
"assets/assets/start.png": "06fe81e3843a0470ebc3770305090609",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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

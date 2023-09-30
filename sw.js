/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","608931355052634f4780bcfaefa7cb54"],["/archives/2020/01/index.html","1fb79df1ebaff41be6c935e21fc541ac"],["/archives/2020/06/index.html","83ae563dbf9cc64b03c42ff452e79395"],["/archives/2020/07/index.html","7bbe7e66749bfee758aafaa9e2643a6e"],["/archives/2020/index.html","1e5085c86a9f1c602fa5a66af00156d4"],["/archives/2023/05/index.html","cbda86918c31dc890ebe32279af14b09"],["/archives/2023/06/index.html","2ae3e592733c53f8774b363aaa4cd0f9"],["/archives/2023/09/index.html","b1443b5e88c3cf3763e7d6d4088dd2e3"],["/archives/2023/index.html","94bc48e8d58fa41f475f0134a2f45325"],["/archives/index.html","0d7d5a9c7c640b0b0a18953ea67c1044"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/code/index.html","2550671cae5efd07de9d568c7aca5cc0"],["/css/style.css","1754babb648d942060acb4ffeef5a6bd"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","87f01646aa2edb9e82cbc1df68d04209"],["/favicon/README.html","95ee3557a9251148b9f8ac77961b1dd1"],["/favicon/android-chrome-192x192.png","09224de02be0dffe845338be34237d60"],["/favicon/android-chrome-512x512.png","65e1ee132a00a5cd3749d760fa6cd94e"],["/favicon/apple-touch-icon.png","f024749f7d91f50e0cb8b70a7d0fdb65"],["/favicon/favicon-16x16.png","ba66c8d945a25786bc51ecafe7b70ae8"],["/favicon/favicon-32x32.png","3945fa6e25fce38d6293beac3c56a218"],["/favicon/mstile-150x150.png","b39ba516b1f688ad8273a3f983c94d30"],["/favicon/safari-pinned-tab.svg","6344ecb1ee3311a6f9dfd7d21c4f82a1"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","35778b2ea3cc0d72e23290cc8e89f2dc"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","e85f690285ddf57fbfea7a4dd456c442"],["/images/donate/alipayimg.png","27d92461ccd1df8d478295d6955720df"],["/images/donate/wechatpayimg.png","1a851c329cde8fc592b8b064af16642d"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","542ee6283adbd64a771d3d37df2cef8f"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/logo.svg","8efe79d89fad6ac15786d43e86509ebd"],["/p/20200101-DirectoryStructure/index.html","b1331d6d4f1ad7e2565924ce2b74ed30"],["/p/20200102-RootDirectory-UserHomeDirectory/index.html","75bbd2fb13b5a16b148ae1b45a09189e"],["/p/20200103-terminalShortcutkey/index.html","bf0934b8e413706c4504c47ced193185"],["/p/20200104-sudo-permissions/index.html","3039ad0c415717c85d9972884fadaeaa"],["/p/20200616-wechat-public/index.html","c3c77fb7bf5bf0cffbe3417957a5a448"],["/p/20200617-my-studyroom/index.html","4719749ba5ccc3786a3ab2a849157471"],["/p/20200618-laugh-out-loud/index.html","bf510b640b2d5387445f46a5afea6c27"],["/p/20200709-morning-diary/index.html","e46c60a4372d0107fc30edbbbcbe3dd4"],["/p/20230531-vim-deletehotkey/index.html","aa6cc5d12b38750fbef658932fc556a0"],["/p/20230601-nodejs-npm-nvm/index.html","4c4313660417b67bb9c7c055be2df104"],["/p/20230601-pipenv/index.html","6b9560adb820e1f2b20f432ee9cff6b6"],["/p/20230601-shell-bash-zsh/index.html","0a6d8a4b542a9568bc92e87181509b9c"],["/p/20230602-signingKeys-authenticationKeys/index.html","30471dd36fa7f75ce35ef95c9c86170b"],["/p/20230605-summarize-personal-blogs/index.html","ed27d27edaeb652e17edaa07231c6128"],["/p/20230608-night-watcher-swear/index.html","6cdaa99f2382da4ad41db4b4fe43954b"],["/p/20230609-mac-wechat-browser/index.html","117bbe256be674233c452f90103adcc1"],["/p/20230610-mac-software-summary/index.html","6959f9e7903aaa28b39471940c237594"],["/p/20230610-phone-software-summary/index.html","23bbf5ccd68a3d71a54da4ffc503ec50"],["/p/20230611-chrome-software-summary/index.html","cae5f24f471c064c0799a6c6aaa173c7"],["/p/20230612-my-software-summary/index.html","d04ee4b1998f190f061ab55302d74226"],["/p/20230913-my-playlist-abbrlink/index.html","8f95815a15aa963af0cd7a7ae4d7e062"],["/p/20230914-difference-copy-softconnection-hardconnection/index.html","a6a693f26ea091fd14769d7fdd71b2d2"],["/p/20230914-folder-synchronization-in-one-computer/index.html","de87ee74d0ab7c86b8d19691120ca407"],["/p/20230930-reflections-by-the-wechat-quarrel/index.html","0262a73ac6a3943f57e8a7b062f439d0"],["/sw-register.js","eabdb1b58c61486ab0b811bb15502fc7"],["/tags/blog/index.html","4355c357bc815f4e4105fc4c82d0059a"],["/tags/cool/index.html","49e7188f78a92261c1e387b457222a11"],["/tags/tag1/index.html","0a0cfed501873eab7f3ffcfd89b31ef3"],["/tags/tag2/index.html","382d3120a16cf2d5c129d75ce6a00b02"],["/tags/生活/index.html","0c0d51ba4e7511335a345eabf8389695"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

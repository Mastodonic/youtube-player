/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/
(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    __webpack_require__(1);
    __webpack_require__(5);
    __webpack_require__(6);
    module.exports = __webpack_require__(7);

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }(); /* global YT */

    var _defaultOptions = __webpack_require__(2);

    var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

    var _defaultMarkup = __webpack_require__(3);

    var _defaultMarkup2 = _interopRequireDefault(_defaultMarkup);

    var _helpers = __webpack_require__(4);

    var _helpers2 = _interopRequireDefault(_helpers);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _class = function () {
        function _class(options) {
            _classCallCheck(this, _class);

            // Set Default Options
            this.setOptions(options);
            this.setDomNode();
            this.setVideoId();

            if (this.options.videoId) {
                this.setCoverImage();

                // Create Player
                this.setMarkup();
                this.createPlayerHtml();

                // Set Data
                this.initDataBindings();
                this.setStates();

                // Add listeners
                this.addListeners();

                // Initialise API
                this.loadYoutubeApi();

                if (!this.options.forceCoverOnTouchDevices && _helpers2.default.isMobile.any()) {
                    this.coverIsHidden = true;
                } else {
                    this.coverIsHidden = false;
                }

                // Create an array of all youtube player instances
                // on the window object
                if (!window.YTPlayers) {
                    window.YTPlayers = [];
                }

                window.YTPlayers.push(this);
            } else {
                throw new Error('can not find youtube video id');
            }
        }

        /**
         * Set initial states
         */

        _createClass(_class, [{
            key: 'setStates',
            value: function setStates() {
                this.isLoading = false;
                this.playerCreated = false;
                this.videoStarted = false;
            }

            /**
             * Set all the data bindings
             */

        }, {
            key: 'initDataBindings',
            value: function initDataBindings() {
                var wrapper = this.options.cssClasses.wrapper;
                this.bindClassToProperty(this, this.domNode, wrapper + '--is-loading', 'isLoading');
                this.bindClassToProperty(this, this.domNode, wrapper + '--cover-is-hidden', 'coverIsHidden');
                this.bindClassToProperty(this, this.domNode, wrapper + '--is-ready', 'apiIsLoaded');
                this.bindAttrToProperty(this.options, this.domNode.querySelector('.' + this.options.cssClasses.cover), 'style', 'coverImage');
            }

            /**
             * Bind an element's class name to an object's property
             * @param  {obj} obj
             * @param  {obj} node
             * @param  {string} className
             * @param  {string} prop
             */

        }, {
            key: 'bindClassToProperty',
            value: function bindClassToProperty(obj, node, className, prop) {
                Object.defineProperty(obj, prop, {
                    set: function set(value) {
                        value ? node.classList.add(className) : node.classList.remove(className);
                    }
                });
            }

            /**
             * Bind an element attribute to an objec's property
             * @param  {obj} obj
             * @param  {obj} node
             * @param  {string} attr
             * @param  {string} prop
             */

        }, {
            key: 'bindAttrToProperty',
            value: function bindAttrToProperty(obj, node, attr, prop) {
                Object.defineProperty(obj, prop, {
                    set: function set(value) {
                        if (value) {
                            node.setAttribute(attr, value);
                        };
                    }
                });
            }

            /**
             * Merge passed options with default
             * @param {obj} options
             */

        }, {
            key: 'setOptions',
            value: function setOptions(options) {
                this.options = _extends({}, _defaultOptions2.default, options);
            }

            /**
             * set main dom node
             */

        }, {
            key: 'setDomNode',
            value: function setDomNode() {
                this.domNode = this.options.element;
            }

            /**
             * attach initial markup to the main domNode
             */

        }, {
            key: 'createPlayerHtml',
            value: function createPlayerHtml() {
                this.domNode.innerHTML = this.markup;

                // Change the initial dom node to first child
                this.domNode = this.domNode.firstChild;
            }

            /**
             * Extract video id from a passed video url
             */

        }, {
            key: 'extractVideoIdfromUrl',
            value: function extractVideoIdfromUrl() {
                var regex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
                var matches = this.options.videoUrl.match(regex);

                if (matches) {
                    this.options.videoId = matches[1];
                } else {
                    throw new Error('The url is not in the right format');
                }
            }

            /**
             * Set video id from data attributes or video url
             */

        }, {
            key: 'setVideoId',
            value: function setVideoId() {
                if (this.domNode.hasAttribute('data-youtube-id')) {
                    this.options.videoId = this.domNode.getAttribute('data-youtube-id');
                }

                if (this.domNode.hasAttribute('data-youtube-url')) {
                    this.options.videoUrl = this.domNode.getAttribute('data-youtube-url');
                }

                if (this.options.videoUrl && !this.options.videoId) {
                    this.extractVideoIdfromUrl();
                }
            }

            /**
             * Set the cover image if it's passed as an option
             * otherwise fetch the image from youtrube based on id and size
             */

        }, {
            key: 'setCoverImage',
            value: function setCoverImage() {
                var _this = this;

                if (this.domNode.hasAttribute('data-cover-image')) {
                    this.options.coverImageSrc = this.domNode.getAttribute('data-cover-image');
                }

                if (this.options.coverImageSrc) {
                    var img = new Image();
                    img.src = this.options.coverImageSrc;
                    img.onload = function () {
                        _this.options.coverImage = 'background-image: url(' + _this.options.coverImageSrc;
                    };
                } else {
                    var _img = new Image();
                    var imageSize = void 0;
                    var src = void 0;

                    switch (this.options.coverImageSize) {
                        case 'medium':
                            imageSize = 'mqdefault';
                            break;
                        case 'high':
                            imageSize = '0';
                            break;
                        case 'sd':
                            imageSize = 'sddefault';
                            break;
                        case 'maximum':
                            imageSize = 'maxresdefault';
                            break;
                    }

                    src = 'https://img.youtube.com/vi/' + this.options.videoId + '/' + imageSize + '.jpg';

                    _img.src = src;
                    _img.onload = function () {
                        var srcName = _img.width > 150 ? imageSize : '0';
                        _this.options.coverImage = 'background-image: url(https://img.youtube.com/vi/' + _this.options.videoId + '/' + srcName + '.jpg)';
                    };
                }
            }

            /**
             * Add click listener to video cover
             */

        }, {
            key: 'addListeners',
            value: function addListeners() {
                var _this2 = this;

                // Add click listener to video cover
                this.domNode.querySelector('.' + this.options.cssClasses.cover).addEventListener('click', function () {
                    return _this2.initialisePlayer();
                });
            }

            /**
             * Set intitial markup of the video player
             */

        }, {
            key: 'setMarkup',
            value: function setMarkup() {
                this.markup = (0, _defaultMarkup2.default)(this.options);
            }

            /**
             * Create youtube api script
             */

        }, {
            key: 'loadYoutubeApi',
            value: function loadYoutubeApi() {
                var tag = void 0,
                    firstScriptTag = void 0;

                if (!window.iframeApiCreated) {
                    tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';
                    firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    window.iframeApiCreated = true;
                }

                if (window.YT) {
                    this.onYouTubeIframeAPIReady();
                } else {
                    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
                }
            }

            /**
             * Callback function once the iframe api is loaded
             */

        }, {
            key: 'onYouTubeIframeAPIReady',
            value: function onYouTubeIframeAPIReady() {
                var _this3 = this;

                window.YTPlayers.forEach(function (player) {
                    player.apiIsLoaded = true;
                    if (!_this3.options.forceCoverOnTouchDevices && _helpers2.default.isMobile.any()) {
                        player.initialisePlayer();
                    }
                });
            }

            /**
             * handle click on cover video
             */

        }, {
            key: 'initialisePlayer',
            value: function initialisePlayer() {
                // Turn off custom loader on mobile and touch devices
                // since autolplay is not allowed on these devices
                if (_helpers2.default.isMobile.any()) {
                    this.coverIsHidden = true;
                } else {
                    this.isLoading = true;
                }

                // Create the player
                if (this.playerCreated) {
                    this.player.playVideo();
                } else {
                    this.createPlayer();
                }

                this.pauseOtherVideos();
            }

            /**
             * Create youtube player and attach it to the class instance
             */

        }, {
            key: 'createPlayer',
            value: function createPlayer() {
                this.player = new YT.Player(this.options.videoId, {
                    videoId: this.options.videoId,
                    playerVars: this.options.playerVars,
                    events: {
                        onReady: this.onPlayerReady.bind(this),
                        onStateChange: this.onPlayerStateChange.bind(this)
                    }
                });
            }

            /**
             * This method is executed once the player has been created
             * @param  {object} e event object from iframe api
             */

        }, {
            key: 'onPlayerReady',
            value: function onPlayerReady(e) {
                // This will set the player state to -1 (unstarted);
                this.player.stopVideo();
                this.player.playVideo();
                this.playerCreated = true;
            }

            /**
             * Custom cover image and spinner based on player state
             * @param {object} e event object from iframe api
             */

        }, {
            key: 'onPlayerStateChange',
            value: function onPlayerStateChange(e) {
                var state = e.data;

                switch (state) {
                    // Unstarted
                    case -1:
                        this.videoStarted = true;
                        break;

                    // Ended
                    case 0:
                        this.coverIsHidden = false;
                        this.isLoading = false;
                        this.videoStarted = false;
                        break;

                    // Playing
                    case 1:
                        this.coverIsHidden = true;
                        this.isLoading = false;
                        this.pauseOtherVideos();
                        break;

                    // Buffering
                    case 3:
                        if (!this.videoStarted) {
                            this.coverIsHidden = false;
                            this.isLoading = true;
                        }
                        break;

                    // Cued
                    case 5:
                        break;
                }
            }

            /**
             * Pause other videos on the same page
             */

        }, {
            key: 'pauseOtherVideos',
            value: function pauseOtherVideos() {
                var _this4 = this;

                var instances = window.YTPlayers;

                instances.forEach(function (instance) {
                    if (instance.player && instance.player !== _this4.player) {
                        instance.player.pauseVideo();
                    }
                });
            }

            /**
             * Update video player options
             * @param  {object} options videoId coverImage coverImageSize
             */

        }, {
            key: 'updateOptions',
            value: function updateOptions(options) {
                this.options.videoId = options.videoId;
                this.options.videoUrl = options.videoUrl;
                this.options.coverImageSrc = options.coverImageSrc ? options.coverImageSrc : '';
                this.options.coverImageSize = options.coverImageSize;
                this.domNode.querySelector('.' + this.options.cssClasses.video).setAttribute('id', this.options.videoId);
            }

            /**
             * Load new video by passing an options object
             * @param  {object} options videoId coverImage coverImageSize
             */

        }, {
            key: 'loadNewVideo',
            value: function loadNewVideo(options) {
                this.updateOptions(options);
                this.setVideoId();
                this.setCoverImage();

                if (this.playerCreated) {
                    this.player.cueVideoById(this.options.videoId);
                    this.isLoading = false;
                    this.videoStarted = false;

                    if (!_helpers2.default.isMobile.any()) {
                        this.coverIsHidden = false;
                    }
                }
            }

            /**
             * Remove this instanvce from YTPlayers array and
             * aslo remove the markup from dom
             * @return {[type]} [description]
             */

        }, {
            key: 'destroy',
            value: function destroy() {
                // Delete this instance from players array
                if (window.YTPlayers) {
                    var index = window.YTPlayers.indexOf(this);
                    if (index > -1) {
                        window.YTPlayers.splice(index, 1);
                    }
                }

                this.domNode.remove();
            }
        }]);

        return _class;
    }();

    exports.default = _class;
    ;

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        element: null,
        videoId: '',
        videoUrl: '',
        coverImageSrc: '',
        coverImageSize: 'high',
        forceCoverOnTouchDevices: false,
        cssClasses: {
            wrapper: 'c-youtube-player',
            wrapperInner: 'c-youtube-player__inner',
            video: 'c-youtube-player__video',
            cover: 'c-youtube-player__cover',
            icons: 'c-youtube-player__icons',
            spinnerWrapper: 'c-youtube-player__spinner-wrapper',
            playButtonWrapper: 'c-youtube-player__play-button-wrapper'
        },
        playIcon: '<svg class="c-youtube-player__play-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" xml:space="preserve"><path d="M281.9,144.5L24.5,1.4c-3-1.7-5.5-1.9-7.7-0.6c-2.1,1.3-3.2,3.6-3.2,7v285.3c0,3.4,1.1,5.7,3.2,7c2.1,1.3,4.7,1.1,7.7-0.6l257.4-143c3-1.7,4.5-3.7,4.5-6C286.3,148.1,284.9,146.1,281.9,144.5L281.9,144.5z"></path></svg>',
        spinnerIcon: '<div class="c-youtube-player__spinner"></div>',
        playerVars: {
            rel: 0,
            color: 'white',
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            disablekb: 1
        }
    };

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (options) {
        return "<div class=\"" + options.cssClasses.wrapper + "\">\n        <div class=\"" + options.cssClasses.wrapperInner + "\">\n            <div id=\"" + options.videoId + "\" class=\"" + options.cssClasses.video + "\"></div>\n            <div class=\"" + options.cssClasses.cover + "\">\n                <div class=\"" + options.cssClasses.icons + "\">\n                    <div class=\"" + options.cssClasses.playButtonWrapper + "\">\n                        " + options.playIcon + "\n                    </div>\n                    <div class=\"" + options.cssClasses.spinnerWrapper + "\">\n                        " + options.spinnerIcon + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
    };

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        getEl: function getEl(selector) {
            return document.querySelectorAll(selector);
        },

        /**
         * Mobile & Tablet Detection
         * @return {Boolean}
         */
        isMobile: {
            Android: function Android() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function BlackBerry() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function iOS() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function Opera() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function Windows() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function any() {
                return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
            }
        }
    };

    /***/
},
/* 5 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 6 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 7 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/}]
/******/);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _youtubePlayer = __webpack_require__(10);

var _youtubePlayer2 = _interopRequireDefault(_youtubePlayer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

console.log(_youtubePlayer2.default);
// console.log(YoutubePlayerSrc, 'src');
// document.querySelectorAll('[data-youtube-id]').forEach((element) => {
//     new YoutubePlayer({
//         element
//     });
// });

/* eslint-disable */
var yp = new _youtubePlayer2.default({
    element: document.querySelectorAll('.js-video')[0],
    coverImageSize: 'maximum',
    forceCoverOnTouchDevices: false
});

setTimeout(function () {
    yp.loadNewVideo({
        videoUrl: 'https://www.youtube.com/watch?v=qJq8IovXFYQ',
        coverImageSize: 'medium'

    });
}, 25000);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzU4ZTRiYjBlNjI5OGEyZTc4ZjAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDI5NDkxMGE5Mjk4ZjdhNDEwN2E0Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvanMveW91dHViZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9qcy9kZWZhdWx0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9qcy9kZWZhdWx0LW1hcmt1cC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9zY3NzL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3Njc3MvZGVmYXVsdC1za2luLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2RlbW8vc2Nzcy9kZW1vLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vanMvZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7YUFDQTs7QUFFQTthQUNBOztB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Ozs7Ozs7aUJDL1lHO2lCQUNBO2tCQUNBO3VCQUNBO3dCQUNBO2tDQUNBOztxQkFFSTswQkFDQTttQkFDQTttQkFDQTttQkFDQTs0QkFDQTsrQkFFSjs7a0JBQ0E7cUJBQ0E7O2lCQUVJO21CQUNBO3NCQUNBOzRCQUNBOzRCQUNBO3VCQUFXOzs7Ozs7Ozs7Ozs7Ozs7c0JDeEJKLFVBQVMsU0FDcEI7aUNBQXNCLFFBQVEsV0FBVyx5Q0FDdkIsUUFBUSxXQUFXLCtDQUNsQixRQUFRLDBCQUFtQixRQUFRLFdBQVcsaURBQzNDLFFBQVEsV0FBVywrQ0FDZixRQUFRLFdBQVcsbURBQ2YsUUFBUSxXQUFXLHNEQUMzQixRQUFRLCtFQUVBLFFBQVEsV0FBVyxtREFDM0IsUUFBUSxjQU1qQzs7Ozs7Ozs7Ozs7Ozs7OEJDZlMsVUFDRjttQkFBTyxTQUFTLGlCQU9wQjs7Ozs7Ozs7d0NBRVE7dUJBQU8sVUFBVSxVQUFVLE1BRS9COzs4Q0FDSTt1QkFBTyxVQUFVLFVBQVUsTUFFL0I7O2dDQUNJO3VCQUFPLFVBQVUsVUFBVSxNQUUvQjs7b0NBQ0k7dUJBQU8sVUFBVSxVQUFVLE1BRS9COzt3Q0FDSTt1QkFBTyxVQUFVLFVBQVUsTUFFL0I7O2dDQUNJO3VCQUFRLEtBQUssYUFBYSxLQUFLLGdCQUFnQixLQUFLLFNBQVMsS0FBSyxXQUFXLEtBQ2hGO0FBbEJLOzs7Ozs7O2dDQ1RkOzs7Ozs7Z0NDQUE7Ozs7OztnQ0NBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBVUEsSUFBSTthQUNTLFNBQVMsaUJBQWlCLGFBQ25DO29CQUNBOzhCQUEwQjtBQUYxQixDQURLOztBQU1ULFdBQVcsWUFDUDtPQUFHO2tCQUVDO3dCQUdQOztBQUpPO0FBRlIsR0FNRyxPIiwiZmlsZSI6ImRvY3MvYXNzZXRzL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNThlNGJiMGU2Mjk4YTJlNzhmMCIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI5NDkxMGE5Mjk4ZjdhNDEwN2E0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDI5NDkxMGE5Mjk4ZjdhNDEwN2E0IiwiLyogZ2xvYmFsIFlUICovXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0LW9wdGlvbnMnO1xuaW1wb3J0IG1hcmt1cCBmcm9tICcuL2RlZmF1bHQtbWFya3VwJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIC8vIFNldCBEZWZhdWx0IE9wdGlvbnNcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldERvbU5vZGUoKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvdmVySW1hZ2UoKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIFBsYXllclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrdXAoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVySHRtbCgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgRGF0YVxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YUJpbmRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlcygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIEFQSVxuICAgICAgICAgICAgdGhpcy5sb2FkWW91dHViZUFwaSgpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHlvdXR1YmUgcGxheWVyIGluc3RhbmNlc1xuICAgICAgICAgICAgLy8gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgICAgICAgICAgIGlmICghd2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5ZVFBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LllUUGxheWVycy5wdXNoKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGZpbmQgeW91dHViZSB2aWRlbyBpZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGluaXRpYWwgc3RhdGVzXG4gICAgICovXG4gICAgc2V0U3RhdGVzKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWxsIHRoZSBkYXRhIGJpbmRpbmdzXG4gICAgICovXG4gICAgaW5pdERhdGFCaW5kaW5ncygpIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVyO1xuICAgICAgICB0aGlzLmJpbmRDbGFzc1RvUHJvcGVydHkodGhpcywgdGhpcy5kb21Ob2RlLCBgJHt3cmFwcGVyfS0taXMtbG9hZGluZ2AsICdpc0xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xhc3NUb1Byb3BlcnR5KHRoaXMsIHRoaXMuZG9tTm9kZSwgYCR7d3JhcHBlcn0tLWNvdmVyLWlzLWhpZGRlbmAsICdjb3ZlcklzSGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYmluZENsYXNzVG9Qcm9wZXJ0eSh0aGlzLCB0aGlzLmRvbU5vZGUsIGAke3dyYXBwZXJ9LS1pcy1yZWFkeWAsICdhcGlJc0xvYWRlZCcpO1xuICAgICAgICB0aGlzLmJpbmRBdHRyVG9Qcm9wZXJ0eSh0aGlzLm9wdGlvbnMsIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyKSwgJ3N0eWxlJywgJ2NvdmVySW1hZ2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGFuIGVsZW1lbnQncyBjbGFzcyBuYW1lIHRvIGFuIG9iamVjdCdzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvcFxuICAgICAqL1xuICAgIGJpbmRDbGFzc1RvUHJvcGVydHkob2JqLCBub2RlLCBjbGFzc05hbWUsIHByb3ApIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID8gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBhbiBlbGVtZW50IGF0dHJpYnV0ZSB0byBhbiBvYmplYydzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb3BcbiAgICAgKi9cbiAgICBiaW5kQXR0clRvUHJvcGVydHkob2JqLCBub2RlLCBhdHRyLCBwcm9wKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlIHBhc3NlZCBvcHRpb25zIHdpdGggZGVmYXVsdFxuICAgICAqIEBwYXJhbSB7b2JqfSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBtYWluIGRvbSBub2RlXG4gICAgICovXG4gICAgc2V0RG9tTm9kZSgpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gdGhpcy5vcHRpb25zLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXR0YWNoIGluaXRpYWwgbWFya3VwIHRvIHRoZSBtYWluIGRvbU5vZGVcbiAgICAgKi9cbiAgICBjcmVhdGVQbGF5ZXJIdG1sKCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUuaW5uZXJIVE1MID0gdGhpcy5tYXJrdXA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBpbml0aWFsIGRvbSBub2RlIHRvIGZpcnN0IGNoaWxkXG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IHRoaXMuZG9tTm9kZS5maXJzdENoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdmlkZW8gaWQgZnJvbSBhIHBhc3NlZCB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBleHRyYWN0VmlkZW9JZGZyb21VcmwoKSB7XG4gICAgICAgIGxldCByZWdleCA9IC9eKD86aHR0cCg/OnMpPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86bVxcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFwvKD86KD86d2F0Y2gpP1xcPyg/Oi4qJik/dig/OmkpPz18KD86ZW1iZWR8dnx2aXx1c2VyKVxcLykpKFtePyZcIic+XSspLztcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLm9wdGlvbnMudmlkZW9VcmwubWF0Y2gocmVnZXgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9JZCA9IG1hdGNoZXNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB1cmwgaXMgbm90IGluIHRoZSByaWdodCBmb3JtYXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBpZCBmcm9tIGRhdGEgYXR0cmlidXRlcyBvciB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBzZXRWaWRlb0lkKCkge1xuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLXVybCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtdXJsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZGVvVXJsICYmICF0aGlzLm9wdGlvbnMudmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VmlkZW9JZGZyb21VcmwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY292ZXIgaW1hZ2UgaWYgaXQncyBwYXNzZWQgYXMgYW4gb3B0aW9uXG4gICAgICogb3RoZXJ3aXNlIGZldGNoIHRoZSBpbWFnZSBmcm9tIHlvdXRydWJlIGJhc2VkIG9uIGlkIGFuZCBzaXplXG4gICAgICovXG4gICAgc2V0Q292ZXJJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtY292ZXItaW1hZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdmVyLWltYWdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMpIHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmN9YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VTaXplO1xuICAgICAgICAgICAgbGV0IHNyYztcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ21xZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ3NkZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXhpbXVtJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnbWF4cmVzZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3RoaXMub3B0aW9ucy52aWRlb0lkfS8ke2ltYWdlU2l6ZX0uanBnYDtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNyY05hbWUgPSBpbWcud2lkdGggPiAxNTAgPyBpbWFnZVNpemUgOiAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dGhpcy5vcHRpb25zLnZpZGVvSWR9LyR7c3JjTmFtZX0uanBnKWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNsaWNrIGxpc3RlbmVyIHRvIHZpZGVvIGNvdmVyXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXIgdG8gdmlkZW8gY292ZXJcbiAgICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMuY292ZXIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5pbml0aWFsaXNlUGxheWVyKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBpbnRpdGlhbCBtYXJrdXAgb2YgdGhlIHZpZGVvIHBsYXllclxuICAgICAqL1xuICAgIHNldE1hcmt1cCgpIHtcbiAgICAgICAgdGhpcy5tYXJrdXAgPSBtYXJrdXAodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgeW91dHViZSBhcGkgc2NyaXB0XG4gICAgICovXG4gICAgbG9hZFlvdXR1YmVBcGkoKSB7XG4gICAgICAgIGxldCB0YWcsXG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZztcblxuICAgICAgICBpZiAoIXdpbmRvdy5pZnJhbWVBcGlDcmVhdGVkKSB7XG4gICAgICAgICAgICB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuICAgICAgICAgICAgd2luZG93LmlmcmFtZUFwaUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ZVCkge1xuICAgICAgICAgICAgdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gb25jZSB0aGUgaWZyYW1lIGFwaSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcbiAgICAgICAgd2luZG93LllUUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5hcGlJc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHBsYXllci5pbml0aWFsaXNlUGxheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhhbmRsZSBjbGljayBvbiBjb3ZlciB2aWRlb1xuICAgICAqL1xuICAgIGluaXRpYWxpc2VQbGF5ZXIoKSB7XG4gICAgICAgIC8vIFR1cm4gb2ZmIGN1c3RvbSBsb2FkZXIgb24gbW9iaWxlIGFuZCB0b3VjaCBkZXZpY2VzXG4gICAgICAgIC8vIHNpbmNlIGF1dG9scGxheSBpcyBub3QgYWxsb3dlZCBvbiB0aGVzZSBkZXZpY2VzXG4gICAgICAgIGlmIChIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZU90aGVyVmlkZW9zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHlvdXR1YmUgcGxheWVyIGFuZCBhdHRhY2ggaXQgdG8gdGhlIGNsYXNzIGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy5vcHRpb25zLnZpZGVvSWQsIHtcbiAgICAgICAgICAgIHZpZGVvSWQ6IHRoaXMub3B0aW9ucy52aWRlb0lkLFxuICAgICAgICAgICAgcGxheWVyVmFyczogdGhpcy5vcHRpb25zLnBsYXllclZhcnMsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBleGVjdXRlZCBvbmNlIHRoZSBwbGF5ZXIgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJSZWFkeShlKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBzZXQgdGhlIHBsYXllciBzdGF0ZSB0byAtMSAodW5zdGFydGVkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBjb3ZlciBpbWFnZSBhbmQgc3Bpbm5lciBiYXNlZCBvbiBwbGF5ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IGUuZGF0YTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIC8vIFVuc3RhcnRlZFxuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRW5kZWRcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFBsYXlpbmdcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhdXNlT3RoZXJWaWRlb3MoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEJ1ZmZlcmluZ1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlkZW9TdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ3VlZFxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIG90aGVyIHZpZGVvcyBvbiB0aGUgc2FtZSBwYWdlXG4gICAgICovXG4gICAgcGF1c2VPdGhlclZpZGVvcygpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHdpbmRvdy5ZVFBsYXllcnM7XG5cbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucGxheWVyICYmIGluc3RhbmNlLnBsYXllciAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdmlkZW8gcGxheWVyIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgdmlkZW9JZCBjb3ZlckltYWdlIGNvdmVySW1hZ2VTaXplXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gb3B0aW9ucy52aWRlb0lkO1xuICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSBvcHRpb25zLnZpZGVvVXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYyA9IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA/IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA6ICcnO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUgPSBvcHRpb25zLmNvdmVySW1hZ2VTaXplO1xuICAgICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy52aWRlbykuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMub3B0aW9ucy52aWRlb0lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIG5ldyB2aWRlbyBieSBwYXNzaW5nIGFuIG9wdGlvbnMgb2JqZWN0XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIHZpZGVvSWQgY292ZXJJbWFnZSBjb3ZlckltYWdlU2l6ZVxuICAgICAqL1xuICAgIGxvYWROZXdWaWRlbyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG4gICAgICAgIHRoaXMuc2V0Q292ZXJJbWFnZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh0aGlzLm9wdGlvbnMudmlkZW9JZCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhpcyBpbnN0YW52Y2UgZnJvbSBZVFBsYXllcnMgYXJyYXkgYW5kXG4gICAgICogYXNsbyByZW1vdmUgdGhlIG1hcmt1cCBmcm9tIGRvbVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIERlbGV0ZSB0aGlzIGluc3RhbmNlIGZyb20gcGxheWVycyBhcnJheVxuICAgICAgICBpZiAod2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gd2luZG93LllUUGxheWVycy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMveW91dHViZS1wbGF5ZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2pzL3lvdXR1YmUtcGxheWVyLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdmlkZW9JZDogJycsXG4gICAgdmlkZW9Vcmw6ICcnLFxuICAgIGNvdmVySW1hZ2VTcmM6ICcnLFxuICAgIGNvdmVySW1hZ2VTaXplOiAnaGlnaCcsXG4gICAgZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzOiBmYWxzZSxcbiAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgIHdyYXBwZXI6ICdjLXlvdXR1YmUtcGxheWVyJyxcbiAgICAgICAgd3JhcHBlcklubmVyOiAnYy15b3V0dWJlLXBsYXllcl9faW5uZXInLFxuICAgICAgICB2aWRlbzogJ2MteW91dHViZS1wbGF5ZXJfX3ZpZGVvJyxcbiAgICAgICAgY292ZXI6ICdjLXlvdXR1YmUtcGxheWVyX19jb3ZlcicsXG4gICAgICAgIGljb25zOiAnYy15b3V0dWJlLXBsYXllcl9faWNvbnMnLFxuICAgICAgICBzcGlubmVyV3JhcHBlcjogJ2MteW91dHViZS1wbGF5ZXJfX3NwaW5uZXItd3JhcHBlcicsXG4gICAgICAgIHBsYXlCdXR0b25XcmFwcGVyOiAnYy15b3V0dWJlLXBsYXllcl9fcGxheS1idXR0b24td3JhcHBlcidcbiAgICB9LFxuICAgIHBsYXlJY29uOiAnPHN2ZyBjbGFzcz1cImMteW91dHViZS1wbGF5ZXJfX3BsYXktYnV0dG9uXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMzAwIDMwMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHBhdGggZD1cIk0yODEuOSwxNDQuNUwyNC41LDEuNGMtMy0xLjctNS41LTEuOS03LjctMC42Yy0yLjEsMS4zLTMuMiwzLjYtMy4yLDd2Mjg1LjNjMCwzLjQsMS4xLDUuNywzLjIsN2MyLjEsMS4zLDQuNywxLjEsNy43LTAuNmwyNTcuNC0xNDNjMy0xLjcsNC41LTMuNyw0LjUtNkMyODYuMywxNDguMSwyODQuOSwxNDYuMSwyODEuOSwxNDQuNUwyODEuOSwxNDQuNXpcIj48L3BhdGg+PC9zdmc+JyxcbiAgICBzcGlubmVySWNvbjogJzxkaXYgY2xhc3M9XCJjLXlvdXR1YmUtcGxheWVyX19zcGlubmVyXCI+PC9kaXY+JyxcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIHJlbDogMCxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgIGRpc2FibGVrYjogMVxuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2pzL2RlZmF1bHQtb3B0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvanMvZGVmYXVsdC1vcHRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLndyYXBwZXJ9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVySW5uZXJ9XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHtvcHRpb25zLnZpZGVvSWR9XCIgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy52aWRlb31cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5jb3Zlcn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMuaWNvbnN9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5wbGF5QnV0dG9uV3JhcHBlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9ucy5wbGF5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5zcGlubmVyV3JhcHBlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9ucy5zcGlubmVySWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMvZGVmYXVsdC1tYXJrdXAuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2pzL2RlZmF1bHQtbWFya3VwLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEVsKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9iaWxlICYgVGFibGV0IERldGVjdGlvblxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNNb2JpbGU6IHtcbiAgICAgICAgQW5kcm9pZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuICAgICAgICB9LFxuICAgICAgICBCbGFja0JlcnJ5KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlPUygpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xuICAgICAgICB9LFxuICAgICAgICBPcGVyYSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW5pL2kpO1xuICAgICAgICB9LFxuICAgICAgICBXaW5kb3dzKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xuICAgICAgICB9LFxuICAgICAgICBhbnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuQW5kcm9pZCgpIHx8IHRoaXMuQmxhY2tCZXJyeSgpIHx8IHRoaXMuaU9TKCkgfHwgdGhpcy5PcGVyYSgpIHx8IHRoaXMuV2luZG93cygpKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2pzL2hlbHBlcnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2pzL2hlbHBlcnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYi9zY3NzL2Jhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3Njc3MvYmFzZS5zY3NzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc2Nzcy9kZWZhdWx0LXNraW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3Njc3MvZGVmYXVsdC1za2luLnNjc3MiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlbW8vc2Nzcy9kZW1vLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2RlbW8vc2Nzcy9kZW1vLnNjc3MiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFlvdXR1YmVQbGF5ZXIgZnJvbSAnLi4vLi4vLi4vbGliL3lvdXR1YmUtcGxheWVyJztcbmNvbnNvbGUubG9nKFlvdXR1YmVQbGF5ZXIpO1xuLy8gY29uc29sZS5sb2coWW91dHViZVBsYXllclNyYywgJ3NyYycpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEteW91dHViZS1pZF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgbmV3IFlvdXR1YmVQbGF5ZXIoe1xuLy8gICAgICAgICBlbGVtZW50XG4vLyAgICAgfSk7XG4vLyB9KTtcblxubGV0IHlwID0gbmV3IFlvdXR1YmVQbGF5ZXIoe1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy12aWRlbycpWzBdLFxuICAgIGNvdmVySW1hZ2VTaXplOiAnbWF4aW11bScsXG4gICAgZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzOiBmYWxzZVxufSk7XG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHlwLmxvYWROZXdWaWRlbyh7XG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1xSnE4SW92WEZZUScsXG4gICAgICAgIGNvdmVySW1hZ2VTaXplOiAnbWVkaXVtJ1xuXG4gICAgfSk7XG59LCAyNTAwMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby9qcy9kZW1vLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
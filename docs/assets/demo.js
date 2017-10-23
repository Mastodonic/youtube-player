(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["youtube-player"] = factory();
	else
		root["youtube-player"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["youtube-player"] = factory();else root["youtube-player"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
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
            /******/return __webpack_require__(__webpack_require__.s = 1);
            /******/
        }(
        /************************************************************************/
        /******/[,
        /* 0 */
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            __webpack_require__(2);
            __webpack_require__(6);
            __webpack_require__(7);
            module.exports = __webpack_require__(8);

            /***/
        },
        /* 2 */
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

            var _defaultOptions = __webpack_require__(3);

            var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

            var _defaultMarkup = __webpack_require__(4);

            var _defaultMarkup2 = _interopRequireDefault(_defaultMarkup);

            var _helpers = __webpack_require__(5);

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
        /* 3 */
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
        /* 4 */
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
        /* 5 */
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
        /* 6 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 7 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 8 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/}]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _youtubePlayer = __webpack_require__(0);

var _youtubePlayer2 = _interopRequireDefault(_youtubePlayer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// console.log(sample);

console.log(__webpack_require__(0));

//
// console.log(YoutubePlayerSrc, 'src');
// document.querySelectorAll('[data-youtube-id]').forEach((element) => {
//     new YoutubePlayer({
//         element
//     });
// });
//
// let yp = new YoutubePlayer({
//     element: document.querySelectorAll('.js-video')[0],
//     coverImageSize: 'maximum',
//     forceCoverOnTouchDevices: false
// });
//
// setTimeout(() => {
//     yp.loadNewVideo({
//         videoUrl: 'https://www.youtube.com/watch?v=qJq8IovXFYQ',
//         coverImageSize: 'medium'
//
//     });
// }, 25000);
/* eslint-disable */

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3Y2ViOTEzZWMzOWY0ZTI5YTU0YSIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGIyMDI0NTRhZTM1ZGRlNGM3YjBmIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvanMveW91dHViZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9qcy9kZWZhdWx0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9qcy9kZWZhdWx0LW1hcmt1cC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9zY3NzL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3Njc3MvZGVmYXVsdC1za2luLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2RlbW8vc2Nzcy9kZW1vLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vanMvZGVtby5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Ozt3Q0NBQTs7Ozs7O3dDQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7QUFDQTs7QUFFQSxRQUFRLElBQUksb0JBQVE7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQSxvQjs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkb2NzL2Fzc2V0cy9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieW91dHViZS1wbGF5ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieW91dHViZS1wbGF5ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2NlYjkxM2VjMzlmNGUyOWE1NGEiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ5b3V0dWJlLXBsYXllclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ5b3V0dWJlLXBsYXllclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjAyNDU0YWUzNWRkZTRjN2IwZlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCBiMjAyNDU0YWUzNWRkZTRjN2IwZiIsIi8qIGdsb2JhbCBZVCAqL1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdC1vcHRpb25zJztcbmltcG9ydCBtYXJrdXAgZnJvbSAnLi9kZWZhdWx0LW1hcmt1cCc7XG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICAvLyBTZXQgRGVmYXVsdCBPcHRpb25zXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXREb21Ob2RlKCk7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9JZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb3ZlckltYWdlKCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBQbGF5ZXJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFya3VwKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllckh0bWwoKTtcblxuICAgICAgICAgICAgLy8gU2V0IERhdGFcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGFCaW5kaW5ncygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZXMoKTtcblxuICAgICAgICAgICAgLy8gQWRkIGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcblxuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSBBUElcbiAgICAgICAgICAgIHRoaXMubG9hZFlvdXR1YmVBcGkoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzICYmIEhlbHBlcnMuaXNNb2JpbGUuYW55KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGFsbCB5b3V0dWJlIHBsYXllciBpbnN0YW5jZXNcbiAgICAgICAgICAgIC8vIG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5ZVFBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5ZVFBsYXllcnMucHVzaCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBmaW5kIHlvdXR1YmUgdmlkZW8gaWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBpbml0aWFsIHN0YXRlc1xuICAgICAqL1xuICAgIHNldFN0YXRlcygpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDcmVhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlkZW9TdGFydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFsbCB0aGUgZGF0YSBiaW5kaW5nc1xuICAgICAqL1xuICAgIGluaXREYXRhQmluZGluZ3MoKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMud3JhcHBlcjtcbiAgICAgICAgdGhpcy5iaW5kQ2xhc3NUb1Byb3BlcnR5KHRoaXMsIHRoaXMuZG9tTm9kZSwgYCR7d3JhcHBlcn0tLWlzLWxvYWRpbmdgLCAnaXNMb2FkaW5nJyk7XG4gICAgICAgIHRoaXMuYmluZENsYXNzVG9Qcm9wZXJ0eSh0aGlzLCB0aGlzLmRvbU5vZGUsIGAke3dyYXBwZXJ9LS1jb3Zlci1pcy1oaWRkZW5gLCAnY292ZXJJc0hpZGRlbicpO1xuICAgICAgICB0aGlzLmJpbmRDbGFzc1RvUHJvcGVydHkodGhpcywgdGhpcy5kb21Ob2RlLCBgJHt3cmFwcGVyfS0taXMtcmVhZHlgLCAnYXBpSXNMb2FkZWQnKTtcbiAgICAgICAgdGhpcy5iaW5kQXR0clRvUHJvcGVydHkodGhpcy5vcHRpb25zLCB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy5jb3ZlciksICdzdHlsZScsICdjb3ZlckltYWdlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBhbiBlbGVtZW50J3MgY2xhc3MgbmFtZSB0byBhbiBvYmplY3QncyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSAge29ian0gb2JqXG4gICAgICogQHBhcmFtICB7b2JqfSBub2RlXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb3BcbiAgICAgKi9cbiAgICBiaW5kQ2xhc3NUb1Byb3BlcnR5KG9iaiwgbm9kZSwgY2xhc3NOYW1lLCBwcm9wKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA/IG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgYW4gZWxlbWVudCBhdHRyaWJ1dGUgdG8gYW4gb2JqZWMncyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSAge29ian0gb2JqXG4gICAgICogQHBhcmFtICB7b2JqfSBub2RlXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBwcm9wXG4gICAgICovXG4gICAgYmluZEF0dHJUb1Byb3BlcnR5KG9iaiwgbm9kZSwgYXR0ciwgcHJvcCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBwYXNzZWQgb3B0aW9ucyB3aXRoIGRlZmF1bHRcbiAgICAgKiBAcGFyYW0ge29ian0gb3B0aW9uc1xuICAgICAqL1xuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXQgbWFpbiBkb20gbm9kZVxuICAgICAqL1xuICAgIHNldERvbU5vZGUoKSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IHRoaXMub3B0aW9ucy5lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGF0dGFjaCBpbml0aWFsIG1hcmt1cCB0byB0aGUgbWFpbiBkb21Ob2RlXG4gICAgICovXG4gICAgY3JlYXRlUGxheWVySHRtbCgpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlLmlubmVySFRNTCA9IHRoaXMubWFya3VwO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgaW5pdGlhbCBkb20gbm9kZSB0byBmaXJzdCBjaGlsZFxuICAgICAgICB0aGlzLmRvbU5vZGUgPSB0aGlzLmRvbU5vZGUuZmlyc3RDaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHZpZGVvIGlkIGZyb20gYSBwYXNzZWQgdmlkZW8gdXJsXG4gICAgICovXG4gICAgZXh0cmFjdFZpZGVvSWRmcm9tVXJsKCkge1xuICAgICAgICBsZXQgcmVnZXggPSAvXig/Omh0dHAoPzpzKT86XFwvXFwvKT8oPzp3d3dcXC4pPyg/Om1cXC4pPyg/OnlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyg/Oig/OndhdGNoKT9cXD8oPzouKiYpP3YoPzppKT89fCg/OmVtYmVkfHZ8dml8dXNlcilcXC8pKShbXj8mXCInPl0rKS87XG4gICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy5vcHRpb25zLnZpZGVvVXJsLm1hdGNoKHJlZ2V4KTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZpZGVvSWQgPSBtYXRjaGVzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdXJsIGlzIG5vdCBpbiB0aGUgcmlnaHQgZm9ybWF0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmlkZW8gaWQgZnJvbSBkYXRhIGF0dHJpYnV0ZXMgb3IgdmlkZW8gdXJsXG4gICAgICovXG4gICAgc2V0VmlkZW9JZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEteW91dHViZS1pZCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9JZCA9IHRoaXMuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteW91dHViZS1pZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZG9tTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEteW91dHViZS11cmwnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZpZGVvVXJsID0gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLXVybCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWRlb1VybCAmJiAhdGhpcy5vcHRpb25zLnZpZGVvSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFZpZGVvSWRmcm9tVXJsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvdmVyIGltYWdlIGlmIGl0J3MgcGFzc2VkIGFzIGFuIG9wdGlvblxuICAgICAqIG90aGVyd2lzZSBmZXRjaCB0aGUgaW1hZ2UgZnJvbSB5b3V0cnViZSBiYXNlZCBvbiBpZCBhbmQgc2l6ZVxuICAgICAqL1xuICAgIHNldENvdmVySW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbU5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWNvdmVyLWltYWdlJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU3JjID0gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3Zlci1pbWFnZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU3JjKSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmM7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb3ZlckltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMub3B0aW9ucy5jb3ZlckltYWdlU3JjfWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbGV0IGltYWdlU2l6ZTtcbiAgICAgICAgICAgIGxldCBzcmM7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTaXplKSB7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSA9ICdtcWRlZmF1bHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJzAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2QnOlxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSA9ICdzZGRlZmF1bHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF4aW11bSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ21heHJlc2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcmMgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt0aGlzLm9wdGlvbnMudmlkZW9JZH0vJHtpbWFnZVNpemV9LmpwZ2A7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcmNOYW1lID0gaW1nLndpZHRoID4gMTUwID8gaW1hZ2VTaXplIDogJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb3ZlckltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3RoaXMub3B0aW9ucy52aWRlb0lkfS8ke3NyY05hbWV9LmpwZylgO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGljayBsaXN0ZW5lciB0byB2aWRlbyBjb3ZlclxuICAgICAqL1xuICAgIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgLy8gQWRkIGNsaWNrIGxpc3RlbmVyIHRvIHZpZGVvIGNvdmVyXG4gICAgICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaW5pdGlhbGlzZVBsYXllcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW50aXRpYWwgbWFya3VwIG9mIHRoZSB2aWRlbyBwbGF5ZXJcbiAgICAgKi9cbiAgICBzZXRNYXJrdXAoKSB7XG4gICAgICAgIHRoaXMubWFya3VwID0gbWFya3VwKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHlvdXR1YmUgYXBpIHNjcmlwdFxuICAgICAqL1xuICAgIGxvYWRZb3V0dWJlQXBpKCkge1xuICAgICAgICBsZXQgdGFnLFxuICAgICAgICAgICAgZmlyc3RTY3JpcHRUYWc7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cuaWZyYW1lQXBpQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuICAgICAgICAgICAgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgICAgICAgIHdpbmRvdy5pZnJhbWVBcGlDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuWVQpIHtcbiAgICAgICAgICAgIHRoaXMub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IHRoaXMub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIG9uY2UgdGhlIGlmcmFtZSBhcGkgaXMgbG9hZGVkXG4gICAgICovXG4gICAgb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XG4gICAgICAgIHdpbmRvdy5ZVFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuYXBpSXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzICYmIEhlbHBlcnMuaXNNb2JpbGUuYW55KCkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuaW5pdGlhbGlzZVBsYXllcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBoYW5kbGUgY2xpY2sgb24gY292ZXIgdmlkZW9cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlUGxheWVyKCkge1xuICAgICAgICAvLyBUdXJuIG9mZiBjdXN0b20gbG9hZGVyIG9uIG1vYmlsZSBhbmQgdG91Y2ggZGV2aWNlc1xuICAgICAgICAvLyBzaW5jZSBhdXRvbHBsYXkgaXMgbm90IGFsbG93ZWQgb24gdGhlc2UgZGV2aWNlc1xuICAgICAgICBpZiAoSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGxheWVyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGF1c2VPdGhlclZpZGVvcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB5b3V0dWJlIHBsYXllciBhbmQgYXR0YWNoIGl0IHRvIHRoZSBjbGFzcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMub3B0aW9ucy52aWRlb0lkLCB7XG4gICAgICAgICAgICB2aWRlb0lkOiB0aGlzLm9wdGlvbnMudmlkZW9JZCxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHRoaXMub3B0aW9ucy5wbGF5ZXJWYXJzLFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgb25SZWFkeTogdGhpcy5vblBsYXllclJlYWR5LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZTogdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgZXhlY3V0ZWQgb25jZSB0aGUgcGxheWVyIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGUgZXZlbnQgb2JqZWN0IGZyb20gaWZyYW1lIGFwaVxuICAgICAqL1xuICAgIG9uUGxheWVyUmVhZHkoZSkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgc2V0IHRoZSBwbGF5ZXIgc3RhdGUgdG8gLTEgKHVuc3RhcnRlZCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gY292ZXIgaW1hZ2UgYW5kIHNwaW5uZXIgYmFzZWQgb24gcGxheWVyIHN0YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGUgZXZlbnQgb2JqZWN0IGZyb20gaWZyYW1lIGFwaVxuICAgICAqL1xuICAgIG9uUGxheWVyU3RhdGVDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgc3RhdGUgPSBlLmRhdGE7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAvLyBVbnN0YXJ0ZWRcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgIHRoaXMudmlkZW9TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEVuZGVkXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9TdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBQbGF5aW5nXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZU90aGVyVmlkZW9zKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBCdWZmZXJpbmdcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZGVvU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEN1ZWRcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBvdGhlciB2aWRlb3Mgb24gdGhlIHNhbWUgcGFnZVxuICAgICAqL1xuICAgIHBhdXNlT3RoZXJWaWRlb3MoKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZXMgPSB3aW5kb3cuWVRQbGF5ZXJzO1xuXG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnBsYXllciAmJiBpbnN0YW5jZS5wbGF5ZXIgIT09IHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucGxheWVyLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHZpZGVvIHBsYXllciBvcHRpb25zXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIHZpZGVvSWQgY292ZXJJbWFnZSBjb3ZlckltYWdlU2l6ZVxuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9JZCA9IG9wdGlvbnMudmlkZW9JZDtcbiAgICAgICAgdGhpcy5vcHRpb25zLnZpZGVvVXJsID0gb3B0aW9ucy52aWRlb1VybDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMgPSBvcHRpb25zLmNvdmVySW1hZ2VTcmMgPyBvcHRpb25zLmNvdmVySW1hZ2VTcmMgOiAnJztcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTaXplID0gb3B0aW9ucy5jb3ZlckltYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMudmlkZW8pLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm9wdGlvbnMudmlkZW9JZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBuZXcgdmlkZW8gYnkgcGFzc2luZyBhbiBvcHRpb25zIG9iamVjdFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyB2aWRlb0lkIGNvdmVySW1hZ2UgY292ZXJJbWFnZVNpemVcbiAgICAgKi9cbiAgICBsb2FkTmV3VmlkZW8ob3B0aW9ucykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9JZCgpO1xuICAgICAgICB0aGlzLnNldENvdmVySW1hZ2UoKTtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmVhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jdWVWaWRlb0J5SWQodGhpcy5vcHRpb25zLnZpZGVvSWQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9TdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoaXMgaW5zdGFudmNlIGZyb20gWVRQbGF5ZXJzIGFycmF5IGFuZFxuICAgICAqIGFzbG8gcmVtb3ZlIHRoZSBtYXJrdXAgZnJvbSBkb21cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBEZWxldGUgdGhpcyBpbnN0YW5jZSBmcm9tIHBsYXllcnMgYXJyYXlcbiAgICAgICAgaWYgKHdpbmRvdy5ZVFBsYXllcnMpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHdpbmRvdy5ZVFBsYXllcnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LllUUGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21Ob2RlLnJlbW92ZSgpO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2pzL3lvdXR1YmUtcGxheWVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9qcy95b3V0dWJlLXBsYXllci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHZpZGVvSWQ6ICcnLFxuICAgIHZpZGVvVXJsOiAnJyxcbiAgICBjb3ZlckltYWdlU3JjOiAnJyxcbiAgICBjb3ZlckltYWdlU2l6ZTogJ2hpZ2gnLFxuICAgIGZvcmNlQ292ZXJPblRvdWNoRGV2aWNlczogZmFsc2UsXG4gICAgY3NzQ2xhc3Nlczoge1xuICAgICAgICB3cmFwcGVyOiAnYy15b3V0dWJlLXBsYXllcicsXG4gICAgICAgIHdyYXBwZXJJbm5lcjogJ2MteW91dHViZS1wbGF5ZXJfX2lubmVyJyxcbiAgICAgICAgdmlkZW86ICdjLXlvdXR1YmUtcGxheWVyX192aWRlbycsXG4gICAgICAgIGNvdmVyOiAnYy15b3V0dWJlLXBsYXllcl9fY292ZXInLFxuICAgICAgICBpY29uczogJ2MteW91dHViZS1wbGF5ZXJfX2ljb25zJyxcbiAgICAgICAgc3Bpbm5lcldyYXBwZXI6ICdjLXlvdXR1YmUtcGxheWVyX19zcGlubmVyLXdyYXBwZXInLFxuICAgICAgICBwbGF5QnV0dG9uV3JhcHBlcjogJ2MteW91dHViZS1wbGF5ZXJfX3BsYXktYnV0dG9uLXdyYXBwZXInXG4gICAgfSxcbiAgICBwbGF5SWNvbjogJzxzdmcgY2xhc3M9XCJjLXlvdXR1YmUtcGxheWVyX19wbGF5LWJ1dHRvblwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxwYXRoIGQ9XCJNMjgxLjksMTQ0LjVMMjQuNSwxLjRjLTMtMS43LTUuNS0xLjktNy43LTAuNmMtMi4xLDEuMy0zLjIsMy42LTMuMiw3djI4NS4zYzAsMy40LDEuMSw1LjcsMy4yLDdjMi4xLDEuMyw0LjcsMS4xLDcuNy0wLjZsMjU3LjQtMTQzYzMtMS43LDQuNS0zLjcsNC41LTZDMjg2LjMsMTQ4LjEsMjg0LjksMTQ2LjEsMjgxLjksMTQ0LjVMMjgxLjksMTQ0LjV6XCI+PC9wYXRoPjwvc3ZnPicsXG4gICAgc3Bpbm5lckljb246ICc8ZGl2IGNsYXNzPVwiYy15b3V0dWJlLXBsYXllcl9fc3Bpbm5lclwiPjwvZGl2PicsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgICByZWw6IDAsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICBkaXNhYmxla2I6IDFcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy9kZWZhdWx0LW9wdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2pzL2RlZmF1bHQtb3B0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVyfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMud3JhcHBlcklubmVyfVwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7b3B0aW9ucy52aWRlb0lkfVwiIGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMudmlkZW99XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMuY292ZXJ9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLmljb25zfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMucGxheUJ1dHRvbldyYXBwZXJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29wdGlvbnMucGxheUljb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMuc3Bpbm5lcldyYXBwZXJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29wdGlvbnMuc3Bpbm5lckljb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2pzL2RlZmF1bHQtbWFya3VwLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9qcy9kZWZhdWx0LW1hcmt1cC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRFbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSAmIFRhYmxldCBEZXRlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzTW9iaWxlOiB7XG4gICAgICAgIEFuZHJvaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgQmxhY2tCZXJyeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpO1xuICAgICAgICB9LFxuICAgICAgICBpT1MoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgT3BlcmEoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgV2luZG93cygpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgYW55KCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLkFuZHJvaWQoKSB8fCB0aGlzLkJsYWNrQmVycnkoKSB8fCB0aGlzLmlPUygpIHx8IHRoaXMuT3BlcmEoKSB8fCB0aGlzLldpbmRvd3MoKSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy9oZWxwZXJzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9qcy9oZWxwZXJzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc2Nzcy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9zY3NzL2Jhc2Uuc2NzcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGliL3Njc3MvZGVmYXVsdC1za2luLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9zY3NzL2RlZmF1bHQtc2tpbi5zY3NzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZW1vL3Njc3MvZGVtby5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9kZW1vL3Njc3MvZGVtby5zY3NzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBzYW1wbGUgZnJvbSAnLi4vLi4vLi4vbGliL3lvdXR1YmUtcGxheWVyJztcbi8vIGNvbnNvbGUubG9nKHNhbXBsZSk7XG5cbmNvbnNvbGUubG9nKHJlcXVpcmUoJy4uLy4uLy4uL2xpYi95b3V0dWJlLXBsYXllcicpKTtcblxuLy9cbi8vIGNvbnNvbGUubG9nKFlvdXR1YmVQbGF5ZXJTcmMsICdzcmMnKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXlvdXR1YmUtaWRdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICAgIG5ldyBZb3V0dWJlUGxheWVyKHtcbi8vICAgICAgICAgZWxlbWVudFxuLy8gICAgIH0pO1xuLy8gfSk7XG4vL1xuLy8gbGV0IHlwID0gbmV3IFlvdXR1YmVQbGF5ZXIoe1xuLy8gICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy12aWRlbycpWzBdLFxuLy8gICAgIGNvdmVySW1hZ2VTaXplOiAnbWF4aW11bScsXG4vLyAgICAgZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzOiBmYWxzZVxuLy8gfSk7XG4vL1xuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgeXAubG9hZE5ld1ZpZGVvKHtcbi8vICAgICAgICAgdmlkZW9Vcmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXFKcThJb3ZYRllRJyxcbi8vICAgICAgICAgY292ZXJJbWFnZVNpemU6ICdtZWRpdW0nXG4vL1xuLy8gICAgIH0pO1xuLy8gfSwgMjUwMDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlbW8vanMvZGVtby5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==
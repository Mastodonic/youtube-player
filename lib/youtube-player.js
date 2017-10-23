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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(6);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    return "<div class=\"" + options.cssClasses.wrapper + "\">\n        <div class=\"" + options.cssClasses.wrapperInner + "\">\n            <div id=\"" + options.videoId + "\" class=\"" + options.cssClasses.video + "\"></div>\n            <div class=\"" + options.cssClasses.cover + "\">\n                <div class=\"" + options.cssClasses.icons + "\">\n                    <div class=\"" + options.cssClasses.playButtonWrapper + "\">\n                        " + options.playIcon + "\n                    </div>\n                    <div class=\"" + options.cssClasses.spinnerWrapper + "\">\n                        " + options.spinnerIcon + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMjAyNDU0YWUzNWRkZTRjN2IwZiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2pzL3lvdXR1YmUtcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvanMvZGVmYXVsdC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvanMvZGVmYXVsdC1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zY3NzL2RlZmF1bHQtc2tpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kZW1vL3Njc3MvZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0M3REE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozt5QkFHSTtvQkFBWSxTQUFTOzhCQUNqQjs7QUFDQTthQUFLLFdBQ0w7YUFDQTthQUVBOztZQUFJLEtBQUssUUFBUSxTQUNiO2lCQUVBOztBQUNBO2lCQUNBO2lCQUVBOztBQUNBO2lCQUNBO2lCQUVBOztBQUNBO2lCQUVBOztBQUNBO2lCQUVBOztnQkFBSSxDQUFDLEtBQUssUUFBUSw0QkFBNEIsa0JBQVEsU0FBUyxPQUMzRDtxQkFBSyxnQkFDUjtBQUZELG1CQUdJO3FCQUFLLGdCQUNSO0FBRUQ7O0FBQ0E7QUFDQTtnQkFBSSxDQUFDLE9BQU8sV0FDUjt1QkFBTyxZQUNWO0FBRUQ7O21CQUFPLFVBQVUsS0FDcEI7QUE5QkQsZUErQkk7a0JBQU0sSUFBSSxNQUNiO0FBQ0o7QUFFRDs7Ozs7Ozs7b0NBSUk7aUJBQUssWUFDTDtpQkFBSyxnQkFDTDtpQkFBSyxlQUNSO0FBRUQ7Ozs7Ozs7OzJDQUlJO2dCQUFJLFVBQVUsS0FBSyxRQUFRLFdBQzNCO2lCQUFLLG9CQUFvQixNQUFNLEtBQUssU0FBWSwwQkFDaEQ7aUJBQUssb0JBQW9CLE1BQU0sS0FBSyxTQUFZLCtCQUNoRDtpQkFBSyxvQkFBb0IsTUFBTSxLQUFLLFNBQVksd0JBQ2hEO2lCQUFLLG1CQUFtQixLQUFLLFNBQVMsS0FBSyxRQUFRLGNBQWMsTUFBTSxLQUFLLFFBQVEsV0FBVyxRQUFRLFNBQzFHO0FBRUQ7Ozs7Ozs7Ozs7Ozs0Q0FPb0IsS0FBSyxNQUFNLFdBQVcsTUFDdEM7bUJBQU8sZUFBZSxLQUFLO0FBQU0sa0NBQ3hCLE9BQ0Q7NEJBQVEsS0FBSyxVQUFVLElBQUksYUFBYSxLQUFLLFVBQVUsT0FDMUQ7QUFFUjtBQUpPO0FBTVI7Ozs7Ozs7Ozs7OzsyQ0FPbUIsS0FBSyxNQUFNLE1BQU0sTUFDaEM7bUJBQU8sZUFBZSxLQUFLO0FBQU0sa0NBQ3hCLE9BQ0Q7d0JBQUksT0FDQTs2QkFBSyxhQUFhLE1BQ3JCO0FBQ0o7QUFFUjtBQU5PO0FBUVI7Ozs7Ozs7OzttQ0FJVyxTQUNQO2lCQUFLLGlEQUlSO0FBRUQ7Ozs7Ozs7O3FDQUlJO2lCQUFLLFVBQVUsS0FBSyxRQUN2QjtBQUVEOzs7Ozs7OzsyQ0FJSTtpQkFBSyxRQUFRLFlBQVksS0FFekI7O0FBQ0E7aUJBQUssVUFBVSxLQUFLLFFBQ3ZCO0FBRUQ7Ozs7Ozs7O2dEQUlJO2dCQUFJLFFBQ0o7Z0JBQUksVUFBVSxLQUFLLFFBQVEsU0FBUyxNQUVwQzs7Z0JBQUksU0FDQTtxQkFBSyxRQUFRLFVBQVUsUUFDMUI7QUFGRCxtQkFHSTtzQkFBTSxJQUFJLE1BQ2I7QUFDSjtBQUVEOzs7Ozs7OztxQ0FJSTtnQkFBSSxLQUFLLFFBQVEsYUFBYSxvQkFDMUI7cUJBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxhQUN2QztBQUVEOztnQkFBSSxLQUFLLFFBQVEsYUFBYSxxQkFDMUI7cUJBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxhQUN4QztBQUVEOztnQkFBSSxLQUFLLFFBQVEsWUFBWSxDQUFDLEtBQUssUUFBUSxTQUN2QztxQkFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozt3Q0FJZ0I7d0JBQ1o7O2dCQUFJLEtBQUssUUFBUSxhQUFhLHFCQUMxQjtxQkFBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsYUFDN0M7QUFFRDs7Z0JBQUksS0FBSyxRQUFRLGVBQ2I7b0JBQUksTUFBTSxJQUNWO29CQUFJLE1BQU0sS0FBSyxRQUNmO29CQUFJLFNBQVMsWUFDVDswQkFBSyxRQUFRLHdDQUFzQyxNQUFLLFFBQzNEO0FBQ0o7QUFORCxtQkFPSTtvQkFBSSxPQUFNLElBQ1Y7b0JBQUksaUJBQ0o7b0JBQUksV0FFSjs7d0JBQVEsS0FBSyxRQUNiO3lCQUNJO29DQUNBO0FBQ0o7eUJBQ0k7b0NBQ0E7QUFDSjt5QkFDSTtvQ0FDQTtBQUNKO3lCQUNJO29DQUNBO0FBR0o7OztzREFBb0MsS0FBSyxRQUFRLGdCQUFXLFlBRTVEOztxQkFBSSxNQUNKO3FCQUFJLFNBQVMsWUFDVDt3QkFBSSxVQUFVLEtBQUksUUFBUSxNQUFNLFlBQ2hDOzBCQUFLLFFBQVEsbUVBQWlFLE1BQUssUUFBUSxnQkFBVyxVQUN6RztBQUNKO0FBQ0o7QUFFRDs7Ozs7Ozs7dUNBR2U7eUJBQ1g7O0FBQ0E7aUJBQUssUUFBUSxjQUFjLE1BQU0sS0FBSyxRQUFRLFdBQVcsT0FBTyxpQkFBaUIsU0FBUzt1QkFBTSxPQUFLO0FBQ3hHO0FBRUQ7Ozs7Ozs7O29DQUlJO2lCQUFLLFNBQVMsNkJBQU8sS0FDeEI7QUFFRDs7Ozs7Ozs7eUNBSUk7Z0JBQUksV0FBSjtnQkFDSSxzQkFFSjs7Z0JBQUksQ0FBQyxPQUFPLGtCQUNSO3NCQUFNLFNBQVMsY0FDZjtvQkFBSSxNQUNKO2lDQUFpQixTQUFTLHFCQUFxQixVQUMvQzsrQkFBZSxXQUFXLGFBQWEsS0FDdkM7dUJBQU8sbUJBQ1Y7QUFFRDs7Z0JBQUksT0FBTyxJQUNQO3FCQUNIO0FBRkQsbUJBR0k7dUJBQU8sMEJBQTBCLEtBQUssd0JBQXdCLEtBQ2pFO0FBQ0o7QUFFRDs7Ozs7Ozs7a0RBRzBCO3lCQUN0Qjs7bUJBQU8sVUFBVSxRQUFRLFVBQUMsUUFDdEI7dUJBQU8sY0FDUDtvQkFBSSxDQUFDLE9BQUssUUFBUSw0QkFBNEIsa0JBQVEsU0FBUyxPQUMzRDsyQkFDSDtBQUNKO0FBQ0o7QUFFRDs7Ozs7Ozs7MkNBSUk7QUFDQTtBQUNBO2dCQUFJLGtCQUFRLFNBQVMsT0FDakI7cUJBQUssZ0JBQ1I7QUFGRCxtQkFHSTtxQkFBSyxZQUNSO0FBRUQ7O0FBQ0E7Z0JBQUksS0FBSyxlQUNMO3FCQUFLLE9BQ1I7QUFGRCxtQkFHSTtxQkFDSDtBQUVEOztpQkFDSDtBQUVEOzs7Ozs7Ozt1Q0FJSTtpQkFBSyxhQUFhLEdBQUcsT0FBTyxLQUFLLFFBQVE7eUJBQzVCLEtBQUssUUFDZDs0QkFBWSxLQUFLLFFBQ2pCOzs2QkFDYSxLQUFLLGNBQWMsS0FDNUI7bUNBQWUsS0FBSyxvQkFBb0IsS0FHbkQ7QUFKVztBQUhKLGFBRFU7QUFVbEI7Ozs7Ozs7OztzQ0FJYyxHQUNWO0FBQ0E7aUJBQUssT0FDTDtpQkFBSyxPQUNMO2lCQUFLLGdCQUNSO0FBRUQ7Ozs7Ozs7Ozs0Q0FJb0IsR0FDaEI7Z0JBQUksUUFBUSxFQUVaOztvQkFDQTtBQUNBO3FCQUFLLENBQ0Q7eUJBQUssZUFDTDtBQUVKOztBQUNBO3FCQUNJO3lCQUFLLGdCQUNMO3lCQUFLLFlBQ0w7eUJBQUssZUFDTDtBQUVKOztBQUNBO3FCQUNJO3lCQUFLLGdCQUNMO3lCQUFLLFlBQ0w7eUJBQ0E7QUFFSjs7QUFDQTtxQkFDSTt3QkFBSSxDQUFDLEtBQUssY0FDTjs2QkFBSyxnQkFDTDs2QkFBSyxZQUNSO0FBQ0Q7QUFFSjs7QUFDQTtxQkFDSTtBQUVQOztBQUVEOzs7Ozs7OzsyQ0FHbUI7eUJBQ2Y7O2dCQUFJLFlBQVksT0FFaEI7O3NCQUFVLFFBQVEsVUFBQyxVQUNmO29CQUFJLFNBQVMsVUFBVSxTQUFTLFdBQVcsT0FBSyxRQUM1Qzs2QkFBUyxPQUNaO0FBQ0o7QUFDSjtBQUVEOzs7Ozs7Ozs7c0NBSWMsU0FDVjtpQkFBSyxRQUFRLFVBQVUsUUFDdkI7aUJBQUssUUFBUSxXQUFXLFFBQ3hCO2lCQUFLLFFBQVEsZ0JBQWdCLFFBQVEsZ0JBQWdCLFFBQVEsZ0JBQzdEO2lCQUFLLFFBQVEsaUJBQWlCLFFBQzlCO2lCQUFLLFFBQVEsY0FBYyxNQUFNLEtBQUssUUFBUSxXQUFXLE9BQU8sYUFBYSxNQUFNLEtBQUssUUFDM0Y7QUFFRDs7Ozs7Ozs7O3FDQUlhLFNBQ1Q7aUJBQUssY0FDTDtpQkFDQTtpQkFFQTs7Z0JBQUksS0FBSyxlQUNMO3FCQUFLLE9BQU8sYUFBYSxLQUFLLFFBQzlCO3FCQUFLLFlBQ0w7cUJBQUssZUFFTDs7b0JBQUksQ0FBQyxrQkFBUSxTQUFTLE9BQ2xCO3lCQUFLLGdCQUNSO0FBQ0o7QUFDSjtBQUVEOzs7Ozs7Ozs7O2tDQU1JO0FBQ0E7Z0JBQUksT0FBTyxXQUNQO29CQUFJLFFBQVEsT0FBTyxVQUFVLFFBQzdCO29CQUFJLFFBQVEsQ0FBQyxHQUNUOzJCQUFPLFVBQVUsT0FBTyxPQUMzQjtBQUNKO0FBRUQ7O2lCQUFLLFFBQ1I7Ozs7Ozs7O0FBQ0osQzs7Ozs7Ozs7Ozs7OzthQy9ZRzthQUNBO2NBQ0E7bUJBQ0E7b0JBQ0E7OEJBQ0E7O2lCQUVJO3NCQUNBO2VBQ0E7ZUFDQTtlQUNBO3dCQUNBOzJCQUVKO0FBUkk7Y0FTSjtpQkFDQTs7YUFFSTtlQUNBO2tCQUNBO3dCQUNBO3dCQUNBO21CQUFXO0FBTFg7QUFsQkosRTs7Ozs7Ozs7Ozs7OztrQkNEVyxVQUFTLFNBQ3BCOzZCQUFzQixRQUFRLFdBQVcseUNBQ3ZCLFFBQVEsV0FBVywrQ0FDbEIsUUFBUSwwQkFBbUIsUUFBUSxXQUFXLGlEQUMzQyxRQUFRLFdBQVcsK0NBQ2YsUUFBUSxXQUFXLG1EQUNmLFFBQVEsV0FBVyxzREFDM0IsUUFBUSwrRUFFQSxRQUFRLFdBQVcsbURBQzNCLFFBQVEsY0FNakM7Ozs7Ozs7Ozs7Ozs7O0FDaEJjLDBCQUNMLFVBQ0Y7ZUFBTyxTQUFTLGlCQUNuQjtBQUVEOztBQUlBOzs7OztBQUFVLG9DQUVGO21CQUFPLFVBQVUsVUFBVSxNQUM5QjtBQUNEO0FBSk0sMENBS0Y7bUJBQU8sVUFBVSxVQUFVLE1BQzlCO0FBQ0Q7QUFQTSw0QkFRRjttQkFBTyxVQUFVLFVBQVUsTUFDOUI7QUFDRDtBQVZNLGdDQVdGO21CQUFPLFVBQVUsVUFBVSxNQUM5QjtBQUNEO0FBYk0sb0NBY0Y7bUJBQU8sVUFBVSxVQUFVLE1BQzlCO0FBQ0Q7QUFoQk0sNEJBaUJGO21CQUFRLEtBQUssYUFBYSxLQUFLLGdCQUFnQixLQUFLLFNBQVMsS0FBSyxXQUFXLEtBQ2hGO0FBbEJLO0FBQ047QUFUSixFOzs7Ozs7QUNESix5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImxpYi95b3V0dWJlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInlvdXR1YmUtcGxheWVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInlvdXR1YmUtcGxheWVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyMDI0NTRhZTM1ZGRlNGM3YjBmIiwiLyogZ2xvYmFsIFlUICovXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0LW9wdGlvbnMnO1xuaW1wb3J0IG1hcmt1cCBmcm9tICcuL2RlZmF1bHQtbWFya3VwJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIC8vIFNldCBEZWZhdWx0IE9wdGlvbnNcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldERvbU5vZGUoKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvdmVySW1hZ2UoKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIFBsYXllclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrdXAoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVySHRtbCgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgRGF0YVxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YUJpbmRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlcygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIEFQSVxuICAgICAgICAgICAgdGhpcy5sb2FkWW91dHViZUFwaSgpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHlvdXR1YmUgcGxheWVyIGluc3RhbmNlc1xuICAgICAgICAgICAgLy8gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgICAgICAgICAgIGlmICghd2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5ZVFBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LllUUGxheWVycy5wdXNoKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGZpbmQgeW91dHViZSB2aWRlbyBpZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGluaXRpYWwgc3RhdGVzXG4gICAgICovXG4gICAgc2V0U3RhdGVzKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWxsIHRoZSBkYXRhIGJpbmRpbmdzXG4gICAgICovXG4gICAgaW5pdERhdGFCaW5kaW5ncygpIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVyO1xuICAgICAgICB0aGlzLmJpbmRDbGFzc1RvUHJvcGVydHkodGhpcywgdGhpcy5kb21Ob2RlLCBgJHt3cmFwcGVyfS0taXMtbG9hZGluZ2AsICdpc0xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xhc3NUb1Byb3BlcnR5KHRoaXMsIHRoaXMuZG9tTm9kZSwgYCR7d3JhcHBlcn0tLWNvdmVyLWlzLWhpZGRlbmAsICdjb3ZlcklzSGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYmluZENsYXNzVG9Qcm9wZXJ0eSh0aGlzLCB0aGlzLmRvbU5vZGUsIGAke3dyYXBwZXJ9LS1pcy1yZWFkeWAsICdhcGlJc0xvYWRlZCcpO1xuICAgICAgICB0aGlzLmJpbmRBdHRyVG9Qcm9wZXJ0eSh0aGlzLm9wdGlvbnMsIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyKSwgJ3N0eWxlJywgJ2NvdmVySW1hZ2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGFuIGVsZW1lbnQncyBjbGFzcyBuYW1lIHRvIGFuIG9iamVjdCdzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvcFxuICAgICAqL1xuICAgIGJpbmRDbGFzc1RvUHJvcGVydHkob2JqLCBub2RlLCBjbGFzc05hbWUsIHByb3ApIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID8gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBhbiBlbGVtZW50IGF0dHJpYnV0ZSB0byBhbiBvYmplYydzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb3BcbiAgICAgKi9cbiAgICBiaW5kQXR0clRvUHJvcGVydHkob2JqLCBub2RlLCBhdHRyLCBwcm9wKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlIHBhc3NlZCBvcHRpb25zIHdpdGggZGVmYXVsdFxuICAgICAqIEBwYXJhbSB7b2JqfSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBtYWluIGRvbSBub2RlXG4gICAgICovXG4gICAgc2V0RG9tTm9kZSgpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gdGhpcy5vcHRpb25zLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXR0YWNoIGluaXRpYWwgbWFya3VwIHRvIHRoZSBtYWluIGRvbU5vZGVcbiAgICAgKi9cbiAgICBjcmVhdGVQbGF5ZXJIdG1sKCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUuaW5uZXJIVE1MID0gdGhpcy5tYXJrdXA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBpbml0aWFsIGRvbSBub2RlIHRvIGZpcnN0IGNoaWxkXG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IHRoaXMuZG9tTm9kZS5maXJzdENoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdmlkZW8gaWQgZnJvbSBhIHBhc3NlZCB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBleHRyYWN0VmlkZW9JZGZyb21VcmwoKSB7XG4gICAgICAgIGxldCByZWdleCA9IC9eKD86aHR0cCg/OnMpPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86bVxcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFwvKD86KD86d2F0Y2gpP1xcPyg/Oi4qJik/dig/OmkpPz18KD86ZW1iZWR8dnx2aXx1c2VyKVxcLykpKFtePyZcIic+XSspLztcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLm9wdGlvbnMudmlkZW9VcmwubWF0Y2gocmVnZXgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9JZCA9IG1hdGNoZXNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB1cmwgaXMgbm90IGluIHRoZSByaWdodCBmb3JtYXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBpZCBmcm9tIGRhdGEgYXR0cmlidXRlcyBvciB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBzZXRWaWRlb0lkKCkge1xuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLXVybCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtdXJsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZGVvVXJsICYmICF0aGlzLm9wdGlvbnMudmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VmlkZW9JZGZyb21VcmwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY292ZXIgaW1hZ2UgaWYgaXQncyBwYXNzZWQgYXMgYW4gb3B0aW9uXG4gICAgICogb3RoZXJ3aXNlIGZldGNoIHRoZSBpbWFnZSBmcm9tIHlvdXRydWJlIGJhc2VkIG9uIGlkIGFuZCBzaXplXG4gICAgICovXG4gICAgc2V0Q292ZXJJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtY292ZXItaW1hZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdmVyLWltYWdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMpIHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmN9YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VTaXplO1xuICAgICAgICAgICAgbGV0IHNyYztcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ21xZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ3NkZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXhpbXVtJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnbWF4cmVzZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3RoaXMub3B0aW9ucy52aWRlb0lkfS8ke2ltYWdlU2l6ZX0uanBnYDtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNyY05hbWUgPSBpbWcud2lkdGggPiAxNTAgPyBpbWFnZVNpemUgOiAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dGhpcy5vcHRpb25zLnZpZGVvSWR9LyR7c3JjTmFtZX0uanBnKWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNsaWNrIGxpc3RlbmVyIHRvIHZpZGVvIGNvdmVyXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXIgdG8gdmlkZW8gY292ZXJcbiAgICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMuY292ZXIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5pbml0aWFsaXNlUGxheWVyKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBpbnRpdGlhbCBtYXJrdXAgb2YgdGhlIHZpZGVvIHBsYXllclxuICAgICAqL1xuICAgIHNldE1hcmt1cCgpIHtcbiAgICAgICAgdGhpcy5tYXJrdXAgPSBtYXJrdXAodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgeW91dHViZSBhcGkgc2NyaXB0XG4gICAgICovXG4gICAgbG9hZFlvdXR1YmVBcGkoKSB7XG4gICAgICAgIGxldCB0YWcsXG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZztcblxuICAgICAgICBpZiAoIXdpbmRvdy5pZnJhbWVBcGlDcmVhdGVkKSB7XG4gICAgICAgICAgICB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuICAgICAgICAgICAgd2luZG93LmlmcmFtZUFwaUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ZVCkge1xuICAgICAgICAgICAgdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gb25jZSB0aGUgaWZyYW1lIGFwaSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcbiAgICAgICAgd2luZG93LllUUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5hcGlJc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHBsYXllci5pbml0aWFsaXNlUGxheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhhbmRsZSBjbGljayBvbiBjb3ZlciB2aWRlb1xuICAgICAqL1xuICAgIGluaXRpYWxpc2VQbGF5ZXIoKSB7XG4gICAgICAgIC8vIFR1cm4gb2ZmIGN1c3RvbSBsb2FkZXIgb24gbW9iaWxlIGFuZCB0b3VjaCBkZXZpY2VzXG4gICAgICAgIC8vIHNpbmNlIGF1dG9scGxheSBpcyBub3QgYWxsb3dlZCBvbiB0aGVzZSBkZXZpY2VzXG4gICAgICAgIGlmIChIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZU90aGVyVmlkZW9zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHlvdXR1YmUgcGxheWVyIGFuZCBhdHRhY2ggaXQgdG8gdGhlIGNsYXNzIGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy5vcHRpb25zLnZpZGVvSWQsIHtcbiAgICAgICAgICAgIHZpZGVvSWQ6IHRoaXMub3B0aW9ucy52aWRlb0lkLFxuICAgICAgICAgICAgcGxheWVyVmFyczogdGhpcy5vcHRpb25zLnBsYXllclZhcnMsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBleGVjdXRlZCBvbmNlIHRoZSBwbGF5ZXIgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJSZWFkeShlKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBzZXQgdGhlIHBsYXllciBzdGF0ZSB0byAtMSAodW5zdGFydGVkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBjb3ZlciBpbWFnZSBhbmQgc3Bpbm5lciBiYXNlZCBvbiBwbGF5ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IGUuZGF0YTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIC8vIFVuc3RhcnRlZFxuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRW5kZWRcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFBsYXlpbmdcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhdXNlT3RoZXJWaWRlb3MoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEJ1ZmZlcmluZ1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlkZW9TdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ3VlZFxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIG90aGVyIHZpZGVvcyBvbiB0aGUgc2FtZSBwYWdlXG4gICAgICovXG4gICAgcGF1c2VPdGhlclZpZGVvcygpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHdpbmRvdy5ZVFBsYXllcnM7XG5cbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucGxheWVyICYmIGluc3RhbmNlLnBsYXllciAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdmlkZW8gcGxheWVyIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgdmlkZW9JZCBjb3ZlckltYWdlIGNvdmVySW1hZ2VTaXplXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gb3B0aW9ucy52aWRlb0lkO1xuICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSBvcHRpb25zLnZpZGVvVXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYyA9IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA/IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA6ICcnO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUgPSBvcHRpb25zLmNvdmVySW1hZ2VTaXplO1xuICAgICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy52aWRlbykuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMub3B0aW9ucy52aWRlb0lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIG5ldyB2aWRlbyBieSBwYXNzaW5nIGFuIG9wdGlvbnMgb2JqZWN0XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIHZpZGVvSWQgY292ZXJJbWFnZSBjb3ZlckltYWdlU2l6ZVxuICAgICAqL1xuICAgIGxvYWROZXdWaWRlbyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG4gICAgICAgIHRoaXMuc2V0Q292ZXJJbWFnZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh0aGlzLm9wdGlvbnMudmlkZW9JZCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhpcyBpbnN0YW52Y2UgZnJvbSBZVFBsYXllcnMgYXJyYXkgYW5kXG4gICAgICogYXNsbyByZW1vdmUgdGhlIG1hcmt1cCBmcm9tIGRvbVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIERlbGV0ZSB0aGlzIGluc3RhbmNlIGZyb20gcGxheWVycyBhcnJheVxuICAgICAgICBpZiAod2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gd2luZG93LllUUGxheWVycy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMveW91dHViZS1wbGF5ZXIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZWxlbWVudDogbnVsbCxcbiAgICB2aWRlb0lkOiAnJyxcbiAgICB2aWRlb1VybDogJycsXG4gICAgY292ZXJJbWFnZVNyYzogJycsXG4gICAgY292ZXJJbWFnZVNpemU6ICdoaWdoJyxcbiAgICBmb3JjZUNvdmVyT25Ub3VjaERldmljZXM6IGZhbHNlLFxuICAgIGNzc0NsYXNzZXM6IHtcbiAgICAgICAgd3JhcHBlcjogJ2MteW91dHViZS1wbGF5ZXInLFxuICAgICAgICB3cmFwcGVySW5uZXI6ICdjLXlvdXR1YmUtcGxheWVyX19pbm5lcicsXG4gICAgICAgIHZpZGVvOiAnYy15b3V0dWJlLXBsYXllcl9fdmlkZW8nLFxuICAgICAgICBjb3ZlcjogJ2MteW91dHViZS1wbGF5ZXJfX2NvdmVyJyxcbiAgICAgICAgaWNvbnM6ICdjLXlvdXR1YmUtcGxheWVyX19pY29ucycsXG4gICAgICAgIHNwaW5uZXJXcmFwcGVyOiAnYy15b3V0dWJlLXBsYXllcl9fc3Bpbm5lci13cmFwcGVyJyxcbiAgICAgICAgcGxheUJ1dHRvbldyYXBwZXI6ICdjLXlvdXR1YmUtcGxheWVyX19wbGF5LWJ1dHRvbi13cmFwcGVyJ1xuICAgIH0sXG4gICAgcGxheUljb246ICc8c3ZnIGNsYXNzPVwiYy15b3V0dWJlLXBsYXllcl9fcGxheS1idXR0b25cIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAzMDAgMzAwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48cGF0aCBkPVwiTTI4MS45LDE0NC41TDI0LjUsMS40Yy0zLTEuNy01LjUtMS45LTcuNy0wLjZjLTIuMSwxLjMtMy4yLDMuNi0zLjIsN3YyODUuM2MwLDMuNCwxLjEsNS43LDMuMiw3YzIuMSwxLjMsNC43LDEuMSw3LjctMC42bDI1Ny40LTE0M2MzLTEuNyw0LjUtMy43LDQuNS02QzI4Ni4zLDE0OC4xLDI4NC45LDE0Ni4xLDI4MS45LDE0NC41TDI4MS45LDE0NC41elwiPjwvcGF0aD48L3N2Zz4nLFxuICAgIHNwaW5uZXJJY29uOiAnPGRpdiBjbGFzcz1cImMteW91dHViZS1wbGF5ZXJfX3NwaW5uZXJcIj48L2Rpdj4nLFxuICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgcmVsOiAwLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICBpdl9sb2FkX3BvbGljeTogMyxcbiAgICAgICAgZGlzYWJsZWtiOiAxXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMvZGVmYXVsdC1vcHRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLndyYXBwZXJ9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVySW5uZXJ9XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHtvcHRpb25zLnZpZGVvSWR9XCIgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy52aWRlb31cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5jb3Zlcn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMuaWNvbnN9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5wbGF5QnV0dG9uV3JhcHBlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9ucy5wbGF5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5zcGlubmVyV3JhcHBlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9ucy5zcGlubmVySWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMvZGVmYXVsdC1tYXJrdXAuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0RWwoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgJiBUYWJsZXQgRGV0ZWN0aW9uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc01vYmlsZToge1xuICAgICAgICBBbmRyb2lkKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSk7XG4gICAgICAgIH0sXG4gICAgICAgIEJsYWNrQmVycnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgaU9TKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgICAgIH0sXG4gICAgICAgIE9wZXJhKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSk7XG4gICAgICAgIH0sXG4gICAgICAgIFdpbmRvd3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFueSgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5BbmRyb2lkKCkgfHwgdGhpcy5CbGFja0JlcnJ5KCkgfHwgdGhpcy5pT1MoKSB8fCB0aGlzLk9wZXJhKCkgfHwgdGhpcy5XaW5kb3dzKCkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanMvaGVscGVycy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGliL3Njc3MvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGliL3Njc3MvZGVmYXVsdC1za2luLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZW1vL3Njc3MvZGVtby5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
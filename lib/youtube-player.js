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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(5);
__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    return "<div class=\"" + options.cssClasses.wrapper + "\">\n        <div class=\"" + options.cssClasses.wrapperInner + "\">\n            <div id=\"" + options.videoId + "\" class=\"" + options.cssClasses.video + "\"></div>\n            <div class=\"" + options.cssClasses.cover + "\">\n                <div class=\"" + options.cssClasses.icons + "\">\n                    <div class=\"" + options.cssClasses.playButtonWrapper + "\">\n                        " + options.playIcon + "\n                    </div>\n                    <div class=\"" + options.cssClasses.spinnerWrapper + "\">\n                        " + options.spinnerIcon + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
};

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk0OTEwYTkyOThmN2E0MTA3YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9qcy95b3V0dWJlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2pzL2RlZmF1bHQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2pzL2RlZmF1bHQtbWFya3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Njc3MvYmFzZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2Nzcy9kZWZhdWx0LXNraW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9zY3NzL2RlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQzdEQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O3lCQUdJO29CQUFZLFNBQVM7OEJBQ2pCOztBQUNBO2FBQUssV0FDTDthQUNBO2FBRUE7O1lBQUksS0FBSyxRQUFRLFNBQ2I7aUJBRUE7O0FBQ0E7aUJBQ0E7aUJBRUE7O0FBQ0E7aUJBQ0E7aUJBRUE7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U0FDcEI7NkJBQXNCLFFBQVEsV0FBVyx5Q0FDdkIsUUFBUSxXQUFXLCtDQUNsQixRQUFRLDBCQUFtQixRQUFRLFdBQVcsaURBQzNDLFFBQVEsV0FBVywrQ0FDZixRQUFRLFdBQVcsbURBQ2YsUUFBUSxXQUFXLHNEQUMzQixRQUFRLCtFQUVBLFFBQVEsV0FBVyxtREFDM0IsUUFBUSxjQU1qQzs7Ozs7Ozs7Ozs7Ozs7QUNoQmMsMEJBQ0wsVUFDRjtlQUFPLFNBQVMsaUJBQ25CO0FBRUQ7O0FBSUE7Ozs7O0FBQVUsb0NBRUY7bUJBQU8sVUFBVSxVQUFVLE1BQzlCO0FBQ0Q7QUFKTSwwQ0FLRjttQkFBTyxVQUFVLFVBQVUsTUFDOUI7QUFDRDtBQVBNLDRCQVFGO21CQUFPLFVBQVUsVUFBVSxNQUM5QjtBQUNEO0FBVk0sZ0NBV0Y7bUJBQU8sVUFBVSxVQUFVLE1BQzlCO0FBQ0Q7QUFiTSxvQ0FjRjttQkFBTyxVQUFVLFVBQVUsTUFDOUI7QUFDRDtBQWhCTSw0QkFpQkY7bUJBQVEsS0FBSyxhQUFhLEtBQUssZ0JBQWdCLEtBQUssU0FBUyxLQUFLLFdBQVcsS0FDaEY7QUFsQks7QUFDTjtBQVRKLEU7Ozs7OztBQ0RKLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoibGliL3lvdXR1YmUtcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjk0OTEwYTkyOThmN2E0MTA3YTQiLCIvKiBnbG9iYWwgWVQgKi9cbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHQtb3B0aW9ucyc7XG5pbXBvcnQgbWFya3VwIGZyb20gJy4vZGVmYXVsdC1tYXJrdXAnO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gU2V0IERlZmF1bHQgT3B0aW9uc1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0RG9tTm9kZSgpO1xuICAgICAgICB0aGlzLnNldFZpZGVvSWQoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZGVvSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q292ZXJJbWFnZSgpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgUGxheWVyXG4gICAgICAgICAgICB0aGlzLnNldE1hcmt1cCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXJIdG1sKCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBEYXRhXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhQmluZGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVzKCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgQVBJXG4gICAgICAgICAgICB0aGlzLmxvYWRZb3V0dWJlQXBpKCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZvcmNlQ292ZXJPblRvdWNoRGV2aWNlcyAmJiBIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBhbGwgeW91dHViZSBwbGF5ZXIgaW5zdGFuY2VzXG4gICAgICAgICAgICAvLyBvbiB0aGUgd2luZG93IG9iamVjdFxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuWVRQbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LllUUGxheWVycyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzLnB1c2godGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgZmluZCB5b3V0dWJlIHZpZGVvIGlkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5pdGlhbCBzdGF0ZXNcbiAgICAgKi9cbiAgICBzZXRTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpZGVvU3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhbGwgdGhlIGRhdGEgYmluZGluZ3NcbiAgICAgKi9cbiAgICBpbml0RGF0YUJpbmRpbmdzKCkge1xuICAgICAgICBsZXQgd3JhcHBlciA9IHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLndyYXBwZXI7XG4gICAgICAgIHRoaXMuYmluZENsYXNzVG9Qcm9wZXJ0eSh0aGlzLCB0aGlzLmRvbU5vZGUsIGAke3dyYXBwZXJ9LS1pcy1sb2FkaW5nYCwgJ2lzTG9hZGluZycpO1xuICAgICAgICB0aGlzLmJpbmRDbGFzc1RvUHJvcGVydHkodGhpcywgdGhpcy5kb21Ob2RlLCBgJHt3cmFwcGVyfS0tY292ZXItaXMtaGlkZGVuYCwgJ2NvdmVySXNIaWRkZW4nKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xhc3NUb1Byb3BlcnR5KHRoaXMsIHRoaXMuZG9tTm9kZSwgYCR7d3JhcHBlcn0tLWlzLXJlYWR5YCwgJ2FwaUlzTG9hZGVkJyk7XG4gICAgICAgIHRoaXMuYmluZEF0dHJUb1Byb3BlcnR5KHRoaXMub3B0aW9ucywgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMuY292ZXIpLCAnc3R5bGUnLCAnY292ZXJJbWFnZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgYW4gZWxlbWVudCdzIGNsYXNzIG5hbWUgdG8gYW4gb2JqZWN0J3MgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG9ialxuICAgICAqIEBwYXJhbSAge29ian0gbm9kZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBwcm9wXG4gICAgICovXG4gICAgYmluZENsYXNzVG9Qcm9wZXJ0eShvYmosIG5vZGUsIGNsYXNzTmFtZSwgcHJvcCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPyBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGFuIGVsZW1lbnQgYXR0cmlidXRlIHRvIGFuIG9iamVjJ3MgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG9ialxuICAgICAqIEBwYXJhbSAge29ian0gbm9kZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYXR0clxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvcFxuICAgICAqL1xuICAgIGJpbmRBdHRyVG9Qcm9wZXJ0eShvYmosIG5vZGUsIGF0dHIsIHByb3ApIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgcGFzc2VkIG9wdGlvbnMgd2l0aCBkZWZhdWx0XG4gICAgICogQHBhcmFtIHtvYmp9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IG1haW4gZG9tIG5vZGVcbiAgICAgKi9cbiAgICBzZXREb21Ob2RlKCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUgPSB0aGlzLm9wdGlvbnMuZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhdHRhY2ggaW5pdGlhbCBtYXJrdXAgdG8gdGhlIG1haW4gZG9tTm9kZVxuICAgICAqL1xuICAgIGNyZWF0ZVBsYXllckh0bWwoKSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZS5pbm5lckhUTUwgPSB0aGlzLm1hcmt1cDtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIGluaXRpYWwgZG9tIG5vZGUgdG8gZmlyc3QgY2hpbGRcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gdGhpcy5kb21Ob2RlLmZpcnN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB2aWRlbyBpZCBmcm9tIGEgcGFzc2VkIHZpZGVvIHVybFxuICAgICAqL1xuICAgIGV4dHJhY3RWaWRlb0lkZnJvbVVybCgpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gL14oPzpodHRwKD86cyk/OlxcL1xcLyk/KD86d3d3XFwuKT8oPzptXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmVcXC5jb21cXC8oPzooPzp3YXRjaCk/XFw/KD86LiomKT92KD86aSk/PXwoPzplbWJlZHx2fHZpfHVzZXIpXFwvKSkoW14/JlwiJz5dKykvO1xuICAgICAgICBsZXQgbWF0Y2hlcyA9IHRoaXMub3B0aW9ucy52aWRlb1VybC5tYXRjaChyZWdleCk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHVybCBpcyBub3QgaW4gdGhlIHJpZ2h0IGZvcm1hdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZpZGVvIGlkIGZyb20gZGF0YSBhdHRyaWJ1dGVzIG9yIHZpZGVvIHVybFxuICAgICAqL1xuICAgIHNldFZpZGVvSWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbU5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtaWQnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZpZGVvSWQgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvbU5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtdXJsJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWRlb1VybCA9IHRoaXMuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteW91dHViZS11cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmlkZW9VcmwgJiYgIXRoaXMub3B0aW9ucy52aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RWaWRlb0lkZnJvbVVybCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb3ZlciBpbWFnZSBpZiBpdCdzIHBhc3NlZCBhcyBhbiBvcHRpb25cbiAgICAgKiBvdGhlcndpc2UgZmV0Y2ggdGhlIGltYWdlIGZyb20geW91dHJ1YmUgYmFzZWQgb24gaWQgYW5kIHNpemVcbiAgICAgKi9cbiAgICBzZXRDb3ZlckltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1jb3Zlci1pbWFnZScpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYyA9IHRoaXMuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY292ZXItaW1hZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYykge1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU3JjO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyY31gO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBpbWFnZVNpemU7XG4gICAgICAgICAgICBsZXQgc3JjO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU2l6ZSkge1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnbXFkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSA9ICcwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NkJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnc2RkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21heGltdW0nOlxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSA9ICdtYXhyZXNkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dGhpcy5vcHRpb25zLnZpZGVvSWR9LyR7aW1hZ2VTaXplfS5qcGdgO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3JjTmFtZSA9IGltZy53aWR0aCA+IDE1MCA/IGltYWdlU2l6ZSA6ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt0aGlzLm9wdGlvbnMudmlkZW9JZH0vJHtzcmNOYW1lfS5qcGcpYDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY2xpY2sgbGlzdGVuZXIgdG8gdmlkZW8gY292ZXJcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vIEFkZCBjbGljayBsaXN0ZW5lciB0byB2aWRlbyBjb3ZlclxuICAgICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy5jb3ZlcikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmluaXRpYWxpc2VQbGF5ZXIoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGludGl0aWFsIG1hcmt1cCBvZiB0aGUgdmlkZW8gcGxheWVyXG4gICAgICovXG4gICAgc2V0TWFya3VwKCkge1xuICAgICAgICB0aGlzLm1hcmt1cCA9IG1hcmt1cCh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB5b3V0dWJlIGFwaSBzY3JpcHRcbiAgICAgKi9cbiAgICBsb2FkWW91dHViZUFwaSgpIHtcbiAgICAgICAgbGV0IHRhZyxcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnO1xuXG4gICAgICAgIGlmICghd2luZG93LmlmcmFtZUFwaUNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG4gICAgICAgICAgICB3aW5kb3cuaWZyYW1lQXBpQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LllUKSB7XG4gICAgICAgICAgICB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBvbmNlIHRoZSBpZnJhbWUgYXBpIGlzIGxvYWRlZFxuICAgICAqL1xuICAgIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xuICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmFwaUlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZvcmNlQ292ZXJPblRvdWNoRGV2aWNlcyAmJiBIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmluaXRpYWxpc2VQbGF5ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaGFuZGxlIGNsaWNrIG9uIGNvdmVyIHZpZGVvXG4gICAgICovXG4gICAgaW5pdGlhbGlzZVBsYXllcigpIHtcbiAgICAgICAgLy8gVHVybiBvZmYgY3VzdG9tIGxvYWRlciBvbiBtb2JpbGUgYW5kIHRvdWNoIGRldmljZXNcbiAgICAgICAgLy8gc2luY2UgYXV0b2xwbGF5IGlzIG5vdCBhbGxvd2VkIG9uIHRoZXNlIGRldmljZXNcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNNb2JpbGUuYW55KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBsYXllclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmVhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlT3RoZXJWaWRlb3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgeW91dHViZSBwbGF5ZXIgYW5kIGF0dGFjaCBpdCB0byB0aGUgY2xhc3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLm9wdGlvbnMudmlkZW9JZCwge1xuICAgICAgICAgICAgdmlkZW9JZDogdGhpcy5vcHRpb25zLnZpZGVvSWQsXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB0aGlzLm9wdGlvbnMucGxheWVyVmFycyxcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uUmVhZHk6IHRoaXMub25QbGF5ZXJSZWFkeS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGV4ZWN1dGVkIG9uY2UgdGhlIHBsYXllciBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBlIGV2ZW50IG9iamVjdCBmcm9tIGlmcmFtZSBhcGlcbiAgICAgKi9cbiAgICBvblBsYXllclJlYWR5KGUpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHNldCB0aGUgcGxheWVyIHN0YXRlIHRvIC0xICh1bnN0YXJ0ZWQpO1xuICAgICAgICB0aGlzLnBsYXllci5zdG9wVmlkZW8oKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIHRoaXMucGxheWVyQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGNvdmVyIGltYWdlIGFuZCBzcGlubmVyIGJhc2VkIG9uIHBsYXllciBzdGF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlIGV2ZW50IG9iamVjdCBmcm9tIGlmcmFtZSBhcGlcbiAgICAgKi9cbiAgICBvblBsYXllclN0YXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gZS5kYXRhO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgLy8gVW5zdGFydGVkXG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBFbmRlZFxuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gUGxheWluZ1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VPdGhlclZpZGVvcygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQnVmZmVyaW5nXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmICghdGhpcy52aWRlb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDdWVkXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2Ugb3RoZXIgdmlkZW9zIG9uIHRoZSBzYW1lIHBhZ2VcbiAgICAgKi9cbiAgICBwYXVzZU90aGVyVmlkZW9zKCkge1xuICAgICAgICBsZXQgaW5zdGFuY2VzID0gd2luZG93LllUUGxheWVycztcblxuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wbGF5ZXIgJiYgaW5zdGFuY2UucGxheWVyICE9PSB0aGlzLnBsYXllcikge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBsYXllci5wYXVzZVZpZGVvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB2aWRlbyBwbGF5ZXIgb3B0aW9uc1xuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyB2aWRlb0lkIGNvdmVySW1hZ2UgY292ZXJJbWFnZVNpemVcbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnZpZGVvSWQgPSBvcHRpb25zLnZpZGVvSWQ7XG4gICAgICAgIHRoaXMub3B0aW9ucy52aWRlb1VybCA9IG9wdGlvbnMudmlkZW9Vcmw7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU3JjID0gb3B0aW9ucy5jb3ZlckltYWdlU3JjID8gb3B0aW9ucy5jb3ZlckltYWdlU3JjIDogJyc7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb3ZlckltYWdlU2l6ZSA9IG9wdGlvbnMuY292ZXJJbWFnZVNpemU7XG4gICAgICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLnZpZGVvKS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5vcHRpb25zLnZpZGVvSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgbmV3IHZpZGVvIGJ5IHBhc3NpbmcgYW4gb3B0aW9ucyBvYmplY3RcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgdmlkZW9JZCBjb3ZlckltYWdlIGNvdmVySW1hZ2VTaXplXG4gICAgICovXG4gICAgbG9hZE5ld1ZpZGVvKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldFZpZGVvSWQoKTtcbiAgICAgICAgdGhpcy5zZXRDb3ZlckltYWdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3VlVmlkZW9CeUlkKHRoaXMub3B0aW9ucy52aWRlb0lkKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNNb2JpbGUuYW55KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGlzIGluc3RhbnZjZSBmcm9tIFlUUGxheWVycyBhcnJheSBhbmRcbiAgICAgKiBhc2xvIHJlbW92ZSB0aGUgbWFya3VwIGZyb20gZG9tXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gRGVsZXRlIHRoaXMgaW5zdGFuY2UgZnJvbSBwbGF5ZXJzIGFycmF5XG4gICAgICAgIGlmICh3aW5kb3cuWVRQbGF5ZXJzKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB3aW5kb3cuWVRQbGF5ZXJzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5ZVFBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tTm9kZS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy95b3V0dWJlLXBsYXllci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHZpZGVvSWQ6ICcnLFxuICAgIHZpZGVvVXJsOiAnJyxcbiAgICBjb3ZlckltYWdlU3JjOiAnJyxcbiAgICBjb3ZlckltYWdlU2l6ZTogJ2hpZ2gnLFxuICAgIGZvcmNlQ292ZXJPblRvdWNoRGV2aWNlczogZmFsc2UsXG4gICAgY3NzQ2xhc3Nlczoge1xuICAgICAgICB3cmFwcGVyOiAnYy15b3V0dWJlLXBsYXllcicsXG4gICAgICAgIHdyYXBwZXJJbm5lcjogJ2MteW91dHViZS1wbGF5ZXJfX2lubmVyJyxcbiAgICAgICAgdmlkZW86ICdjLXlvdXR1YmUtcGxheWVyX192aWRlbycsXG4gICAgICAgIGNvdmVyOiAnYy15b3V0dWJlLXBsYXllcl9fY292ZXInLFxuICAgICAgICBpY29uczogJ2MteW91dHViZS1wbGF5ZXJfX2ljb25zJyxcbiAgICAgICAgc3Bpbm5lcldyYXBwZXI6ICdjLXlvdXR1YmUtcGxheWVyX19zcGlubmVyLXdyYXBwZXInLFxuICAgICAgICBwbGF5QnV0dG9uV3JhcHBlcjogJ2MteW91dHViZS1wbGF5ZXJfX3BsYXktYnV0dG9uLXdyYXBwZXInXG4gICAgfSxcbiAgICBwbGF5SWNvbjogJzxzdmcgY2xhc3M9XCJjLXlvdXR1YmUtcGxheWVyX19wbGF5LWJ1dHRvblwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxwYXRoIGQ9XCJNMjgxLjksMTQ0LjVMMjQuNSwxLjRjLTMtMS43LTUuNS0xLjktNy43LTAuNmMtMi4xLDEuMy0zLjIsMy42LTMuMiw3djI4NS4zYzAsMy40LDEuMSw1LjcsMy4yLDdjMi4xLDEuMyw0LjcsMS4xLDcuNy0wLjZsMjU3LjQtMTQzYzMtMS43LDQuNS0zLjcsNC41LTZDMjg2LjMsMTQ4LjEsMjg0LjksMTQ2LjEsMjgxLjksMTQ0LjVMMjgxLjksMTQ0LjV6XCI+PC9wYXRoPjwvc3ZnPicsXG4gICAgc3Bpbm5lckljb246ICc8ZGl2IGNsYXNzPVwiYy15b3V0dWJlLXBsYXllcl9fc3Bpbm5lclwiPjwvZGl2PicsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgICByZWw6IDAsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICBkaXNhYmxla2I6IDFcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy9kZWZhdWx0LW9wdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMud3JhcHBlcn1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLndyYXBwZXJJbm5lcn1cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke29wdGlvbnMudmlkZW9JZH1cIiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnZpZGVvfVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5pY29uc31cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnBsYXlCdXR0b25XcmFwcGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zLnBsYXlJY29ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnNwaW5uZXJXcmFwcGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zLnNwaW5uZXJJY29ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy9kZWZhdWx0LW1hcmt1cC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRFbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSAmIFRhYmxldCBEZXRlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzTW9iaWxlOiB7XG4gICAgICAgIEFuZHJvaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgQmxhY2tCZXJyeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpO1xuICAgICAgICB9LFxuICAgICAgICBpT1MoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgT3BlcmEoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgV2luZG93cygpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgYW55KCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLkFuZHJvaWQoKSB8fCB0aGlzLkJsYWNrQmVycnkoKSB8fCB0aGlzLmlPUygpIHx8IHRoaXMuT3BlcmEoKSB8fCB0aGlzLldpbmRvd3MoKSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9qcy9oZWxwZXJzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc2Nzcy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc2Nzcy9kZWZhdWx0LXNraW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlbW8vc2Nzcy9kZW1vLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
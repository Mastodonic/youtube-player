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
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _youtubePlayer = __webpack_require__(2);

var _youtubePlayer2 = _interopRequireDefault(_youtubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// document.querySelectorAll('[data-youtube-id]').forEach((element) => {
//     new YoutubePlayer({
//         element
//     });
// });

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global YT */


var _defaultOptions = __webpack_require__(3);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _defaultMarkup = __webpack_require__(12);

var _defaultMarkup2 = _interopRequireDefault(_defaultMarkup);

var _helpers = __webpack_require__(4);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    return "<div class=\"" + options.cssClasses.wrapper + "\">\n        <div class=\"" + options.cssClasses.wrapperInner + "\">\n            <div id=\"" + options.videoId + "\" class=\"" + options.cssClasses.video + "\"></div>\n            <div class=\"" + options.cssClasses.cover + "\">\n                <div class=\"" + options.cssClasses.icons + "\">\n                    <div class=\"" + options.cssClasses.playButtonWrapper + "\">\n                        " + options.playIcon + "\n                    </div>\n                    <div class=\"" + options.cssClasses.spinnerWrapper + "\">\n                        " + options.spinnerIcon + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTNjNjBlNDcyNjlkOTgyOGQzNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMveW91dHViZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RlZmF1bHQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZGVmYXVsdC1za2luLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RlZmF1bHQtbWFya3VwLmpzIl0sIm5hbWVzIjpbInlwIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvdmVySW1hZ2VTaXplIiwiZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzIiwic2V0VGltZW91dCIsImxvYWROZXdWaWRlbyIsInZpZGVvVXJsIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJzZXREb21Ob2RlIiwic2V0VmlkZW9JZCIsInZpZGVvSWQiLCJzZXRDb3ZlckltYWdlIiwic2V0TWFya3VwIiwiY3JlYXRlUGxheWVySHRtbCIsImluaXREYXRhQmluZGluZ3MiLCJzZXRTdGF0ZXMiLCJhZGRMaXN0ZW5lcnMiLCJsb2FkWW91dHViZUFwaSIsImlzTW9iaWxlIiwiYW55IiwiY292ZXJJc0hpZGRlbiIsIndpbmRvdyIsIllUUGxheWVycyIsInB1c2giLCJFcnJvciIsImlzTG9hZGluZyIsInBsYXllckNyZWF0ZWQiLCJ2aWRlb1N0YXJ0ZWQiLCJ3cmFwcGVyIiwiY3NzQ2xhc3NlcyIsImJpbmRDbGFzc1RvUHJvcGVydHkiLCJkb21Ob2RlIiwiYmluZEF0dHJUb1Byb3BlcnR5IiwicXVlcnlTZWxlY3RvciIsImNvdmVyIiwib2JqIiwibm9kZSIsImNsYXNzTmFtZSIsInByb3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIm1hcmt1cCIsImZpcnN0Q2hpbGQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImV4dHJhY3RWaWRlb0lkZnJvbVVybCIsImNvdmVySW1hZ2VTcmMiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImNvdmVySW1hZ2UiLCJpbWFnZVNpemUiLCJzcmNOYW1lIiwid2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZVBsYXllciIsInRhZyIsImZpcnN0U2NyaXB0VGFnIiwiaWZyYW1lQXBpQ3JlYXRlZCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJZVCIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwiYmluZCIsImZvckVhY2giLCJwbGF5ZXIiLCJhcGlJc0xvYWRlZCIsInBsYXlWaWRlbyIsImNyZWF0ZVBsYXllciIsInBhdXNlT3RoZXJWaWRlb3MiLCJQbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsImUiLCJzdG9wVmlkZW8iLCJzdGF0ZSIsImRhdGEiLCJpbnN0YW5jZXMiLCJpbnN0YW5jZSIsInBhdXNlVmlkZW8iLCJ2aWRlbyIsInVwZGF0ZU9wdGlvbnMiLCJjdWVWaWRlb0J5SWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJ3cmFwcGVySW5uZXIiLCJpY29ucyIsInNwaW5uZXJXcmFwcGVyIiwicGxheUJ1dHRvbldyYXBwZXIiLCJwbGF5SWNvbiIsInNwaW5uZXJJY29uIiwicmVsIiwiY29sb3IiLCJzaG93aW5mbyIsIm1vZGVzdGJyYW5kaW5nIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJnZXRFbCIsInNlbGVjdG9yIiwiQW5kcm9pZCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkJsYWNrQmVycnkiLCJpT1MiLCJPcGVyYSIsIldpbmRvd3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxLQUFLLDRCQUFrQjtBQUN2QkMsYUFBU0MsU0FBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsQ0FBdkMsQ0FEYztBQUV2QkMsb0JBQWdCLFNBRk87QUFHdkJDLDhCQUEwQjtBQUhILENBQWxCLENBQVQ7O0FBTUFDLFdBQVcsWUFBTTtBQUNiTixPQUFHTyxZQUFILENBQWdCO0FBQ1pDLGtCQUFVLDZDQURFO0FBRVpKLHdCQUFnQjs7QUFGSixLQUFoQjtBQUtILENBTkQsRUFNRyxLQU5ILEU7Ozs7Ozs7Ozs7Ozs7OztxakJDZEE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBR0ksb0JBQVlLLE9BQVosRUFBcUI7QUFBQTs7QUFDakI7QUFDQSxhQUFLQyxVQUFMLENBQWdCRCxPQUFoQjtBQUNBLGFBQUtFLFVBQUw7QUFDQSxhQUFLQyxVQUFMOztBQUVBLFlBQUksS0FBS0gsT0FBTCxDQUFh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UUFBUXVCLFVBQVIsQ0FBbUJxRSxLQUZqRSw0Q0FHc0I1RixRQUFRdUIsVUFBUixDQUFtQkssS0FIekMsMENBSTBCNUIsUUFBUXVCLFVBQVIsQ0FBbUI0RSxLQUo3Qyw4Q0FLOEJuRyxRQUFRdUIsVUFBUixDQUFtQjhFLGlCQUxqRCxxQ0FNc0JyRyxRQUFRc0csUUFOOUIsdUVBUThCdEcsUUFBUXVCLFVBQVIsQ0FBbUI2RSxjQVJqRCxxQ0FTc0JwRyxRQUFRdUcsV0FUOUI7QUFlSCxDIiwiZmlsZSI6InB1YmxpYy9hc3NldHMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTNjNjBlNDcyNjlkOTgyOGQzNmEiLCJpbXBvcnQgWW91dHViZVBsYXllciBmcm9tICcuL3lvdXR1YmUtcGxheWVyJztcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEteW91dHViZS1pZF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgbmV3IFlvdXR1YmVQbGF5ZXIoe1xuLy8gICAgICAgICBlbGVtZW50XG4vLyAgICAgfSk7XG4vLyB9KTtcblxubGV0IHlwID0gbmV3IFlvdXR1YmVQbGF5ZXIoe1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy12aWRlbycpWzBdLFxuICAgIGNvdmVySW1hZ2VTaXplOiAnbWF4aW11bScsXG4gICAgZm9yY2VDb3Zlck9uVG91Y2hEZXZpY2VzOiBmYWxzZVxufSk7XG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHlwLmxvYWROZXdWaWRlbyh7XG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1xSnE4SW92WEZZUScsXG4gICAgICAgIGNvdmVySW1hZ2VTaXplOiAnbWVkaXVtJ1xuXG4gICAgfSk7XG59LCAyNTAwMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLyogZ2xvYmFsIFlUICovXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0LW9wdGlvbnMnO1xuaW1wb3J0IG1hcmt1cCBmcm9tICcuL2RlZmF1bHQtbWFya3VwJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIC8vIFNldCBEZWZhdWx0IE9wdGlvbnNcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldERvbU5vZGUoKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvdmVySW1hZ2UoKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIFBsYXllclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrdXAoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVySHRtbCgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgRGF0YVxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YUJpbmRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlcygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIEFQSVxuICAgICAgICAgICAgdGhpcy5sb2FkWW91dHViZUFwaSgpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXJJc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHlvdXR1YmUgcGxheWVyIGluc3RhbmNlc1xuICAgICAgICAgICAgLy8gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgICAgICAgICAgIGlmICghd2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5ZVFBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LllUUGxheWVycy5wdXNoKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGZpbmQgeW91dHViZSB2aWRlbyBpZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGluaXRpYWwgc3RhdGVzXG4gICAgICovXG4gICAgc2V0U3RhdGVzKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWxsIHRoZSBkYXRhIGJpbmRpbmdzXG4gICAgICovXG4gICAgaW5pdERhdGFCaW5kaW5ncygpIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy53cmFwcGVyO1xuICAgICAgICB0aGlzLmJpbmRDbGFzc1RvUHJvcGVydHkodGhpcywgdGhpcy5kb21Ob2RlLCBgJHt3cmFwcGVyfS0taXMtbG9hZGluZ2AsICdpc0xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xhc3NUb1Byb3BlcnR5KHRoaXMsIHRoaXMuZG9tTm9kZSwgYCR7d3JhcHBlcn0tLWNvdmVyLWlzLWhpZGRlbmAsICdjb3ZlcklzSGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYmluZENsYXNzVG9Qcm9wZXJ0eSh0aGlzLCB0aGlzLmRvbU5vZGUsIGAke3dyYXBwZXJ9LS1pcy1yZWFkeWAsICdhcGlJc0xvYWRlZCcpO1xuICAgICAgICB0aGlzLmJpbmRBdHRyVG9Qcm9wZXJ0eSh0aGlzLm9wdGlvbnMsIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyKSwgJ3N0eWxlJywgJ2NvdmVySW1hZ2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGFuIGVsZW1lbnQncyBjbGFzcyBuYW1lIHRvIGFuIG9iamVjdCdzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvcFxuICAgICAqL1xuICAgIGJpbmRDbGFzc1RvUHJvcGVydHkob2JqLCBub2RlLCBjbGFzc05hbWUsIHByb3ApIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID8gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBhbiBlbGVtZW50IGF0dHJpYnV0ZSB0byBhbiBvYmplYydzIHByb3BlcnR5XG4gICAgICogQHBhcmFtICB7b2JqfSBvYmpcbiAgICAgKiBAcGFyYW0gIHtvYmp9IG5vZGVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb3BcbiAgICAgKi9cbiAgICBiaW5kQXR0clRvUHJvcGVydHkob2JqLCBub2RlLCBhdHRyLCBwcm9wKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlIHBhc3NlZCBvcHRpb25zIHdpdGggZGVmYXVsdFxuICAgICAqIEBwYXJhbSB7b2JqfSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBtYWluIGRvbSBub2RlXG4gICAgICovXG4gICAgc2V0RG9tTm9kZSgpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gdGhpcy5vcHRpb25zLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXR0YWNoIGluaXRpYWwgbWFya3VwIHRvIHRoZSBtYWluIGRvbU5vZGVcbiAgICAgKi9cbiAgICBjcmVhdGVQbGF5ZXJIdG1sKCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUuaW5uZXJIVE1MID0gdGhpcy5tYXJrdXA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBpbml0aWFsIGRvbSBub2RlIHRvIGZpcnN0IGNoaWxkXG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IHRoaXMuZG9tTm9kZS5maXJzdENoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdmlkZW8gaWQgZnJvbSBhIHBhc3NlZCB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBleHRyYWN0VmlkZW9JZGZyb21VcmwoKSB7XG4gICAgICAgIGxldCByZWdleCA9IC9eKD86aHR0cCg/OnMpPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86bVxcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFwvKD86KD86d2F0Y2gpP1xcPyg/Oi4qJik/dig/OmkpPz18KD86ZW1iZWR8dnx2aXx1c2VyKVxcLykpKFtePyZcIic+XSspLztcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLm9wdGlvbnMudmlkZW9VcmwubWF0Y2gocmVnZXgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9JZCA9IG1hdGNoZXNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB1cmwgaXMgbm90IGluIHRoZSByaWdodCBmb3JtYXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBpZCBmcm9tIGRhdGEgYXR0cmlidXRlcyBvciB2aWRlbyB1cmxcbiAgICAgKi9cbiAgICBzZXRWaWRlb0lkKCkge1xuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLWlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS15b3V0dWJlLXVybCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXlvdXR1YmUtdXJsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZGVvVXJsICYmICF0aGlzLm9wdGlvbnMudmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VmlkZW9JZGZyb21VcmwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY292ZXIgaW1hZ2UgaWYgaXQncyBwYXNzZWQgYXMgYW4gb3B0aW9uXG4gICAgICogb3RoZXJ3aXNlIGZldGNoIHRoZSBpbWFnZSBmcm9tIHlvdXRydWJlIGJhc2VkIG9uIGlkIGFuZCBzaXplXG4gICAgICovXG4gICAgc2V0Q292ZXJJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtY292ZXItaW1hZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMgPSB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdmVyLWltYWdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmMpIHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5vcHRpb25zLmNvdmVySW1hZ2VTcmN9YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VTaXplO1xuICAgICAgICAgICAgbGV0IHNyYztcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ21xZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplID0gJ3NkZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXhpbXVtJzpcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUgPSAnbWF4cmVzZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3RoaXMub3B0aW9ucy52aWRlb0lkfS8ke2ltYWdlU2l6ZX0uanBnYDtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNyY05hbWUgPSBpbWcud2lkdGggPiAxNTAgPyBpbWFnZVNpemUgOiAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdmVySW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dGhpcy5vcHRpb25zLnZpZGVvSWR9LyR7c3JjTmFtZX0uanBnKWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNsaWNrIGxpc3RlbmVyIHRvIHZpZGVvIGNvdmVyXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXIgdG8gdmlkZW8gY292ZXJcbiAgICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLmNzc0NsYXNzZXMuY292ZXIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5pbml0aWFsaXNlUGxheWVyKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBpbnRpdGlhbCBtYXJrdXAgb2YgdGhlIHZpZGVvIHBsYXllclxuICAgICAqL1xuICAgIHNldE1hcmt1cCgpIHtcbiAgICAgICAgdGhpcy5tYXJrdXAgPSBtYXJrdXAodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgeW91dHViZSBhcGkgc2NyaXB0XG4gICAgICovXG4gICAgbG9hZFlvdXR1YmVBcGkoKSB7XG4gICAgICAgIGxldCB0YWcsXG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZztcblxuICAgICAgICBpZiAoIXdpbmRvdy5pZnJhbWVBcGlDcmVhdGVkKSB7XG4gICAgICAgICAgICB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuICAgICAgICAgICAgd2luZG93LmlmcmFtZUFwaUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ZVCkge1xuICAgICAgICAgICAgdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gb25jZSB0aGUgaWZyYW1lIGFwaSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcbiAgICAgICAgd2luZG93LllUUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5hcGlJc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mb3JjZUNvdmVyT25Ub3VjaERldmljZXMgJiYgSGVscGVycy5pc01vYmlsZS5hbnkoKSkge1xuICAgICAgICAgICAgICAgIHBsYXllci5pbml0aWFsaXNlUGxheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhhbmRsZSBjbGljayBvbiBjb3ZlciB2aWRlb1xuICAgICAqL1xuICAgIGluaXRpYWxpc2VQbGF5ZXIoKSB7XG4gICAgICAgIC8vIFR1cm4gb2ZmIGN1c3RvbSBsb2FkZXIgb24gbW9iaWxlIGFuZCB0b3VjaCBkZXZpY2VzXG4gICAgICAgIC8vIHNpbmNlIGF1dG9scGxheSBpcyBub3QgYWxsb3dlZCBvbiB0aGVzZSBkZXZpY2VzXG4gICAgICAgIGlmIChIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvdmVySXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZU90aGVyVmlkZW9zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHlvdXR1YmUgcGxheWVyIGFuZCBhdHRhY2ggaXQgdG8gdGhlIGNsYXNzIGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy5vcHRpb25zLnZpZGVvSWQsIHtcbiAgICAgICAgICAgIHZpZGVvSWQ6IHRoaXMub3B0aW9ucy52aWRlb0lkLFxuICAgICAgICAgICAgcGxheWVyVmFyczogdGhpcy5vcHRpb25zLnBsYXllclZhcnMsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBleGVjdXRlZCBvbmNlIHRoZSBwbGF5ZXIgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJSZWFkeShlKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBzZXQgdGhlIHBsYXllciBzdGF0ZSB0byAtMSAodW5zdGFydGVkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICB0aGlzLnBsYXllckNyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBjb3ZlciBpbWFnZSBhbmQgc3Bpbm5lciBiYXNlZCBvbiBwbGF5ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSBldmVudCBvYmplY3QgZnJvbSBpZnJhbWUgYXBpXG4gICAgICovXG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IGUuZGF0YTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIC8vIFVuc3RhcnRlZFxuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRW5kZWRcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFBsYXlpbmdcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhdXNlT3RoZXJWaWRlb3MoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEJ1ZmZlcmluZ1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlkZW9TdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ3VlZFxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIG90aGVyIHZpZGVvcyBvbiB0aGUgc2FtZSBwYWdlXG4gICAgICovXG4gICAgcGF1c2VPdGhlclZpZGVvcygpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHdpbmRvdy5ZVFBsYXllcnM7XG5cbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucGxheWVyICYmIGluc3RhbmNlLnBsYXllciAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdmlkZW8gcGxheWVyIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgdmlkZW9JZCBjb3ZlckltYWdlIGNvdmVySW1hZ2VTaXplXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52aWRlb0lkID0gb3B0aW9ucy52aWRlb0lkO1xuICAgICAgICB0aGlzLm9wdGlvbnMudmlkZW9VcmwgPSBvcHRpb25zLnZpZGVvVXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNyYyA9IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA/IG9wdGlvbnMuY292ZXJJbWFnZVNyYyA6ICcnO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY292ZXJJbWFnZVNpemUgPSBvcHRpb25zLmNvdmVySW1hZ2VTaXplO1xuICAgICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLm9wdGlvbnMuY3NzQ2xhc3Nlcy52aWRlbykuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMub3B0aW9ucy52aWRlb0lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIG5ldyB2aWRlbyBieSBwYXNzaW5nIGFuIG9wdGlvbnMgb2JqZWN0XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIHZpZGVvSWQgY292ZXJJbWFnZSBjb3ZlckltYWdlU2l6ZVxuICAgICAqL1xuICAgIGxvYWROZXdWaWRlbyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0lkKCk7XG4gICAgICAgIHRoaXMuc2V0Q292ZXJJbWFnZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh0aGlzLm9wdGlvbnMudmlkZW9JZCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWRlb1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3ZlcklzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhpcyBpbnN0YW52Y2UgZnJvbSBZVFBsYXllcnMgYXJyYXkgYW5kXG4gICAgICogYXNsbyByZW1vdmUgdGhlIG1hcmt1cCBmcm9tIGRvbVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIERlbGV0ZSB0aGlzIGluc3RhbmNlIGZyb20gcGxheWVycyBhcnJheVxuICAgICAgICBpZiAod2luZG93LllUUGxheWVycykge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gd2luZG93LllUUGxheWVycy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuWVRQbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy95b3V0dWJlLXBsYXllci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHZpZGVvSWQ6ICcnLFxuICAgIHZpZGVvVXJsOiAnJyxcbiAgICBjb3ZlckltYWdlU3JjOiAnJyxcbiAgICBjb3ZlckltYWdlU2l6ZTogJ2hpZ2gnLFxuICAgIGZvcmNlQ292ZXJPblRvdWNoRGV2aWNlczogZmFsc2UsXG4gICAgY3NzQ2xhc3Nlczoge1xuICAgICAgICB3cmFwcGVyOiAnYy15b3V0dWJlLXBsYXllcicsXG4gICAgICAgIHdyYXBwZXJJbm5lcjogJ2MteW91dHViZS1wbGF5ZXJfX2lubmVyJyxcbiAgICAgICAgdmlkZW86ICdjLXlvdXR1YmUtcGxheWVyX192aWRlbycsXG4gICAgICAgIGNvdmVyOiAnYy15b3V0dWJlLXBsYXllcl9fY292ZXInLFxuICAgICAgICBpY29uczogJ2MteW91dHViZS1wbGF5ZXJfX2ljb25zJyxcbiAgICAgICAgc3Bpbm5lcldyYXBwZXI6ICdjLXlvdXR1YmUtcGxheWVyX19zcGlubmVyLXdyYXBwZXInLFxuICAgICAgICBwbGF5QnV0dG9uV3JhcHBlcjogJ2MteW91dHViZS1wbGF5ZXJfX3BsYXktYnV0dG9uLXdyYXBwZXInXG4gICAgfSxcbiAgICBwbGF5SWNvbjogJzxzdmcgY2xhc3M9XCJjLXlvdXR1YmUtcGxheWVyX19wbGF5LWJ1dHRvblwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxwYXRoIGQ9XCJNMjgxLjksMTQ0LjVMMjQuNSwxLjRjLTMtMS43LTUuNS0xLjktNy43LTAuNmMtMi4xLDEuMy0zLjIsMy42LTMuMiw3djI4NS4zYzAsMy40LDEuMSw1LjcsMy4yLDdjMi4xLDEuMyw0LjcsMS4xLDcuNy0wLjZsMjU3LjQtMTQzYzMtMS43LDQuNS0zLjcsNC41LTZDMjg2LjMsMTQ4LjEsMjg0LjksMTQ2LjEsMjgxLjksMTQ0LjVMMjgxLjksMTQ0LjV6XCI+PC9wYXRoPjwvc3ZnPicsXG4gICAgc3Bpbm5lckljb246ICc8ZGl2IGNsYXNzPVwiYy15b3V0dWJlLXBsYXllcl9fc3Bpbm5lclwiPjwvZGl2PicsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgICByZWw6IDAsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICBkaXNhYmxla2I6IDFcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2RlZmF1bHQtb3B0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRFbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSAmIFRhYmxldCBEZXRlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzTW9iaWxlOiB7XG4gICAgICAgIEFuZHJvaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgQmxhY2tCZXJyeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpO1xuICAgICAgICB9LFxuICAgICAgICBpT1MoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgT3BlcmEoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgV2luZG93cygpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcbiAgICAgICAgfSxcbiAgICAgICAgYW55KCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLkFuZHJvaWQoKSB8fCB0aGlzLkJsYWNrQmVycnkoKSB8fCB0aGlzLmlPUygpIHx8IHRoaXMuT3BlcmEoKSB8fCB0aGlzLldpbmRvd3MoKSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2hlbHBlcnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9kZWZhdWx0LXNraW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNzc0NsYXNzZXMud3JhcHBlcn1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLndyYXBwZXJJbm5lcn1cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke29wdGlvbnMudmlkZW9JZH1cIiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnZpZGVvfVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLmNvdmVyfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY3NzQ2xhc3Nlcy5pY29uc31cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnBsYXlCdXR0b25XcmFwcGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zLnBsYXlJY29ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jc3NDbGFzc2VzLnNwaW5uZXJXcmFwcGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zLnNwaW5uZXJJY29ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2RlZmF1bHQtbWFya3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
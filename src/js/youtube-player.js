/* global YT */
import defaults from './default-options';
import markup from './default-markup';
import Helpers from './helpers';

export default class {
    constructor(options) {
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

            if (!this.options.forceCoverOnTouchDevices && Helpers.isMobile.any()) {
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
    setStates() {
        this.isLoading = false;
        this.playerCreated = false;
        this.videoStarted = false;
    }

    /**
     * Set all the data bindings
     */
    initDataBindings() {
        let wrapper = this.options.cssClasses.wrapper;
        this.bindClassToProperty(this, this.domNode, `${wrapper}--is-loading`, 'isLoading');
        this.bindClassToProperty(this, this.domNode, `${wrapper}--cover-is-hidden`, 'coverIsHidden');
        this.bindClassToProperty(this, this.domNode, `${wrapper}--is-ready`, 'apiIsLoaded');
        this.bindAttrToProperty(this.options, this.domNode.querySelector('.' + this.options.cssClasses.cover), 'style', 'coverImage');
    }

    /**
     * Bind an element's class name to an object's property
     * @param  {obj} obj
     * @param  {obj} node
     * @param  {string} className
     * @param  {string} prop
     */
    bindClassToProperty(obj, node, className, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
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
    bindAttrToProperty(obj, node, attr, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
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
    setOptions(options) {
        this.options = {
            ...defaults,
            ...options
        };
    }

    /**
     * set main dom node
     */
    setDomNode() {
        this.domNode = this.options.element;
    }

    /**
     * attach initial markup to the main domNode
     */
    createPlayerHtml() {
        this.domNode.innerHTML = this.markup;

        // Change the initial dom node to first child
        this.domNode = this.domNode.firstChild;
    }

    /**
     * Extract video id from a passed video url
     */
    extractVideoIdfromUrl() {
        let regex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
        let matches = this.options.videoUrl.match(regex);

        if (matches) {
            this.options.videoId = matches[1];
        } else {
            throw new Error('The url is not in the right format');
        }
    }

    /**
     * Set video id from data attributes or video url
     */
    setVideoId() {
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
    setCoverImage() {
        if (this.domNode.hasAttribute('data-cover-image')) {
            this.options.coverImageSrc = this.domNode.getAttribute('data-cover-image');
        }

        if (this.options.coverImageSrc) {
            let img = new Image();
            img.src = this.options.coverImageSrc;
            img.onload = () => {
                this.options.coverImage = `background-image: url(${this.options.coverImageSrc}`;
            };
        } else {
            let img = new Image();
            let imageSize;
            let src;

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

            src = `https://img.youtube.com/vi/${this.options.videoId}/${imageSize}.jpg`;

            img.src = src;
            img.onload = () => {
                let srcName = img.width > 150 ? imageSize : '0';
                this.options.coverImage = `background-image: url(https://img.youtube.com/vi/${this.options.videoId}/${srcName}.jpg)`;
            };
        }
    }

    /**
     * Add click listener to video cover
     */
    addListeners() {
        // Add click listener to video cover
        this.domNode.querySelector('.' + this.options.cssClasses.cover).addEventListener('click', () => this.initialisePlayer());
    }

    /**
     * Set intitial markup of the video player
     */
    setMarkup() {
        this.markup = markup(this.options);
    }

    /**
     * Create youtube api script
     */
    loadYoutubeApi() {
        let tag,
            firstScriptTag;

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
    onYouTubeIframeAPIReady() {
        window.YTPlayers.forEach((player) => {
            player.apiIsLoaded = true;
            if (!this.options.forceCoverOnTouchDevices && Helpers.isMobile.any()) {
                player.initialisePlayer();
            }
        });
    }

    /**
     * handle click on cover video
     */
    initialisePlayer() {
        // Turn off custom loader on mobile and touch devices
        // since autolplay is not allowed on these devices
        if (Helpers.isMobile.any()) {
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
    createPlayer() {
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
    onPlayerReady(e) {
        // This will set the player state to -1 (unstarted);
        this.player.stopVideo();
        this.player.playVideo();
        this.playerCreated = true;
    }

    /**
     * Custom cover image and spinner based on player state
     * @param {object} e event object from iframe api
     */
    onPlayerStateChange(e) {
        let state = e.data;

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
    pauseOtherVideos() {
        let instances = window.YTPlayers;

        instances.forEach((instance) => {
            if (instance.player && instance.player !== this.player) {
                instance.player.pauseVideo();
            }
        });
    }

    /**
     * Update video player options
     * @param  {object} options videoId coverImage coverImageSize
     */
    updateOptions(options) {
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
    loadNewVideo(options) {
        this.updateOptions(options);
        this.setVideoId();
        this.setCoverImage();

        if (this.playerCreated) {
            this.player.cueVideoById(this.options.videoId);
            this.isLoading = false;
            this.videoStarted = false;

            if (!Helpers.isMobile.any()) {
                this.coverIsHidden = false;
            }
        }
    }

    /**
     * Remove this instanvce from YTPlayers array and
     * aslo remove the markup from dom
     * @return {[type]} [description]
     */
    destroy() {
        // Delete this instance from players array
        if (window.YTPlayers) {
            let index = window.YTPlayers.indexOf(this);
            if (index > -1) {
                window.YTPlayers.splice(index, 1);
            }
        }

        this.domNode.remove();
    }
};

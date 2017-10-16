/* global YT */

import defaults from './default-options';
import Helpers from './helpers';

export default class {
    constructor(options) {
        // Set Default Options
        this.setOptions(options);
        this.setPlayerNode();
        this.setVideoId();
        this.setCoverImage();

        // Create Player
        this.setMarkup();
        this.createPlayerHtml();

        // Set Data
        this.initDataBindings();
        this.setData();

        // Add listeners
        this.addListeners();

        // Initialise API
        this.loadYoutubeApi();
        this.coverIsHidden = false;
    }

    setData() {
        this.coverIsHidden = true;
        this.isLoading = false;
        this.player = {};
        this.playerCreated = false;
        this.videoStarted = false;
    }

    initDataBindings() {
        let wrapper = this.options.cssClasses.wrapper;
        this.bindClassToProperty(this, this.playerNode, `${wrapper}--is-loading`, 'isLoading');
        this.bindClassToProperty(this, this.playerNode, `${wrapper}--cover-is-hidden`, 'coverIsHidden');
        this.bindClassToProperty(window, this.playerNode, `${wrapper}--is-ready`, 'iframeApiCreated');
        this.bindAttrToProperty(this.options, this.playerNode.querySelector('.' + this.options.cssClasses.cover), 'style', 'coverImage');
    }

    bindClassToProperty(obj, node, className, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
                value ? node.classList.add(className) : node.classList.remove(className);
            }
        });
    }

    bindAttrToProperty(obj, node, attr, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
                if (value) {
                    node.setAttribute(attr, value);
                };
            }
        });
    }

    setOptions(options) {
        this.options = {
            ...defaults,
            ...options
        };
    }

    setPlayerNode() {
        this.playerNode = document.querySelector(this.options.selector);
    }

    createPlayerHtml() {
        this.playerNode.innerHTML = this.markup;
        this.playerNode = this.playerNode.firstChild;
    }

    setVideoId() {
        if (this.playerNode.hasAttribute('data-video-id')) {
            this.options.videoId = this.playerNode.getAttribute('data-video-id');
        }
    }

    setCoverImage() {
        if (!this.options.coverImage) {
            let src = `https://img.youtube.com/vi/${this.options.videoId}/maxresdefault.jpg`;
            let img = new Image();

            img.src = src;

            img.onload = () => {
                let size = img.width > 300 ? 'maxresdefault' : '0';
                this.options.coverImage = `background-image: url(https://img.youtube.com/vi/${this.options.videoId}/${size}.jpg)`;
            };
        }
    }

    addListeners() {
        // Add click listener to video cover
        this.playerNode.querySelector('.' + this.options.cssClasses.cover).addEventListener('click', () => this.handleCoverClick());
    }

    setMarkup() {
        this.markup = `<div class="${this.options.cssClasses.wrapper}">
            <div class="${this.options.cssClasses.wrapperInner}">
                <div id="${this.options.videoId}" class="${this.options.cssClasses.video}"></div>
                <div class="${this.options.cssClasses.cover}">
                    <div class="${this.options.cssClasses.icons}">
                        <div class="${this.options.cssClasses.playButtonWrapper}">
                            ${this.options.playIcon}
                        </div>
                        <div class="${this.options.cssClasses.spinnerWrapper}">
                            ${this.options.spinnerIcon}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
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
            window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
        }
    }

    /**
     * Callback function once the iframe api is loaded
     */
    onYouTubeIframeAPIReady() {
        if (Helpers.isMobile.any()) {
            this.handleCoverClick();
        }
    }

    /**
     * handle click on cover video
     */
    handleCoverClick() {
        this.isLoading = true;

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
        let player = new YT.Player(this.options.videoId, {
            videoId: this.options.videoId,
            playerVars: this.options.playerVars,
            events: {
                onReady: this.onPlayerReady.bind(this),
                onStateChange: this.onPlayerStateChange.bind(this)
            }
        });

        this.player = player;

        // Create an array of all YT players
        if (!window.YTPPlayers) {
            window.YTPPlayers = [];
        }

        window.YTPPlayers.push(this.player);
    }

    /**
     * This method is executed once the player has been created
     * @param  {object} e event object from iframe api
     */
    onPlayerReady(e) {
        console.log(this.player);
        // This will set the player state to -1 (unstarted);
        if (!Helpers.isMobile.any()) {
            this.player.stopVideo();
            this.player.playVideo();
        }

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
        let players = window.YTPPlayers;

        players.forEach((player) => {
            if (player !== this.player) {
                player.pauseVideo();
            }
        });
    }

    destroy() {
        // Delete Player from players array

        if (window.YTPPlayers) {
            let index = window.YTPPlayers.indexOf(this.player);
            if (index > -1) {
                window.YTPPlayers.splice(index, 1);
            }
        }
    }
};

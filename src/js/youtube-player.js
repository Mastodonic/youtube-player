import defaults from './default-options';
// import Helpers from './helpers';

export default class {
    constructor(options) {
        this.setOptions(options);
        this.setData();
        this.setPlayerNode();
        this.setVideoId();
        this.setCoverImage();
        this.setMarkup();
        this.createPlayerHtml();
        this.setClassList();
    }

    setData() {
        this.coverIsHidden = true;
        this.isLoading = false;
        this.player = {};
        this.playerCreated = false;
        this.videoStarted = false;
    }

    setClassList() {
        let classList = {};
        classList[this.options.cssClasses.wrapper] = true;
        classList[`${this.options.cssClasses.wrapper}--is-loading`] = this.isLoading;
        classList[`${this.options.cssClasses.wrapper}--cover-is-hidden`] = this.coverIsHidden;
        classList[`${this.options.cssClasses.wrapper}--is-ready`] = window.iframeApiCreated;
        return classList;
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
        this.player.innerHTML = this.markup;
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
                this.options.coverImage = `https://img.youtube.com/vi/${this.options.videoId}/${size}.jpg`;
            };
        }
    }

    setMarkup() {
        this.markup = `<div class="${this.classList}">
            <div class="${this.options.cssClasses.wrapperInner}">
                <div id="${this.options.videoId}" class="${this.options.cssClasses.video}"></div>
                <div class="${this.options.cssClasses.cover}" style="background-image:url(${this.options.coverImage})">
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
};

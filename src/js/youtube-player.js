import defaults from './default-options';
// import Helpers from './helpers';

export default class {
    constructor(options) {
        this.setOptions(options);
        this.setPlayerNode();
        this.setVideoId();
        this.setCoverImage();
        this.setMarkup();
        this.createPlayerHtml();
        this.initDataBindings();
        this.setData();
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
        this.bindAttrToProperty(this.options, this.playerNode.querySelector('.' + this.options.cssClasses.cover), 'style', `background-image: url(${this.options.coverImage})`, 'coverImage');
    }

    bindClassToProperty(obj, node, className, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
                value ? node.classList.add(className) : node.classList.remove(className);
            }
        });
    }

    bindAttrToProperty(obj, node, attr, value, prop) {
        Object.defineProperty(obj, prop, {
            set (value) {
                if (value) {
                    node.setAttribute(attr, value);
                };
            }
        });
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
                this.options.coverImage = `https://img.youtube.com/vi/${this.options.videoId}/${size}.jpg`;
            };
        }
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
};

export default function(options) {
    return `<div class="${options.cssClasses.wrapper}">
        <div class="${options.cssClasses.wrapperInner}">
            <div id="${options.videoId}" class="${options.cssClasses.video}"></div>
            <div class="${options.cssClasses.cover}">
                <div class="${options.cssClasses.icons}">
                    <div class="${options.cssClasses.playButtonWrapper}">
                        ${options.playIcon}
                    </div>
                    <div class="${options.cssClasses.spinnerWrapper}">
                        ${options.spinnerIcon}
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

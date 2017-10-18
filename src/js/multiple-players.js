import SinglePlayer from './single-player';

export default function(options) {
    if (options.selector) {
        let domNodeArray = [].slice.call(document.querySelectorAll(options.selector));
        domNodeArray.forEach((domNode) => {
            options.playerNode = domNode;
            new SinglePlayer(options);
        });
    }
};

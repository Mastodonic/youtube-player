export default {
    element: null,
    videoId: '',
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
    spinnerIcon: '<svg class="c-youtube-player__spinner" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" xml:space="preserve"> <circle cx="150" cy="150" r="120"></circle></svg>',
    playerVars: {
        rel: 0,
        color: 'white',
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        disablekb: 1
    }
};

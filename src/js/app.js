import YoutubePlayer from './youtube-player';

document.querySelectorAll('[data-youtube-id]').forEach((element) => {
    new YoutubePlayer({
        element
    });
});

// new YoutubePlayer({
//     element: document.querySelectorAll('.js-video')[1],
//     forceCoverOnTouchDevices: true
// });

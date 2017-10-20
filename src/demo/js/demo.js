/* eslint-disable */
import YoutubePlayer from '../../../lib/youtube-player';
console.log(YoutubePlayer);
// console.log(YoutubePlayerSrc, 'src');
// document.querySelectorAll('[data-youtube-id]').forEach((element) => {
//     new YoutubePlayer({
//         element
//     });
// });

let yp = new YoutubePlayer({
    element: document.querySelectorAll('.js-video')[0],
    coverImageSize: 'maximum',
    forceCoverOnTouchDevices: false
});

setTimeout(() => {
    yp.loadNewVideo({
        videoUrl: 'https://www.youtube.com/watch?v=qJq8IovXFYQ',
        coverImageSize: 'medium'

    });
}, 25000);

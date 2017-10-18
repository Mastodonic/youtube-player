import YoutubePlayer from './wrapper';

// new yt.Multiple({
//     selector: '.js-video'
// });

// let domNodeArray = document.querySelectorAll('.js-video');
let yp = new YoutubePlayer();

window.single = yp.multiple({
    selector: '.js-video'
});

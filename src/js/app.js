import YoutubePlayer from './youtube-player';

document.querySelectorAll('.js-video').forEach((element) => {
    new YoutubePlayer({
        element
    });
});

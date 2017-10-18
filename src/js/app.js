import YoutubePlayer from './youtube-player';

new YoutubePlayer({
    selector: '.js-video',
    coverImageSize: 'maximum'
});

new YoutubePlayer({
    selector: '.js-video-2',
    coverImageSize: 'sd'
});

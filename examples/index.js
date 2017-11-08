/* eslint-disable */
import YoutubePlayer from '../src/js';
import './example.scss';

document.querySelectorAll('.js-video').forEach((element) => {
    new YoutubePlayer({
        element
    });
});

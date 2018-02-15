import YoutubePlayer from '../index';

describe('Youtube Player', () => {
    describe('setVideoId()', () => {
        test('it should exist', () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-url="https://www.youtube.com/watch?v=QdReaREiEpU&index=4&list=PL250B5642078BFF3F"></div>';
            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });
            expect(yp.setVideoId).not.toBe(undefined);
        });

        test('Should check for elements data-youtube-url ', () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-url="https://www.youtube.com/watch?v=QdReaREiEpU&index=4&list=PL250B5642078BFF3F"></div>';
            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });
            expect(yp.options.videoUrl).toBe('https://www.youtube.com/watch?v=QdReaREiEpU&index=4&list=PL250B5642078BFF3F');
        });

        test('Should check for elements data-youtube-id ', () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-id="QdReaREiEpU"></div>';
            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });
            expect(yp.options.videoId).toBe('QdReaREiEpU');
        });
    });

    describe('extractVideoIdfromUrl()', () => {
        test('it should exist', () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-url="https://www.youtube.com/watch?v=QdReaREiEpU&index=4&list=PL250B5642078BFF3F"></div>';
            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });
            expect(yp.extractVideoIdfromUrl).not.toBe(undefined);
        });

        test('Shoult return the correct video id from url', () => {
            document.body.innerHTML = '<div class="js-video"></div>';

            let urlArray = [
                'https://www.youtube.com/watch?v=DFYRQ_zQ-gk&feature=featured',
                'https://www.youtube.com/watch?v=DFYRQ_zQ-gk',
                'http://www.youtube.com/watch?v=DFYRQ_zQ-gk',
                '//www.youtube.com/watch?v=DFYRQ_zQ-gk',
                'www.youtube.com/watch?v=DFYRQ_zQ-gk',
                'https://youtube.com/watch?v=DFYRQ_zQ-gk',
                'http://youtube.com/watch?v=DFYRQ_zQ-gk',
                '//youtube.com/watch?v=DFYRQ_zQ-gk',
                'youtube.com/watch?v=DFYRQ_zQ-gk',
                'https://m.youtube.com/watch?v=DFYRQ_zQ-gk',
                'http://m.youtube.com/watch?v=DFYRQ_zQ-gk',
                '//m.youtube.com/watch?v=DFYRQ_zQ-gk',
                'm.youtube.com/watch?v=DFYRQ_zQ-gk',
                'https://www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US',
                'http://www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US',
                '//www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US',
                'www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US',
                'youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US',
                'https://www.youtube.com/embed/DFYRQ_zQ-gk?autoplay=1',
                'https://www.youtube.com/embed/DFYRQ_zQ-gk',
                'http://www.youtube.com/embed/DFYRQ_zQ-gk',
                '//www.youtube.com/embed/DFYRQ_zQ-gk',
                'www.youtube.com/embed/DFYRQ_zQ-gk',
                'https://youtube.com/embed/DFYRQ_zQ-gk',
                'http://youtube.com/embed/DFYRQ_zQ-gk',
                '//youtube.com/embed/DFYRQ_zQ-gk',
                'youtube.com/embed/DFYRQ_zQ-gk',
                'https://youtu.be/DFYRQ_zQ-gk?t=120',
                'https://youtu.be/DFYRQ_zQ-gk',
                'http://youtu.be/DFYRQ_zQ-gk',
                '//youtu.be/DFYRQ_zQ-gk',
                'youtu.be/DFYRQ_zQ-gk',
                'https://www.youtube.com/HamdiKickProduction?v=DFYRQ_zQ-gk'
            ];

            urlArray.forEach((url) => {
                let yp = new YoutubePlayer({
                    element: document.querySelector('.js-video'),
                    videoUrl: url
                });

                expect(yp.options.videoId).toBe('DFYRQ_zQ-gk');
            });
        });
    });

    describe('setCoverImage()', () => {
        test('Should get image src from data-cover-image attribute', () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-id="DFYRQ_zQ-gk" data-cover-image="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></div>';

            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });

            expect(yp.options.coverImageSrc).toBe('https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
        });

        test('Should throw an error if data-cover-image is invalid', async () => {
            document.body.innerHTML = '<div class="js-video" data-youtube-id="DFYRQ_zQ-gk" data-cover-image="http://123.png"></div>';

            let yp = new YoutubePlayer({
                element: document.querySelector('.js-video')
            });

            expect(yp.setCoverImage()).resolves.toBe(1);

            // expect(yp.options.coverImageSrc).toBe('https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
        });

        test('Should return largest size image', async () => {
            // document.body.innerHTML = '<div class="js-video" data-youtube-id="-wtIMTCHWuI"></div>';
            //
            // let yp = new YoutubePlayer({
            //     element: document.querySelector('.js-video'),
            //     coverImageSize: 'medium'
            // });
            //
            // await yp.setCoverImage();
            //
            // expect(yp.options.coverImageSrc).toBe('https://img.youtube.com/vi/-wtIMTCHWuI/maxresdefault.jpg');
        });

        test('Should return the correct image from youtube', () => {
            // document.body.innerHTML = '<div class="js-video" data-youtube-id="-wtIMTCHWuIk"></div>';
            //
            // let yp = new YoutubePlayer({
            //     element: document.querySelector('.js-video'),
            //     coverImageSize: 'high'
            // });
            //
            // expect(yp.options.coverImageSrc).toBe('http://i2.ytimg.com/vi/-wtIMTCHWuI/0.jpg');
            //
            // yp = new YoutubePlayer({
            //     element: document.querySelector('.js-video'),
            //     coverImageSize: 'sd'
            // });
            //
            // expect(yp.options.coverImageSrc).toBe('http://i2.ytimg.com/vi/-wtIMTCHWuI/sddefault.jpg');
            //
            // document.body.innerHTML = '<div class="js-video" data-youtube-id="tZmcFOt0E7M"></div>';
            //
            // yp = new YoutubePlayer({
            //     element: document.querySelector('.js-video'),
            //     coverImageSize: 'maximum'
            // });
            //
            // expect(yp.options.coverImageSrc).toBe('http://i2.ytimg.com/vi/-wtIMTCHWuI/0.jpg');
        });
    });
});

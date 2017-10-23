/*
 |--------------------------------------------------------------------------
 | Laravel Mix Config File
 |--------------------------------------------------------------------------
 |
 | Larvel mix is used as a build tool create all front end assets including
 | SCSS, JS, SVG Sprite and browsersync.
 |
 */

// Dependencies
const mix = require('laravel-mix');

mix.setPublicPath('./');

// Styles
mix.sass('src/lib/scss/base.scss', './lib');
mix.sass('src/lib/scss/default-skin.scss', './lib');
mix.js('src/lib/js/youtube-player.js', './lib');

// Demo Files
mix.sass('src/demo/scss/demo.scss', './docs/assets');
mix.js('src/demo/js/demo.js', './docs/assets');

// SVG Sprite
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /(\.vue|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.vue|\.js)$/,
                loader: 'eslint-loader',
                exclude: [/lib/, /node_modules/]
            }
        ]
    },
    output: {
        library: 'youtube-player',
        libraryTarget: 'umd'
    }
});

// Versioning and Sourcemaps
if (mix.config.production) {
    // Enable cache busting in production
    mix.version();

    // Code Splitting Example - More info on this in the README.md file
    // mix.extract(['vue']);
} else {
    // Enable sourcemap for development
    mix.sourceMaps();
}

// Browser Sync

if (!mix.config.hmr) {
    mix.browserSync({
        server: './',
        proxy: null,
        browser: 'google chrome',
        files: [
            'docs/assets/*.css',
            'docs/assets/*.js'
        ]
    });
}

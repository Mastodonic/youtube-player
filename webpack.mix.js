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

// .env Variables
const src = 'src';
const root = './';
const host = '192.168.10.10';

// Assets Path
const jsSrcPath = `${src}/js/`;
const scssSrcPath = `${src}/scss/`;
const devPath = `${root}/public/assets`;
const productionPath = './lib';

mix.setPublicPath(root);

let destPath = mix.config.production ? productionPath : devPath;

// Styles
mix.sass(`${scssSrcPath}/base.scss`, destPath);
mix.sass(`${scssSrcPath}/default-skin.scss`, destPath);

// Js
mix.js(`${jsSrcPath}/lib/youtube-player.js`, destPath);
mix.js(`${jsSrcPath}/demo.js`, destPath);

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
                exclude: /node_modules/
            }
        ]
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
        proxy: host,
        browser: 'google chrome',
        files: [
            `public/assets/*.css`,
            `public/assets/*.js`
        ]
    });
}

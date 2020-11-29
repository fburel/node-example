/*
 * run npm install gulp gulp-nodemon gulp-run --saveDev
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('default', function () {
    nodemon({
        script: './bin/www',
        ext: 'js',
        env : {
            PORT:3000,
            RUN_MODE:"debug",
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function(){
            console.log('Restarting');
        });
});

/*==========================================================
How to Gulp
Author: @trevisojs       - https://github.com/trevisojs
Author: @nicholasruggeri - http://ruggeri.io
==========================================================*/


/**
* List gulp dependencies
**/

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    gulpif      = require('gulp-if');


var prod = false; // var for production mode


/**
*
* Styles
* - Compile with 'compressed' output
* - Autoprefixer
*
**/

gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: prod ? 'compressed' : 'expanded'}))
        .pipe(prefix({
            browsers: ['last 3 versions'],
        }))
        .pipe(gulp.dest('build/css' ));
});




/**
*
* Build assets
* - styles
*
**/

gulp.task('build', [ 'styles'], function() {
    console.log('build assets');
});



/**
*
* Serve
* - Watch CSS
*
**/

gulp.task('watch', ['build'], function() {
    gulp.watch('src/scss/**/*.scss', ['styles']);
});



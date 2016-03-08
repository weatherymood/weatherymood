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
    zip         = require('gulp-zip');


var prod = false; // var for production mode


var files = [
    'manifest.json',
    'src/img/**/*',
    'src/css/**/*',
]

var icons = 'src/icons/**/*';


/**
*
* Styles
* - Compile with 'compressed' output
* - Autoprefixer
*
**/

gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix({
            browsers: ['last 3 versions'],
        }))
        .pipe(gulp.dest('src/css' ));
});


/**
*
* Build copy
*
**/
gulp.task('copy', function () {
  return gulp
    .src(files, {base:'.'})
    .pipe(gulp.dest('build'));
});


gulp.task('copy:icons', function () {
  return gulp
    .src(icons)
    .pipe(gulp.dest('build'));
});


gulp.task('zip', function() {
    return gulp.src('build/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('prod', ['styles', 'copy', 'copy:icons'], function() {
    gulp.start('zip')
});



/**
*
* Serve
* - Watch CSS
*
**/

gulp.task('watch', ['prod'], function() {
    gulp.watch('src/scss/**/*.scss', ['styles']);
});



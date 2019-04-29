var gulp                = require('gulp');
var sass                = require('gulp-sass');
var sourcemaps          = require('gulp-sourcemaps');
var cssc                = require('gulp-css-condense');
var minifyCss           = require('gulp-minify-css');
var path                = require('path');
// var concat              = require('gulp-concat');
// var minify 				= require('gulp-minify');

gulp.task('sass', function () {
  return gulp.src('./themes/*.scss')
    //.pipe(sourcemaps.init())
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(cssc())
    // .pipe(minifyCss({
    //       keepSpecialComments: 1
    // }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./themes'));
});

gulp.task('dev-sass', function () {
  return gulp.src('./themes/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(cssc())
    // .pipe(minifyCss({
    //       keepSpecialComments: 1
    // }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./themes'));
});

'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


function defaultTask() {
    return gulp.src('./src/styles/*.less')
        .pipe(less().on('error', console.error.bind(console)))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.less = defaultTask


exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series('less'));
};



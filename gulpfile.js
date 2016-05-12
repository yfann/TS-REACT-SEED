"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect');
var ts=require('gulp-typescript');
var tsProj=ts.createProject('tsconfig.json');//load tsconfig for tsc compiler
var config=require('./gulpfile.config')();

//host server
gulp.task('connect',function () {
    connect.server({
        root:['dist'],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

//build

gulp.task('ts',function () {
    gulp.src(config.paths.ts)
        .pipe(ts(tsProj))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('html',function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch',function () {
    gulp.watch(config.paths.ts,['ts']);
    gulp.watch(config.paths.html,['html']);
});

gulp.task('default',['ts','html','connect','watch']);
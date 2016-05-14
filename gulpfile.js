"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect');
var ts=require('gulp-typescript');
var del=require('del');
var gutil=require('gulp-util');
var inject=require('gulp-inject');
var swig=require('gulp-swig');
var concat=require('gulp-concat');


var tsProj=ts.createProject('tsconfig.json');//load tsconfig for tsc compiler
var config=require('./gulpfile.config')();

gulp.task('connect',function () {
    connect.server({
        root:['dist'],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

gulp.task('clean',function() {
    return del([config.paths.dist]);
})


gulp.task('ts',['clean'],function () {
   return gulp.src(config.paths.ts)
        .pipe(ts(tsProj))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist+'/scripts'));
});

gulp.task('html',['ts'],function () {
   var swigData={
       title:config.title
   };
   
   var sources=gulp.src([config.paths.dist+'/**/*.js'],{read:false});
   
   return gulp.src(config.paths.html)
        .pipe(swig({data:swigData}))
        .pipe(inject(sources,{ignorePath:'dist'}))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch',function () {
    gulp.watch(config.paths.ts,['ts']);
    gulp.watch(config.paths.html,['html']);
});

gulp.task('default',['html','watch','connect']);
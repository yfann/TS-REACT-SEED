"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect');
var del=require('del');
var gutil=require('gulp-util');
var inject=require('gulp-inject');
var swig=require('gulp-swig');
var concat=require('gulp-concat');
var source=require('vinyl-source-stream');
var sourcemaps=require('gulp-sourcemaps');
var buffer=require('vinyl-buffer');
var uglify=require('gulp-uglify');
var webpack=require('webpack')
//var tsProj=ts.createProject('tsconfig.json');//load tsconfig for tsc compiler
var config=require('./gulpfile.config')();
var webpackConfig=require('./webpack.config');

gulp.task('connect',function () {
    connect.server({
        root:[config.paths.distName],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

gulp.task('clean',function() {
    return del([config.paths.dist]);
});



gulp.task('ts',['clean'],function (callback) {
 	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError('ts', err);
		callback();
	});
});

gulp.task('css',['clean'],function () {
    return gulp.src(config.paths.css)
          .pipe(concat('bundle.css'))
          .pipe(gulp.dest(config.paths.dist+'/css'));
});


gulp.task('html',['ts','css'],function () {
   var swigData={
       title:config.title
   };
   
   var sources=gulp.src([config.paths.dist+'/**/*.js',
                    config.paths.dist+'/**/*.css'],{read:false});
   
   return gulp.src(config.paths.html)
        .pipe(swig({data:swigData}))
        .pipe(inject(sources,{ignorePath:config.paths.distName}))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch',function () {
    gulp.watch(config.paths.ts,['ts']);
    gulp.watch(config.paths.css,['css']);
    gulp.watch(config.paths.html,['html']);
});

gulp.task('default',['html','watch','connect']);
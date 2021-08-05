const gulp = require('gulp'); 
const {src, dest, watch, series, parallel} = require('gulp');
gulp.task('hello', function() {
    console.log('Hello Zell');
  });

  const browserSync = require('browser-sync').create();

function runBrowserSync(){
  browserSync.init({
    server: {baseDir:'app/'},
    notify:false,
    online:true,
  })
}
exports.runBrowserSync = runBrowserSync;


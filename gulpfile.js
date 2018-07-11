/*'use strict';
var gulp        = require('gulp');
var open = require('gulp-open')
var browserSync = require('browser-sync').create();
 

 //open new browser 
gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open({app: 'chrome'}));
});
 

gulp.task('default', ['open']);



// browser sync code
gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "localhost:3000",
      open: true
  });
});*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', function () {
  return gulp.src('sass/*.scss') // Gets all files ending with .scss in app/scss
  .pipe(sass())
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.reload({
  stream: true
  }))
  });

gulp.task('browser-sync', function () {
  browserSync.init({
  server: {
  baseDir: "./"
  }
  });
  }); 

  gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('sass/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('./index.html', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload);
    });

  gulp.task('default', ['watch']); 
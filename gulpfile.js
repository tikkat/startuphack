/* Modules & variables
-------------------------------------*/
var gulp          = require('gulp');
    sass          = require('gulp-ruby-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    rename        = require('gulp-rename');


/* Paths
-------------------------------------*/
var paths = {
  scss:       'stylesheets/main.scss',
  css:        'build/css/',
  cssReload:  'build/css/main.css',
  html:       '*.html'
};


/* Tasks
-------------------------------------*/
//Server
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(4000);
});

//Live-reload
var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});


//Styles
gulp.task('styles', function() {
  return sass(paths.scss)
  .on('error', function(err){
    console.error('Error!', err.message);
  })
  .pipe(autoprefixer())
  .pipe(gulp.dest(paths.css))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest(paths.css));
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}


/* Watchers
-------------------------------------*/
gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['styles']);
  gulp.watch(paths.html, notifyLiveReload);
  gulp.watch(paths.cssReload, notifyLiveReload);
});


gulp.task('default', ['express', 'styles', 'livereload', 'watch'], function() {

});

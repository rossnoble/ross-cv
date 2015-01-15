var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'lib/*.js'
    ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('production', function () {
  gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'lib/*.js'
    ])
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./app/js'));
});

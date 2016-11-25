var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/jquery-ui-dist/jquery-ui.js',
      './js/*.js'
    ])
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./public'));
});

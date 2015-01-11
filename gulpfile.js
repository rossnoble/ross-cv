var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./app/js'))
});

var gulp = require('gulp'),
  uglify = require('gulp-uglify');
  change = require('gulp-change');

function bookmarkletify(content) {
  return 'javascript:' + content;
}

gulp.task('default', function() {
  gulp.src('fooda_filters.js')
    .pipe(uglify())
    .pipe(change(bookmarkletify))
    .pipe(gulp.dest('build'));
});

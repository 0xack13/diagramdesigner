const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');



/*
gulp.task('js', done => {
   return gulp.src('src/*.js')
  .pipe(minify({noSource: true}))
  .pipe(concat('drawflow.min.js'))
  .pipe(gulp.dest('dist/'))

});
*/


gulp.task('css', done => {
  return gulp.src('./*.css')
  .pipe(minifyCSS())
  .pipe(concat('df.min.css'))
  .pipe(gulp.dest('./'))
});

gulp.task('default', gulp.parallel(
        /*'js',*/
        'css'
  )
);

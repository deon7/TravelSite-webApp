var gulp = require('gulp'),
watch = require('gulp-watch'),
autoprefixer = require('autoprefixer'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport,autoprefixer,nested,cssvars]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});

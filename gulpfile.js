gulp.task('copy-framework', function () {
    return gulp
        .src('./core/framework/**/*')
        .pipe(gulp.dest('./plugin/framework/'));
});
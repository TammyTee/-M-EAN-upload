// Include gulp
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        proxy : "localhost:3000" //node server
    });

    gulp.watch("./public/**/*.*").on("change", reload);
    gulp.watch("./routes/*.*").on("change", reload);
    gulp.watch("app.js").on("change", reload);
});

gulp.task('default', ['serve']);


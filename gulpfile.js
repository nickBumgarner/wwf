var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    sass = require("gulp-sass");
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

// Compiles all gulp tasks
gulp.task("default", ["sass"]);

// Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: ""
    }
  })
});

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("scss/**/*.scss")
      .pipe(sass({
        includePaths: sassPaths,
      }))
      .pipe(gulp.dest("css"))
      .pipe(browserSync.reload({
        stream: true
      }))
});
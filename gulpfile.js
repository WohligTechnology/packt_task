var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");
var concat = require("gulp-concat");
gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

var jsArr = [
  "node_modules/jquery/dist/jquery.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/angular/angular.js",
  "node_modules/angular-ui-router/release/angular-ui-router.min.js",
  "node_modules/lodash/lodash.js",
  "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
  "node_modules/async/dist/async.min.js",
  "js/app.js",
  "js/controllers.js",
  "js/navigation.js",
  "js/templateservice.js",
  "js/starwarsservice.js"
];

gulp.task("scripts", function() {
  return gulp
    .src(jsArr)
    .pipe(concat("concat.js"))
    .pipe(gulp.dest("./js"));
});

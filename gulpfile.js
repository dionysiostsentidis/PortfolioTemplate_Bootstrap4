const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
function sassify() {
   return gulp
      .src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest('src/css'));
}

// Move JS Files to src/js
function js() {
   return gulp
      .src([
         'node_modules/bootstrap/dist/js/bootstrap.min.js',
         'node_modules/jquery/dist/jquery.min.js',
         'node_modules/popper.js/dist/umd/popper.min.js',
      ])
      .pipe(gulp.dest('src/js'));
}

// Watch Sass & Serve
function serve() {
   gulp.watch('node_modules/bootstrap/scss/bootstrap.scss', sassify);
   gulp.watch('src/scss/*.scss', sassify);
   gulp.watch('src/*.html');
}

// Move Fonts to src/fonts
function fonts() {
   return gulp
      .src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('src/fonts'));
}

// Move Font Awesome CSS to src/css
function fa() {
   return gulp
      .src('node_modules/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest('src/css'));
}
exports.sassify = sassify;
exports.js = js;
exports.serve = serve;
exports.fa = fa;
exports.fonts = fonts;
gulp.task('default', gulp.series(sassify, js, fonts, fa, serve));

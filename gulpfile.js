// Agradeço a Deus pelo dom do conhecimento

var gulp        = require('gulp');
var minifyHTML  = require('gulp-minify-html');
var minifyCss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'))
});

gulp.task('html-watch', ['html'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('css'));
});

gulp.task('css-watch', ['css'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
        //.pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('js-watch', ['js'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('images', () => {
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images'));
});

gulp.task('default', ['html', 'css', 'js', 'images'], () => {
    browserSync.init({
    	proxy: 'localhost:8080'
    });

    gulp.watch("src/*.html", ['html-watch']);
    gulp.watch("src/css/*.css", ['css-watch']);
    gulp.watch("src/js/*.js", ['js-watch']);
});
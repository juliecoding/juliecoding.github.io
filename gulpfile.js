// 1. `npm init` in no-server project
// 1b. Copy dependecies from package.json into no-server package.json
// 1c. run `npm install` on command line
// 2. copy gulpfile.js into no-server
// 3. Update any folder paths in gulpfile.js to match your structure

var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, CacheBuster = require('gulp-cachebust')
, print = require('gulp-print')
, babel = require('gulp-babel')

var cachebust = new CacheBuster();


gulp.task('hello', function(){
  console.log("Hey, we're just getting started !!!")
})

gulp.task('build-css', function() {
  console.log("building....");
  return gulp.src('./public/styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
    console.log("finished")
})

gulp.task('build-js', function() {
   return gulp.src('public/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html', '.public/styles/*.*css', '.public/**/*.js'], ['build']);
});

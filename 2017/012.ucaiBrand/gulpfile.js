// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var livereload = require('gulp-livereload');
var del = require('del');


// 检查脚本
gulp.task('lint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass，压缩CSS
gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('./dist/css'));
});

// Images
gulp.task('images', function() {
  return gulp.src('./src/imgs/**/*.*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/imgs'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
        // 注释掉内容为js合并与重命名部分
        // .pipe(concat('all.js'))
        // .pipe(gulp.dest('./dist/js'))
        // .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Clean  任务执行前，先清除之前生成的文件
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/imgs'], cb)
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');
});

// 监听文件
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass']);
  // Watch .js files
  gulp.watch('src/js/*.js', ['lint','scripts']);
  // Watch image files
  gulp.watch('src/imgs/*', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**/*.*']).on('change', livereload.changed);

});
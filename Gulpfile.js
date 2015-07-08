var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var clean        = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');

// 应当兼容的浏览器版本
var compatBrowser = ['last 2 versions'];


// 清理目标文件夹
gulp.task('clean', function() {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});


// 编译sass样式
gulp.task('compile', ['clean'], function() {
    return sass('./src', { style: 'expanded' })
        .pipe(autoprefixer({ browsers: compatBrowser }))
        .pipe(gulp.dest('./dist'))
});


// 默认任务：监听变化并自动编译
gulp.task('default', ['compile'], function() {
    gulp.watch('./src/**/*.scss', ['compile']);
});

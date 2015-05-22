var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    sourceFile = './ApplicationStart.js',
    destFolder = './',
    destFile = './gulpApplication.js',
    uglify = require('gulp-uglify');


//To minify remove comment of uglify() and commnet [devtool & debig mode]

gulp.task('webpack', function () {
    return gulp.src(sourceFile)
        .pipe(webpack(
            {
                devtool: "#sourcemap",
                debug: true,
                output: {
                    filename: destFile
                }
            }))
        //.pipe(uglify())
        .pipe(gulp.dest(destFolder));
});


gulp.task('watch', function () {
    gulp.watch(['./*.js', '!./gulpApplication.js'], ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);
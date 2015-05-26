var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    sourceFile = './ApplicationStart.js',
    destFolder = './',
    destFile = './gulpApplication.js',
    uglify = require('gulp-uglify'),
    jest = require('gulp-jest');


//To minify remove comment of uglify() and commnet [devtool & debig mode]

gulp.task('webpack', function () {
    return gulp.src(sourceFile)
        .pipe(webpack(
            {
                devtool: "#sourcemap",
                debug: true,
                output: {
                    filename: destFile
                },
                module: {
                    loaders: [
                        {test: /\.js$/, loader: 'jsx-loader?harmony'} // loaders can take parameters as a querystring
                    ]
                },
                resolve: {
                    // you can now require('file') instead of require('file.coffee')
                    extensions: ['', '.js', '.json', '.jsx']
                }
            }))
        //.pipe(uglify())
        .pipe(gulp.dest(destFolder));
});


gulp.task('jest', function () {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "../preprocessor",
        unmockedModulePathPatterns: [
            "react"
        ]
    }));
});


gulp.task('watchComp', function () {
    gulp.watch(["./**/*.js", "!./gulpApplication.*","!./__tests__"], ['webpack']);
});

gulp.task('watchTest', function () {
    gulp.watch(["./__tests__/*.js"], ['jest']);
});

gulp.task('default', ['jest', 'webpack', 'watchTest', 'watchComp']);
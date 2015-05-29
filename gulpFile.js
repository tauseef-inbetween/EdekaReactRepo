var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    sourceFile = './ApplicationStart.js',
    destFolder = './generatedScript',
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
                        {test: /\.css$/, loader: "style-loader!css-loader" },
                        { test: /\.woff($|\?)/,   loader: 'url-loader' },
                        { test: /\.ttf($|\?)/,   loader: 'url-loader' },
                        { test: /\.eot($|\?)/,   loader: 'url-loader' },
                        { test: /\.svg($|\?)/,    loader: 'url-loader' },
                        { test: /\.png$/, loader: "url-loader?limit=100000" },
                        { test: /\.jpg$/, loader: "file-loader" },
                        {test: /\.js$/, loader: 'jsx-loader?harmony'}
                    ]
                },
                resolve: {
                    // you can now require('file') instead of require('file.js')
                    extensions: ['', '.js', '.json', '.jsx', '.css']
                }
            }))
        //.pipe(uglify())
        .pipe(gulp.dest(destFolder));
});


gulp.task('jest', function () {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "./libraries/buildDependency/preprocessor",
        unmockedModulePathPatterns: [
            "react"
        ]
    }));
});


gulp.task('watchComp', function () {
    gulp.watch(["./*.*", "./**/*.*", "!./generatedScript/*.*", "!./__tests__"], ['webpack']);
});

gulp.task('watchTest', function () {
    gulp.watch(["./__tests__/*.js"], ['jest']);
});

gulp.task('default', ['jest', 'webpack', 'watchTest', 'watchComp']);
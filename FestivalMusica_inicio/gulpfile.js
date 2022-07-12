const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("dart-sass"));
sass.compiler = require("dart-sass");
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
 
function css()
{
    return src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"));
}
 
function comprimir()
{
    return src("./src/scss/app.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest("./build/css"));
}

function javascript() {
    return src('src/js/**/*.js')
    .pipe( concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function imagenes() {
    return src('src/img/**/*')
    .pipe( imagemin() )
    .pipe(dest('./build/img'));
}

function versionWebp() {
    return src('src/img/**/*')
    .pipe( webp() )
    .pipe(dest('./build/img'));
} 
 
function watchA() {
    watch("./src/scss/**/*.scss", css) //* = a la carpeta actual - ** = todos los archivops con esa extension
    watch('src/js/**/*.js', javascript)
}

exports.css = css;
exports.comprimir = comprimir;
exports.imagenes = imagenes;
exports.watchA = watchA;

exports.default = series(css, javascript, imagenes, versionWebp, watchA);
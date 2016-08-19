var gulp = require('gulp');
var minifyCss = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('default', () => {
    gulp.src('./node_modules/bootstrap/dist/css/*.min.css')
        .pipe(gulp.dest('./public/css'));

    gulp.src('./node_modules/jquery/dist/*.min.js')
        .pipe(gulp.dest('./public/js'));

    gulp.src('./node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest('./public/fonts'));

    gulp.src('./node_modules/bootstrap/dist/js/*.min.js')
        .pipe(gulp.dest('./public/js'));

    gulp.src('./dev/css/*')
        .pipe(minifyCss())
        .pipe(rename(path =>{
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./public/css'));
});

var watcher = gulp.watch(['default']);
watcher.on('change', event => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
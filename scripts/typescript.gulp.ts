import * as gulp from 'gulp'
import * as typescript from 'gulp-typescript'
import * as concat from 'gulp-concat'

function getDistTypescriptTask() {
    return gulp.src(['src/**.ts'])
        .pipe(typescript())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
}

function getTmpTypescriptTask() {
    return gulp.src(['src/**.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('./.tmp'))
}

export { getDistTypescriptTask, getTmpTypescriptTask }

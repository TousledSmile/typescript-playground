import * as gulp from 'gulp'

import { getDistTypescriptTask, getTmpTypescriptTask } from "./scripts/typescript.gulp";

gulp.task('dist:typescript', getDistTypescriptTask)

gulp.task('tmp:typescript', getTmpTypescriptTask)

gulp.task('dist', ['dist:typescript'])

gulp.task('tmp', ['tmp:typescript'])

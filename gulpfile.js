import gulp from "gulp";
import {path} from "./gulp/config/path.js";
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";

global.app={
    path:path,
    gulp:gulp
}

function watcher() {
    gulp.watch(path.watch.files,copy)
    gulp.watch(path.watch.html,html)
}

const mainTasks = gulp.parallel(copy,html)

const dev = gulp.series(reset,copy,watcher)

gulp.task('default',dev);

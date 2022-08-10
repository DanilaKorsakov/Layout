
export const js = () =>{
    return app.gulp.src(app.path.src.js,{sourcemaps:app.isDev})
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}
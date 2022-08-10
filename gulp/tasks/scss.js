import dartSass from 'sass';
import gulpSaas from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSaas(dartSass);

export const scss = () =>{
    return app.gulp.src(app.path.src.scss,{sourcemaps:app.isDev})
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(app.plugins.replace(/@assets\//g,'../assets/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserlist: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname:".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}
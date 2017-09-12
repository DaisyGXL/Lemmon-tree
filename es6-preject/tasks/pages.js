import gulp from 'gulp';
import gulpif from 'gulp-if';//处理if语句
import livereolad from 'gulp-livereload';//文件热更新
import args from './util/args';//自定义命令行参数的包

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereolad()))
})
import gulp from 'gulp';
import gulpif from 'gulp-if';//处理if语句
import concat from 'gulp-concat';//处理文件拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named'; //文件重命名
import livereolad from 'gulp-livereload';//文件热更新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//文件压缩
import {log, color} from 'gulp-util';//命令行输出
import args from './util/args';//自定义命令行参数的包

//创建gulp的任务 
gulp.task('scripts', ()=> {
    //用plumer改变错误处理机制
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler: function() {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, stats)=>{
            log(`Finished '${color.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereolad()))
})
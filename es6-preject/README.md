目录说明
app--前端目录
    js--交互实现
        class--类
            test.js
            index.js--入口文件
    css--样式
    views--模板页面
        error.ejs--错误模板文件 node express使用的模板引擎是ejs引擎，相当于html
        index.ejs--入口模板文件
server--服务器端目录  1.express脚手架依赖于nodejs  express -e . 在当前目录使用ejs模板引擎 2.npm install
tasks--构建工具目录
    util--放置常见脚本的目录
        args.js--定义gulp命令行脚本 .option就是定义gulp -***中对内容  .argv表示输入对命令行以字符串形式进行解析
    scripts.js--如何通过gulp对js文件进行重命名，压缩和存放  脚本服务文件
        文件依赖的包说明：（import后npm install 以下包+yargs --save-dev  更新依赖包并且添加到package.json）
            'gulp' 
            'gulp-if';//处理if语句 
            'gulp-concat';//处理文件拼接 
            'webpack';//打包  'webpack-stream';
            'vinyl-named'; //文件重命名
            'gulp-plumber';//处理文件信息流
            'gulp-uglify';//文件压缩
            'gulp-util';//命令行输出
            './util/args';//自定义命令行参数的包
    pages.js--模板脚本
    server.js--服务器脚本
    css.js--监听样式脚本
    browser.js--浏览器自动监听变化并编译到指定文件夹
    clean.js--编译前情况文件夹
    build.js--把所有脚本关联起来，编排执行顺序
    default.js--默认执行的任务
package.json--npm init自动创建，可以通过npm install自动安装依赖包
.babelrc--babel的配置文件
gulpfile.babel.js--gulp的配置文件，es6的语法需要该文件，如果是es5的语法文件为gulpfile.js
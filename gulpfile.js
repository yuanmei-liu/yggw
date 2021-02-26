//导入依赖
var gulp = require('gulp')
var cssmin = require("gulp-cssmin")
var autoprefixer = require("gulp-autoprefixer")
var uglify = require("gulp-uglify")
var rname = require("gulp-rename")
var htmlmin = require("gulp-htmlmin")
var del = require("del") //清除 DIST 文件夹
var webserver = require("gulp-webserver") //自动打开浏览器



//img转存任务
let img1 = () => {
    return gulp.src("./src/img/*.*")
        .pipe(gulp.dest("./dist/img"))
}

//php转存任务
let php1 = () => {
        return gulp.src("./src/php/*.*")
            .pipe(gulp.dest("./dist/php"))
    }
    //css任务
let css1 = () => {
        return gulp.src("./src/css/*.css")
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(gulp.dest("./dist/css"))
    }
    //js任务
let js1 = () => {
        return gulp.src("./src/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest("./dist/js"))
    }
    //重命名 重命名任务只能一个文件一个文件的执行
let cong1 = () => {
    return gulp.src("./src/js/totop.js")
        .pipe(uglify())
        .pipe(rname("totop.min.js"))
        .pipe(gulp.dest("./dist/js"))
}

//html任务
let html1 = () => {
    return gulp.src("./src/pages/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true, //移除所有空格,会变成一行代码
            minifyCSS: true, //把页面里面style标签里面的css样式也去空格
            minifyJS: true, //把页面里面script标签里面的js代码也去空格
        }))
        .pipe(gulp.dest("./dist/pages"))
}

//删除任务
var delete1 = () => {
        return del(['./dist'])
    }
    //自动打开浏览器
var web1 = () => {
    return gulp.src('./dist')
        .pipe(webserver({
            port: 8889, //端口号,0-65535之间,尽量不要用0-1023
            open: './pages/index.html', //你默认打开的首页,路径从dist开始书写
            livereload: true, //热更新,就是当dist里面代码有变化的时候自动刷新浏览器
            // proxies: [ //这个第三方模块还可以帮助我们配置代理
            //     //直接在使用webserver的时候添加一个配置项:   proxies:[]
            //     {
            //         source: '/abc', //表示请求的地址
            //         target: 'http://www.xuexi.com/2013/day34/show/src/php/dem1.php' //你要代理的地址
            //     },
            //     {
            //         source: '/eee', //表示请求的地址
            //         target: 'http://127.0.0.1/json.php' //你要代理的地址
            //     }
            // ]
        }))
}

//监测所有任务
let watch1 = () => {
    gulp.watch("./src/css/*.css", css1)
    gulp.watch("./src/pages/*.html", html1)
    gulp.watch("./src/js/*.js", js1)
}


//单个导出任务
// module.exports.cssHeader = css1
// module.exports.jsHeader = js1
// module.exports.congHeader = cong1
// module.exports.htmlHeader = html1
// module.exports.delHeader = delete1 //导出删除任务


//批量执行所有任务(异步)
// module.exports.default = gulp.parallel(css1, js1, cong1, html1)
//批量执行所有任务(同步)，要先做删除，再压缩转存
module.exports.default = gulp.series(delete1,
    gulp.parallel(img1, php1, css1, js1, cong1, html1), web1, watch1)
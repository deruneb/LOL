//引入gulp模块
var gulp=require("gulp");

//引入path路径系统模块
var path=require("path");

//引入less编译模块
var less=require("gulp-less");

//引入css压缩模块
var cleanCSS=require("gulp-clean-css");

//引入rename重命名模块
var rename=require("gulp-rename");

//引入热刷新模块
var livereload=require("gulp-livereload");

//配置less任务
gulp.task("lessTask",function() {
    //less编译任务的代码
    gulp.src('./src/less/*.less') //less源文件
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        })) //执行less方法编译less和路径的拼接
        .pipe(cleanCSS({compatibility: 'ie8'}))  //压缩css样式，并兼容IE8
        .pipe(rename({
            suffix: ".min", //文件名的后缀
        }))  //重命名css为.min.css
        .pipe(gulp.dest('./style')) //css样式的输出路径
        .pipe(livereload()); //重载
});

//配置默认任务
gulp.task("default",function () {
    //开启监听并刷新的任务
    livereload.listen();

    //配置监视任务的目标和执行的任务名称
    //语法：gulp.watch('监视的文件', [执行任务的数组]);
    gulp.watch('./src/less/*.less',["lessTask"]);
});
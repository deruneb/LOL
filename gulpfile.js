//引入gulp
var gulp = require("gulp");

//引入less编译模块
var less = require("gulp-less")

//引入path模块
var path = require("path");

//引入文件监听
var watch = require("gulp-watch");

//引入热刷新
var livereload = require('gulp-livereload');


//配置
gulp.task("lessTest",function(){
     //JS设置源文件的路径和文件名称--less
     gulp.src("./src/less/*.less")
     .pipe(less({
         paths:[ path.join(__dirname, 'less', 'includes') ]
     }))
     //目标文件的路径和文件名
     .pipe(gulp.dest('./style/'))
     //启动热刷新
     .pipe(livereload());

});
//配置监听
gulp.task("default",function(){
    //热刷新
    livereload.listen();
    gulp.watch('./src/less/*.less',["lessTest"])
})

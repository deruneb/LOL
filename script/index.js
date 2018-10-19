/* 搜索框显示/关闭功能 */
//给搜索按钮添加点击事件
$("#search-lol").on("click",function(){
    //显示搜索框
    $(".head-search").show();
})
// 给关闭搜索添加点击事件
$("#delete").on("click",function(){
    //关闭搜索框
    $(".head-search").hide();
})

/* 广告轮播图功能 */
//配置轮播的参数
$("#ppt01").tyslide({
    boxh:380,//盒子的高度
    w:820,//盒子的宽度
    h:340,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:false,//是否显示左右按钮
    radius:8,//控制按钮圆角度数
});

/* 广告新闻切换菜单功能 */
//获取所有菜单,并注册移入事件
$(".news-menu li").on("mouseover",function(){
    //定义变量i获取当前菜单的索引值
    var $i = $(this).index();
    //给当前菜单添加样式，兄弟隐藏样式
    $(this).addClass("active").siblings().removeClass("active");
    //当前菜单对应的内容显示，其他的兄弟内容隐藏
    $(".conts-box>ul").eq($i).show().siblings().hide();
});


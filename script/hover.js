// hover导航子菜单
(function () {
    var T_hoverShowInit = function (hoverFrom, hoverLayer, hoverFuncBack, showDelay) {
        var hover$ = $(hoverLayer);
        var timeout;
        var showTimeout;
        var showDelay = showDelay || 0;
        $(hoverFrom + ',' + hoverLayer).on('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //移入hover层和hover触发者
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            showTimeout = setTimeout(function () {
                if (!hover$.hasClass('show')) {
                    hover$.addClass('show');
                    hoverFuncBack && hoverFuncBack();
                }
            }, showDelay);
        }).on('mouseleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //移出hover层和hover触发者,因为元素间隔和子元素的原因,可能会频发触发out,所以使用延迟避免闪烁
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            timeout = setTimeout(function () {
                hover$.removeClass('show');
            }, 100);
        });
    };

    var TopHoverControl = {
        init: function () {
            //初始化导航hover子菜单
            T_hoverShowInit('#head-nav','.head-nav-sub' ,false, 300);
            //初始化掌上联盟hover二维码            
            T_hoverShowInit('#phone-lol','.head-nav-qr' ,false, 300);
            //初始化登录hover出现登录信息           
            T_hoverShowInit('.login','.head-login-msg' ,false, 300);
        }
    };
    var TopModulejs = {
        init: function () {
            TopHoverControl.init();
        }
    };
    
    TopModulejs.init();

})(window);


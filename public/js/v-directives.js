Vue.directive('flower', {
    bind: function (el, binding, vnode) {
        el=$(el);
        var flowerControl=el.find('.show-flower');
        var flowerContent=el.find('.flower-content');
        //console.log(flowerButton);
        var flowers=el.find('.flower');
        var flowerComfirm=el.find('.flower-confirm button');
        //console.log(flowerControl);

        //献花页面滑入滑出控制
        flowerControl.on('click',function(){
            flowerContent.stop(true, false).slideToggle();
        });
        //选择花朵控制
        flowers.on('click',function(e){
            //console.log(flowers);
            $(flowers).removeClass('active');
            //for(var i=0;i<flowers.length;i++){
            //    $(flowers[i]).removeClass('active');
            //}
            //console.log(e);
            $(e.currentTarget).addClass('active');
        });
        //确认送花按钮
        flowerComfirm.on('click',function(){
            $(flowers).removeClass('active');
            flowerContent.slideUp();
        })


        //el.
    }
})
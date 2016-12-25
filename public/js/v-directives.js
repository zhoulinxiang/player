Vue.directive('flower', {
    bind: function (el, binding, vnode) {
        el=$(el);
        var flowerControl=el.find('.show-flower');
        var flowerContent=el.find('.flower-content');
        //console.log(flowerButton);
        var flowers=el.find('.flower');
        var flowerComfirm=el.find('.flower-confirm');
        //console.log(flowerControl);

        //献花页面滑入滑出控制
        flowerControl.on('click',function(){
            flowerContent.stop(true, false).fadeToggle();
        });
        ////选择花朵控制
        //flowers.on('click',function(e){
        //    //console.log(flowers);
        //    $(flowers).removeClass('active');
        //    //for(var i=0;i<flowers.length;i++){
        //    //    $(flowers[i]).removeClass('active');
        //    //}
        //    //console.log(e);
        //    $(e.currentTarget).addClass('active');
        //});
        //console.log(flowerComfirm);
        //确认送花按钮
        flowerComfirm.on('click',function(){
            $(flowers).removeClass('active');
            flowerContent.stop(true, false).fadeOut();
        })
        //el.
    }
});
Vue.directive('select-one', {
    bind: function (el, binding, vnode) {
        el=$(el);
        var selectId=el[0].dataset.selectid;
        var slectItem=el.children('.'+selectId);
        var clearItem=el.children('.select-confirm');

        //选择控制
        slectItem.on('click',function(e){
            //console.log(flowers);
            slectItem.removeClass('active');
            //for(var i=0;i<flowers.length;i++){
            //    $(flowers[i]).removeClass('active');
            //}
            //console.log(e);
            $(e.currentTarget).addClass('active');
        });

        clearItem.on('click',function(){
            slectItem.removeClass('active');
        })
    },
    //update:function (el, binding, vnode) {
    //    el=$(el);
    //    var selectId=el[0].dataset.selectid;
    //    var slectItem=el.children('.'+selectId);
    //    var clearItem=el.children('.select-confirm');
    //
    //    //选择控制
    //    slectItem.on('click',function(e){
    //        //console.log(flowers);
    //        slectItem.removeClass('active');
    //        //for(var i=0;i<flowers.length;i++){
    //        //    $(flowers[i]).removeClass('active');
    //        //}
    //        //console.log(e);
    //        $(e.currentTarget).addClass('active');
    //    });
    //
    //    clearItem.on('click',function(){
    //        slectItem.removeClass('active');
    //    })
    //},
})
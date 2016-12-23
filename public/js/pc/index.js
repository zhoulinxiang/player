//$(function () {
//var video;
//var leftContent, appContent, fullPlayer, fullApp;
//var video2=document.getElementById("video");
//var videoControls;


var app = new Vue({
    el: '#app',
    data: appParam.appDatas,
    methods: {
        sendFlower: function (type) {
            console.log('send flower')
            this.videoControls.route = '';
            //sole.log(this.voice);
        },
        switchRoute: function (routetmp) {
            this.videoControls.route = routetmp;
        },
        switchAlert: function (alerttmp) {
            this.alert = alerttmp;
        },

    },

    mounted: function () {
        initDom();
        //video = $('#video')[0];
        //videoControls = $('#video-controls');
        //video.volume = 0.5;
        //console.log(video);


        //fullPlayer = $('.full-play-control');
        //fullApp = $('.full-control');
        //if (IsPC()) {
        //
        //video控制器滑入滑出
        //    $(video).parent().mouseenter(
        //        function () {
        //            videoControls.stop(true, false).slideDown();
        //        }
        //    );
        //    $(video).parent().mouseleave(
        //        function () {
        //            videoControls.stop(true, false).slideUp();
        //        }
        //    )
        //}


    },
    watch: {
        voice: function (newValue, oldValue) {
            var voiceNum = (newValue / 100);
            console.log('voice--' + voiceNum);
            //console.log(video2);
            appParam.videoComponents.video[0].volume = voiceNum;
        },
        'videoControls.showController': function (nv, ov) {
            //console.log('change video controller state.' + nv)
            //console.log(this);
            if (nv) {
                if (this.videoControls.showCtrlFlag) {
                    clearTimeout(this.videoControls.showCtrlFlag);
                    this.videoControls.showCtrlFlag = null;
                }
                videoComponents.videoControls.slideDown('fast');
            } else {
                if (this.videoControls.showCtrlFlag) {
                    clearTimeout(this.videoControls.showCtrlFlag);
                    this.videoControls.showCtrlFlag = null;
                }
                this.videoControls.showCtrlFlag = setTimeout("videoComponents.videoControls.slideUp('fast');", 1000);
            }
        },
        'videoControls.bufferedTime': function (nv, ov) {
            videoComponents.bufferedBar.width((nv / this.videoControls.durationTime) * videoComponents.playBar.width());
        },
        'videoControls.playedTime': function (nv, ov) {
            //console.log(nv+'----'+ov);
            //console.log('playedtime:' + this.videoControls.playedTime);
            this.videoControls.playedBarWidth = Math.round((nv / this.videoControls.durationTime) * videoComponents.playBar.width());
            videoComponents.playedBar.width(this.videoControls.playedBarWidth);
            //videoComponents.video[0].currentTime=nv;
        },
        'videoControls.playedBarWidth': function (nv, ov) {
            //this.videoControls.playedTime=
        },
        'videoControls.setPlayedTime':function(nv,ov){
            videoComponents.video[0].currentTime=nv;
        }

    },
    filters: {
        timer: function (value) {
            if (!value) return '00:00';
            value = parseInt(value);
            var m = Math.floor(value / 60),
                n = value % 60;
            return ((m >= 10) ? m : ('0' + m)) + ':' + ((n >= 10) ? n : ('0' + n));
        }
    }
});
//PC端 宽度撑满高度自适应
function resize(){
    var wrap=$('.wrap');
    wrap.height(window.innerWidth/2.14);
    if((window.innerHeight-wrap.height())/2>0){
        wrap.css('margin-top',(window.innerHeight-wrap.height())/2);
    }else{
        wrap.css('margin-top',0);
    }
}
$(window).on('load',function(){
    console.log('load');
    resize()

});
$(window).on('resize',function(){
    console.log('resize');
    resize()
})
//});
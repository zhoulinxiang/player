//$(function () {
//var video;
//var leftContent, appContent, fullPlayer, fullApp;
//var video2=document.getElementById("video");
var videoControls;


var app = new Vue({
    el: '#app',
    data: {
        voice: 50,
        route: 'im',
        //    im,flower,question
        alert: '',
        //hongbao,
        //聊天控制数据
        imControls:{
            text:'',
            messages:[]
        },
        //播放器控制数据
        videoControls:{
            fullPlayer:false,
            //播放器是否全屏，
            fullApp:false,
            //网页是否全屏


        }
    },
    methods: {
        sendFlower: function (type) {
            console.log('send flower')
            if (type == 'touch') {
                this.route = 'im';
            }
            //sole.log(this.voice);
        },
        switchRoute: function (routetmp) {
            this.route = routetmp;
        },
        switchAlert: function (alerttmp) {
            this.alert = alerttmp;
        },

    },

    mounted: function () {
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
            video.volume = voiceNum;
        }
    }
});

//});
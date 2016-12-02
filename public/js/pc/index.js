//$(function () {
var video;
var leftContent, appContent, fullPlayer, fullApp;
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
        imControls:{
            text:'',
            messages:[]
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
        video = $('#video')[0];
        videoControls = $('#video-controls');
        video.volume = 0.5;
        console.log(video);

        leftContent = $('.left-content');
        appContent = $('#app');
        fullPlayer = $('.full-play-control');
        fullApp = $('.full-control');
        if (IsPC()) {
            fullPlayer.on('click', function () {
                console.log('click fullPlayer');
                fullscreen(leftContent[0]);
            });
            fullApp.on('click', function () {
                console.log('click fullApp');
                fullscreen(appContent[0]);
            });
            //video控制器滑入滑出
            $(video).parent().mouseenter(
                function () {
                    videoControls.stop(true, false).slideDown();
                }
            );
            $(video).parent().mouseleave(
                function () {
                    videoControls.stop(true, false).slideUp();
                }
            )
        }


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
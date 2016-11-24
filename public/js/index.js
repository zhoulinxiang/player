//$(function () {
    var video;
    var leftContent,appContent,fullPlayer,fullApp;
    //var video2=document.getElementById("video");
    var videoControls;


    var app=new Vue({
        el: '#app',
        data: {
            voice:50
        },
        methods:{
            sendFlower:function(){
                console.log('send flower')
                //sole.log(this.voice);
            },
        },

        mounted:function(){
            video = $('#video')[0];
            videoControls = $('#video-controls');
            video.volume=0.5;
            console.log(video);

            leftContent=$('.left-content');
            appContent=$('#app');
            fullPlayer=$('.full-play-control');
            fullApp=$('.full-control');

            fullPlayer.on('click',function(){
                console.log('click fullPlayer');
                fullscreen(leftContent[0]);
            });
            fullApp.on('click',function(){
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



        },
        watch:{
            voice:function(newValue,oldValue){
                var voiceNum=(newValue/100);
                console.log('voice--'+voiceNum);
                //console.log(video2);
                video.volume=voiceNum;
            }
        }
    });

//});
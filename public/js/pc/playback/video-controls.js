
var videoComponents=appParam.videoComponents;
//需要依赖全局vue组件app
var videoDatas = app.videoControls;

var timeoutFlag=null;
var videoControls = {
    bindEvents: function () {
        //初始声音0.5
        videoComponents.video[0].volume = 0.5;

        videoComponents.playBtn.on('click',function(){
            videoDatas.play=true;
            videoComponents.video[0].play();
        });
        videoComponents.pauseBtn.on('click',function(){
            videoDatas.play=false;
            videoComponents.video[0].pause();
        });
        videoComponents.video.on('loadedmetadata',function(e){
            //console.log('loadmetadata');
            //console.log(e);
            videoDatas.durationTime=videoComponents.video[0].duration;

            //videoDatas.playedTime=100;
        });
        videoComponents.video.on('play',function(){
            console.log('play');
            videoDatas.play=true;
        });
        videoComponents.video.on('pause',function(){
            console.log('pause');
            videoDatas.play=false;
        });
        videoComponents.video.on('timeupdate',function(e){
            //console.log('timeupdate');
            //console.log(videoComponents.video[0].currentTime);

            videoDatas.playedTime=videoComponents.video[0].currentTime  ;
            videoDatas.bufferedTime=Math.round(videoComponents.video[0].buffered.end(0)) ;
        });
        videoComponents.playedSlide.mousedown(function(){
            console.log("mousedown");
            var lastscreenx;
            $('body').on('mousemove',function(e){
                var widthChange=0;
                //console.log('mousemove');
                //console.log(e);
                if(lastscreenx){
                    widthChange=e.screenX-lastscreenx;
                    lastscreenx=e.screenX;
                }else{
                    lastscreenx=e.screenX;
                }
                //console.log(widthChange);
                var width=videoComponents.playedBar.width()+widthChange;
                if(width>videoComponents.playedBar.parent().width()){
                    width=videoComponents.playedBar.parent().width();
                }
                videoComponents.playedBar.width(width);
                //console.log(width/videoComponents.playedBar.parent().width());
                var playtime=Math.round((width/videoComponents.playedBar.parent().width())*videoDatas.durationTime);
                //console.log('playtime:'+playtime);
                if (playtime<0){
                    playtime=0;
                }
                if (playtime>videoDatas.durationTime) {
                    playtime=videoDatas.durationTime;
                }
                //console.log('playtime:'+playtime);
                videoDatas.playedTime=playtime;
                //videoDatas.playedTime=Math.round(videoComponents.video[0].currentTime)


            });
            $('body').on('mouseup',function(){
                console.log('mouseup');
                $('body').off('mousemove');
                $('body').off('mouseup');
            });
        })


        //video控制器滑入滑出
        this.bindShowControls();
        //播放器全屏
        videoComponents.fullPlayerFalseBtn.on('click', function () {
            console.log('click fullPlayer');
            fullscreen(videoComponents.leftContent[0]);
            videoDatas.fullPlayer=true;
        });
        //播放器缩小
        videoComponents.fullPlayerTrueBtn.on('click', function () {
            console.log('click fullPlayer');
            exitFullscreen();
            //videoDatas.fullPlayer=!videoDatas.fullPlayer;
        });
        //网页全屏
        videoComponents.fullAppFalseBtn.on('click', function () {
            console.log('click fullPlayer');
            fullscreen(document.body);
            videoDatas.fullApp=true;
        });
        //网页缩小
        videoComponents.fullAppTrueBtn.on('click', function () {
            console.log('click fullPlayer');
            exitFullscreen();
            //videoDatas.fullPlayer=!videoDatas.fullPlayer;
        });
        //献花显示隐藏
        videoComponents.videoControls.find('.flower-control>button').on('click',function(){
            if(videoDatas.route=='flower'){
                videoDatas.route=''
            }else{
            videoDatas.route='flower';
            }
        });
        videoComponents.videoControls.find('.problem-control>button').on('click',function(){
            if(videoDatas.route=='question'){
                videoDatas.route=''
            }else{
                videoDatas.route='question';
            }
        });


        //fullAppFalseBtn.on('click', function () {
        //    console.log('click fullApp');
        //    fullscreen(appContent[0]);
        //});
    },
    bindShowControls:function(){
        videoComponents.video.parent().parent().mouseenter(
            function () {
                //videoComponents.videoControls.stop(true, false).slideDown();
                videoDatas.showController=true;
            }
        );
        videoComponents.video.parent().parent().mouseleave(
            function () {
                //videoComponents.videoControls.stop(true, false).slideUp();
                console.log("")
                videoDatas.showController=false;
            }
        );
        videoComponents.video.mousemove(
            function (e) {
                //videoComponents.videoControls.stop(true, false).slideUp();
                //videoDatas.showController=false;
                //console.log('mouse move');
                //console.log(e.target);
                //if(e.target!==videoComponents.video[0]){
                //    return;
                //}
                //console.log(e);
                videoDatas.showController=true;
                //videoDatas.showController=false;
                if(timeoutFlag){
                    clearTimeout(timeoutFlag);
                    timeoutFlag=null;
                    timeoutFlag=setTimeout("videoDatas.showController=false",1000);

                }else{
                    timeoutFlag=setTimeout("videoDatas.showController=false",1000);
                }
            }
        );
        videoComponents.videoControls.mouseenter(
            function () {
                console.log('mouseeenter')
                clearTimeout(timeoutFlag);
                timeoutFlag=null;
            }
        );
    },
};
videoControls.bindEvents();

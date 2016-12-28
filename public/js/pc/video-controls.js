
var videoComponents=appParam.videoComponents;
//需要依赖全局vue组件app
var videoDatas = app.videoControls;

var timeoutFlag=null;
var videoControls = {
    bindEvents: function () {
        //初始声音0.5
        videoComponents.video[0].volume = 0.5;

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
    //展示视频区消息提示
    showMessage:function(message,time){
        app.videoControls.message=message;
        if(time){
            setTimeout(this.closeMessage(),time);
        }
    },
    //关闭视频区消息展示
    closeMessage:function(){
        app.videoControls.message='';
    }

};
videoControls.bindEvents();

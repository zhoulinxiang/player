var videoComponents = {
    fullPlayerFalseBtn: $('.full-play-control-false'),
    fullPlayerTrueBtn: $('.full-play-control-true'),
    fullAppFalseBtn: $('.full-app-control-false'),
    fullAppTrueBtn: $('.full-app-control-true'),
    leftContent:$('.left-content'),
    appContent:$('#app'),
    video:$('#video'),
    videoControls : $('#video-controls'),
    };
//需要依赖全局vue组件app
var videoDatas = app.videoControls;
var videoControls = {
    bindEvents: function () {
        //初始声音0.5
        videoComponents.video[0].volume = 0.5;
        //video控制器滑入滑出
        videoComponents.video.parent().mouseenter(
            function () {
                videoComponents.videoControls.stop(true, false).slideDown();
            }
        );
        videoComponents.video.parent().mouseleave(
            function () {
                videoComponents.videoControls.stop(true, false).slideUp();
            }
        );
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
            fullscreen(videoComponents.appContent[0]);
            videoDatas.fullApp=true;
        });
        //网页缩小
        videoComponents.fullAppTrueBtn.on('click', function () {
            console.log('click fullPlayer');
            exitFullscreen();
            //videoDatas.fullPlayer=!videoDatas.fullPlayer;
        });


        //fullAppFalseBtn.on('click', function () {
        //    console.log('click fullApp');
        //    fullscreen(appContent[0]);
        //});
    }
};
videoControls.bindEvents();

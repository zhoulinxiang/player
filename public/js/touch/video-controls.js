
var videoComponents=appParam.videoComponents;
//需要依赖全局vue组件app
var videoDatas = app.videoControls;

var timeoutFlag=null;
var videoControls = {
    bindEvents: function () {
        timeoutFlag=setTimeout(function(){
            videoDatas.showtTitle=false;
            timeoutFlag=null;
        },3000);
        videoComponents.video.on('click',function(){
            if(timeoutFlag){
                clearTimeout(timeoutFlag);
                timeoutFlag=setTimeout(function(){
                    videoDatas.showtTitle=false;
                    timeoutFlag=null;
                },3000);
            }else{
                videoDatas.showtTitle=true;
                timeoutFlag=setTimeout(function(){
                    videoDatas.showtTitle=false;
                    timeoutFlag=null;
                },3000)
            }
        });
    }

};
videoControls.bindEvents();

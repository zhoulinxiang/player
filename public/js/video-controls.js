
var videoComponents=appParam.videoComponents;
//需要依赖全局vue组件app
var videoDatas = app.videoControls;

var timeoutFlag=null;
var videoControls = {
    //展示视频区消息提示
    showMessage:function(message,time){
        app.videoControls.message=message;
        if(time){
            setTimeout(this.closeMessage,time);
        }
    },
    //关闭视频区消息展示
    closeMessage:function(){
        app.videoControls.message='';
    }

};

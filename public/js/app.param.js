var appParam = appParam || {};
appParam.videoComponents={};
appParam.imComponents={};
appParam.appDatas={
    voice: 50,
    //    im,flower,question
    route: 'im',
    //hongbao,
    alert: '',
    //聊天控制数据
    imControls:{
        text:'',
        messages:[],

    },
    //播放器控制数据
    videoControls:{
        //播放器是否全屏，
        fullPlayer:false,
        //网页是否全屏
        fullApp:false,
        //是否显示video控制器
        showController:false,
        showCtrlFlag:null,
        //显示路由 flower,question
        route:'',
        play:false,
        //已播放时间
        playedTime:0,
        //playerbar宽度
        playedBarWidth:0,
        //已缓冲时间
        bufferedTime:0,
        //视频时长
        durationTime:0

    }
};
function initDom(){
    appParam.videoComponents={
        fullPlayerFalseBtn: $('.full-play-control-false'),
        fullPlayerTrueBtn: $('.full-play-control-true'),
        fullAppFalseBtn: $('.full-app-control-false'),
        fullAppTrueBtn: $('.full-app-control-true'),
        leftContent:$('.left-content'),
        appContent:$('#app'),
        video:$('#video'),
        videoControls : $('#video-controls'),
        playBtn:$('.play-button'),
        pauseBtn:$('.pause-button'),
        playBar:$('.playtime-control'),
        bufferedBar:$('.bufferd-bar'),
        playedBar:$('.played'),
        playedSlide:$('.played-slide'),
    };
    appParam.imComponents = {
        clearBtn: $('#im-clear-btn'),
        lockBtn: $('#im-lock-btn'),
        expressBtn: $('#im-express-btn'),
        sendBtn: $('#im-send-btn'),
        textArea: $('#im-textarea'),
        expressDiv: $('#expression-div')
    };

};
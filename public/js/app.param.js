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
        messages:[]
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
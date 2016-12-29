var appParam = appParam || {};
appParam.videoComponents={};
appParam.imComponents={};
appParamNoVue={};
appParamNoVue.url='';//静态资源域名
appParam.appDatas={
    // url:'',//域名
    voice: 50,
    //    im,flower,question1
    route: 'im',
    //hongbao,
    alert: '',
    alertNum:0,//alert中数字
    peopleNum:0,
    money:0,
    //聊天控制数据
    imControls:{
        text:'',
        showExpress:false,//touch用来展示表情
        route:'',//touch端使用 flower,express
        canFlower:true,//是否可送花
        messages:[],
        //聊天区消息提示
        message:'',
        flowerType:null,


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
        //是否显示video标题
        showtTitle:true,
        //显示路由 flower,question
        route:'',
        play:false,
        //已播放时间
        playedTime:0,
        //set播放时间
        setPlayedTime:0,
        //playerbar宽度
        playedBarWidth:0,
        //已缓冲时间
        bufferedTime:0,
        //视频时长
        durationTime:0,
        //视频区提示信息
        message:''

    },
    //互动题数据
    questionDatas:{
        type:1,//互动题类型，1：单选题 2：填空题
        num:4,//答题参数，比如单选题选项个数
        //单向选择题答案
        question1:'',
        //填空题答案
        question2:[],
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
        videoMessage:$('.video-message')
    };
    appParam.imComponents = {
        clearBtn: $('#im-clear-btn'),
        lockBtn: $('#im-lock-btn'),
        expressBtn: $('#im-express-btn'),
        sendBtn: $('#im-send-btn'),
        inputBar:$('#inputBar'),
        textArea: $('#im-textarea'),
        expressDiv: $('#expression-div'),
        contentIm:$('.content-im'),

    };

};

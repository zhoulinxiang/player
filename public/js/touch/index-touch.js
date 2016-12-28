//$(function () {
//var video;
//var leftContent, appContent, fullPlayer, fullApp;
//var video2=document.getElementById("video");
//var videoControls;


var app = new Vue({
    el: '#app',
    data: appParam.appDatas,
    methods: {
        sendFlower: function (type) {
            console.log('send flower')
            this.imControls.route='';
            //sole.log(this.voice);
        },
        switchImControlsRoute:function(type){
            if(type==this.imControls.route){
                this.imControls.route='';
            }else{
                this.imControls.route=type;
            }
        },
        switchRoute: function (routetmp,num) {
            //'question1':单选答题页面，'question2':填空答题页面,'im':聊天页面
            this.route = routetmp;
            if(!num){
                num=4;
            }
            if(routetmp=='question1'){
                this.questionDatas.type=1;
                this.questionDatas.num=num;
            }else if(routetmp=='question2'){
                this.questionDatas.type=2;
                this.questionDatas.num=num;
            }
        },
        switchAlert: function (alerttmp,num) {
            this.alert = alerttmp;
            this.alertNum=num;
        },
        open: function () {
            this.$message('这是一条消息提示');
        },
        sendQuestion1:function(){
            // this.switchRoute('im');
            // this.questionDatas.question1='';
        },
        sendQuestion2:function(){
            // this.switchRoute('im');
            // this.questionDatas.question2='';
        },

        //common methods
        //set 单项选择题答案
        setQuestion1:function(answer){
            this.questionDatas.question1=answer;
        },
        setFlowerType:function(type){
            this.imControls.flowerType=type;
        }


    },

    mounted: function () {
        initDom();
        //this.route='question2';
        //video = $('#video')[0];
        //videoControls = $('#video-controls');
        //video.volume = 0.5;
        //console.log(video);


        //fullPlayer = $('.full-play-control');
        //fullApp = $('.full-control');
        //if (IsPC()) {
        //
        //video控制器滑入滑出
        //    $(video).parent().mouseenter(
        //        function () {
        //            videoControls.stop(true, false).slideDown();
        //        }
        //    );
        //    $(video).parent().mouseleave(
        //        function () {
        //            videoControls.stop(true, false).slideUp();
        //        }
        //    )
        //}


    },
    watch: {
        voice: function (newValue, oldValue) {
            var voiceNum = (newValue / 100);
            console.log('voice--' + voiceNum);
            //console.log(video2);
            appParam.videoComponents.video[0].volume = voiceNum;
        },
        'videoControls.showController': function (nv, ov) {
            //console.log('change video controller state.' + nv)
            //console.log(this);
            if (nv) {
                if (this.videoControls.showCtrlFlag) {
                    clearTimeout(this.videoControls.showCtrlFlag);
                    this.videoControls.showCtrlFlag = null;
                }
                videoComponents.videoControls.slideDown('fast');
            } else {
                if (this.videoControls.showCtrlFlag) {
                    clearTimeout(this.videoControls.showCtrlFlag);
                    this.videoControls.showCtrlFlag = null;
                }
                this.videoControls.showCtrlFlag = setTimeout("videoComponents.videoControls.slideUp('fast');", 1000);
            }
        },
        'videoControls.bufferedTime': function (nv, ov) {
            videoComponents.bufferedBar.width((nv / this.videoControls.durationTime) * videoComponents.playBar.width());
        },
        'videoControls.playedTime': function (nv, ov) {
            //console.log(nv+'----'+ov);
            //console.log('playedtime:' + this.videoControls.playedTime);
            this.videoControls.playedBarWidth = Math.round((nv / this.videoControls.durationTime) * videoComponents.playBar.width());
            videoComponents.playedBar.width(this.videoControls.playedBarWidth);
            //videoComponents.video[0].currentTime=nv;
        },
        'videoControls.playedBarWidth': function (nv, ov) {
            //this.videoControls.playedTime=
        },
        'videoControls.setPlayedTime':function(nv,ov){
            videoComponents.video[0].currentTime=nv;
        }

    },
    filters: {
        timer: function (value) {
            if (!value) return '00:00';
            value = parseInt(value);
            var m = Math.floor(value / 60),
                n = value % 60;
            return ((m >= 10) ? m : ('0' + m)) + ':' + ((n >= 10) ? n : ('0' + n));
        }
    },
    computed: {
        // a computed getter
        imText: function () {
            // `this` points to the vm instance
            // return this.imControls.text.replace(/\[e\]em_1\[e\]/g,'[e]开心[e]')
            //     .replace(/\[e\]em_2\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_3\[e\]/g,'[e]脸红[e]')
            //     .replace(/\[e\]em_4\[e\]/g,'[e]满意[e]')
            //     .replace(/\[e\]em_5\[e\]/g,'[e]漏齿笑[e]')
            //     .replace(/\[e\]em_6\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_7\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_8\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_9\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_10\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_11\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_12\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_13\[e\]/g,'[e]大笑[e]')
            //     .replace(/\[e\]em_14\[e\]/g,'[e]开心[e]')
            //     .replace(/\[e\]em_15\[e\]/g,'[e]开心[e]')
            //     .replace(/\[e\]em_16\[e\]/g,'[e]开心[e]')
            //     .replace(/\[e\]em_17\[e\]/g,'[e]开心[e]')
            //     ;
        }
    },
    filters: {
    }
});

//});
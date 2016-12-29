var imComponents = appParam.imComponents;
//需要依赖全局vue组件app
var imDatas = app.imControls;
var imControls = {
    bindEvevts: function () {
        var that = this;
        imComponents.sendBtn.on('click', function () {
            // that.setMessage({
            //     type:1,
            //     name: '我',
            //     text: imDatas.text
            // });
            // that.sendMessage();
        });

        imComponents.expressDiv.find('img').on('click', function (e) {
            //var date=new Date();
            //console.log(date.getTime());
            //console.log(date.getTime());
            that.selectExpression(e)
        });
        //imComponents.expressDiv.find('img').on('touchstart',function(e){
        //    var date=new Date();
        //    console.log(date.getTime());
        //    that.selectExpression(e)
        //});
    },
    //收到聊天消息
    setMessage: function (message) {
        message.text = this.HTMLEnCode(message.text)
        message.text = this.replaceExpress(message.text);
        console.log(message.text);
        if (imDatas.messages.length >= 60) {
            imDatas.messages.shift();
            imDatas.messages.push(message);
        } else {
            imDatas.messages.push(message);
        }
        setTimeout(function () {
            appParam.imComponents.contentIm.scrollTop(appParam.imComponents.contentIm[0].scrollHeight);
        },0);

    },
    //发送聊天消息
    sendMessage: function () {
        var tmp=imDatas.text;
        tmp=this.replaceSendExpress(tmp)
        //ws send message
        console.log('send message:' + this.replaceSendExpress(tmp));
        imDatas.text='';
        return tmp ;


    },
    HTMLEnCode: function (str) {
        var s = "";
        if (str.length == 0)  return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/  /g, " ");
        s = s.replace(/\'/g, "'");
        s = s.replace(/\"/g, "\"");
        s = s.replace(/\n/g, " <br>");
        return s;
    },
    //替换表情显示
    replaceExpress: function (text) {
        return text.replace(/\[e\](\w+)\[e\]/g, '<img src="'+appParam.url+'live/img/icons/$1.png"/>');
    },
    //选择表情
    selectExpression: function (e) {
        console.log(e);
        var key = e.target.dataset.name;
        imDatas.text += '[e]' + key + '[e]';
    },
    //展示聊天区消息提示
    showMessage:function(message,time){
        app.imControls.message=message;
        if(time){
            setTimeout(this.closeMessage,time);
        }
    },
    //关闭视频区消息展示
    closeMessage:function(){
        app.imControls.message='';
    },
    //替换发送表情
    replaceSendExpress:function(text){
        return text.replace(/\[e\]开心\[e\]/g,'[e]em_1[e]')
            .replace(/\[e\]大笑\[e\]/g,'[e]em_2[e]')
            .replace(/\[e\]脸红\[e\]/g,'[e]em_3[e]')
            .replace(/\[e\]满意\[e\]/g,'[e]em_4[e]')
            .replace(/\[e\]漏齿笑\[e\]/g,'[e]em_5[e]')
            .replace(/\[e\]戏弄\[e\]/g,'[e]em_6[e]')
            .replace(/\[e\]汗\[e\]/g,'[e]em_7[e]')
            .replace(/\[e\]呸\[e\]/g,'[e]em_8[e]')
            .replace(/\[e\]担心\[e\]/g,'[e]em_9[e]')
            .replace(/\[e\]悔恨\[e\]/g,'[e]em_10[e]')
            .replace(/\[e\]哭\[e\]/g,'[e]em_11[e]')
            .replace(/\[e\]笑抽\[e\]/g,'[e]em_12[e]')
            .replace(/\[e\]恐惧\[e\]/g,'[e]em_13[e]')
            .replace(/\[e\]生气\[e\]/g,'[e]em_14[e]')
            .replace(/\[e\]强\[e\]/g,'[e]em_15[e]')
            .replace(/\[e\]OK\[e\]/g,'[e]em_16[e]')
            .replace(/\[e\]胜利\[e\]/g,'[e]em_17[e]')

            ;
    }
};
imControls.bindEvevts();

var imComponents = appParam.imComponents;
//需要依赖全局vue组件app
var imDatas = app.imControls;
var imControls = {
    bindEvevts: function () {
        var that = this;
        imComponents.sendBtn.on('click', function () {
            that.setMessage({
                name: '我',
                text: imDatas.text
            });
            that.sendMessage();
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
    },
    //发送聊天消息
    sendMessage: function () {
        //ws send message
        console.log('send message:' + imDatas.text);

        imDatas.text = '';


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
        return text.replace(/\[e\](\w+)\[\/e\]/g, '<img src="public/img/emoteicon/$1.png"/>');
    },
    //选择表情
    selectExpression: function (e) {
        console.log(e);
        var key = e.target.dataset.key;
        imDatas.text += '[e]' + key + '[/e]';
    }
};
imControls.bindEvevts();

var imComponents = appParam.imComponents;
//需要依赖全局vue组件app
var imDatas = app.imControls;
var imControls = {
    bindEvevts: function () {
        var that=this;
        imComponents.sendBtn.on('click', function(){
            that.setMessage({
                name:'我',
                text:imDatas.text
            });
            that.sendMessage();
        });
        imComponents.expressDiv.find('img').on('click',function(e){
            that.selectExpression(e)
        });
    },
    //收到聊天消息
    setMessage:function(message){
        message.text=this.replaceExpress(message.text);
        if(imDatas.messages.length>=60){
            imDatas.messages.shift();
            imDatas.messages.push(message);
        }else{
            imDatas.messages.push(message);
        }
    },
    //发送聊天消息
    sendMessage: function () {
        //ws send message
        console.log('send message:'+imDatas.text);

        imDatas.text = '';


    },
    //替换表情显示
    replaceExpress:function(text){
      return text.replace(/\[e\](\w+)\[\/e\]/g,'<img src="public/img/emoteicon/$1.png"/>');
    },
    //选择表情
    selectExpression:function(e){
        console.log(e);
        var key= e.target.dataset.key;
        imDatas.text+='[e]'+key+'[/e]';
    }
};
imControls.bindEvevts();

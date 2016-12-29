var api = {
    /**
     * 获取用户输入信息
     */
    getInputText: function () {
        return imControls.sendMessage();
    },

    /**
     * 弹幕献花
     * @param flowerType :number
     * 为0、1、2分表代表三种花
     * @param text :string
     * 献花文本内容
     */
    setBarrage: function (flowerType, text) {
        setBarrage(flowerType, text)

    },

    /**
     * 切换弹出框
     * @param alerttmp
     * 弹出框类型有：'hongbao','lingdaohongbao','tingdongleme','dacuole','daduile','daduilejinbi','bufendadui','bufendaduijinbi'，''：代表关闭弹出框
     * @param num
     * 为答对题时给的金币数量
     */
    switchAlert: function (alerttmp, num) {
        app.switchAlert(alerttmp, num);
    },

    /**
     * 切换聊天面板与答题面板
     * @param routetmp
     * 有'question1':单选答题页面，'question2':填空答题页面,'im':聊天页面
     * @param num
     * 为答题面板题目数量，默认为4
     */
    switchRoute: function (routetmp, num) {
        app.switchRoute(routetmp, num);
    },

    /**
     * 获取单选题答案
     * @returns {string}
     */
    getQuestion1Answer: function () {
        var tmp = app.questionDatas.question1;
        app.questionDatas.question1 = '';
        return tmp;
    },

    /**
     * 获取用户输入的填空题答案
     * @returns array
     */
    getQuestion2Answer: function () {
        var tmp = [];
        $.extend(tmp, app.questionDatas.question2)
        // app.questionDatas.question2=[];
        return tmp;
    },

    /**
     * 使用完question2的答案后，清除question2的答案
     */
    clearQuestion2Answer: function () {
        app.questionDatas.question2 = []
    },

    /**
     * set 聊天消息
     * @param message
     * message{
	        type//类型
	        name//名字
	        text//内容
        }
     */
    setMessage: function (message) {
        imControls.setMessage(message);
    },

    /**
     * 清空聊天消息
     */
    clearMessages: function () {
        app.imControls.messages = [];
    },

    /**
     * 获取献花种类
     * @returns num：0，1，2
     */
    getFlowerType: function () {
        var tmp = app.imControls.flowerType;
        app.imControls.flowerType = null;
        return tmp;
    },

    /**
     * 关闭献花面板
     */
    closeFlowerPanel: function () {
        app.imControls.route = ''
    },

    /**
     * 禁止献花
     * type: true:禁止献花 flase:开启献花
     * */
    banFlower: function (type) {
        app.imControls.canFlower = false;
    },

    /**
     * 展示聊天区消息提示
     * @param message :string message传入 '' 代表关闭消息提示
     * @param time :num 设置消息提示多久后关闭，毫秒数，可选
     */
    showImMesage: function (message, time) {
        imControls.showMessage(message, time);
    },

    /**
     * 展示视频区消息提示
     * @param message
     * @param time
     */
    showVideoMesage: function (message, time) {
        videoControls.showMessage(message, time);
    },

    /**
     * set 在线人数
     * @param num
     */
    setOnlinePeople: function (num) {
        app.peopleNum = num;
    },

    /**
     * set 金币余额
     * @param num
     */
    setMoney: function (num) {
        app.money = num;
    },
    /**
     * 设置静态资源域名
     * @param path
     */
    setUrlPath:function(path){
        appParamNoVue.url=path;
    }


}
function Barrage() {
    this.cfg = {
        rootDom: '.content-video',
        content: '',
        bindingBox: {},
        top: 0,
        right: 10,

    }
}
Barrage.prototype = {
    'that':this,
    render: function (flowerType) {
        var barrageContent = this.cfg.content;

        var flowers=[
            '<img src="'+appParam.url+'live/img/flower1.png">',
            '<img src="'+appParam.url+'live/img/flower2.png">',
            '<img src="'+appParam.url+'live/img/flower3.png">',
        ]
        this.cfg.bindingBox = $('<div class="barrage">' +flowers[flowerType]+barrageContent + '</div>');

        this.cfg.bindingBox.css({
            'position': 'absolute',
            'right': -this.cfg.right,
            'font-size': '14px',
            'top':20
        });
        this.cfg.bindingBox.find('img').css({
            'height':'1em',
            'width':'1em',
        });
        // this.cfg.bindingBox.css();
        // this.cfg.bindingBox.css('font-size', -this.cfg.right);
        // this.cfg.bindingBox.css('position','absolute');
        this.cfg.bindingBox.appendTo(this.cfg.rootDom);
    },
    setBarrage: function (flowerType,text) {
        this.cfg.content = text;
        this.render(flowerType);
    },
    move:function () {
        console.log(this);
        // this.destory.bind(this);
        this.cfg.bindingBox.animate({
            'left':-this.cfg.right,
        },1000,this.destory.bind(this));
        // this.destory.bind(this)
        // setTimeout(,2000);
    },
    destory:function(){
        console.log(this);
        this.cfg.bindingBox.remove();
    }
}
function setBarrage(flowerType,text) {
    var _tmp=new Barrage();
    _tmp.setBarrage(flowerType,text);
    _tmp.move();
}
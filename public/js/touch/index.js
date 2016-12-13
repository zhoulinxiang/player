//$(function () {
    var video;
    var leftContent,appContent,fullPlayer,fullApp;
    //var video2=document.getElementById("video");
    var videoControls;


    var app=new Vue({
        el: '#app',
        data: {
            voice:50,
            route:'im',
        //    im,flower,question1
            alert:'',
        //hongbao,
            questionA:'',
        //    互动题选择题选项
        },
        methods:{
            sendFlower:function(type){
                console.log('send flower')
                if(type=='touch'){
                    this.route='im';
                }
                //sole.log(this.voice);
            },


            switchRoute:function(routetmp){
                this.route=routetmp;
            },
            switchAlert:function(alerttmp){
                this.alert=alerttmp;
                if(alerttmp){
                    $('body').css('overflow','hidden');
                }else{
                    $('body').css('overflow','auto');
                }


            },
            open: function () {
                this.$message('这是一条消息提示');
            },
            sendQuestion1:function(){
                this.switchRoute('im');
            }
        },

        mounted:function(){
            video = $('#video')[0];
            videoControls = $('#video-controls');
            video.volume=0.5;
            console.log(video);

            leftContent=$('.left-content');
            appContent=$('#app');
            fullPlayer=$('.full-play-control');
            fullApp=$('.full-control');
            fullApp.on('click', function () {
                console.log('click fullApp');
                fullscreen(appContent[0]);
            });




        },
        watch:{
            voice:function(newValue,oldValue){
                var voiceNum=(newValue/100);
                console.log('voice--'+voiceNum);
                //console.log(video2);
                video.volume=voiceNum;
            }
        }
    });

//});
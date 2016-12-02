var fullscreen=function(elem){
    //elem=document.body;
    $(elem).addClass('full-screen');
    if(elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if(elem.requestFullScreen){
        elem.requestFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用  
    }
}
var exitFullscreen=function(){
    $('.full-screen').removeClass('full-screen');
    var elem=document;
    if(elem.webkitCancelFullScreen){
        elem.webkitCancelFullScreen();
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen();
    }else if(elem.cancelFullScreen){
        elem.cancelFullScreen();
    }else if(elem.exitFullscreen){
        elem.exitFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用  
    }
}
document.addEventListener("fullscreenchange", function(e) {
    if(!document.webkitFullscreenElement){
        $('.full-screen').removeClass('full-screen');
    }
    console.log("fullscreenchange", e);
});
document.addEventListener("mozfullscreenchange", function(e) {
    if(!document.webkitFullscreenElement){
        $('.full-screen').removeClass('full-screen');
    }
    console.log("mozfullscreenchange ", e);
});
document.addEventListener("webkitfullscreenchange", function(e) {
    if(!document.webkitFullscreenElement){
        $('.full-screen').removeClass('full-screen');
    }
    console.log("webkitfullscreenchange", e);
});
document.addEventListener("msfullscreenchange", function(e) {
    if(!document.webkitFullscreenElement){
        $('.full-screen').removeClass('full-screen');
    }
    console.log("msfullscreenchange", e);
});
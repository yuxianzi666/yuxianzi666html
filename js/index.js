var tittle = document.getElementById("tittle");
tittle.onclick = function(){  //标题点击事件
    var color1=Math.round(Math.random()*15).toString(16);
    var color2=Math.round(Math.random()*15).toString(16);
    var color3=Math.round(Math.random()*15).toString(16);
    var color4=Math.round(Math.random()*15).toString(16);
    var color5=Math.round(Math.random()*15).toString(16);
    var color6=Math.round(Math.random()*15).toString(16);
    var size=Math.round(Math.random()*30+40);
    tittle.style.fontSize=size+"px";
    tittle.style.color="#"+color1+color2+color3+color4+color5+color6;
}

document.getElementById("music1").style.display=""; //控制播放器是否显示
document.getElementById("email").style.display=""; //控制邮箱是否显示
document.getElementById("foot").style.display="none"; //控制GitHub项目主页：作者yuxianzi666是否显示

var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var colors=["red","orange","yellow","green","blue","pink","#FFB6C1","#FFF0F5","#4B0082","#483D8B","#5C4033","#CC99FF","#00FFFF","#003300"]
var boxStart=document.querySelector(".box-start");
var setting=document.querySelector(".setting");
var end=document.querySelector(".end");
var divs=[]
var box=document.querySelector(".box");
function create(num){
var current=[];
for(var i=0;i<num;i++){
    current.push(letters[Math.floor(letters.length*Math.random())]);
}
for(var i=0;i<current.length;i++){
    var letter = document.createElement("div");
    letter.innerHTML=current[i];
    box.appendChild(letter);
    letter.style.cssText="position:absolute;left:"+(1104*Math.random())+"px;top:20px;color:"+colors[Math.floor(colors.length*Math.random())]+";font-size:100px;"
    divs.push(letter);
    }
}
var jifen=document.querySelector(".jifen");
var xuetiao=document.querySelector(".xuetiao");
var temp=document.getElementsByName("radio");
var xishu;
boxStart.onclick=function(){
    start();
    setting.style.display="none";
    jifen.style.display="block";
    xuetiao.style.display="block";
    for(var i=0;i<temp.length;i++){
        if(temp[i].checked){
            xishu=temp[i].value;
        }
    }
    create(xishu);
}

// create(5);
// start();
var speed=5;
var xuetiaozhi=100;
var jifenzhi=0;
var t;
function start(){
    jifen.innerHTML="积分：<br>"+jifenzhi;
    xuetiao.innerHTML="生命值：<br>"+xuetiaozhi;
    t=setInterval(function(){
        for(var i=0;i<divs.length;i++){
            divs[i].style.top=divs[i].offsetTop+speed+"px";
        }
        for(let i=0;i<divs.length;i++){
            if(divs[i].getBoundingClientRect().top>650){
                box.removeChild(divs[i]);
                divs.splice(i,1);
                create(1);
                xuetiaozhi-=10;
                xuetiao.innerHTML="生命值：<br>"+xuetiaozhi;
                if(xuetiaozhi==0){
                    clearInterval(t);
                    end.style.display="block";
                }
            }
        }
    },40)
}

var next=document.querySelector(".chenggong");
var aginBtn=document.querySelector(".xiayiguan");
document.onkeydown=function(ev){
    var letter = String.fromCharCode(ev.keyCode);
    for(let i=0;i<divs.length;i++){
        if(divs[i].innerHTML==letter){
            box.removeChild(divs[i]);
            divs.splice(i,1);
            jifenzhi+=10;
            jifen.innerHTML="积分：<br>"+jifenzhi;
            create(1);
            break;
        }
    }
    if(jifenzhi==100){
        clearInterval(t);
        next.style.display="block";
    }
}

//下一关问题为解决   方法调用叠加 
//1.数组为清空
//2.函数调用问题
aginBtn.onclick=function(){
    speed+=2;
    start();
    xuetiaozhi=100;
    ifenzhi=0;
    next.style.display="none";
    jifen.innerHTML="积分：<br>"+jifenzhi;
    xuetiao.innerHTML="生命值：<br>"+xuetiaozhi;
    create(xishu);
}
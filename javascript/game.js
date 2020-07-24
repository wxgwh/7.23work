var letters=[{letter:"A",img:"../images/A.png"},{letter:"B",img:"../images/B.png"},{letter:"C",img:"../images/C.png"},{letter:"D",img:"../images/D.png"},{letter:"E",img:"../images/E.png"},{letter:"F",img:"../images/F.png"},{letter:"G",img:"../images/G.png"},{letter:"H",img:"../images/H.png"},{letter:"I",img:"../images/I.png"},{letter:"J",img:"../images/J.png"},{letter:"K",img:"../images/K.png"},{letter:"L",img:"../images/L.png"},{letter:"M",img:"../images/M.png"},{letter:"O",img:"../images/O.png"},{letter:"P",img:"../images/P.png"},{letter:"Q",img:"../images/Q.png"},{letter:"R",img:"../images/R.png"},{letter:"S",img:"../images/S.png"},{letter:"T",img:"../images/T.png"},{letter:"U",img:"../images/U.png"},{letter:"V",img:"../images/V.png"},{letter:"W",img:"../images/W.png"},{letter:"X",img:"../images/X.png"},{letter:"Y",img:"../images/Y.png"},{letter:"Z",img:"../images/Z.png"},{letter:"N",img:"../images/N.png"},];

// var img=document.createElement("img");
// img.src=letters[0].img;
// document.body.appendChild(img)
// console.log(letters[0].img)
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
        var img = document.createElement("img");
        letter.innerHTML=current[i].letter;
        img.src=current[i].img;
        box.appendChild(letter);
        letter.appendChild(img);
        letter.style.cssText="position:absolute;left:"+(1104*Math.random())+"px;top:20px;font-size:1px;color:#fff;"
        img.style.cssText="position:absolute;left:0;bottom:0;"
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
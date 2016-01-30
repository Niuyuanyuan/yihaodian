window.onload=function()
{
	//这是导航栏的下拉框的开始
    var my1haodian=$(".my1haodian")[0];
    var my1haodian11=$(".my1haodian-1-1")[0];
    hover(my1haodian,function(){
    	animate(my1haodian11,{height:175});
    },function(){animate(my1haodian11,{height:0})})



    var shoucangjia=$(".shoucangjia")[0];
    var shoucangjia11=$(".shoucangjia-1-1")[0];
    hover(shoucangjia,function(){
    	animate(shoucangjia11,{height:50})
    },function(){animate(shoucangjia11,{height:0})})

    var zhangshangyihaodian=$(".zhangshangyihaodian")[0];
    var zhangshangyihaodian11=$(".zhangshangyihaodian-1-1")[0];
    hover(zhangshangyihaodian,function(){
    	animate(zhangshangyihaodian11,{height:144})
    },function(){animate(zhangshangyihaodian11,{height:0})})


    var kehufuwu=$(".kehufuwu")[0];
    var kehufuwu11=$(".kehufuwu-1-1")[0];
    hover(kehufuwu,function(){
    	animate(kehufuwu11,{height:170})
    },function(){animate(kehufuwu11,{height:0})})


    var wangzhandaohang=$(".wangzhandaohang")[0];
    var wangzhandaohang11=$(".wangzhandaohang-1-1")[0];
    hover(wangzhandaohang,function(){
    	animate(wangzhandaohang11,{height:120})
    },function(){animate(wangzhandaohang11,{height:0})})

    var disanweixin=$(".disanweixin")[0];
    var erweimaweixin=$(".erweimaweixin")[0];
    hover(disanweixin,function()
    {
        erweimaweixin.style.display="block";
    },function()
    {
        erweimaweixin.style.display="none";
    })

   
     /*山西下拉框*/
     var dress=$(".dress")[0];
     var address=$(".address")[0];
     var dressla=$(".dressla")[0];
     dress.onmouseover=function()
     {
        address.style.display="block";
        dressla.style.cssText="background-position: -285px -291px";
     }
     dress.onmouseout=function()
     {
        address.style.display="none";
        dressla.style.cssText="background-position: -285px 3px";
     }


    //请登录注册下拉框
    
    var huanyin=$(".huanyin")[0];
    var hilogin=$(".hilogin")[0];
    hover(hilogin,function()
    {
        huanyin.style.display="block"
    },function(){huanyin.style.display="none"})


	//这是导航栏的下拉框的结束

	//这是搜索框字的显示和消失开始
    var kuanian=$(".kuanian")[0];
    var keywordbox=$(".keyword")[0];

    kuanian.onfocus=function()
    {animate(keywordbox,{height:282})
    	if(kuanian.value=="圣诞节跨年幸福购 5折抢福袋")
    	{
    		kuanian.value="";
            
    	}
    }
     kuanian.onblur=function()
    {
    	if(kuanian.value=="")
    	{
    		kuanian.value="圣诞节跨年幸福购 5折抢福袋";
            
    	}
        animate(keywordbox,{height:282})
    }
     kuanian.onmouseout=function()
    {
        animate(keywordbox,{height:0})
    }
    keywordbox.onmouseover=function()
    {
        animate(keywordbox,{height:282},20)
    }
    keywordbox.onmouseout=function()
    {
        animate(keywordbox,{height:0},20)
    }



	//这是搜索框字的显示和消失结束

    //这是左边商品分类右滑效果开始
        /*var iebiao11=$(".datu-left")[0];
        iebiao11.onmouseover=function(e)
        {
          var ev=e||window.event;
          var obj=ev.srcElement||ev.target;
          obj.style.paddingLeft="5px";

        }
        iebiao11.onmouseout=function(e)
        {
          var ev=e||window.event;
          var obj=ev.srcElement||ev.target;
          obj.style.paddingLeft="0px";
        }*/
    var iebiao11=$(".iebiao-11");
    var iebiao11zuohua=$(".iebiao-11-zuohua");

    for(var i=0;i<iebiao11.length;i++)
    {
        iebiao11[i].index=i;
       iebiao11[i].onmouseover=function()
       {
        iebiao11[this.index].style.paddingLeft="5px";
        iebiao11[this.index].style.width="205px";
        iebiao11zuohua[this.index].style.display="block";
       } 
       iebiao11[i].onmouseout=function()
       {
        iebiao11[this.index].style.paddingLeft="0px"
        iebiao11[this.index].style.width="210px";
        iebiao11zuohua[this.index].style.display="none";
       }    
    }
    

    

    //这是左边商品分类右滑效果结束


	//这个是加大banner的轮播图******************************
    var lunboc=$(".lunboc");
    var btn=$(".btn");
    var num=1;
    var nss=0;
    var bigbox=$(".bannerbig11")[0];
     var bb=0;
    
    var colorarr=["#F01044","#FF51A8","#F0BDBA","#FA4822","#2386FF","#D31B33","#B60807","#EE6716"];
    var daanniu=$(".da-anniu")[0];
    var daleftanniu=$(".da-leftanniu")[0];
    var darightanniu=$(".da-rightanniu")[0];
    bigbox.onmouseover=function()
    {
       animate(daleftanniu,{opacity:1});
       animate(darightanniu,{opacity:1});
    }
    bigbox.onmouseout=function()
    {
         animate(daleftanniu,{opacity:0});
         animate(darightanniu,{opacity:0});
    }

            //轮播函数，type为r表示向右播放，type为l表示向左播放
             function lunboss(type)
             {
                if(type=="r")
                {
                    bb++;
                    if(bb>=lunboc.length)
                    {
                        bb=0;
                    }
                    if(num==8)
                    {
                        num=0;
                    }
                    for(var i=0;i<lunboc.length;i++)
                    {
                        btn[i].style.background="black";
                    }
                    btn[num].style.background="#c40000";
                    bigbox.style.background=colorarr[num];
                    num++;
                }
                if(type=="l")
                {
                    bb--;
                    nss--;
                    if(bb<=-1)
                    {
                        bb=lunboc.length-1;
                    }
                    if(nss<=-1)
                    {
                        nss=7;
                    }
                    for(var i=0;i<lunboc.length;i++)
                    {
                        btn[i].style.background="black";
                    }
                    btn[nss].style.background="#c40000";
                    bigbox.style.background=colorarr[nss];
                    ;
                }
                for(var i=0;i<lunboc.length;i++)
                {
                    lunboc[i].style.opacity=0;
                }
                animate(lunboc[bb],{opacity:1});
                
            }
            var w=setInterval(function(){lunboss("r")},1500);
            //滑上按钮显示对应的图和当前按钮颜色变化
            for(var i=0;i<btn.length;i++)
            {
                btn[i].index=i;
                btn[i].onmouseover=function()
                {
                    clearInterval(w);
                    for(var j=0;j<lunboc.length;j++)
                    {   
                        lunboc[j].style.opacity="0";
                        btn[j].style.background="black";
                    }
                    animate(lunboc[this.index],{opacity:1});
                    btn[this.index].style.background="#c40000";
                    bigbox.style.background=colorarr[this.index];            

                }
                btn[i].onmouseout=function()
                {
                    num=this.index+1;
                    bb=this.index;
                    nss=this.index;
                    w=setInterval(function(){lunboss("r")},1500);
                }
            }
            //滑上图片停止时间函数
            for(var i=0;i<lunboc.length;i++)
            {
                hover(lunboc[i],function()
                {
                    clearInterval(w);
                },function()
                {
                    w=setInterval(function(){lunboss("r")},1500);
                })
            }
            //
            daleftanniu.onmouseover=darightanniu.onmouseover=function()
            {
                clearInterval(w);
            }
             daleftanniu.onmouseout=darightanniu.onmouseout=function()
            {
                w=setInterval(function(){lunboss("l")},1500);
            }
            daleftanniu.onclick=function()
            {   
                lunboss("l");
            }
            darightanniu.onclick=function()
            {   
                lunboss("r");
            }
    //这是加的楼层小轮播****************************



    function aa(z,u){
               var bigbox11=$(".floor-1-middle-da")[z];
               var fan=$(".floor-1-middle-fan")[z];
               var tupians=$("img",bigbox11);
               var floormiddlefan=$(".floor-1-middle-fan")[z];
               var smallbtn=$("li",fan);
               var numss=1;
               var nn=0; 
               var smallbtnding=$("div",floormiddlefan);
               animate(smallbtnding[nn],{width:30},u,Tween.Linear);
               
               /*
               var  annius1=$(".f-1-father-left-2-1")[z];
               var  annius2=$(".f-1-father-left-2-3")[z];*/

               
               function moveleft()
               {
                nn++;
                if(nn>2)
                {
                    nn=0;
                }
                if(nn>=0&&nn<=2)
                {   
                    for(var i=0;i<smallbtnding.length;i++)
                    {
                        smallbtnding[i].style.width="0px";
                        smallbtnding[i].style.display="none";
                    }
                    smallbtnding[nn].style.display="block";
                     animate(smallbtnding[nn],{width:30},u);
                }
                if(numss>2)
                {
                    numss=0;
                    animate(bigbox11,{left:0},500,Tween.Linear);
                }
                if(numss>=0&&numss<=2)
                {
                    animate(bigbox11,{left:-330*numss},500,Tween.Linear);
                }
                numss++;   
               }
               var t=setInterval(moveleft,u);
               for(var i=0;i<tupians.length;i++)
               {
                tupians[i].index=i;
                hover(tupians[i],function()
                {
                    clearInterval(t);
                    for(var j=0;j<smallbtnding.length;j++)
                    {
                        smallbtnding[j].style.display="none";
                        smallbtnding[j].style.width="0px";
                    }

                    smallbtn[this.index].style.backgroundColor="#E84312";
                },function()
                {
                    t=setInterval(moveleft,u);
                    numss=this.index+1;
                    smallbtn[this.index].style.backgroundColor="#fff";
                    smallbtnding[this.index].style.display="block";
                    animate(smallbtnding[this.index],{width:30},u,Tween.Linear);
                })
               }



               //指向小按钮然后图片不动
               
                for(var i=0;i<smallbtn.length;i++)
                {
                    smallbtn[i].index=i;
                    smallbtn[i].onmouseover=function()
                   {
                    clearInterval(t);
                   
                    for(var j=0;j<smallbtn.length;j++)
                    {
                        smallbtnding[j].style.width="0px";
                        smallbtnding[j].style.display="none"; 
                    }
                     smallbtnding[this.index].style.width="30px";
                     smallbtnding[this.index].style.display="block";
                      animate(bigbox11,{left:-330*this.index},500,Tween.Linear);
                   }
                   smallbtn[i].onmouseout=function()
                   { 
                      nn=this.index;
                      t=setInterval(moveleft,u);

                   }
               }
             

   }
    aa(0,3000);
    aa(1,2700);
    aa(2,2500);
    aa(3,3500);
    aa(4,3000);
    aa(5,2900);
    aa(6,3500);

   //这是上面几张图片移动一点
    var zuizhigoumai1=$(".zuizhigoumai-1");
    for(var i=0;i<zuizhigoumai1.length;i++)
    {
      zuizhigoumai1[i].index=i;
      hover(zuizhigoumai1[i],function()
        {
         animate(zuizhigoumai1[this.index],{marginLeft:-8},200)
        },function()
        {
         animate(zuizhigoumai1[this.index],{marginLeft:0},200)
        })

    }

    //这是楼层跳转*************************************
    
   var flag=true;
   var flag1=true;
   var floors=$(".f-1");
   var jump=$(".jump")[0];
   var btn1=$("li",jump);

   for(var i=0;i<btn1.length;i++)
   {
    btn1[i].index=i;
    btn1[i].onclick=function()
    {
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:floors[this.index].t})
    }
   }
   window.onscroll=function()
   {
        var scrollT=getScrollT()
        if(scrollT>=440)
        {
            if(flag)
            {
                
                flag=false;
                flag1=true;
            }
        }
        else{
            if(flag1)
            {
              
                flag1=false;
                flag=true;
            }
        }

    //楼层跳转
        if(scrollT>=800)
        {
            jump.style.display="block";
        }else{
            jump.style.display="none";
        }
        //滚动条控制按钮
        for(var i=0;i<floors.length;i++)
        {
            floors[i].t=floors[i].offsetTop;
            if(floors[i].t<=scrollT)
            {
                for(var j=0;j<btn1.length;j++)
                {
                    btn1[j].style.backgroundColor="white";
                    btn1[j].style.color="black";
                }
                    btn1[i].style.backgroundColor="pink";
                btn1[i].style.color="red";
            }
        }


   }
    /*返回顶部*/
    var fanhuiding=$(".return-din")[0];
    fanhuiding.onclick=function()
    {
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:0});
      fanhuiding.style.cursor="pointer"
    }




   //闪购的选项卡
   
   var word=$(".word");
   var conbox=$(".shangoutu-shang");
   
   /*自动轮播*/
   var t6=setInterval(mmove,5000);
   var mm=1;
   function mmove()
   {
    
      if(mm==3)
      {
        mm=0;
      }
      for(var i=0;i<conbox.length;i++)
      {
        word[i].style.color="black";
        conbox[i].style.zIndex=2;
      }
      word[mm].style.color="#CEA145";
      conbox[mm].style.zIndex=3;
      mm++;
   }

   /*加鼠标滑上去的效果*/
   for(var i=0;i<word.length;i++)
   {
    word[i].index=i;
    word[i].onmouseover=function()
    {
      clearInterval(t6);
      for(var j=0;j<conbox.length;j++)
      {
        word[j].style.color="black";
        conbox[j].style.zIndex=2;
      }
      word[this.index].style.color="#CEA145";
      conbox[this.index].style.zIndex=3;
    }
    word[i].onmouseout=function()
    {
      mm=this.index+1;
      t6=setInterval(mmove,5000);

    }
   }



     









    

   






















}
//有两个类名的时候
//兼容函数1
//功能：解决IE浏览器不支持通过类名获取html元素的问题
//参数说明：classname代表要传入的类名，obj代表对象，可以实现缩小范围查找
    function getClass(classname,obj){
      var obj=obj||document;
      if(obj.getElementsByClassName){//判断是为W3C浏览器
        return obj.getElementsByClassName(classname);//结果返回
      }else{
        var all=obj.getElementsByTagName("*");//用标签名先获取到所有元素，是一个集合
        var arr=[];
      for(var i=0;i<all.length;i++)
        {
          if(check(all[i].classname),classname){
          //函数第一个参数表示某一行标签的类名
          //all[i].className=classname
            arr.push(all[i]);
          }
        }
      }
      return arr;
    }
    /*var inner=getClass("inner");
    alert(inner.length);*/





    function check(str,val)
    //参数说明：str表示多个类名的集合以后的字符串
    //val是想找的类名
    {
       var newarr=str.split(" ");
       for(var i=0;i<newarr.length;i++){
        if(newarr[i]==val)
        {
          return true;
        }
       }
       return false;
    }



//兼容函数2
//功能：可以获取与设置纯文本的兼容函数
function getText(obj,val)//obj表示：哪个对象用这个方法，val表示：接收第二个实参，设置一个文本
{ if(val==undefined)//如果value为undefine，表示只有一个参数，这个函数实现的是获取文本
  {
    if(obj.innerText)//如果为真，是IE8浏览器
    {
      return obj.innerText;
    }
    else//W3C浏览器
    {
      return obj.textContent;
    }
  }
  else//如果value不是undefined，表示要设置文本
  {
    if(obj.innerText||obj.innerText=="")
        //当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
    //如果为真，是IE8浏览器
    { 
      obj.innerText=val;
    }
    else//W3C浏览器
    {
      obj.textContent=val;
    }
  }
  
}



//兼容函数3  获取样式
//obj表示那个对象 attr是哪个属性
 function getStyle(obj,attr)
 {
  if(obj.currentStyle)
  {
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr]
  }
 }






//兼容函数4   这是获取类名,id,标签名

function $(select,obj)
{ 
    var obj=obj||document;
    if(typeof select=="string")
    {//去掉字符串前后的空格
          select=select.replace(/^\s*|\s*$/g,"");
          if(select.charAt(0)==".")
          {
            return getClass(select.slice(1),obj);
          }
          else if(select.charAt(0)=="#")
          {
            return obj.getElementById(select.slice(1));
          }
          else if(/^[a-z|1-6]{1,10}$/g.test(select))
            {
             return obj.getElementsByTagName(select);
          }
    }
    else if(typeof select=="function")
    {
      window.onload=function()
      {
        select();
      }
    }
}



//兼容函数5,getChilds(parent);获得儿子,获取元素字节点的兼容函数
//parent是父节点
/*function getChilds(parent)
{
  var childs=parent.childNodes//所有的儿子
  var arr=[];
  for(var  i=0;i<childs.length;i++)
  {
    if(childs[i].nodeType==1)
    {
      arr.push(child[i]);
    }
    
  }
  return arr;
}
*/


//兼容函数5
//功能：获取元素子节点的兼容函数
//parent是父节点
//原理：先获取所有的儿子，然后根据节点的类型判断，如果为1，表示是元素节点，保存到数组里
function getChilds(parent,type)
{ 
  var type=type||"a";
  var childs=parent.childNodes;
  var arr=[];
  for(var i=0;i<childs.length;i++)
  { 
    if(type=="a")
    {
      if(childs[i].nodeType==1)
      {
        arr.push(childs[i]);
      }
    }
    else if(type=="b")
    {
      if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,"")))
      {
        arr.push(childs[i]);
      }
    }
      
  }
  return arr;
}



//6.获得第一个子节点
function getFirst(parent)
{
  return getChilds(parent)[0];
}


//7.获得最后一个子节点
function getLast(parent)
{
  return getChilds(parent)[getChilds(parent).length-1];
}


//8.获得一个指定子节点
function getNum(parent,num)
{
  return getChilds(parent)[num];
}



//9.下一个兄弟节点
function getNext(obj)
{
  var next=obj.nextSibling;
  //3,8表示是否是文本或者是注释
   if(next==null)
    {
      return false;
    } 
  while(next.nodeType==3||next.nodeType==8)
  {
    next=next.nextSibling;
    if(next==null)
    {
      return false;
    }
  }
  return next;
}




//10,上一个兄弟节点
function getUp(obj)
{
  var up=obj.previousSibling;
  if(up==null)
  {
    return false;
  }
  //3,8表示是否是文本或者是注释
  while(up.nodeType==3||up.nodeType==8)
  {
    up=up.previousSibling;
    if(up==null)
    {
      return false;
    }
  }
  return up;
}




//11.插入到某个对象之后
//对象.insertBefore(obj,obj1)
//插入到下一个对象之前
//重点:给对象的原型添加此方法

//原理:  找到第二个参数的下一个兄弟节点，将第一个参数插入到次兄弟节点之前

//把obj1插入到obj2的后面
Object.prototype.insertAfter=function(obj1,obj2)
{
  var next=getNext(obj2);
  if(next){
    this.insertBefore(obj1,next);
  }else{
    this.appendChild(obj1);
  }
  
}



//12兼容问题(获取滚动条与页面顶部的距离)


function getScrollT()
{
    var obj=document.documentElement.scrollTop?
    document.documentElement:document.body;
    var scrollT=obj.scrollTop;
    return scrollT;
}

/*或者用这个 var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
document.title=scrollT;*/



//13    同一个元素添加多个事件的兼容函数
//obj：给哪个对象添加
//ev:什么事件
//fun：事件处理程序

function addEvent(obj,ev,fun){
  if(obj.addEventListener)
  {//火狐
    return obj.addEventListener(ev,fun,false);
  }else{
    return obj.attachEvent("on"+ev,function()
      {
        fun.call(obj);
      });
  }//在ie8中，this不指当前的对象，指的是window
}


/***********************************/
function getCW()
{
  return document.documentElement
}







//14     拖拽***********************************************

function drag(obj)
{
      var cw=document.documentElement.clientWidth;//浏览器的宽高
            var ch=document.documentElement.clientHeight;

            var ow=obj.offsetWidth;
            var oh=obj.offsetHeight;
        
        obj.onmousedown=function(e)
        {
          var ev=e||window.event;
          var ox=ev.offsetX;
          var oy=ev.offsetY;

          //阻止浏览器的默认行为
          if (ev.preventDefault ){
                  ev.preventDefault();} //阻止默认浏览器动作(W3C)
          else
          {ev.returnValue=false;}


          //事件委托的思想，把box换成documen可以快速的拖动不会有bug
          document.onmousemove=function(e)
          {
                   var ev=e||window.event;
                   var cx=ev.clientX;
                   var cy=ev.clientY;
                   
                   var aaa=cx-ox;
                   var bbb=cy-oy;


             if(aaa>(cw-ow))
             {
              aaa=cw-ow;
             }
             if(aaa<=0)
             {
              aaa=0;
             }


             if(bbb>(ch-oh))
             {
              bbb=ch-oh;
             }
             if(bbb<=0)
             {
              bbb=0;
             }
            obj.style.left=aaa+"px";
                   obj.style.top=bbb+"px";

          }
        }
        obj.onmouseup=function()
        {
               document.onmousemove=null;
        }

    }


//
    /*obj:哪个对象添加滚轮事件
     upfun:处理滚轮向上的函数
     down:处理滚轮向下的函数*/
    function mouseWheel(obj,upfun,downfun)
    {
        if(obj.attachEvent)
        {
        obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
        }
        else if(obj.addEventListener)
        {
        obj.addEventListener("mousewheel",scrollFn,false);
        //chrome,safari -webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false);
        //firefox -moz-
        }

        function scrollFn(e)
        {
          var ev=e||window.event;
          //阻止浏览器默认行为开始
          if (ev.preventDefault ){
            ev.preventDefault(); //阻止默认浏览器动作(W3C)
          }
          else
          {
            ev.returnValue = false;//IE中阻止函数器默认动作的方式
          }//阻止浏览器默认行为结束
        
          var num=ev.detail||ev.wheelDelta;
          if(num==-3||num==120)
          {//向上
            if(upfun)
            {
               upfun();
            }
           
          }
           if(num==3||num==-120)
          {//向上
            if(downfun)
            {
               downfun();
            }
           
          }

        }
    }




    //15.hover
            //判断某个元素是否包含有另外一个元素
             function contains (parent,child) {
              if(parent.contains){
                 return parent.contains(child) && parent!=child;
              }else{
                return (parent.compareDocumentPosition(child)===20);
              }
             }

            //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
              function checkHover (e,target) {
               if(getEvent(e).type=="mouseover"){
                  return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
                !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
               }else{
                return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
                !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
                }
              }
            //鼠标移入移出事件
            /*
              obj   要操作的对象
              overfun   鼠标移入需要处理的函数
              outfun     鼠标移除需要处理的函数
            */
            function hover (obj,overfun,outfun) {
                if(overfun){
                  obj.onmouseover=function  (e) {
                    if(checkHover(e,obj)){
                       overfun.call(obj,[e]);
                    }
                  }
                }
                if(outfun){
                  obj.onmouseout=function  (e) {
                    if(checkHover(e,obj)){
                       outfun.call(obj,[e]);
                    }
                  }
                }
            }
             function getEvent (e) {
                  return e||window.event;
             }
/***************************************************************************************/


 //  16.从现在到未来的倒计时(这是从当前的时间到元旦时间的函数)
  function getCha(news,now)
    {

        var newarr=[];
      var cha=(news.getTime()-now.getTime())/1000;
      var day=parseInt(cha/(60*60*24));
      newarr.push(day);
      cha%=(60*60*24);
      var hour=parseInt(cha/(60*60));
           newarr.push(hour);
         cha%=(60*60);
      var minute=parseInt(cha/(60));
          newarr.push(minute);
       cha%=(60);
      var second=parseInt(cha);
          newarr.push(second);
          return newarr;
      }





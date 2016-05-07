 window.onload=function(){
      waterfall('main','box');
      var dataInt={'data':[{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'}]};
      window.onresize=function(){
        waterfall('main','box');
      }
      window.onscroll=function(){
        if(check('main','box')){
          for(var i=0;i<dataInt.data.length;i++){
            var oBox=document.createElement('div');
            oBox.className="box";
            var oMain=document.getElementById('main');
            oMain.appendChild(oBox);
            var oPic=document.createElement('div');
            oPic.className="pic";
            oBox.appendChild(oPic);
            var oImg=document.createElement('img');
            oImg.src="images/"+dataInt.data[i].src;
            oPic.appendChild(oImg);
          }
        waterfall('main','box');
        }
      }
}

function waterfall(parent,box){
  var oParent=document.getElementById(parent);
  var oBoxs=getByClass(oParent,box);
  // 判断横向显示的个数 cols
  var winWidth=document.body.offsetWidth;
  var boxWidth=oBoxs[0].offsetWidth;
  var cols=Math.floor(winWidth/boxWidth);
  oParent.style.width=cols*boxWidth+'px';

  var arrs=[];
  for(var i=0;i<oBoxs.length;i++){
    if(i<cols){
      // 将图片的高度值添加到数组中
      // console.log(minIndex);
      arrs.push(oBoxs[i].offsetHeight);
    }else{
      // 求最小值和最小值的索引
      var minHeight=Math.min.apply(null,arrs);
      var minIndex=0;
      for(var n=0;n<arrs.length;n++){
      	if(minHeight==arrs[n]){
      		minIndex=n;
      	}
      }

	  // 计算及定义图片出现的位置
      oBoxs[i].style.position='absolute';
      oBoxs[i].style.top=minHeight+'px';
      oBoxs[i].style.left=oBoxs[minIndex].offsetLeft+'px';
      
      // 改变数组值
      arrs[minIndex]+=oBoxs[i].offsetHeight; 	
    }
  }
}
// 根据class获取元素
function getByClass(parent,clsName){
  var boxArr=new Array(), 
      oElements=parent.getElementsByTagName('*');
  for(var i=0;i<oElements.length;i++){
    if(oElements[i].className==clsName){
      boxArr.push(oElements[i]);
    }
  }
  return boxArr;
}

function check(parent,box){
        var scrollHeight=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var winHeight=document.body.clientHeight || document.body.clientHeight;
        var oParent=document.getElementById(parent);
        var oBoxs=getByClass(oParent,box)
        var h=oBoxs[oBoxs.length-1].offsetTop+oBoxs[oBoxs.length-1].offsetHeight/2;
        return(h<scrollHeight+winHeight);

}
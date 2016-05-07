$(window).load(function(){
	waterFall();
})

$(window).resize(function(){
	clearCss();
	waterFall();
});

$(window).scroll(function(){
	var dataInt={'data':[{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'}]}
	if(check()){
		$.each(dataInt.data,function(index,value){
			console.log(this);
			var oBox=$('<div>').addClass('box').appendTo($('#main'));
			var oPic=$('<div>').addClass('pic').appendTo(oBox);
			$('<img>').attr('src','images/'+value.src).appendTo(oPic);
		})
	waterFall();	
	}
})

// 实现瀑布流布局
function waterFall(){
	var $boxs=$('#main .box');
	// 计算一行显示的个数
	var boxWidth=$boxs.eq(0).outerWidth();
	var winWidth=$(window).width();
	var cols=Math.floor(winWidth/boxWidth);
	$('#main').width(cols*boxWidth);
	var arrs=[];
	$boxs.each(function(index,value){
		if(index<cols){
			arrs.push($(this).outerHeight());
		}else{
			var minH=Math.min.apply(null,arrs);
			var minHIndex=$.inArray(minH,arrs);
			$(this).css({'position':'absolute','top':arrs[minHIndex]+'px','left':minHIndex*boxWidth+'px'});
			arrs[minHIndex]+=$(this).outerHeight();
		}
	})
}

// 清除定位样式
function clearCss(){
	var $boxs=$('#main .box');
	$boxs.each(function(){
		$(this).css('position','');
		// console.log($(this));
	})
}

// 检查是否加载
function check(){
	var h1=$(document).scrollTop()+$(window).height();
	var h2=$('#main .box').eq($('#main .box').length-1).offset().top+$('#main .box').eq($('#main .box').length-1).outerHeight()/2;
	return(h1>h2);
}
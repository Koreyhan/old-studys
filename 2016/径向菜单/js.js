var d = 0,
	r = 0,
	totle = 0,
	startAngle = 0,
	endAngle = 360,
	angle = 0;
$(function(){
	// 获取大圆的直径半径
	d=$('.wrap').outerWidth();
	r=d/2;
	// 获取个个数角度
	totle=$('.item').length;
	if((endAngle-startAngle)%360==0){
		angle=(endAngle-startAngle)/totle;
	}else{
		angle=(endAngle-startAngle)/(totle-1);
	}
	//遍历定位
	$('.item').each(function(index){
		var xDistance=Math.round(r+r*Math.cos((startAngle+index*angle)*Math.PI/180));
		var yDistance=Math.round(r+r*Math.sin((startAngle+index*angle)*Math.PI/180));
		$(this).css({
			left: xDistance+'px',
			top: yDistance+'px'
		})
		console.log(angle);
	})
	// 绑定点击事件
	$('#btnMenu').click(function(){
		$('.wrap ul').toggleClass('trans');
	})
});
$(function(){
	// 添加分刻度
	add('.wrap .minute',60,86);
	// 添加时刻度
	add('.wrap .hour',12,84)
	// 添加数字
	add('.wrap .numbers',12,74,true)
	//初始化指针
	var date=new Date();
	var secondNow=date.getSeconds();
	var minuteNow=date.getMinutes();
	var hourNow=date.getHours();
	moveSecond(secondNow);
	moveMinute(date.getMinutes());
	moveHour(date.getHours());

	//指针运动
	setInterval(function(){
		secondNow+=1;
		moveSecond(secondNow);
		if(secondNow==60){
			minuteNow+=1;
			moveMinute(minuteNow);
			secondNow=0;
			if(minuteNow==60){
				moveHour(hourNow);
				minuteNow=0;
				if(hourNow==12){
					hourNow=0;
				}
			}
		}
	},1000)

	// 添加刻度函数
	function add(parent,totle,translateX,number){
		var htmlContent='';
		var degree=360/totle;
		if(number){
			for(var i=0; i<totle; i++){
				htmlContent+="<li style='transform: rotate(" + (i-2)*degree + "deg) translate(" + translateX + "px,0) rotate(" + -(i-2)*degree + "deg)'>" + (i+1) + "</li>";
			}
		}else{
			for(var i=0; i<totle; i++){
				htmlContent+="<li style='transform: translate(0,-50%) rotate(" + i*degree + "deg) translate(" + translateX + "px,0);'></li>";
			}
		}	
		$(parent).html(htmlContent);
	}
	//指针运动函数
	function moveSecond(second){
		$('.wrap .items .secondPointer').css('transform','translate(0,-50%) rotate(' + 6*(second-15) + 'deg)');
	}
	function moveMinute(minute){
		$('.wrap .items .minutePointer').css('transform','translate(0,-50%) rotate(' + 6*(minute-15) + 'deg)');
	}
	function moveHour(hour){
		$('.wrap .items .hourPointer').css('transform','translate(0,-50%) rotate(' + 30*(hour-3) + 'deg)');
	}
	
})
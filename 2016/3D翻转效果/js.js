$(function(){
	var $pages=$('#my3d .flipBottom .page');
	var i=0; //当前展示的序号
	// 排列图层上下顺序
	$pages.each(function(index){
		$(this).css('z-index',($pages.length-index));
	})

	$('#my3d .btns .prev').click(function(){
		if(i!=$pages.length-1){
			$pages.eq(i).css('transform','rotateX(-90deg)');
			i++;
			$pages.eq(i).css('transform','rotateX(0deg)');
		}else {
			$pages.eq(i).css('animation','shakeFront 1.2s');
			setTimeout(function(){
				$pages.eq(i).css('animation','');
			},1200)
		}		
	})

	$('#my3d .btns .next').click(function(){
		if(i!=0){
			$pages.eq(i).css('transform','rotateX(90deg)');
			i--;
			$pages.eq(i).css('transform','rotateX(0deg)');
		}else{
			$pages.eq(i).css('animation','shakeBehind 1.2s');
			setTimeout(function(){
				$pages.eq(i).css('animation','')
			},1200)
		}
	})


})
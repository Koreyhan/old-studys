$(function(){
	// 排列图层上下顺序
	$('#my3d .cube div').each(function(index){
		$(this).css('z-index',($('#my3d .cube div').length-index));
	})
	// 调节动画
	$('#my3d .faceValue input').change(function(){
		$(this).parent().find('.text').html($(this).val());
		$('#my3d .cube').css('transform',"rotateX(" + $('#my3d .valueX input').val()+ "deg) rotateY(" + $('#my3d .valueY input').val() + "deg) rotateZ(" + $('#my3d .valueZ input').val() + "deg)");
	})
})
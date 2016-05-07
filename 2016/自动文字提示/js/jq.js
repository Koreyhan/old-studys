$(function() {
	$("a.tooltip").mouseenter(function(e){
		var $tooltip = $("<div id='tooltip'>" + $(this).attr('title') + "</div>")
		$tooltip.css({
			"top": e.pageY + 10 +'px',
			"left": e.pageX+ 10 +'px'
		})
		$tooltip.appendTo($('body'));
		$(this).attr('thisTitle',this.title).attr('title','');
		return false;
	})

	$("a.tooltip").mouseleave(function(e){
		$('#tooltip').remove();
		var atitle = $(this).attr('thisTitle')
		$(this).attr('title',atitle);
		$(this).removeAttr('thisTitle')
		return false;
	})

	$("a.tooltip").mousemove(function(e){
		$('#tooltip').css({
			"top": e.pageY+ 10 + 'px',
			"left": e.pageX+ 10 +'px'
		})
		return false;
	})


})
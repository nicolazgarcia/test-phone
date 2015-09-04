
	
$('.cerrar').click(function(){
	$('.mask').fadeOut();
	$('article').fadeOut();

	$('.tipos li').removeClass('active');
	$('.tarjeta').removeClass('show');
});

$('.pieza').each(function() {
    var pieza = $(this).find('.tarjeta');
	$(this).find('h3').click(function() {
  		$(pieza).addClass('show');
        $('html, body').animate({ scrollTop: 0 }, 'slow');      
	});
	});
	
$('.volver').click(function() {
    $('.tipos li').removeClass('active');
    $('.tarjeta').removeClass('show');
});
	
$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};


	$('.tipos li').clicktoggle(
		function(a) {
			$('.tipos li').removeClass('active');
			$(this).addClass('active');
		},function(b) {
			$(this).removeClass('active');
		});

    $(document).click(function(event){
        if (!$(event.target).is('.search-box, .search-box *')) {
            $('.search-form').fadeOut();
        }
        if (!$(event.target).is('.filter, .filter *')) {
            $('.filter ul').fadeOut();
        }
    });
	

$('.mask').hide();
$('#map .zona').on({
    mouseenter: function () {
    	$('#map .zona').not(this).attr('fill-opacity',0.5);
    },
    mouseleave: function () {
       $('#map .zona').not(this).attr('fill-opacity',1.0);
    },
    click: function () {
    	var slice = $(this).attr('id');
    	$('article').hide();
  		$('.mask').fadeIn();
    	$('.'+slice).fadeIn();   	
	}
});
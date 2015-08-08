var currentPlayer;
function effSound(soundobj) {
 var thissound=document.getElementById(soundobj);
 if(currentPlayer  && currentPlayer != thissound) {
      currentPlayer.pause(); 
 }
 if (thissound.paused)
            thissound.play();
    else
        thissound.pause();
        thissound.currentTime = 0;
         currentPlayer = thissound;
}

	
$('.cerrar, .mask').click(function(){
	

	$('.mask').fadeOut();
	$('article').fadeOut();

	$('.tipos li').removeClass('active');
	$('.tarjeta').removeClass('show');

    $('audio').each(function(){
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });

});

$('.pieza h3').each(function() {
	$(this).click(function() {
  		$(this).next().addClass('show');
	});
	});
	$('.volver').each(function() {
    	$(this).click(function() {
    		
    		$('.tipos li').removeClass('active');

      		$(this).parent().removeClass('show');

            $('audio').each(function(){
                this.pause(); // Stop playing
                this.currentTime = 0; // Reset time
            });
    	});
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

	/*.click(function() {
	$('.tipos li').removeClass('active');
		$(this).addClass('active');
	}, function() {
	$(this).removeClass('active');
});*/

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
    	//$('#responsabilidad').attr('class', 'active');

    	var slice = $(this).attr('id');
    	$('article').hide();
  		$('.mask').fadeIn();
    	$('.'+slice).fadeIn();

    	/*
    	$(this).attr('class', 'slice active');

    	$(this).scrollPart();
    	//agregar clase al padre
    	$('#rg').removeClass(slice);
    	$('#rg').addClass(slice );

    	*/

    	//$('.slices-content .part').hide();
    	//$('.slices-content .part[data-slice=' + slice + ']').fadeIn(500);
    	
	}
});
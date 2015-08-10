//http://stackoverflow.com/questions/30259395/audio-will-not-play-on-android-using-phonegap-but-works-fine-on-ios
//http://simonmacdonald.blogspot.com/2011/05/using-media-class-in-phonegap.html
//https://gist.github.com/alunny/2380994

var playing = false;

function effsound(src) {
    if (device.platform == 'Android') {
        src = '/android_asset/www/' + src;
    }
    var media = new Media(src, success, error_error);

    if (!playing) {
        media.play(); 
        $('.tipos li').addClass('active');
        playing = true; 
    } else {
        myMedia.pause();
        $('.tipos li').removeClass('active');    
        playing = false; 
    }
}
function success() {
    // ignore
}
function error_error(e) {
    alert('great error');
    alert(e.message);
}
function stopAudio() {
  media.stop();
  playing = false;
  $('.tipos li').removeClass('active');   
}
	
$('.cerrar').click(function(){
	$('.mask').fadeOut();
	$('article').fadeOut();

	$('.tipos li').removeClass('active');
	$('.tarjeta').removeClass('show');

    $('audio').each(function(){
        this.pause(); // Stop playing
       
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
            $(this).topAudio();
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
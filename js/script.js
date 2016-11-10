$(function() {
    var $elem = $('#container');
    
    $('#nav_up').fadeIn('slow');
    $('#nav_down').fadeIn('slow');  
    
    $(window).bind('scrollstart', function(){
        $('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
    });
    $(window).bind('scrollstop', function(){
        $('#nav_up,#nav_down').stop().animate({'opacity':'1'});
    });
    
    $('#nav_down').click(
        function (e) {
            $('html, body').animate({scrollTop: $elem.height()}, 800);
        }
    );
    $('#nav_up').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px'}, 800);
        }
    );
});

$("document").ready(function (){ 
    var percent = $('.progress_bar').attr('title');
    $('.progress_bar').animate({width: percent},1000);
});

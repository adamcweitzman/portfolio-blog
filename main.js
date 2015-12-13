$(function() {
    console.log( "ready!" );

    $('.btn').hover(function() {
    	$(this).css({'background-color': 'transparent', 'color': 'black' });
    }, function() {
    	$(this).css({'background-color': '#7A7A7A', 'color': 'white'});
    });
});

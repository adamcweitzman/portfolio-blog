$(function() {
    console.log( "ready!" );

    $('.btn').hover(function() {
    	$(this).css({'background-color': 'transparent', 'color': 'black' });
    }, function() {
    	$(this).css({'background-color': '#9C66BA', 'color': 'white'});
    });

    $("a[href=#menuExpand]").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});


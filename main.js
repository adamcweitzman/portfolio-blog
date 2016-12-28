$(function() {
    console.log( "ready!" );

    $('.btn').hover(function() {
    	$(this).css({'background-color': 'transparent', 'color': 'black' });
    }, function() {
    	$(this).css({'background-color': '#9C66BA', 'color': 'white'});
    });


    // $('.faceshot').hover(function() {
    //     $(this).css({'display': 'none'});
    //     $('.faceshotcoconut').css({'display': 'show'});
    // });

    // $('.faceshot').hover(function() {
    //     $('.faceshotcoconut').css({'display': 'show'});
    // });


    // $('.faceshotcoconut').hover(function() {
    //     $(this).css({'display': 'show'});
    // });






    $("a[href=#menuExpand]").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });


});


$('a[href*="#"]:not(a[href="#"])').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top - 200,
        },"slow"
    );
});

$(".read-more").on('click', function(e){
    if($($(this).attr('data-target')).hasClass("show")){
        $(this).html("Mehr lesen");
    }else{
        $(this).html("Weniger anzeigen");
    }
});
$(document).ready(function(){
    $('.single-item').slick({
        dots: true
    });


    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3
    });

});
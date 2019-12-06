/* Roberta di Camerino - Main controller */

$(document).ready(function () {


// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
            $('.navbar-toggle:visible').click();
        }
    });





    <!-- End Initialize Swiper -->

    // $( "#about" ).load( "resources/about.html", function(){

    //     var swiperAbout = new Swiper('.swiper-container-about', {
    //         scrollbar: '.swiper-scrollbar',
    //         direction: 'vertical',
    //         slidesPerView: 'auto',
    //         mousewheelControl: true,
    //         freeMode: true
    //     });

    // });
    // $( "#contacts" ).load( "resources/contacts.html");
    // $( "#lookbook" ).load( "resources/lookbook.html" );
    // $( "#kids" ).load( "resources/lookbook-kids.html" );
    // $( "#news" ).load( "resources/news.html" , function(){

    //     var swiperNews = new Swiper('.swiper-container-news', {
    //         scrollbar: '.swiper-scrollbar',
    //         direction: 'vertical',
    //         slidesPerView: 'auto',
    //         mousewheelControl: true,
    //         freeMode: true
    //     });

    // });

    <!-- Initialize Swiper -->

    var swiperH = new Swiper('.swiper-container-h', {
        //pagination: '.swiper-pagination-h',
        //paginationClickable: true,
        direction: 'vertical',
        simulateTouch: false,
        initialSlide: 4,
        onlyExternal: true
    });
    //var swiperV = new Swiper('.swiper-container-v', {
    //    pagination: '.swiper-pagination-v',
    //    paginationClickable: true,
    //    direction: 'vertical',
    //    simulateTouch: false,
    //    initialSlide: 1
    //});



    $('#home-btn').on('click', function(e){
        //console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(4);
        activateBtn(e);
        //swiperV.slideTo(1);
    });

    $('#brand-btn').on('click', function(e){
        //console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(4);
        activateBtn(e);
        //swiperV.slideTo(1);
    });


    $('#about-btn').on('click', function(e){
        //console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(3);
        activateBtn(e);
        //swiperV.slideTo(0);
    });


    $('#lookbook-btn').on('click', function(e){
       // console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(1);
        activateBtn(e);
    });
    $('#kids-btn').on('click', function(e){
        // console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(2);
        activateBtn(e);
    });

    $('#lookbook-btn-intro').on('click', function(e){
        // console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(1);
        activateBtn(e);
    });

    $('#news-btn').on('click', function(e){
        //console.log(e.target.id);
        e.preventDefault();
        swiperH.slideTo(0);
        activateBtn(e);
    });

    $('#contacts-btn').on('click', function(e){
        activateBtn(e);
    });



    $("[data-dismiss='modal']").on('click', function(e){
        $('.navbar-collapse ul li a').removeClass('active');
    });




    // Products


    var s = {
        CAROUSEL :'#carousel-content-holder'
    }, $carousel;

    // $.getJSON('json/products.json', function (p) {
    //     var source = $("#entry-template").html();
    //     var template = Handlebars.compile(source);
    //     $carousel = $(s.CAROUSEL);

    //     for (var i = 0; i < p.length; i++) {

    //         if (p[i].category === 'bags') {
    //             var html = template(p[i]);
    //             $carousel.append(html);
    //         }

    //     }

    //     $('#carousel-content-holder').children().first().addClass('active');

    //     $('#carousel-example-generic').carousel('pause');

    //     $('#carousel-example-generic').on('mousewheel', function (e) {
    //         if (e.originalEvent.wheelDelta / 120 > 0) {
    //             $(this).carousel('prev');
    //         }
    //         else {
    //             $(this).carousel('next');
    //         }
    //     });

    //     $('.details-btn').on('click', function (e) {

    //         $(e.currentTarget.parentElement).toggleClass("open");

    //     });
    // });

    // End Products

    // Products Kids


    var z = {
        CAROUSEL :'#carousel-content-holder-kids'
    }, $carouselKids;

    // $.getJSON('json/products-kids.json', function (p) {
    //     var source = $("#entry-template-kids").html();
    //     var template = Handlebars.compile(source);
    //     $carouselKids = $(z.CAROUSEL);

    //     for (var i = 0; i < p.length; i++) {

    //         if (p[i].category === 'kids') {
    //             var html = template(p[i]);
    //             $carouselKids.append(html);
    //         }

    //     }

    //     $('#carousel-content-holder-kids').children().first().addClass('active');

    //     $('#carousel-example-generic-kids').carousel('pause');

    //     $('#carousel-example-generic-kids').on('mousewheel', function (e) {
    //         if (e.originalEvent.wheelDelta / 120 > 0) {
    //             $(this).carousel('prev');
    //         }
    //         else {
    //             $(this).carousel('next');
    //         }
    //     });


    // });

    // End Products


});

function activateBtn(e){
    $('.navbar-collapse ul li a').removeClass('active');
    $(e.target).addClass('active');
}
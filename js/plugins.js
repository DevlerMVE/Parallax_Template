/**
 * Created by Marco on 27/07/2016.
 */
(function () {
    $('#ourclass .col.m6 .picture').imagefill({runOnce: true});
    $('#gallery  .col.m3 .picture').imagefill({runOnce: true});
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true
    });

    $(window).load(function () {
        $('#my-video').backgroundVideo({
            parallax: true,
            parallaxOptions: {
                offset: 60,
                effect: 3
            }
        });
    });
    $('.carousel.carousel-slider').carousel({full_width: true});
   /* var options = [
        {
            selector: '#main',
            offset: 200,
            callback: function () {
                console.log('entra');
            }
        }
    ];
    Materialize.scrollFire(options);*/

})(jQuery, window, document);

//MAPA
function initMap() {
    var center = ($(window).width() > 1466) ? {lat: 42.867264, lng: -8.560740} : {lat: 42.867339, lng: -8.555542};
    var femandbody = {lat: 42.867339, lng: -8.555542};

    var mapOptions = {
        scrollwheel: false,
        zoom: 17,
        center: center,
        scroll: {x: $(window).scrollLeft(), y: $(window).scrollTop()}
    };

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: femandbody,
        map: map,
        title: 'FEM & Body'
    });

    var offset = $(map.getDiv()).offset();
    map.panBy(((mapOptions.scroll.x - offset.left) / 2), ((mapOptions.scroll.y - offset.top) / 2));
    google.maps.event.addDomListener(window, 'scroll', function () {
        var scrollY = $(window).scrollTop(),
            scrollX = $(window).scrollLeft(),
            scroll = map.get('scroll');
        if (scroll) {
            map.panBy(-((scroll.x - scrollX) / 2), -((scroll.y - scrollY) / 2));
        }
        map.set('scroll', {x: scrollX, y: scrollY})

    });
}

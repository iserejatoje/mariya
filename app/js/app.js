$(document).ready(function () {

    console.log("%cCreated with love ❤","color: #000; padding: 5px 0px 1px; border-bottom:2px solid #17a1a5;");

    let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch) {
        $('.project__card').addClass('project__card-touch');
    }

    $('[type="tel"]').mask('+7 (999) 999-99-99');

    let $select = $('select');
    if ($select.length > 0)
        $select.selectric();

    $('.input')
        .on('focus', 'input', function () {
            $(this).addClass('active');
        })
        .on('blur', 'input', function () {
            if ($.trim($(this).val()) === '') {
                $(this).removeClass('active');
            }
        });

    $('.tabs')
        .on('click', '.tab', function () {
            $('body,html').animate({'scrollTop': $('.tab-' + $(this).index()).offset().top - 40})
            return false;
        });
});

let $similar_slider = $('.similar__slider');
if ($similar_slider.length > 0) {
    let owl = $similar_slider.owlCarousel({
        margin: 30,
        dots: false,
        responsive : {
            0 : {
                items: 1,
            },
            760 : {
                items: 2,
            },
            1366 : {
                items: 3,
            }
        }
    });
    $('.prev-slider').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.next-slider').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    });
}
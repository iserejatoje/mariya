$(document).ready(function () {

    console.log("%cCreated with love ❤","color: #000; padding: 5px 0px 1px; border-bottom:2px solid #17a1a5;");

    let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch) {
        $('.project__card').addClass('project__card-touch');
    }

    $('[type="tel"]').mask('+7 (999) 999-99-99');

    if ($('select').length > 0)
        $('select').selectric();

    $('.input')
        .on('focus', 'input', function () {
            $(this).addClass('active');
        })
        .on('blur', 'input', function () {
            if ($.trim($(this).val()) === '') {
                $(this).removeClass('active');
            }
        });
});
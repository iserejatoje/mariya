$(document).ready(function () {
    console.log("%cCreated by Sergey Valitov, with ❤","color: #000; padding: 5px 0px 1px; border-bottom:2px solid #17a1a5;");

    $('[type="tel"]').mask('+7 (999) 999-99-99');

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
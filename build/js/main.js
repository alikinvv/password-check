
$(document).ready(function(){
    $('body').on('focus', '.wrap input', function (event) {
        $(this).parent().addClass('active');
    });

    $('body').on('blur', '.wrap input', function () {
        if (!$(this).val().length > 0) {
            $(this).parent().removeClass('active');  
        }
    });

    $('body').on('keyup', '.wrap input', function () {
        $('.wrap .from').text($(this).val().length);

        if ($(this).val().length >= 6) {
            $('.wrap .count').addClass('active');
        } else {
            $('.wrap .count').removeClass('active');
        }

        if ($(this).val().search(/\d/) != -1) {
            $('.wrap .number').addClass('active');
        } else {
            $('.wrap .number').removeClass('active');
        }

        if (/[A-Z]/.test($(this).val())) {
            $('.wrap .upper').addClass('active');
        } else {
            $('.wrap .upper').removeClass('active');
        }
    });

    $('body').on('click', '.wrap svg:not(.active)', function () {
        $(this).addClass('active');
        $('.wrap input').attr('type', 'text');
    });

    $('body').on('click', '.wrap svg.active', function () {
        $(this).removeClass('active');
        $('.wrap input').attr('type', 'password');
    });
});

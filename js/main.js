$(function () {
    'use strict';
    $('.language span').on('click', function () {
        $(':root').css('--mainColor', $(this).data('color'));
    });
});
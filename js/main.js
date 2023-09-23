$(function () {
    'use strict';
    $('.language span').on('click', function () {
        $(':root').css('--mainColor', $(this).data('color'));
    });
});



document.querySelectorAll('.gallery img').forEach(imge => {
    imge.onclick = () => {
        document.querySelector('.popup-photo').style.display = 'block';
        document.querySelector('.popup-photo img').src = imge.getAttribute('src');

    }
});
document.querySelector('.popup-photo span').onclick = () => {
    document.querySelector('.popup-photo').style.display = 'none';
}



document.querySelectorAll('.pic img').forEach(imge => {
    imge.onclick = () => {
        document.querySelector('.popup-photo').style.display = 'block';
        document.querySelector('.popup-photo img').src = imge.getAttribute('src');

    }
});
document.querySelector('.popup-photo span').onclick = () => {
    document.querySelector('.popup-photo').style.display = 'none';
}


$(document).ready(function () {
    $('img').bind('contextmenu', function (e) {
        return false;
    });
});

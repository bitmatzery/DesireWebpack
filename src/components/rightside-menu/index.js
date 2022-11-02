import $ from "jquery";

$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close')
        console.log('Click removeClass rightside-menu');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close')
        console.log('Click addClass rightside-menu');
    });
})

console.log('Init rightside-menu');
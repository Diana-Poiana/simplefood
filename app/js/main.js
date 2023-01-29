$(function () {

  $('.menu__btn--search').on('click', function () {
    $('.menu__form').toggleClass('menu__form--active');
  });

  var mixer = mixitup('.categories__product');

});
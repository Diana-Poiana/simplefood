
$(document).ready(function () {
  //CHECKBOX

  $.each($('.filter-offer__label'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });

  $(document).on('click', '.filter-offer__label', function (event) {
    if ($(this).hasClass('active')) {
      $(this).find('input').prop('checked', false);
    } else {
      $(this).find('input').prop('checked', true);
    }
    $(this).toggleClass('active');

    return false;
  });
});


$(function () {

  //ION-SLIDER

  $('.filter-price__input').ionRangeSlider({
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  //FORM STYLER

  $('.product-catalog__select').styler();

  //MENU BUTTONS

  $('.search__btn').on('click', function () {
    $('.search__form').toggleClass('active');
  });

  $('.search__submit-btn').on('click', function () {
    $('.search__form').toggleClass('active');
  });

  $('.burger-menu').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  });

  $('.mobile-menu__btn').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  });

  //SLICK SLIDER

  $('.review__inner').slick({
    dots: true,
    accessibility: true,
    appendArrows: '.slick-nav',
    appendDots: '.slick-dots',
    prevArrow: $('.slick-nav__prev'),
    nextArrow: $('.slick-nav__next'),

    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        }
      },
    ]
  });

  $('.restaurant__list').slick({
    dots: true,
    accessibility: true,
    arrows: false,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  //CATEGORIES FILTER BUTTONS

  var mixer = mixitup('.categories__product');

});

$(function () {

  var mixer = mixitup('.product-catalog__list');

});


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

  //SLICK SLIDER

  $('.review__inner').slick({
    dots: true,
    accessibility: true,
    appendArrows: '.slick-nav',
    appendDots: '.slick-nav__dots',
    prevArrow: $('.slick-nav__prev'),
    nextArrow: $('.slick-nav__next'),
  });

  //CATEGORIES FILTER BUTTONS

  $('.categories__filter-btn').on('click', function () {
    $('.this').addClass('categories__filter-btn--active')
    $('.categories__filter-btn').removeClass('categories__filter-btn--active');
  });


  var mixer = mixitup('.categories__product');

});

$(function () {

  var mixer = mixitup('.product-catalog__list');

});

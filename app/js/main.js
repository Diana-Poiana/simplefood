


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

  $(document).on('click', '.checkbox__label', function (event) {
    if ($(this).hasClass('active')) {
      $(this).find('input').prop('checked', false);
    } else {
      $(this).find('input').prop('checked', true);
    }
    $(this).toggleClass('active');

    return false;
  });
});


//TABS

$('.product-tabs__link').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__link').removeClass('product-tabs__link--active');
  $(this).addClass('product-tabs__link--active');

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
  
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

  $('.product-catalog__select, .product-description__select, .checkbox__subscribe').styler();

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

  $('.product-catalog__filter-button').on('click', function () {
    $('.product-catalog__filter').toggleClass('open');
  });

  $('.filter-menu__btn').on('click', function () {
    $('.product-catalog__filter').toggleClass('open');
  });

  //RATEYO

  $(function () {

    $("#rateYo").rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      spacing: "6px",
      readOnly: true,
    });

  });

  $(function () {

    $('.star').rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      spacing: "6px",
      readOnly: true,
    });

  });

  $(function () {

    $('.rateyo').rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      spacing: "6px"
    });

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

  $('.product-description__img-box').slick({
    prevArrow: '<button type="button" class="slick-left"><svg width="19" height="32"><use xlink: href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-right"><svg width="19" height="32"><use xlink: href="images/sprite.svg#arrow-right"></use></svg></button>'
  });


  $('.discounts__list').slick({
    dots: true,
    accessibility: true,
    arrows: false,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 831,
        settings: "unslick"
      }
    ]
  });

  $('.related-products__list').slick({
    dots: false,
    accessibility: true,
    slidesToShow: 5,
    prevArrow: '<button type="button" class="related-products__prev"><svg width="10" height="18"><use xlink: href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="related-products__next"><svg width="10" height="18"><use xlink: href="images/sprite.svg#arrow-right"></use></svg></button>',
  });

  


  //CATEGORIES FILTER BUTTONS

  var mixer = mixitup('.categories__product');

});

$(function () {

  var mixer = mixitup('.product-catalog__list');

});

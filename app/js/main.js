


$(function () {

  $("#submit").hide();
  $("#search").on('click', function () {
    $("#submit").show();
    $("#search").hide();
  })

  $('.search__btn, .search__submit-btn').on('click', function () {
    $('.search').toggleClass('search--active');
  });


  $('.review__content').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-prev" width="34" height="34"><use href="images/sprite.svg#next-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next" width="34" height="34"><use href="images/sprite.svg#prev-arrow"></use></svg></button>',
  });

  $('.categories__filter-btn').on('click', function () {
    $('.this').addClass('categories__filter-btn--active')
    $('.categories__filter-btn').removeClass('categories__filter-btn--active');
  });

  var mixer = mixitup('.categories__product');

});

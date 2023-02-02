$(function () {

  $('.search__btn, .search__submit-btn').on('click', function () {
    $('.search').toggleClass('search--active');
  });

  var mixer = mixitup('.categories__product');

});

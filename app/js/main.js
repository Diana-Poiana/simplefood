$(function () {
  $("#submit").hide(); 
  $("#search").on('click', function () {
    $("#submit").show();
    $("#search").hide();
  })
});

$(function () {

  $('.search__btn, .search__submit-btn').on('click', function () {
    $('.search').toggleClass('search--active');
  });
  

  $('.categories__filter-btn').on('click', function () {
    $('.this').addClass('categories__filter-btn--active')
    $('.categories__filter-btn').removeClass('categories__filter-btn--active');
  });

  var mixer = mixitup('.categories__product');

});

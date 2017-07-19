if (window.location.href.match(/^https?:\/\/app\.fooda\.com\/accounts\/\d+\/select_events\/\w+\d+\/items$/) != null) {
  var minimum = parseFloat(prompt('Enter minimum price', '0')),
    maximum = parseFloat(prompt('Enter maximum price', '3.5'));

  $('.item__content').each(function(i, item) {
    var price = parseFloat($(item).find('.item__price').text().replace(/\$/, '')); $(item).parents('.item').toggleClass('hidden', price > maximum || price < minimum)
  });
}

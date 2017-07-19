$(function(){
  var sortedPrices = $.map($('.item__price'), function(e) {
    return parseFloat($(e).text().replace(/\$/, ''))
  }).sort(function(a, b) {
    return a - b;
  });

  var minPrice = sortedPrices[0],
    maxPrice = sortedPrices[sortedPrices.length - 1];

  var css = `
    <style type="text/css">
      .uppercase { text-transform: uppercase }
      .input-wrapper {
        border: 1px solid #F1F0F0;
        left: 5px;
        position: relative;
      }
      .price-input {
        width: 40px;
        background: #FDFCFB;
        padding: 3px;
        border: 0 none;
      }
    </style>`;

  var markup = `
    <li class="dropdown js-selection-dropdown" style="color: #777777">
      <div>
        <span class="uppercase">from</span>
        <span style="border: 1px solid #F1F0F0;left: 5px;position: relative;">$
          <input type="text" value="${minPrice}" class="price-input" name="min_price" />
        </span>
       <span style="left: 10px; position: relative" class="uppercase">to</span>
       <span class="input-wrapper" style="left: 15px;position: relative;">$
         <input type="text" value="${maxPrice}" class="price-input" name="max_price">
       </span>
      </div>
    </li>`;

  $('[data-selection-type=price]').parents('.js-selection-dropdown').html(css + markup);

  $('.price-input').on('change', function(e) {
    var minUserPrice = parseFloat($('[name=min_price]').val());
    var maxUserPrice = parseFloat($('[name=max_price]').val());

    $('.item__content').each(function(i, item) {
      var price = parseFloat($(item).find('.item__price').text().replace(/\$/, '')); $(item).parents('.item').toggleClass('hidden', price > maxUserPrice || price < minUserPrice)
    });
  });
});

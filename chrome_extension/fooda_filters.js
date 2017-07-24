$(function(){
  var sortedPrices = $.map($('.item__price'), function(e) {
    return parseFloat($(e).text().replace(/\$/, ''))
  }).sort(function(a, b) {
    return a - b;
  });

  var minPrice = 0, maxPrice = 0;
  var ORIG_MIN_PRICE = sortedPrices[0];
  var ORIG_MAX_PRICE = sortedPrices[sortedPrices.length - 1];

  function resetPrices() {
    minPrice = ORIG_MIN_PRICE;
    maxPrice = ORIG_MAX_PRICE;
    updatePriceInputs(minPrice, maxPrice);
  }

  function updatePriceInputs(minPrice, maxPrice) {
    $('input[name=min_price]').val(minPrice);
    $('input[name=max_price]').val(maxPrice);
    updateShownItems(minPrice, maxPrice);
  }

  function updateShownItems(minUserPrice, maxUserPrice) {
    $('.item__content').each(function(i, item) {
      var price = parseFloat($(item).find('.item__price').text().replace(/\$/, '')); $(item).parents('.item').toggleClass('hidden', price > maxUserPrice || price < minUserPrice)
    });
  }

  resetPrices();

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
        <input type="button" name="btn-reset-price" style="left: 15px; position: relative" value="Reset" />
      </div>
    </li>`;

  $('[data-selection-type=price]').parents('.js-selection-dropdown').html(css + markup);

  $('.price-input').on('change', function(e) {
    var minUserPrice = parseFloat($('[name=min_price]').val());
    var maxUserPrice = parseFloat($('[name=max_price]').val());
    updateShownItems(minUserPrice, maxUserPrice);
  });

  $('input[name=btn-reset-price]').on('click', function(e) {
    resetPrices();
  });
});

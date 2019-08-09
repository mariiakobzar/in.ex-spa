
/* global jQuery */

(($) => {
  $(document).ready(() => {
    const maxWidth = window.matchMedia('(max-width: 480px)');

    function checkWidth(width) {
      if (width.matches) {
        $('.burger').removeClass('visually-hidden').css('position', 'relative');
      } else {
        $('.burger').addClass('visually-hidden').css('position', 'fixed');
      }
    }

    checkWidth(maxWidth);
    maxWidth.addListener(checkWidth);

    $('.burger').click(() => {
      $('.burger-menu').toggleClass('visually-hidden');
      $('.burger').toggleClass('burger--open');
    });

    $('.burger-menu__item').click(() => {
      $('.burger-menu').toggleClass('visually-hidden');
      $('.burger').toggleClass('burger--open');
    });

    $('main').on('click', '.filter-head', () => {
      $(this).next().toggleClass('visually-hidden');
      $(this).children('.plus').toggleClass('active');
    });

    $('.basket-content').click(() => {
      $('.cart').toggleClass('visually-hidden');
      $('.cart-btn').toggleClass('active');
      $('.cart-card').toggleClass('active');
    });

    $('.cart-btn').click(() => {
      $('.cart-btn').toggleClass('active');
      setTimeout(() => {
        $('.cart-card').toggleClass('active');
      }, 400);
      setTimeout(() => {
        $('.cart').toggleClass('visually-hidden');
      }, 850);
    });

    function openQuickView() {
      const srcImg = $(this).siblings('img').attr('src');
      const title = $(this).parent().parent().find('.item-info__name')
        .text();
      const price = $(this).parent().parent().find('.item-info__price')
        .text();

      $('.q-view').removeClass('visually-hidden');
      $('.q-view-card__img img').attr('src', srcImg);
      $('.q-view-card-info__title').text(title);
      $('.q-view-card-info__price').text(price);
    }

    $('main').on('click', '.item--hover', openQuickView);

    $('.q-view').on('click', (e) => {
      if (e.target === $('#close-btn-q')[0] || e.target === $('.q-view')[0]) {
        $('.q-view').addClass('visually-hidden');
      }
    });

    function sortByNewest() {
      const items = $('.products-container .item');
      const arItems = $.makeArray(items);
      arItems.sort((a, b) => {
        const f = a;
        const s = b;
        return parseInt($(f).data('id'), 10) - parseInt($(s).data('id'), 10);
      });
      $(arItems).appendTo('.products-container');
    }

    function sortByPriceFromLow() {
      const items = $('.products-container .item');
      const arItems = $.makeArray(items);
      arItems.sort((a, b) => {
        const f = a;
        const s = b;
        return parseFloat($(f).data('price').substr(1), 10) - parseFloat($(s).data('price').substr(1), 10);
      });
      $(arItems).appendTo('.products-container');
    }

    function sortByPriceFromHigh() {
      const items = $('.products-container .item');
      const arItems = $.makeArray(items);
      arItems.sort((a, b) => {
        const f = a;
        const s = b;
        return parseFloat($(s).data('price').substr(1), 10) - parseFloat($(f).data('price').substr(1), 10);
      });
      $(arItems).appendTo('.products-container');
    }

    function sortByNameFromA() {
      const items = $('.products-container .item');
      const arItems = $.makeArray(items);
      arItems.sort((a, b) => {
        let f = a;
        let s = b;
        [f] = [$(f).data('name').split(' ')[0]];
        [s] = [$(s).data('name').split(' ')[0]];
        if (f < s) {
          return -1;
        }
        if (f > s) {
          return 1;
        }
        return 0;
      });
      $(arItems).appendTo('.products-container');
    }

    function sortByNameFromZ() {
      const items = $('.products-container .item');
      const arItems = $.makeArray(items);
      arItems.sort((a, b) => {
        let f = a;
        let s = b;
        [f] = [$(a).data('name').split(' ')[0]];
        [s] = [$(b).data('name').split(' ')[0]];
        if (f > s) {
          return -1;
        }
        if (f < s) {
          return 1;
        }
        return 0;
      });
      $(arItems).appendTo('.products-container');
    }

    function checkOption() {
      switch ($('#select-sort option:selected').text()) {
        case 'Newest':
          sortByNewest();
          break;
        case 'Price (low to high)':
          sortByPriceFromLow();
          break;
        case 'Price (high to low)':
          sortByPriceFromHigh();
          break;
        case 'Name A-Z':
          sortByNameFromA();
          break;
        case 'Name Z-A':
          sortByNameFromZ();
          break;
        default:
          break;
      }
    }

    $('main').on('change', '#select-sort', checkOption);
  });
})(jQuery);

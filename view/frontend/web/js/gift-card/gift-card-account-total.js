define([
    'jquery'
], function ($) {
    'use strict';

    $.breezemap.__register('Magento_GiftCardAccount/js/view/cart/totals/gift-card-account');

    $.mixin('Magento_GiftCardAccount/js/view/cart/totals/gift-card-account', {
        removeGiftCard: function (parent, giftCardCode, event) {
            if (giftCardCode) {
                $('.cart-totals').spinner(true);
            }
            parent(giftCardCode, event);
        }
    });
});

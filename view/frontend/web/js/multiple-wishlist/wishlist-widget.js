define([
    'jquery',
    'Magento_Ui/js/modal/confirm'
], function ($, confirm) {
    'use strict';


    $.mixin('multipleWishlist', {
        _showCreateWishlist: function (parent, url, isAjax) {
            parent(url, isAjax);

            if (!this.focusTrap) {
                this.focusTrap = $.focusTrap.createFocusTrap($('#create-wishlist-block').get(0));
                this.createTmpl.hide = _.wrap(this.createTmpl.hide, o => {
                    this.focusTrap.deactivate();
                    $.breeze.scrollbar.reset();
                    $(document).off('keydown.multipleWishlist');
                    o.bind(this.createTmpl)();
                });
            }

            $.breeze.scrollbar.hide();
            this.focusTrap.activate();
            $(document).on('keydown.multipleWishlist', event => {
                if (event.key === 'Escape') {
                    this.createTmpl.hide();
                }
            });
        },

        _deleteWishlist: function (parent, e) {
            var json = $(e.currentTarget).data('wishlist-delete');

            e.preventDefault();
            confirm({
                content: this.options.deleteMsg,
                actions: {
                    confirm: function () {
                        $.post(json.deleteUrl.replace(encodeURI('%item%'), json.wishlistId), {
                            data: {},
                            success: function () {
                                window.location.href = json.redirectUrl;
                            }
                        });
                    }
                }
            });
        },

        _destroy: function (parent) {
            this.createTmpl?.hide();
            parent();
        },
    });
});

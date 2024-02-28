define([], () => {
    'use strict';

    var isEmpty = $.validator.utils.isEmpty;

    $.validator.validators['required-if-all-sku-empty-and-file-not-loaded'] = [
        (value, el, settings) => {
            var valid = false,
                alternate = $(settings.specifiedId),
                alternateValue;

            if (alternate.length) {
                valid = $.validator.validateElement(alternate);
                if (valid && isEmpty(alternate.val())) {
                    valid = false;
                }
            }

            if (!valid) {
                valid = !isEmpty(value);
            }

            $('input[' + settings.dataSku + '=true]').each(function () {
                if (!isEmpty($(this).val())) {
                    valid = true;
                }
            });

            return valid;
        },
        $t('Please enter valid SKU key.')
    ];
});

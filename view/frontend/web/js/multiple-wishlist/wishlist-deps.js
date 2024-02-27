define([
    'jquery'
], function ($) {
    'use strict';

    $.breezemap.rjsResolver = function (fn, context) {
        setTimeout(fn.bind(context), 1);
    };

    $.breezemap['mage/validation/url'] = {
        redirect: function (path) {
            window.location.href = path;
        },
    };
});

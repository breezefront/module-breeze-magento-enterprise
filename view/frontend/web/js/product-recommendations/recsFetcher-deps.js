(() => {
    'use strict';

    // https://stackoverflow.com/a/68851118
    if (!$.Deferred) {
        $.Deferred = () => {
            function Defer() {
                var promise = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
                this.promise = () => promise;
            }

            return new Defer();
        }
    }
})();

;(function($) {

    (function(console) {
        var name,
            empty = function() {},
            methods = [
                'assert', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception',
                'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline',
                'profile', 'profileEnd', 'time', 'timeEnd', 'trace', 'warn'
            ];
        while (name = methods.pop()) {
            console[name] = console[name] || empty;
        }
    })(window.console = window.console || {});

    if (!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation only accepts the first parameter.');
            }
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    // ES6 Draft 15.4.3.4
    if (!Array.from) {
        Array.from = function(arrayLike) {
            var result = [];
            // In IE < 9 it's not possible to use [].slice.call
            for (var i = 0, len = arrayLike.length; i < len; i++) {
                result.push(arrayLike[i]);
            }
            return result;
        };
    }

    // HTML5 elements for IE
    if ('\v' == 'v') {
        (function() {
            var elements = [
                'article', 'aside', 'audio', 'bdi', 'canvas', 'data', 'datalist', 'details',
                'figcaption', 'figure', 'footer', 'header', 'hgroup', 'main', 'mark', 'meter',
                'nav', 'output', 'progress', 'section', 'summary', 'time', 'video'
            ];
            while (elements.length) {
                document.createElement(elements.pop());
            }
        })();
    }

    if (!('autofocus' in document.createElement('input'))) {
        $(function() {
            setTimeout(function() {
                var autofocuses = document.querySelectorAll('[autofocus]');
                if (autofocuses.length) {
                    autofocuses[autofocuses.length - 1].focus()
                }
            }, 10);
        });
    }

    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    if (!window.requestAnimationFrame) {
        (function() {
            var lastTime = 0,
                vendors = ['moz', 'webkit'];

            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
                    window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(
                        function() {
                            callback(currTime + timeToCall);
                        },
                        timeToCall
                    );
                    lastTime = currTime + timeToCall;
                    return id;
                };
            }

            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
            }
        }());
    }

})(jQuery);

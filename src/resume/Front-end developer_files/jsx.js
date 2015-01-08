/**
 * Copyright (c) 2007 Andrew Sumin (http://jsx.ru/)
 *
 * Licensed under Creative Commons Atribution 3.0 license
 * http://creativecommons.org/licenses/by/3.0/
 *
 * Permission is granted to modify this work as stated
 * in license given that this notice is preserved.
 */

var jsxComponents = {
        Editor: {}
    },
    jsxAjax = {},
    HH = HH || {},
    CKEditor4 = {},
    Chameleon = Chameleon || {
        loading: '<small style="color:#666"><em>загрузка</em></small>'
    },
    HHGallery2 = {},
    HHSearch = {},
    HHMaps = {},
    HHT = {},
    ZC = {},
    Banner = {
        convertToOptions: function(option) {
            return {
                value: option.id,
                text: option.value
            };
        }
    },
    HeadHunter = {
        filterOptions: function(selectElem, arr, filter, optionValue, optionText) {
            selectElem.innerHTML = '';

            var emptyOptionElem = document.createElement('option');
            emptyOptionElem.value = '';
            selectElem.appendChild(emptyOptionElem);

            arr.forEach(function(item) {
                if (filter(item)) {
                    var optionElem = document.createElement('option');
                    optionElem.value = optionValue(item);
                    var textNode = document.createTextNode(optionText(item));
                    optionElem.appendChild(textNode);
                    selectElem.appendChild(optionElem);
                }
            });
        }
    },
    HHGallery = {
        Photo: function(href, description, id) {
            this.href = href;
            this.description = description || '';
            this.id = id || '';
        }
    };

//adBlock убивает BannerHandler.js с методом HH.banners.put, в результате имеем множество ReferenceError'ов.  
if (!HH.banners) {
    HH.banners = {
        put: function(){}
    }
}

HH.CMS = {};
HH.EmployerBonus = {};

/**
 * Core object contains methods for dynamic loading of scripts.
 */

var jsx = jsx || {};
jsx.params = {
    'build': window.HH_STATIC_VERSION || '',
    'lang': window.HH_LANG || 'RU',
    'site': window.HH_SITE || '1'
};

require.config({
    'baseUrl': window.HH_STATIC_URI + 'js',
    'paths': {
        'jsxComponents': 'jsx/jsxComponents',
        'HH': 'hh/HH',
        'HHSearch': 'hh/HHSearch',
        'jsxAjax': 'jsx/jsxAjax',
        'CKEditor4': window.HH_STATIC_URI + 'editors/ckeditor4',
        'Libraries': 'hh/Libraries',
        'ZC': 'jsx/ZC',
        'Banner': window.HH_STATIC_URI + 'jslib/Banner',
        'HeadHunter': window.HH_STATIC_URI + 'jslib/HeadHunter',
        'HHGallery': window.HH_STATIC_URI + 'jslib/HHGallery',
        'HHGallery2': 'hh/HHGallery2',
        'Chameleon': 'chameleon',
        'HHMaps': 'hh/HHMaps',
        'HHT': 'hh/HHT',

        'Underscore': 'hh/Libraries/underscore-min',
        'Backbone': 'hh/Libraries/backbone-min'
    },
    'urlArgs': 'build=' + jsx.params.build,
    'shim': {
        'Underscore': {
            'exports': '_'
        },
        'Backbone': {
            'exports': 'Backbone',
            'deps': ['Underscore'] // , 'jquery'
        },
        'Libraries/raphael.popup': {
            'deps': ['Libraries/raphael']
        }
    }
});

/* Fallback for chameleon presentation pages (hht) */
jsx.require = function(_, listener) {
    listener();
};

/**
 * Contains all global vars like base to core (this) file browser type and version...
 */
jsx.Vars = new function() {
    this.DEBUG = false;

    this.NULL = function() {
        return null;
    };
    this.EMPTY = function() {
        /* return nothing */
    };

    var userAgent = navigator.userAgent.toLowerCase();
    this.msie = /msie/.test(userAgent) && !(/opera/.test(userAgent));
    this.ios = /(ipad|iphone|ipod)/g.test(userAgent);
};

jsx.Scripts = new function() {
    this.createScript = function(attributes, listener, encodeSrc) {
        var _encodeSrc = (typeof(encodeSrc) === 'undefined') ? true : encodeSrc;
        var script = this._createScript(attributes, _encodeSrc);
        var cb = (typeof(listener) == 'function' ? listener : jsx.Vars.NULL);
        if (script.readyState) { // IE, incl. IE9
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    cb();
                }
            };
        } else {
            script.onload = function() {
                cb();
            };
        }
    };

    this._createScript = function(attributes, encodeSrc) {
        var i, script = document.createElement('script'),
            existedScript = document.getElementsByTagName('script')[0];
        script.setAttribute('type', 'text/javascript');
        for (i in attributes) {
            if (attributes.hasOwnProperty(i)) {
                if (i == 'src' && encodeSrc) {
                    attributes['src'] = encodeURI(attributes['src']);
                }
                script.setAttribute(i, attributes[i]);
            }
        }
        existedScript.parentNode.insertBefore(script, existedScript);
        return script;
    };
};

/**
 * Creates tag link.
 * @alias jsx.Links
 */
jsx.Links = new function() {
    /**
     * This method creates tag LINK.
     * @param {Object} Attrbites
     */
    this.createLink = function(attributes) {
        var link = document.createElement('link');
        attributes.rel = attributes.rel || 'stylesheet';
        attributes.type = attributes.type || 'text/css';
        for (var i in attributes) {
            link.setAttribute(i, attributes[i]);
        }
        // InsertBefore for IE.
        // If head is not closed and use appendChild IE crashes.
        var head = document.getElementsByTagName('head').item(0);
        head.insertBefore(link, head.firstChild);
    };
};

if (HH.jsxDebug) {
    jsx.Console = window.console;

    requirejs.onError = function(err) {
        console.log('type: ' + err.requireType);
        console.log('modules: ' + err.requireModules);

        throw err;
    };
} else {
    var sendError = function(){
        var msg = '';
        for (var i = 0, l = arguments.length; i < l; i++) {
            msg += arguments[i] + ' ';
        }

        window.onerror(msg, 'jsx.Console.error', -1);

        if (HH.jsxDebug) {
            console.error(msg);
        }

        return false;
    }

    jsx.Console = {
        log: jsx.Vars.NULL,
        info: jsx.Vars.NULL,
        warn: jsx.Vars.NULL,
        error: sendError,
        trace: jsx.Vars.NULL,
        dir: jsx.Vars.NULL,
        dirxml: jsx.Vars.NULL,
        group: jsx.Vars.NULL,
        groupEnd: jsx.Vars.NULL
    };
}

$(function() {
    requirejs(['jsx/Components'], function() {
        jsx.Components.init();
    });
});

if (top !== self && !(/^http:\/\/((rabota\.mail|career)\.ru|jobs?\.(tut\.by|day\.az|sochi\d{4}\.com)|ints\.rusfolder\.com|\w*\.?hh\.(ru|kz|ua|uz))/.test(document.referrer))) {
    top.location.replace(self.location.href);
}

document.cookie="GMT="+-1*((new Date()).getTimezoneOffset()/60)+";path=/";

var HH = HH || {};

HH.showHideItem=function(a){
    var b=document.getElementById(a),a=document.getElementById("image_"+a);
    b&&(b.style.display="none"==b.style.display?"block":"none");
    a&&(a.src="block"==b.style.display?"/images/minus.gif":"/images/plus.gif");
    return!1;
};

HH.doClick=function(c){
    var a=document.getElementById("action"),b=document.getElementById("form");
    a&&b&&(a.value=c,b.submit());
};

if (document.addEventListener) { // IE8
    document.addEventListener('keydown', function(e){
        'use strict';

        if (!(e && e.keyCode === 192 && e.shiftKey && e.ctrlKey)) {
            return;
        }

        if (!document.getElementById('tgrid')) {
            var container = document.createElement('div');
            container.className = 'layout';
            container.id = 'tgrid';
            container.style.display = 'none';
            container.innerHTML = '<table class="l"><tr>'+
                '<td class="l-cell"><div class="tgrid__box"> </div></td>'+
                '<td class="l-cell"><div class="tgrid__box"> </div></td>'+
                '<td class="l-cell"><div class="tgrid__box"> </div></td>'+
                '<td class="l-cell"><div class="tgrid__box"> </div></td>'+
                '</tr></table>';
            document.body.insertBefore(container, document.body.firstChild);
        }

        var grid = document.getElementById('tgrid');
        grid.style.display = (grid.style.display === 'none') ? 'block' : 'none';

    }, false);
}

if (window.addEventListener) { // IE8

    var firstClickHandler = function() {
        'use strict';
        window.HH = window.HH || {};
        window.HH.firstClickTime = +Date.now();
        window.removeEventListener('click', firstClickHandler, false);
    };
    window.addEventListener('click', firstClickHandler, false);

}

if (window.performance  && window.addEventListener) { // IE8

    window.addEventListener('load', function(){
        'use strict';
        window.HH = window.HH || {};
        window.HH.compInitStart = window.HH.compInitStart || 0;
        window.HH.compInitEnd = window.HH.compInitEnd || 0;

        var t = window.performance.timing,
            times = {
                fullLoad: t.domComplete - t.fetchStart,
                firstByte: t.responseStart - t.fetchStart,
                LastByte: t.responseEnd - t.fetchStart,
                startDomParse: t.domLoading - t.fetchStart,
                finishDomParse: t.domInteractive - t.fetchStart,
                deferredDone: t.domContentLoadedEventStart - t.fetchStart,
                domContentLoaded: t.domContentLoadedEventEnd - t.fetchStart,
                onLoad: t.domComplete - t.fetchStart,
                compInitStart: window.HH.compInitStart - t.fetchStart,
                compInitEnd: window.HH.compInitEnd - t.fetchStart,
                firstClickTime: window.HH.firstClickTime - t.fetchStart,

                dnsDelta: t.domainLookupEnd - t.domainLookupStart,
                tcpDelta: t.connectEnd - t.connectStart,
                awaitResponseDelta: t.responseStart - t.requestStart,
                bodyLoadDelta: t.responseEnd - t.responseStart,
                domParseDelta: t.domInteractive - t.domLoading,
                deferredDelta: t.domContentLoadedEventStart - t.domInteractive,
                domContentLoadedDelta: t.domContentLoadedEventEnd - t.domContentLoadedEventStart,
                compInitDelta: window.HH.compInitEnd - window.HH.compInitStart

            },
            timesString = '';

        for (var key in times) {
            if (times[key] >= 0 ) {
                timesString += ',' + key + ':' + times[key];
            }
            delete times[key];
        }

        (new Image()).src = '/stat?p=' + encodeURI(location.pathname) + timesString;

        if (window.frontikMetrics && window.frontikMetrics.pushStats) {
            window.frontikMetrics.pushStats(times);
        }

    }, false);
}

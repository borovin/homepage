var HH = HH || {};

HH.conversionGoals = {};

HH.conversionGoals.googleEventToStorage = function(c, e, l) {
    var googleEvents = JSON.parse(localStorage.getItem('googleEvents') || '{}');
    googleEvents[[c,e,l].join('*')] = {category: c, event: e, label: l};
    localStorage.setItem('googleEvents', JSON.stringify(googleEvents));
};

HH.conversionGoals.sendGoogleEvents = function() {
    var googleEvents = localStorage.getItem('googleEvents');
    if (!googleEvents) {
        return;
    }

    googleEvents = JSON.parse(googleEvents);
    for (var id in googleEvents) {
        HH.conversionGoals.trackAnalyticsEvent(
            googleEvents[id].category,
            googleEvents[id].event,
            googleEvents[id].label
        );
    }

    localStorage.removeItem('googleEvents');
};

HH.conversionGoals.setConversionGoal = function(name) {
    _gaq = window._gaq||[];
    _gaq.push(['main._trackPageview',name],['reg._trackPageview',name]);
};

HH.conversionGoals.trackAnalyticsEvent = function(cat, event, label) {
    label = label || '';
    _gaq = window._gaq || [];
    _gaq.push(['main._trackEvent', cat, event, label]);
    _gaq.push(['reg._trackEvent', cat, event, label]);
};

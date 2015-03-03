define(function (require) {

    var ajaxMock = require('kit/ajaxMock/ajaxMock');

    return ajaxMock({
        url: '/info.json',
        type: 'GET',
        status: 200,
        responseText: {
            "city": "Санкт-Петербург",
            "profession": "Front-end developer",
            "skype": "andrew.borovin",
            "phone": "+79218902868",
            "mail": "a@borovin.com",
            "github": "borovin"
        }
    });

});
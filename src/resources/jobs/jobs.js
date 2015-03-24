define(function(require, exports, module) {
    return [
        {
            title: 'Front-end developer',
            company: 'Кристалл Сервис',
            url: 'http://www.crystals.ru/',
            dateFrom: '19.04.2013',
            dateTo: '18.12.2014',
            description: require('tpl!./crystals.html')
        },
        {
            title: 'Front-end developer',
            company: 'Платежная система Яндекс.Деньги',
            url: 'https://money.yandex.ru/',
            dateFrom: '25.07.2011',
            dateTo: '14.03.2012',
            description: require('tpl!./yandexMoney.html')
        },
        {
            title: 'Front-end developer',
            company: 'Geometria.ru',
            url: 'http://geometria.ru/',
            dateFrom: '17.02.2010',
            dateTo: '18.07.2011',
            description: require('tpl!./geometria.html')
        },
        {
            title: 'Front-end developer',
            company: 'Инлайн',
            url: 'http://inline-ltd.ru/',
            dateFrom: '01.07.2009',
            dateTo: '16.02.2010',
            description: require('tpl!./inline.html')
        },
        {
            title: 'Html-верстальщик',
            company: 'Devellab',
            url: 'http://devellab.ru/',
            dateFrom: '01.02.2009',
            dateTo: '01.07.2010',
            description: require('tpl!./devellab.html')
        },
        {
            title: 'Html-верстальщик',
            company: 'СПбАльянс',
            dateFrom: '01.03.2008',
            dateTo: '01.02.2009',
            description: require('tpl!./spballiance.html')
        }
    ];
});
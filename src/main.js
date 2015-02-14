require([
    'blocks/page/page'
], function (Page) {

    document.body.innerHTML = '<div id="page"></div>';

    new Page();
});
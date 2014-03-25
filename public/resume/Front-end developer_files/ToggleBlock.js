define(['jsx/Dom', 'jsx/Events', 'jsx/CallBacks'], function() {
jsxComponents.ToggleBlock = new function(){
  this.init = function(element, params){
    new jsxComponents.ToggleBlock.Constructor(element, params);
  };
};

jsxComponents.ToggleBlock.Constructor = function (element, params){
  this.init(element, params);
};

jsxComponents.ToggleBlock.Constructor.prototype = new function(){
  this.init = function(element, params){
    this.element = element;
    this.params = params;
    this.notify = params.notify || false;
    this.name = params.name ? '-' + params.name : '';
    this.collapseClass = params.collapseClass || '';
    this.expandClass = params.expandClass || 'g-expand' + this.name;
    this.checkClosed();

    this.switchers = jsx.Dom.getElementsBySelector(this.element, '.jsxComponents-ToggleBlock-Switcher' + this.name);
    this.switchers.map(this.observeSwitcher, this);

    $('.jsxComponents-ToggleBlock-Link', this.element).on('click', this.click.bind(this, 'collapse'));

    if (params.closeByClick){
      this.closeByClickEvent = jsx.Events.observe(document.body, 'click', this.closeByClick.bind(this));
      jsx.CallBacks.add('jsxComponents-ToggleBlock-IsCloseByClick', this.isCloseByClick.bind(this), this.element);
      if (this.closed) {
        this.closeByClickEvent.stop();
      }
    }

    jsx.CallBacks.add('ToggleBlockClick', this.click.bind(this), this.element);
    this.params = params;
    if (params.id && window.location.hash.replace('#', '') == params.id){
      this.click('expand');
    }

    if (params.open) {
        this.click('expand');
    }

    this.input = jsx.Dom.$$(this.element, '.jsxComponents-ToggleBlock-Input' + this.name);
    if (this.input) {
      this.checkInput();
    }
  };

  this.isCloseByClick = function(flag) {
    this.closeByClickEvent[flag ? 'start' : 'stop']();
  }

  this.checkClosed = function() {
    if (this.collapseClass) {
        this.closed = jsx.Dom.hasClassName(this.element,this.collapseClass);
    }
    if (this.expandClass) {
        this.closed = !jsx.Dom.hasClassName(this.element,this.expandClass);
    }
  };

  this.click = function(event){

    switch (event){

      case 'expand':
        if (this.collapseClass) {
            jsx.Dom.removeClassName(this.element, this.collapseClass);
        }
        if (this.expandClass) {
            jsx.Dom.addClassName(this.element, this.expandClass);
        }
        this.closed = false;
        this.dispatch();
        if (this.closeByClickEvent) {
          this.closeByClickEvent.start();
        }
        if (this.params.focusOnOpen) {
          if (!this.inputFocus) {
            var input = jsx.Dom.$$(this.element, '.jsxComponents-ToggleBlock-focusOnOpen');
            if (input) {
              this.inputFocus = input;
            }
          }
          if (this.inputFocus)
            this.inputFocus.focus();
        }
        break;

      case 'collapse':
        if (this.expandClass) jsx.Dom.removeClassName(this.element, this.expandClass);
        if (this.collapseClass) jsx.Dom.addClassName(this.element, this.collapseClass);
        this.closed = true;
        this.dispatch();
        if (this.closeByClickEvent)
          this.closeByClickEvent.stop();
        break;

    }
  };

  this.closeByClick = function(event){
    var target = jsx.Events.element(event);
    if (jsx.Dom.descendantOf(target, this.element)){
      return;
    }
    this.click('collapse');
  };

  this.observeSwitcher = function(switcher){
    jsx.Events.observe(switcher, 'click', this.switchBlock.bind(this));
  };

  this.switchBlock = function(event){
    if (!jsx.Dom.hasClassName(event.target,'jsxComponents-ToggleBlock-Switcher-Force')) {
      jsx.Events.preventDefault(event);
    }
    this.checkClosed();
    if (this.closed) {
      this.click('expand');
    } else {
      this.click('collapse');
    }
  };

  this.checkInput = function(){
    if (this.input.checked && this.closed){
      this.click('expand');
    }else if(!this.input.checked && !this.closed){
      this.click('collapse');
    }
    window.setTimeout(this.checkInput.bind(this), 50);
  };

  this.dispatch = function(){
    jsx.CallBacks.dispatch('jsxComponents-ToggleBlock-Switch', this.element, this);
      
    if (this.notify) {
        jsx.CallBacks.dispatch('HH-Action-Notification', HH);
    }
  };


};
});

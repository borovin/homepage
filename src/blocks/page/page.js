define(function(require, exports, module) {
    //requirements
    var Block = require('kit/block/block');

    return Block.extend({
        el: '#page',
        template: require('ejs!./page.ejs'),
        scrollTop: 0,
        globalEvents: {
            'scroll': function(){

                var scrollTop = $(document).scrollTop(),
                    windowHeight = $(window).height(),
                    documentHeight = $(document).height(),
                    scrollDistance = this.scrollTop - scrollTop,
                    fixedTopPosition = this.fixedContent.offsetTop + scrollDistance,
                    fixedHeight = $(this.fixedContent).outerHeight(),
                    scrollOffset = windowHeight - fixedHeight;

                if (scrollTop < 0){
                    $(this.fixedContent).css('top', 0);
                    return;
                }

                if (scrollTop > documentHeight - windowHeight){
                    $(this.fixedContent).css('top', scrollOffset);
                    return;
                }

                if (scrollTop > this.scrollTop){
                    //scroll down
                    if (this.fixedContent.offsetTop > scrollOffset) {
                        $(this.fixedContent).css('top', fixedTopPosition);
                    } else {
                        $(this.fixedContent).css('top', scrollOffset);
                    }
                } else {
                    //scroll up
                    if (this.fixedContent.offsetTop < 0){
                        $(this.fixedContent).css('top', fixedTopPosition);
                    } else {
                        $(this.fixedContent).css('top', 0);
                    }
                }

                this.scrollTop = scrollTop;

            }
        },
        data: {
            jobs: require('resources/jobs/jobs'),
            resume: require('ejs!resources/resume/resume.html'),
            info: require('resources/info/info'),
            portfolio: require('resources/portfolio/portfolio')
        },
        blocks: {
            slider: require('blocks/slider/slider')
        },
        initialize: function(){
            window.PAGE = this;
        },
        render: function(){
            var render = Block.prototype.render.apply(this, arguments),
                page__content = this.el.querySelectorAll('.page__content');

            this.leftContent = page__content[0];
            this.rightContent = page__content[1];

            if ($(this.leftContent).height() > $(this.rightContent).height()){
                this.leftContent.classList.add('page__content_fixed');
                this.fixedContent = this.leftContent;
            } else {
                this.rightContent.classList.add('page__content_fixed');
                this.fixedContent = this.rightContent;
            }

            return render;
        }
    });
});
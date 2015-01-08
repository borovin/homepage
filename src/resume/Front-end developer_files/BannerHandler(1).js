var HH = HH || {};
HH.banners = {
    bannerJsons: [],
    init: function(){
        HH.banners.bannerJsons.map(function(json){
            var bannerJson = json.banners[0];
            var place = document.querySelector('.banner-place_' + bannerJson.place);
            if(bannerJson && place){
                place.style.display = 'block';
                HH.banners.handlers[bannerJson.type](bannerJson, place);
            }
        });
    },
    put: function(json) {
        HH.banners.bannerJsons.push(json);
    },
    handlers: {
        external: function(banner, bannerPlace) {
            var iframe = document.createElement('iframe');
            iframe.style.width = (banner.width || 0) + 'px';
            iframe.style.height = (banner.height || 0) + 'px';
            iframe.src = banner.src;
            iframe.frameBorder = 'no';
            iframe.scrolling = 'no';

            bannerPlace.appendChild(iframe);
        },
        image: function(banner, bannerPlace) {
            var a = document.createElement('a');
            a.href = banner.click;
            a.target = '_blank';

            var img = document.createElement('img');
            img.src = banner.src;

            a.appendChild(img);
            bannerPlace.appendChild(a);
        },
        flash: function(banner, bannerPlace) {

            var hasFlash;

            //Если в ослах заблокирован в настройках ActiveX, то выскакивает ошибка при создании объекта ActiveXObject и блочит скрипт
            try {
                hasFlash = !!(navigator.mimeTypes["application/x-shockwave-flash"] || window.ActiveXObject && new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
            } catch (e) {}

            if(hasFlash){
                var img = document.createElement('img');
                img.src = 'http://i.hh.ru/images/dot.gif';
                img.width = banner.width;
                img.height = banner.height;
                img.style.position = 'absolute';
                img.onclick = function(){window.open(banner.click);};

                var embed = document.createElement('embed');
                embed.setAttribute('height', banner.height);
                embed.setAttribute('width', banner.width);
                embed.setAttribute('align', 'middle');
                embed.setAttribute('type', 'application/x-shockwave-flash');
                embed.setAttribute('pluginspage', 'http://www.adobe.com/go/getflashplayer');
                embed.setAttribute('name', 'banner_' + banner.id);
                embed.setAttribute('quality', 'high');
                embed.setAttribute('wmode', 'transparent');
                embed.setAttribute('src', banner.src);
                embed.setAttribute('scale', 'noScale');
                embed.setAttribute('bgcolor', 'none');

                bannerPlace.appendChild(img);
                bannerPlace.appendChild(embed);
            } else if(banner.poster){
                banner.src = banner.poster;
                HH.banners.handlers['image'](banner, bannerPlace);
            }
        },
        html: function(banner, bannerPlace) {
            bannerPlace.onclick = function(){window.open(banner.click);};
            bannerPlace.innerHTML = banner.body;
        }
    }
};

jQuery(HH.banners.init);

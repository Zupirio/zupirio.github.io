var blockCookie = false;

function initmetrics() {
  if (typeof ($.cookie) == 'function') {
    $.cookie('metrics', true, {
      expires: 365
    });

    // <!-- Yandex.Metrika counter -->
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
      };
      m[i].l = 1 * new Date();
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k,
        a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(83597527, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    });
    // <!-- /Yandex.Metrika counter -->

    // <!-- Global site tag (gtag.js) - Google Analytics -->
    window.dataLayer = window.dataLayer || [];   

    function gtag(){
      dataLayer.push(arguments);
    }   

    gtag('js', new Date());    
    gtag('config', 'G-SMFQVVBHF5'); 
  }
}

$(document).ready(function () {
  if (blockCookie) {
    if (typeof ($.cookie) == 'function' && $.cookie('metrics')) {
      initmetrics();
    } else {
      $('body').after('\
        <div class="cookie-alert">\
        <div class="cookie-alert_container">\
        <p>By clicking "Accept All Cookies" you agree that cookies are stored on your device to improve site navigation, analyze website usage and assist in our marketing efforts.\
        </p>\
        <span><button id="cookier-alert_button"> Accept all Cookies </button></span>\
        </div>\
        </div>');
    }
  } else {
      initmetrics();
  }

  $("#cookier-alert_button").click(function () {
    $(this).closest(".cookie-alert").fadeOut(150);
    initmetrics();
  })
  
});

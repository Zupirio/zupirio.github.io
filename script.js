$(document).ready(function() {
  $(document).on('click', '.js-burger', function () {
    $('html').toggleClass('overflow');
    $('nav').toggleClass('open');
  });

  $(document).on('click', '.js-scroll-top', function () {
    $('body,html').animate({scrollTop: 0}, 700);
  });

  // TABS

  $(document).on('click', '.tab-link', function(e) {
    e.preventDefault();
    var tabNum = $(this).data('tab-link');
    $(this).addClass('open').siblings('.tab-link').removeClass('open');
    $('.tab-content__list').find('.tab-content[data-tab='+ tabNum +']').addClass('open').siblings('.tab-content').removeClass('open');
  });

  $(document).on('click', '.js-scroll', function(e) {
    e.preventDefault();

    $('.landing').fadeOut(0);
    $('.wallet-list').fadeIn();
    $('.wallet-sources').fadeIn();
    $('.wallet-footer').css('display', 'block');

    var id  = $(this).attr('href'),
        top = $(id).offset().top - 56;
    $('body,html').animate({scrollTop: top}, 700);
  })

  // Copy Link
  $('.copy-item__link').on('click', function(){
    var copyText = $(this).closest('.copy-item').find('.copy-item__target').text();
      navigator.clipboard.writeText(copyText);
  });

  // scroll to anchor block

  $('.js-page-anchor').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    window.localStorage.setItem('scrollUrl', url);
    url = url.slice(0, url.indexOf('#'));
    window.location.href = url;
  });

  function scrollToElement() {
    var url = window.localStorage.getItem('scrollUrl');
    if (url) {
      var urlHash = url.slice(url.indexOf('#'));
      setTimeout( () => {
        $('html, body').animate({scrollTop: $(urlHash).offset().top - 56}, 700);
        window.localStorage.removeItem('scrollUrl');        
      }, 500)
    }    
  };

  scrollToElement();
});
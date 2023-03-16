var show_notice = false;
var noticeText = '<span class="text-bold">Telegram team</span> has handed over the <a href="https://ton.org">ton.org</a> domain to the open-source community so that it could continue working on TON. Telegram has not been involved in the TON project since June 2020.';

$(document).ready(function() {
  if (show_notice) {
    if ($.cookie('hide_notice') == null || $.cookie('hide_notice') !== 'true') {
      $('body').prepend(
        '<div class="notice"> \
        <div class="container"> \
        <div class="notice-close__wrap" id="notice_btn"> \
        <div class="notice-close"> \
        <span></span> \
        </div> \
        </div> \
        <div class="notice-text"> <p> ' + noticeText + ' </p> \
        <p> <a href="/announcement" class="text-bold"> Full announcement </a></p> \
        </div> \
        </div> \
        </div> '
      );

      $('.notice').show(400);
    }
  }

  $(document).on('click', '#notice_btn', function(e) {
    $.cookie('hide_notice', 'true', { expires: 30, path: '/' });
    $('.notice').hide(300);
    setTimeout(function() {
      $('.notice').remove()
    }, 400);
  })
});
$(document).on('click', '.js-tab-item', function () {
  var id = $(this).data('id');
  var $currContent = $('.js-tab-content[data-id="'+ id +'"]')

  if ($currContent.length) {
    $('.js-tab-item').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content').removeClass('active');
    $currContent.addClass('active');
  }
});



$( document ).ready(function() {
  //phone mask
  $('input[type="tel"]').mask("+7(999) 999-9999");
//  Modals
  $('.js-modal').click(function (e) {
    e.preventDefault();
    var where = $(this).attr('href');
    $('body').addClass('ovh');
    $('.modal').show();
    $('.modal-window'+where).show();
  });
  $('.modal-window__close').click(function () {
    $('body').removeClass('ovh');
    $('.modal').hide();
    $('.modal-window').hide();
  });
  $('.modal').click(function(e){
    if(e.target == $('.modal')[0]){
      $('.modal').hide();
      $('body').removeClass('ovh');
    }
  });
//  Catalog
  $('.catalog__btn').click(function (e) {
    e.preventDefault();
    var title = $(this).data('title');
    $('#orderTitle').val(title);
    $('body').addClass('ovh');
    $('.modal').show();
    $('.modal-window#order').show();
  });
//  Forms
  $('form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var serializedData = form.serialize();
    request = $.ajax({
      url: "send.php",
      type: "post",
      data: serializedData
    });
    request.done(function (response, textStatus, jqXHR) {
      form.find('input').val('');
      $('.modal').hide();
      $('.modal-window').hide();
    });
    request.fail(function (jqXHR, textStatus, errorThrown) {
      alert('Ошибка отправки! Попробуйте отправить запрос еще раз!');
    });
  })
});
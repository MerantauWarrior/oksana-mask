$( document ).ready(function() {
//  Catalog js
  $('.catalog__slider').each(function () {
    var slider = $(this);
    slider.slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: slider.parent().find('.catalog__arrows-prev'),
      nextArrow: slider.parent().find('.catalog__arrows-next')
    });
  });
  $('.js-order').click(function (e) {
    e.preventDefault();
    var title = $(this).data('title');
    $('#orderTitle').val(title);
    $('body').addClass('ovh');
    $('.modal').show();
    $('.modal-window#order').show();
  });
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
      $('body').removeClass('ovh');
      $('.modal').hide();
      $('.modal-window').hide();
    }
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
      $('body').removeClass('ovh');
      $('.modal').hide();
      $('.modal-window').hide();
    });
    request.fail(function (jqXHR, textStatus, errorThrown) {
      alert('Ошибка отправки! Попробуйте отправить запрос еще раз!');
    });
  })
});
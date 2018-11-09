$(function() {
  main();
});

function main() {
  var $accordionItem = $('.accordion__item');
  var $popup = $('.popup');
  var $button = $('.clients__button');
  var $close = $('.popup__close');

  $popup.append('<p class="popup__title">Грузоперевозки</p>');

  $accordionItem.click(function() {
    $accordionItem.removeClass('accordion__item--open');
    $(this).addClass('accordion__item--open');
    var $title = $(this).children().first().text()
    $(".popup__title").remove()
    $popup.append('<p class="popup__title">' + $title + '</p>')
  });

  $button.click(function() {
    $popup.addClass('popup--open')
  })

  $close.click(function() {
    $popup.removeClass('popup--open')
  })

  $(document).click(function(e) {
    if (!$popup.is(e.target) && !$button.is(e.target) &&
      $popup.has(e.target).length === 0) {
      $popup.removeClass('popup--open')

    }
  })
}

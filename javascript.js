$( function() {
  $('#about').show();
  $('.nav-button').on('mouseenter', function() {
    $(this).addClass('highlighted');
    $(this).siblings().fadeIn({queue: false, duration: 400}).animate({bottom: '100px'}, 400);
  });
  $('.nav-button').on('mouseleave', function() {
    $(this).removeClass('highlighted');
    $(this).siblings().fadeOut({queue: false, duration: 1000}).animate({bottom: '0px'}, 1000);
  });
  $('.nav-button').click( function() {
    var page = $(this).data('page');
    var otherPage = 'about';
    if (page === 'about') {
      otherPage = 'goals';
    }
    $('#' + otherPage).slideUp({queue: true, duration: 1000});
    $('#' + page).slideDown({queue: true, duration: 1000});
  })
});

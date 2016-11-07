$(document).ready(function () {
  $(document).foundation();

  // $(document).snowfall({flakeCount: 700, flakeColor: '#FFFFFF', maxSpeed: 5, maxSize: 10, round: true, shadow: true, flakeIndex: 2});

  $('.tickets a').click(function (e) {
    e.preventDefault();
    $('#tickets').foundation('open');
  });

  $('.off-canvas li.has-menu > span').click(function () {
    $(this).parent().toggleClass("open");
  });
});
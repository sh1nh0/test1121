$(function () {
  $('.cht_contents > h2').mouseenter(function () {
    //$('.tw_contents > h2').addClass('activeMove');
    $('.change_wrap > section.cht, .cht_contents > div, .cht_bg').addClass('active');
    $('.contents > h2, .change_wrap > section.che, .change_wrap > section.cha, .che_bg, .cha_bg').addClass('activeSize');
  });
  $('.change_wrap > section.cht').mouseleave(function () {
    //$('.tw_contents > h2').removeClass('activeMove');
    $('.change_wrap > section.cht, .cht_contents > div, .cht_bg').removeClass('active');
    $('.contents > h2,  .change_wrap > section.che,  .change_wrap > section.cha, .che_bg, .cha_bg').removeClass('activeSize');

  });

  $('.che_contents > h2').mouseenter(function () {
    //$('.che_contents > h2').addClass('activeMove');
    $('.change_wrap > section.che, .che_contents > div, .che_bg').addClass('active');
    $('.contents > h2, .change_wrap > section.cht, .change_wrap > section.cha, .cht_bg, .cha_bg').addClass('activeSize');
  });
  $('.change_wrap > section.che').mouseleave(function () {
    //$('.che_contents > h2').removeClass('activeMove');
    $('.change_wrap > section.che, .che_contents > div, .che_bg, .che_logo').removeClass('active');
    $('.contents > h2, .change_wrap > section.cht, .change_wrap > section.cha, .cht_bg, .cha_bg').removeClass('activeSize');
  });

  $('.cha_contents > h2').mouseenter(function () {
    //$('.cha_contents > h2').addClass('activeMove');
    $('.change_wrap > section.cha, .cha_contents > div, .cha_bg, .cha_logo').addClass('active');
    $('.contents > h2, .change_wrap > section.cht, .change_wrap > section.che, .cht_bg, .che_bg').addClass('activeSize');
  });
  $('.change_wrap > section.cha').mouseleave(function () {
    //$('.cha_contents > h2').removeClass('activeMove');
    $('.change_wrap > section.cha, .cha_contents > div, .cha_bg').removeClass('active');
    $('.contents > h2, .change_wrap > section.cht, .change_wrap > section.che, .cht_bg, .che_bg').removeClass('activeSize');
  });
});


$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 300) {//아이콘이 나타나길 원하는 높이를 설정하세요
      $('.top_button').fadeIn();//나타날 아이콘 클래스 수정!
  } else {
      $('.top_button').fadeOut();//나타날 아이콘 클래스 수정!
  }
});
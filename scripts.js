function shakeIt(a){
  $(a).removeClass('bounceInUp').toggleClass('headShake');
}
$('.menu-child').hover( function(){
  shakeIt(this);
});
$('.menu-inner').click(function(){
  var bgCSS = $(this).css('background');
  var clCSS = $(this).css('color');
  var choice = $(this).attr('class').split(' ')[1];
  var child = {a:'.snippets',b:'.projects',c:'.aboutme'}
  $('.menu-child').hide();
  function selected(lvl,delay) {
    $('.selected').css('background', bgCSS).delay(delay).animate({right: lvl}, 500, function(){
if(delay == '120'){
  $('#Capa_1, .selected .logo').show();
  $(child[choice]).show();
}
    });
  }
  selected('0','120');
  $('#Capa_1 path').css('fill', clCSS);
  //history.replaceState(null,null,child[choice]);
  //history.pushState(null, null, child[choice]);
  $('#Capa_1, .selected .logo').click(function(e){
    $('#Capa_1, .selected .logo').hide();
    $(child[choice]).hide();
    selected('100%', '0');
    $('.menu-child').delay(750).addClass('bounceInUp').show();
    //history.replaceState(null,null,'home');
    //history.pushState(null, null,'home');
  });
});

function is_touch() {
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

if(is_touch()){
  if (window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function () {
    }, true);
  }
window.ondeviceorientation = function(event) {
function moveBackground2() {

  accX = (10 * event.gamma)/100;
    accY = (10 * event.beta - 10)/100;
		Ax = 0,
    Ay = 0,
    movement = 5;

    Ax += ((accX - Ax) * movement);
    Ay += ((accY - Ay) * movement);
  a = (Ax - Ax*2)/3,
  b = (Ay - Ay*2)/3;

  translate = 'translate(' + Ax + 'px, ' + -Ay + 'px) scale(1.1)';
  translate2 = 'translate(' + -Ax + 'px, ' + -Ay + 'px)';
  shadow = a + 'px ' + -b + 'px 1px 0px rgba(0,0,0,0.55)';

  $('.menu').css({
    '-webkit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.shadow').css({
    '-webkit-box-shadow': shadow,
    '-moz-box-shadow': shadow,
    'box-shadow': shadow
  });
  $('.menu .logo').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

 // window.requestAnimationFrame(moveBackground2);
}
moveBackground2();
}
}
else {
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  a = (x - x*2)/3,
  b = (y - y*2)/3;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate3d(' + -x + 'px, ' + -y + 'px, 0px) scale(1.1)';
  shadow = a.toFixed(0) + 'px ' + b.toFixed(0) + 'px 10px 0px rgba(0,0,0,0.55)';

  $('.menu').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.shadow').css({
    '-webkit-box-shadow': shadow,
    '-moz-box-shadow': shadow,
    'box-shadow': shadow
  });
  $('.menu-child .logo').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});
  moveBackground();
}

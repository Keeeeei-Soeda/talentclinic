
// ハンバーガーメニュー
$('.humburgermenu__btn').on('click',function(){
	$('.humburgermenu').fadeToggle(300);
	$('.humburgermenu__btn').toggleClass('cross');
	$('body').toggleClass('noscroll');
  });
  
  $(".humburgermenu__btn").click(function () {
	$(this).toggleClass('active');
  });
  

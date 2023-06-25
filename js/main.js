$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


$(function(){
  $('.menu-1').hover(function(){
    // $('.icon-01').addClass('hovered');
    $('.hover-01').addClass('activated');
  }, function(){
    // $('.icon-01').removeClass('hovered')
    $('.hover-01').removeClass('activated')
  });
});

$(function(){
  $('.icon-02').hover(function(){
    $('.icon-02').addClass('hovered2');
  }, function(){
    $('.icon-02').removeClass('hovered2')
  });
});

$(function(){
  $('.menu-4').hover(function(){
    // $('.icon-01').addClass('hovered');
    $('.hover-04').addClass('activated');
  }, function(){
    // $('.icon-01').removeClass('hovered')
    $('.hover-04').removeClass('activated')
  });
});

$(function(){
  $('.icon-05').hover(function(){
    $('.icon-05').addClass('hovered2');
  }, function(){
    $('.icon-05').removeClass('hovered2')
  });
});





$(function(){
  // hoverした時
    $('area').mouseover(function(){
      $('.hover-area').toggleClass('hover');
      let targetNum = $(this).data('option');
      let target = $('.icon-'+targetNum);
      target.addClass('active');
    })
  // hover外れた時
    $('area').mouseout(function(){
      $('.hover-area').toggleClass('hover');
      let targetNum = $(this).data('option');
      let target = $('.icon-'+targetNum);
      target.removeClass('active');
    })
  })
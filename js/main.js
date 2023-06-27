
//  sp版NAVアイコンを押したときのハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



//  指定されたPath領域内をホバーすると、クラスを付与する
$(function(){
  $('.menu-1').hover(function(){
    $('.hover-01').addClass('activated');
  }, function(){
    $('.hover-01').removeClass('activated')
  });
});

$(function(){
  $('.icon-02').hover(function(){
    $('.icon-02').addClass('hovered');
  }, function(){
    $('.icon-02').removeClass('hovered')
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
    $('.icon-05').addClass('hovered');
  }, function(){
    $('.icon-05').removeClass('hovered')
  });
});

//  アニメーショントリガー
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top+150; //要素より、150px下の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeUpというクラス名を追記
    // }else{
    //   $(this).removeClass('fadeUp');
    // 画面外に出たらfadeUpというクラス名を外す
    }
    });

  $('.marchTrigger').each(function(){ //marchTriggerというクラス名が
    var elemPos = $(this).offset().top-350; //要素より、350px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('march');
    $('.rabbit').addClass('march2');
    $('.fox').addClass('march3');
    $('.deer').addClass('march4');
    
    // 画面内に入ったらmarchというクラス名を追記
    }else{
      $(this).removeClass('march');
      $('.rabbit').removeClass('march2');
      $('.fox').removeClass('march3');
      $('.deer').removeClass('march4');
    // 画面外に出たらmarchというクラス名を外す
    }
  });
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// // 画面が読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function(){
//   fadeAnime();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


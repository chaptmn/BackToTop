
$(function(){
  $('#ScrollButton').hide();

  //topが200px下がったら#ScrollButtonを表示
  $(window).scroll(function () {
    if($(this).scrollTop() > 200) {
        $('#ScrollButton').fadeIn();
     } else {
        $('#ScrollButton').fadeOut();
     }
    });
  //#ScrollButtonをclickしたらscrollTop:0
  $('#ScrollButton').click(function () {
    $('body,html').animate({
     scrollTop: 0
    }, 300);
    return false;
  });
});

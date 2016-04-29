
$(function() {

 var ScrollToTop = function(){

  var _scroll_btn = $('#ScrollButton'),
      _scroll = $(window),
      _scrollShow,
      _scrollEvent;

  _scroll_btn.hide();

  //topが200px下がったら#ScrollButtonを表示
  _scrollShow = function(){
    _scroll.scroll(function(){
     if( _scroll.scrollTop() > 200) {
         _scroll_btn.fadeIn();
       } else {
         _scroll_btn.fadeOut();
      }
    });
   };
   _scrollShow();

  //#ScrollButtonをclickしたらscrollTop:0
  _scrollEvent = function(){
    _scroll_btn.click(function(){
      $('body,html').animate({
       scrollTop: 0
      }, 300);
      return false;
    });
	};
  _scrollEvent();
 };

 ScrollToTop();
});

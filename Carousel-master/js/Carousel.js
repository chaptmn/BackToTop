
(function() {

    /* --------------------

        Carousel

    -------------------- */
  var Carousel = function(){
        /* -----------------------
        *  使用する変数、関数を定義する
        ----------------------- */
      var _item = $('.Carousel__item'),
          _nextButton = $('.Carousel__arrow--next'), //次へボタン
          _prevButton = $('.Carousel__arrow--prev'),//前へボタン
          _main = $('.Carousel__main'),
          _itemWidth = _item.width(),
          _clickCount = 0,
          _move,
          _clickEvent;

    _main.css({
               'width' : _itemWidth * _item.length
            });

    _move = function(){
         _main.animate({
            'left' : -(_itemWidth * _clickCount)
         },700);
       };

     _arrowHide = function(){
       if( _clickCount == 0){
       _prevButton.hide();
        }else if( _clickCount == _item.length - 1){
       _nextButton.hide();
        }else{
       _prevButton.show();
        };
      };
    _arrowHide();

   _clickEvent = function(){
       _nextButton.click(function(){
         _clickCount = _clickCount +1;
         _move();
         _arrowHide();
      });

    _prevButton.click(function(){
        _clickCount = _clickCount -1;
        _move();
        _arrowHide();
       });
     };
    _clickEvent();
    }(jQuery);
    Carousel();

})();

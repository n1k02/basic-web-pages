$(function () {
   let flag = 0;
    //? switcher
    $('.apps-switcher__button').click(function () {
       $(this).toggleClass('_active');
       $('.apps-switcher__text').toggleClass('_active');

        if(flag == 0) {
         $('.apps-card__price._1').html('$100');   
         $('.apps-card__price._2').html('$200');
         flag = 1;
        }else{
            $('.apps-card__price._1').html('$1080');   
            $('.apps-card__price._2').html('$2000');
            flag = 0;
         }
        
       
      })
      $('.header__menu').click(function () {
        $('.menu-block').toggleClass('_active');
    })
    $('.menu-block__close').click(function () {
        $('.menu-block').removeClass('_active');
    })
   
  
});
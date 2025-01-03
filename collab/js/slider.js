const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      //! Скролл
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //     draggable: true,
    //   },
    
      //? включение/отключение перетаскивания на пк
      simulateTouch: true,
      //? чувствительность свайпа
      touchRatio: 1,
      //? угол срабатывания свайпа
      touchAngel: 45,
      //? курсор
      grabCursor: false,
      //? переключение на слайд при клике на него
      slideToClickedSlide: true,
    
      //? Навигация по хешу (в url)
      hashNavigation: {
        // отслеживать состояние
        watchState: true,
      },
    
      //? Управление с клавиатуры
      keyboard: {
        // вкл/выкл
        enable: true,
        // вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // вкл/выкл управление клавишами pageUp pageDown
        pageUpDown: true,
      },
    
      //? управление колесом мыши
    //   mousewheel: {
    //     // чувствительность
    //     sensitivity: 1,
    //     /* класс на котором срабатывает прокрутка мышью */
    //     //eventsTarget:".image-slider"
    //   },
    
      //? Автовысота
      avtoHeight: false,
    
      //? Количество слайдов для показа (можно 'auto')
      slidesPerView: 1,
    
      //? Отключение функционала если слайдов меньше чем нужно (в slidesPerView)
      watchOverflow: true,
    
      //? Отступ между слайдами
      spaceBetween: 30,
    
      //? Количество пролитвываемых слайдов
      slidesPerGroup: 1,
    
      //? Активный слайд по центру
      centeredSlides: true,
    
      //? Стартовый слайд (от 0)
      initialSlide: 0,
    
      //? Мультирядность
    //   slidesPerCol umn: 1,
    
      //? бесконечный слайдер
      loop: true,
      //? количество дублирующий слайдов
    //   loopedSlides: 0,
    
      //? Свободный режим
      // freeMode:true,
    
      //! Автопрокрутка
      // autoplay: {
      //   // пауза между прокруткой
      //   delay: 1000,
      //   // закончить на последнем слайде
      //   stopOnLastSlide: true,
      //   // отключить после ручного переключения
      //   disableOnInteraction: true,
      // },
      
      //? Скорость
      speed: 500,
    
      //? Вертикальный слайдер
      //  direction: 'vertical',
    
      //! эффект переключения слайдов
      //? Листание
      effect: "slide",
    
      //? Смена прозрачности
      // effect:'fade',
    
      // //?дополнение к fade
      // fadeEffect:{
      //   /* параллельная смена прозрачности*/
      //   crossFade:true,
      // },
    
      //? Переворот
      // effect:'flip',
    
      // //?Дополнение к flip
      // flipEffect:{
      //   /* Тень*/
      //   slideShadows:true,
      //   /* Показ только одного слайда */
      //   limitRotation:true
      // },
    
      //? Куб
      // effect:'cube',
    
      // //? Дополнение к cube
      // cubeEffect:{
      //   /*Настройка тени*/
      //   slideShadows:true,
      //   shadow:true,
      //   shadowOffset:20,
      //   shadowScale:0.94
      // },
    
      //? Эффект потока
      // effect:'coverflow',
    
      // //? Дополнения к coverflow
      // coverflowEffect:{
      //   /*угол*/
      //   rotate:20,
      //   /*наложение*/
      //   stretch:50,
      //   /*тень*/
      //   slideShadows:true,
      // },
    
      //! Брейкпоинты (адаптив)
      // breakpoints:{
      //   //? По разрешению
      //   1200:{
      //     slidesPerView:3,
      //   },
      //   920: {
      //     slidesPerView:2,
      //   },
      //   //? По соотношению сторон h/w
      //   '@.25':{
      //     slidesPerView:1,
      //   }
      // }
    
   
     
    
      
    
    });
//SLIDERS
if(window.innerHeight > 720 && window.innerWidth > 990) {
	let parallax = document.querySelectorAll('._parallax');
	parallax.forEach(element => {
		element.dataset.swiperParallax="-300";
	});
	let scale = document.querySelectorAll('._parallax-scale');
	scale.forEach(element => {
		element.dataset.swiperParallaxScale="0.15";
	});
	let opacity = document.querySelectorAll('._parallax-opacity');
	opacity.forEach(element => {
		element.dataset.swiperParallaxOpacity="0";
	});
}
else if(window.innerHeight > 720 && window.innerWidth > 768) {
	let parallax = document.querySelectorAll('._parallax');
	parallax.forEach(element => {
		element.dataset.swiperParallax="-300";
	});
	let scale = document.querySelectorAll('._parallax-scale');
	scale.forEach(element => {
		element.dataset.swiperParallaxScale="0.15";
	});
	let opacity = document.querySelectorAll('._parallax-opacity');
	opacity.forEach(element => {
		element.dataset.swiperParallaxOpacity="0";
	});
}

//todo:  Инициализация Swiper
const mySlider = new Swiper(".main-slider", {

	// on: {
	// 	init: function () {
	// 		document.addEventListener('load', function() {
	// 			if(Window.innerHeight <= 650) {
	// 				mySlider.params.freeMode = true;
	// 			} else {
	// 			   mySlider.params.freeMode = false;
	// 			}
	// 		})
		
	// 	},
	//   },

	//? стрелки
	// navigation: {
	//   nextEl: ".swiper-button-next",
	//   prevEl: ".swiper-button-prev",
	// },
	
	  
	//? навигация
	pagination: {
	//   el: ".swiper-pagination",
	//   //! Буллеты
	//    type:'bullets', //дефолт
	//    clickable: true,
	   /* динамические буллеты */
	//    dynamicBullets: true,
	//    /*кастомные буллеты */
	//    renderBullet: function (index, className) {
	//    return '<span class="' + className + '">' + (index + 1) + "</span>";
	//    },
  
	  //! Фракция
	  //  type: "fraction",
	  //  /*кастомный ввод фракции */
	  //  renderFraction: function (currentClass, totalClass) {
	  //    return (
	  //      'Фото <span class="' +
	  //      currentClass +
	  //      '"></span> ' +
	  //      "из " +
	  //      '<span class="' +
	  //      totalClass +
	  //      '"></span>'
	  //    );
	  //  },
  
	  //! Прогрессбар
	  //type: "progressbar",
	},
  
	// //! Скролл
	// scrollbar: {
	//   el: ".swiper-scrollbar",
	//   draggable: true,
	// },
  
	// //? включение/отключение перетаскивания на пк
	// simulateTouch: false,
	// //? чувствительность свайпа
	// touchRatio: 1,
	// //? угол срабатывания свайпа
	// touchAngel: 45,
	// //? курсор
	// grabCursor: false,
	// //? переключение на слайд при клике на него
	// slideToClickedSlide: true,
  
	//? Навигация по хешу (в url)
	hashNavigation: {
	  // отслеживать состояние
	  watchState: true,
	},
  
	//? Управление с клавиатуры
	keyboard: {
	  // вкл/выкл
	  enable: false,
	  // вкл/выкл только когда слайдер в пределах вьюпорта
	  onlyInViewport: true,
	  // вкл/выкл управление клавишами pageUp pageDown
	  pageUpDown: false,
	},
  
	//? управление колесом мыши
	mousewheel: {
	  // чувствительность
	  sensitivity: 1,
	  /* класс на котором срабатывает прокрутка мышью */
	  //eventsTarget:".image-slider"
	},
  
	//? Автовысота
	avtoHeight: false,
  
	//? Количество слайдов для показа (можно 'auto')
	slidesPerView: 1,
  
	//? Отключение функционала если слайдов меньше чем нужно (в slidesPerView)
	watchOverflow: true,
  
	//? Отступ между слайдами
	spaceBetween: 0,
  
	//? Количество пролиcтвываемых слайдов
	slidesPerGroup:1,
  
	//? Активный слайд по центру
	centeredSlides: false,
  
	//? Стартовый слайд (от 0)
	initialSlide: 0,
  
	//? Мультирядность
	slidesPerColumn: 0,
  
	//? бесконечный слайдер
	loop: false,
	//? количество дублирующий слайдов
	loopedSlides: 0,
  
	//? Свободный режим
	freeMode:{
		enabled: false,
	   
		// momentumBounce:false,
		// momentumBounceRatio:0	,
		// momentumBounce:false,
		// momentum:true,
		// momentumRatio:0.5,
		// momentumVelocityRatio:0.5,
		// sticky:true,
	},
	
  
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
  
	parallax: true,

	//? Вертикальный слайдер
	  direction: 'vertical',
  
	//! эффект переключения слайдов
	//? Листание
	 effect: "slide",
  
	//  effect: "creative",
	//  creativeEffect: {
	// 	prev: {
	// 	  shadow: true,
	// 	  translate: [0, "-20%", -1],
	// 	},
	// 	next: {
	// 	  translate: [0, "100%", 0],
	// 	},
	//   },
	// creativeEffect: {
	//   prev: {
	// 	shadow: true,
	// 	translate: [0, 0, -500],
	//   },
	//   next: {
	// 	translate: [0, "100%", 0],
	//   },
	// },

	//? Смена прозрачности
	// effect:'fade',
  
	// //?дополнение к fade
	// fadeEffect:{
	//   /* параллельная смена прозрачности*/
	//   crossFade:true,
	// },
  
	//? Переворот
	//  effect:'flip',
  
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
	//  effect:'coverflow',
	
	// //? Дополнения к coverflow
	// coverflowEffect:{
	//   /*угол*/
	//   rotate:20,
	//   /*наложение*/
	//   stretch:-100,
	//   /*тень*/
	//   slideShadows:true,
	// },
  
	//! Брейкпоинты (адаптив)
	 breakpoints:{
	//   //? По разрешению
	//   1200:{
	//     slidesPerView:3,
	//   },
	//  767.98: {
		
		 
	//   },
	//   //? По соотношению сторон h/w
	//   '@.25':{
	//     slidesPerView:1,
	//   }
	 },
  
	//! lazy loading
	//? Отключить предзагрузку картинок
	preloadImages: false,
	//? Включитб подгрузку картинок
	// lazy: {
	//   //подгружать на старте переключения слайдера
	//   loadOnTransitionStart: true,
	//   //подгрузить предыдущую и следущюую картинки
	//   loadPrevNext: true,
	// },
	//? Слежка за видимыми слайдами
	watchSlidesProgress:false,
	//? Добавление класса видимым слайдам
	watchSlidesVisibility: false,
  
	// //! Зум картинки
	// zoom:{
	//   //? максимальное увеличение
	//   maxRatio:2,
	//   //? минимальное увеличение
	//   minRatio:1,
	// },
  
	//! Миниатюры (превью) 
	// thumbs:{
	//   swiper:{
	//     el:'.image-mini-slider',
	//     slidesPerView:2,
	//   }
	// },
  
	
  
  });
  
//   let mySecondSlider = new Swiper(/* " ", { } */);
  
  //* Синхронизация нескольких слайдеров (передача управления)
  //? количество слайдов должно быть одинаковым
  // mySlider.controller.control = mySecondSlider;
  // mySecondSlider.controller.control = mySlider;
  
  //* При вставке слайдера внутрь другого слайдера необходимо указать параметр в дочернем слайдере:
  // nested: true;
  
  //todo Доступ к параметрам слайдера:
  //todo все команды здесь: https://swiperjs.com/swiper-api
  // mySlider.params.параметр = ...;
  // mySlider.slides.length
  // mySlider.realIndex
  
  
  //! Прокрутка при наведении курсора
//   let sliderBlock = document.querySelector('.image-slider');
//   sliderBlock.addEventListener('mouseenter', function(){
// 	mySlider.params.autoplay.disableOnInteraction = false;
// 	mySlider.params.autoplay.delay = 500;
// 	mySlider.autoplay.start();
//   });
//   sliderBlock.addEventListener('mouseleave', function(){
// 	mySlider.autoplay.stop();
//   })


//swiper.slideNext();




//todo:  Инициализация Swiper
const programms = new Swiper(".slide-6-block__slider", {
	//? стрелки
	navigation: {
	  nextEl: ".slide-6-block-pagination__button-next",
	  prevEl: ".slide-6-block-pagination__button-prev",
	},
  
	//? навигация
	pagination: {
	//   el: ".",
	  //! Буллеты
	//    type:'bullets', //дефолт
	//    clickable: true,
	   /* динамические буллеты */
	//    dynamicBullets: true,
	//    /*кастомные буллеты */
	//    renderBullet: function (index, className) {
	//    return '<span class="' + className + '">' + (index + 1) + "</span>";
	//    },
  
	  //! Фракция
	  //  type: "fraction",
	  //  /*кастомный ввод фракции */
	  //  renderFraction: function (currentClass, totalClass) {
	  //    return (
	  //      'Фото <span class="' +
	  //      currentClass +
	  //      '"></span> ' +
	  //      "из " +
	  //      '<span class="' +
	  //      totalClass +
	  //      '"></span>'
	  //    );
	  //  },
  
	  //! Прогрессбар
	  //type: "progressbar",
	},
  
	//! Скролл
	// scrollbar: {
	//   el: ".swiper-scrollbar",
	//   draggable: true,
	// },
  
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
	// hashNavigation: {
	//   // отслеживать состояние
	//   watchState: true,
	// },
  
	//? Управление с клавиатуры
	keyboard: {
	  // вкл/выкл
	  enable: true,
	  // вкл/выкл только когда слайдер в пределах вьюпорта
	  onlyInViewport: true,
	  // вкл/выкл управление клавишами pageUp pageDown
	  pageUpDown: false,
	},
  
	//? управление колесом мыши
	// mousewheel: {
	//   // чувствительность
	//   sensitivity: 1,
	//   /* класс на котором срабатывает прокрутка мышью */
	//   //eventsTarget:".image-slider"
	// },
  
	//? Автовысота
	// avtoHeight: true,
  
	//? Количество слайдов для показа (можно 'auto')
	slidesPerView: 'auto',
  
	//? Отключение функционала если слайдов меньше чем нужно (в slidesPerView)
	watchOverflow: true,
  
	//? Отступ между слайдами
	spaceBetween:20,
  
	//? Количество пролиcтвываемых слайдов
	slidesPerGroup:1,
  
	//? Активный слайд по центру
	centeredSlides: true,
  
	//? Стартовый слайд (от 0)
	initialSlide: 1,
  
	loop:true,
	//? количество дублирующий слайдов
	loopedSlides: 0,
  
	//? Свободный режим
	 freeMode:false,
  
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
  
	parallax: false,

	
  
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
	 //effect:'flip',
  
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
	//   stretch:0,
	//   /*тень*/
	//   slideShadows:true,
	// },
  
	//! Брейкпоинты (адаптив)
	//  breakpoints:{
	//   //? По разрешению
	//   1200:{
	//     slidesPerView:3,
	//   },
	// 767.98: {
	// 	// freeMode:true,
		
	//   },
	//   //? По соотношению сторон h/w
	//   '@.25':{
	//     slidesPerView:1,
	//   }
	//  },
  
	//! lazy loading
	//? Отключить предзагрузку картинок
	preloadImages: false,
	lazy: true,
	//? Включитб подгрузку картинок
	lazy: {
	  //подгружать на старте переключения слайдера
	  loadOnTransitionStart: true,
	  //подгрузить предыдущую и следущюую картинки
	  loadPrevNext: false,
	},
	//? Слежка за видимыми слайдами
	watchSlidesProgress:true,
	//? Добавление класса видимым слайдам
	watchSlidesVisibility: true,
  
	//! Зум картинки
	zoom:{
	  //? максимальное увеличение
	  maxRatio:2,
	  //? минимальное увеличение
	  minRatio:1,
	},
  
	//! Миниатюры (превью) 
	// thumbs:{
	//   swiper:{
	//     el:'.image-mini-slider',
	//     slidesPerView:2,
	//   }
	// },
  
	// nested: true
  
  });

  
//todo:  Инициализация Swiper
const courses = new Swiper(".slide-7-block__slider", {
	//? стрелки
	navigation: {
	  nextEl: ".slide-7-block-pagination__button-next",
	  prevEl: ".slide-7-block-pagination__button-prev",
	},
  
	//? навигация
	pagination: {
	//   el: ".",
	  //! Буллеты
	//    type:'bullets', //дефолт
	//    clickable: true,
	   /* динамические буллеты */
	//    dynamicBullets: true,
	//    /*кастомные буллеты */
	//    renderBullet: function (index, className) {
	//    return '<span class="' + className + '">' + (index + 1) + "</span>";
	//    },
  
	  //! Фракция
	  //  type: "fraction",
	  //  /*кастомный ввод фракции */
	  //  renderFraction: function (currentClass, totalClass) {
	  //    return (
	  //      'Фото <span class="' +
	  //      currentClass +
	  //      '"></span> ' +
	  //      "из " +
	  //      '<span class="' +
	  //      totalClass +
	  //      '"></span>'
	  //    );
	  //  },
  
	  //! Прогрессбар
	  //type: "progressbar",
	},
  
	//! Скролл
	// scrollbar: {
	//   el: ".swiper-scrollbar",
	//   draggable: true,
	// },
  
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
	  pageUpDown: false,
	},
  
	//? управление колесом мыши
	// mousewheel: {
	//   // чувствительность
	//   sensitivity: 1,
	//   /* класс на котором срабатывает прокрутка мышью */
	//   //eventsTarget:".image-slider"
	// },
  
	//? Автовысота
	avtoHeight: true,
  
	//? Количество слайдов для показа (можно 'auto')
	slidesPerView: "auto",
  
	//? Отключение функционала если слайдов меньше чем нужно (в slidesPerView)
	watchOverflow: true,
  
	//? Отступ между слайдами
	spaceBetween:20,
  
	//? Количество пролиcтвываемых слайдов
	slidesPerGroup:1,
  
	//? Активный слайд по центру
	centeredSlides: true,
  
	//? Стартовый слайд (от 0)
	initialSlide: 1,
  
	//? Мультирядность
	slidesPerColumn: 1,
  
	//? бесконечный слайдер
	loop: true,
	//? количество дублирующий слайдов
	loopedSlides: 2,
  
	//? Свободный режим
	//  freeMode:true,
  
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
  
	parallax: false,


  
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
	 //effect:'flip',
  
	// //?Дополнение к flip
	// flipEffect:{
	//   /* Тень*/
	//   slideShadows:true,
	//   /* Показ только одного слайда */	
	//   limitRotation:true
	// },
  
	//? Куб
	 //effect:'cube',
  
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
	//   stretch:0,
	//   /*тень*/
	//   slideShadows:true,
	// },
  
	//! Брейкпоинты (адаптив)
	//  breakpoints:{
	//   //? По разрешению
	//   1200:{
	//     slidesPerView:3,
	//   },
	// 767.98: {
	// 	// freeMode:true,
		
	//   },
	// //   //? По соотношению сторон h/w
	//   '@.25':{
	//     slidesPerView:1,
	//   }
	//  },
  
	//! lazy loading
	//? Отключить предзагрузку картинок
	preloadImages: false,
	//? Включитб подгрузку картинок
	lazy: {
	  //подгружать на старте переключения слайдера
	  loadOnTransitionStart: true,
	  //подгрузить предыдущую и следущюую картинки
	  loadPrevNext: true,
	},
	//? Слежка за видимыми слайдами
	watchSlidesProgress:true,
	//? Добавление класса видимым слайдам
	watchSlidesVisibility: true,
  
	//! Зум картинки
	// zoom:{
	//   //? максимальное увеличение
	//   maxRatio:2,
	//   //? минимальное увеличение
	//   minRatio:1,
	// },
  
	//! Миниатюры (превью) 
	// thumbs:{
	//   swiper:{
	//     el:'.image-mini-slider',
	//     slidesPerView:2,
	//   }
	// },
  
	// nested: true
  
  });

 for (var i = 1;i = 2;i++ ){
	if(window.innerHeight > 720 && window.innerWidth > 990) {
		mySlider.params.freeMode = true;
		
		break;
	}
	else if(window.innerHeight > 720 && window.innerWidth > 768) {
		mySlider.params.freeMode = true;
		
		break;
	}
	else{
		
		
		if(	!$('.main-block').hasClass('_min')){
			$('.main-block').addClass('_min');
		}
		
	
		if(	!$('.slide-6-block__slide').hasClass('_min')){
			$('.slide-6-block__slide').addClass('_min');
		}
	
		if(	!$('.slide-7-block__slide').hasClass('_min')){
			$('.slide-7-block__slide').addClass('_min');
		}
	
		for(var j = 1; j <= 9; j++){
			$(`.slide-${j}`).appendTo('.main-block');
		}
	
		$('.main-slider').remove();
		body.classList.remove('lock');	

		
		break;

		
	}
 }


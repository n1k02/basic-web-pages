var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}

let onMenu = 0;
let iconMenu = document.querySelector(".icon-menu");
let iconMenu2 = document.querySelector(".menu-block__icon-menu");
let body = document.querySelector("body");
let	blurBody = document.querySelector(".blur-block");
let	menuBody = document.querySelector(".menu-block");
let closeBlock = document.querySelector(".blur-block__close");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		menuBody.classList.add("active");
		// body.classList.toggle("lock");
		blurBody.classList.toggle("active");
		onMenu = 1;
		
	});
	closeBlock.addEventListener("click", function () {
		blurBody.classList.remove("active");
		menuBody.classList.remove("active");
		onMenu = 0;
	})

}
if (iconMenu2) {
	iconMenu2.addEventListener("click", function () {
		// body.classList.toggle("lock");
		blurBody.classList.remove("active");
		onMenu = 0;
	});
}

let onDock = 0;
let headerWrapper = document.querySelector(".header-wrapper");



let politicsLink = document.querySelectorAll("._politics");
let politicsBlock = document.querySelector(".politics-block");
	politicsLink.forEach(element => {
		element.addEventListener("click", function () {
			if(!element.classList.contains('active')){
				
				onDock = 1;
				politicsBlock.classList.add("active");
				agreementBlock.classList.remove("active");
				contractBlock.classList.remove("active");
				if (!headerWrapper.classList.contains('_black')){
					headerWrapper.classList.add('_black');
				}
				if (!whiteLogo.classList.contains('active')){
					whiteLogo.classList.add('active');
					blackLogo.classList.remove('active');
				}
				logo.addEventListener('click', function () {
					
					if (!blackLogo.classList.contains('active')){
						blackLogo.classList.add('active');
						whiteLogo.classList.remove('active');
					}
				})
			}
		})
	});



let agreementLink = document.querySelectorAll("._agreement");
let agreementBlock = document.querySelector(".agreement-block");
if(agreementLink) {
	agreementLink.forEach(element => {
		element.addEventListener("click", function () {
			if(!element.classList.contains('active')){
				
				onDock = 1;
				agreementBlock.classList.add("active");
				politicsBlock.classList.remove("active");
				contractBlock.classList.remove("active");
				if (!headerWrapper.classList.contains('_black')){
					headerWrapper.classList.add('_black');
				}
				if (!whiteLogo.classList.contains('active')){
					whiteLogo.classList.add('active');
					blackLogo.classList.remove('active');
				}
				logo.addEventListener('click', function () {
					
					if (!blackLogo.classList.contains('active')){
						blackLogo.classList.add('active');
						whiteLogo.classList.remove('active');
					}
				})
			}
		})
	});
}

let contractLink = document.querySelectorAll("._contract");
let contractBlock = document.querySelector(".contract-block");
if(contractLink) {
	contractLink.forEach(element => {
		element.addEventListener("click", function () {
			if(!element.classList.contains('active')){
				
				onDock = 1;
				contractBlock.classList.add("active");
				politicsBlock.classList.remove("active");
				agreementBlock.classList.remove("active");
				if (!headerWrapper.classList.contains('_black')){
					headerWrapper.classList.add('_black');
				}
				if (!whiteLogo.classList.contains('active')){
					whiteLogo.classList.add('active');
					blackLogo.classList.remove('active');
				}
				logo.addEventListener('click', function () {
					
					if (!blackLogo.classList.contains('active')){
						blackLogo.classList.add('active');
						whiteLogo.classList.remove('active');
					}
				})
			}
		})
	});

}
	let whiteLogo = document.querySelector('._logo-white');
	let blackLogo = document.querySelector('._logo-black');
	let legalLink = document.querySelectorAll("._legal");
	let legalBlock = document.querySelector(".legal");
	if(legalLink) {
		legalLink.forEach(element => {
			element.addEventListener("click", function () {
				
				if(!element.classList.contains('active')){
					onDock = 1;
					legalBlock.classList.add("active");
					politicsBlock.classList.remove("active");
					agreementBlock.classList.remove("active");
					if (!headerWrapper.classList.contains('_black')){
						headerWrapper.classList.add('_black');
					}

					if (!whiteLogo.classList.contains('active')){
						whiteLogo.classList.add('active');
						blackLogo.classList.remove('active');
					}
					logo.addEventListener('click', function () {
						
						if (!blackLogo.classList.contains('active')){
							blackLogo.classList.add('active');
							whiteLogo.classList.remove('active');
						}
					})

					if(onMenu) {
						blurBody.classList.remove("active");
						menuBody.classList.remove("active");
						onMenu = 0;
					}
				}
				
				
				
			})
		});
	}

let logo = document.querySelector(".header__logo");
if (logo) {
	logo.addEventListener('click', function () {
		politicsBlock.classList.remove("active");
		agreementBlock.classList.remove("active");
		contractBlock.classList.remove("active");
		legalBlock.classList.remove("active");
		headerWrapper.classList.remove('_black');
	})
}
let about = document.querySelector(".header-tabs__item-1");
if (about) {
	about.addEventListener('click', function () {
mySlider.slideTo(0, 700, 0);
		politicsBlock.classList.remove("active");
		agreementBlock.classList.remove("active");
		contractBlock.classList.remove("active");
		legalBlock.classList.remove("active");
		headerWrapper.classList.remove('_black');
		if (!blackLogo.classList.contains('active')){
			blackLogo.classList.add('active');
			whiteLogo.classList.remove('active');
		}
	})
}
let props = document.querySelector(".header-tabs__item-2");
if (props) {
	props.addEventListener('click', function () {
mySlider.slideTo(1, 700, 0);
		politicsBlock.classList.remove("active");
		agreementBlock.classList.remove("active");
		contractBlock.classList.remove("active");
		legalBlock.classList.remove("active");
		headerWrapper.classList.remove('_black');
		if (!blackLogo.classList.contains('active')){
			blackLogo.classList.add('active');
			whiteLogo.classList.remove('active');
		}
	})
}
let products = document.querySelector(".header-tabs__item-3");
if (products) {
	products.addEventListener('click', function () {
mySlider.slideTo(2,700, 0);
		politicsBlock.classList.remove("active");
		agreementBlock.classList.remove("active");
		contractBlock.classList.remove("active");
		legalBlock.classList.remove("active");
		headerWrapper.classList.remove('_black');
		if (!blackLogo.classList.contains('active')){
			blackLogo.classList.add('active');
			whiteLogo.classList.remove('active');
		}
	})
}

addEventListener("popstate",function(e){
	if (onDock) {
		politicsBlock.classList.remove("active");
		agreementBlock.classList.remove("active");
		contractBlock.classList.remove("active");
	
		onDock = 0;
	}
	if (onMenu) {
		blurBody.classList.remove("active");
		onMenu = 0;
	}
}, false);




// body.addEventListener("load", function () {
// 	hideAddressBar();
// 	//  1
//     //window.addEventListener("orientationchange", function () {
//     //    hideAddressBar();
//     //});
//   });


// function hideAddressBar() {
//     if (navigator.userAgent.match(/Android/i) != null) {
//         //window.orientation 0 - 180 - landscape; 90 and -90 portrait
//         document.documentElement.style.height = window.outerHeight + 'px';
//         setTimeout(window.scrollTo(0, 1), 0);
//     }
// }

// //ZOOM
// if ($('.gallery').length > 0) {
// 	baguetteBox.run('.gallery', {
// 		// Custom options
// 	});
// }
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


//POPUP
$('.pl').click(function (event) {
	var pl = $(this).attr('href').replace('#', '');
	var v = $(this).data('vid');
	popupOpen(pl, v);
	return false;
});
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
		//$('body').data('scroll',$(window).scrollTop());
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	history.pushState('', '', '#' + pl);
	if (v != '' && v != null) {
		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
	}
}
function openPopupById(popup_id) {
	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
				$('.pdb').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}, 200);
		} else {
			$('body').removeClass('lock');
			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
$(document).on('keydown', function (e) {
	if (e.which == 27) {
		popupClose();
	}
});

$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();


//Клик вне области
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});

//UP
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});

$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoiler.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoiler', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoiler').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoiler').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spoilers').find('.spoiler'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});


function scrolloptions() {
	var scs = 100;
	var mss = 50;
	var bns = false;
	if (isMobile.any()) {
		scs = 10;
		mss = 1;
		bns = true;
	}
	var opt = {
		cursorcolor: "#fff",
		cursorwidth: "4px",
		background: "",
		autohidemode: true,
		cursoropacitymax: 0.4,
		bouncescroll: bns,
		cursorborderradius: "0px",
		scrollspeed: scs,
		mousescrollstep: mss,
		directionlockdeadzone: 0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
function scroll() {
	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
	if ($('.scroll-body').length > 0) { scroll(); }
}

/*
function scrollwhouse(){
		var scs=100;
		var mss=50;
		var bns=false;
	if(isMobile.any()){
		scs=10;
		mss=1;
		bns=true;
	}
	var opt={
		cursorcolor:"#afafaf",
		cursorwidth: "5px",
		background: "",
		autohidemode:false,
		railalign: 'left',
		cursoropacitymax: 1,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
$('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
$('.whouse-content-body').scroll(function(event) {
		var s=$(this).scrollTop();
		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
		var p=s/r*100;
	$('.whouse-content__shadow').css({opacity:1-1/100*p});
});
*/


if ($('.t,.tip').length > 0) {
	tip();
}
function tip() {
	$('.t,.tip').webuiPopover({
		placement: 'top',
		trigger: 'hover',
		backdrop: false,
		//selector:true,
		animation: 'fade',
		dismissible: true,
		padding: false,
		//hideEmpty: true
		onShow: function ($element) { },
		onHide: function ($element) { },
	}).on('show.webui.popover hide.webui.popover', function (e) {
		$(this).toggleClass('active');
	});
}



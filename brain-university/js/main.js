
$(document).ready(function() {
	
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
//FORMS

function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#9B4E7C",
				cursorwidth: "12px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "10px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					let cl='';
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('class')!='' && $(this).attr('class')!=null){
						let cl=$(this).attr('class');
					}
					if($(this).attr('value')!=''){
						if($(this).attr('data-icon')!='' && $(this).attr('data-icon')!=null){
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'><div><img src="+$(this).attr('data-icon')+" alt=\"\"></div><div>"+$(this).html()+"</div></div>";
						}else{
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'>"+$(this).html()+"</div>";
						}
					}else if($(this).parent().attr('data-label')=='on'){
						if(sblock.find('.select__label').length==0){
							sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
						}
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else if($(this).attr('data-icon')=='true'){
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select icon "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr('data-icon')+" alt=\"\"></div><div>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+
											"</div>"+
											soptions+
										"</div>");
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}

				if(sblock.find('.select-options__value').length==1){
					sblock.find('.select').addClass('one');
				}

				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled') && !$(this).hasClass('one')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}


				var cl=$.trim($(this).find('.select-title__value').attr('class').replace('select-title__value',''));
					$(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
				if(cl!=''){
					$(this).find('.select-options__value.'+cl).hide().addClass('hide');
				}
				if($(this).find('.select-options__value').last().hasClass('hide')){
					$(this).find('.select-options__value').last().prev().addClass('last');
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}


			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');

				$(this).parents('.select-block').find('.select').removeClass('err');
				$(this).parents('.select-block').parent().removeClass('err');
				$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
		$(document).on('keydown',function(e) {
			if(e.which==27){
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			}
		});
	}
	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}else{
				this.value = $(this).attr('data-value');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				if(!$(this).hasClass('l')){
					this.value = $(this).attr('data-value');
				}
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
			if($(this).hasClass('vn')){
				formValidate($(this));
			}
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});

	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
	$.each($('input.phone'), function(index, val) {
		$(this).attr('type','tel');
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.phone').focusout(function(event) {
		maskclear($(this));
	});
	$.each($('input.num'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.num').focusout(function(event) {
		maskclear($(this));
	});
	/*
	$.each($('input.date'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('dd.mm.yyyy',{
				clearIncomplete: true,
				placeholder:"_",
				//yearrange:{'minyear':n-40,'maxyear':n},
				clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));},
				"oncomplete": function(){
					$(this).datepicker("setDate",$(this).val());
				}
			});
			$(this).addClass('focus');
			$(this).parents('.form-column').addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
		$(this).focusout(function(event) {
			maskclear($(this));
		});
		$(this).datepicker({
			dateFormat : "dd.mm.yy",
			//yearRange: "1915:2015",
			//defaultDate: '-18Y', 
			//inDate: '-85Y', 
			//maxDate: "0Y",
			beforeShow :function(event){
				$('.ui-datepicker').show();
			},
			onSelect:function(event){
				if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
					$(this).addClass('focus');
					$(this).parent().addClass('focus');
					if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
						$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
					}
				}
			}
		});
	});
	*/

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('body').off('click','.check',function(event){});
	$('body').on('click','.check',function(event){
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
					$(this).toggleClass('active');
				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});

	//RADIO
	$.each($('.radiobuttons__item'), function(index, val) {
		if($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$('body').off('click', '.radiobuttons__item', function(event){});
	$('body').on('click', '.radiobuttons__item', function(event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});

	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
					$(this).parents('.options').find('.option').removeClass('active');
					$(this).toggleClass('active');
					$(this).children('input').prop('checked', true);
			}
		}
	});
	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
	//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
	//ADDFILES
	$('.form-addfile__input').change(function(e){
		if($(this).val()!=''){
					var ts=$(this);
				ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
			$.each(e.target.files, function(index, val) {
				if(ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("'+e.target.files[index].name+'")').length==0){
					ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>'+e.target.files[index].name+'</li>');
				}
			});
		}
	});
	
}
forms();

function digi(str){
	var r=str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return r;
}

//? Превью картинки
// const formImage = document.getElementById("formImage");
// const formPreview = document.getElementById("formPreview");

// formImage.addEventListener("change", () => {
//   uploadFile(formImage.files[0]);

// });

// function uploadFile(file) {
//   //?проверяем тип файла
//   if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
// 	alert('Разрешены только изобржения');
// 	formImage.value = '';
// 	return;
//   }
//   //? Ограничение размера файла (<2 Мб)
//   // if(file.size >2 *1024 *1024) {
//   //   alert('Файл должен быть менее 2 Мб');
//   //   formImage.value = '';
//   //   return;
//   // }
//   //? вывод превью
//   var reader = new FileReader();
//   reader.onload = function (e) {
// 	formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
//   };
//   reader.onerror = function (e) {
// 	alert('Ошибка');
//   };
//   reader.readAsDataURL(file);

// }

//VALIDATE FORMS
$('form button[type=submit]').click(function(){

		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//?ОПТРАВКА ФОРМЫ
		// send();
		// async function send(){
		//  //? получаем все данные полей + изображение в formData
		 
  		// let form = document.getElementById("form");
		//  let formData = new FormData(form);
		//  formData.append('image', formImage.files[0]);
		 
		
		//    form.classList.add('_sending');
		//    let response = await fetch('sendmail.php', {
		// 	 method:'POST',
		// 	 body: formData
		//    });
		//    if (response.ok){
		// 	 let result = await response.json();
		// 	 alert(result.message); 
		// 	 formPreview.innerHTML = '';
		// 	 form.reset();
		// 	 form.classList.remove('_sending');
		//    } else {
		// 	 alert('Ошибка');
		// 	 form.classList.remove('_sending');
		//    }
		 
		// }

		///////////////////////////////////////////////////////////////


	// 	form.classList.add('_sending');
    //   let response = await fetch('sendmail.php', {
    //     method:'POST',
    //     body: formData
    //   });
    //   if (response.ok){
    //     let result = await response.json();
    //     alert(result.message); 
    //     formPreview.innerHTML = '';
    //     form.reset();
    //     form.classList.remove('_sending');
	//   }

	  /////////////////////////////////////////////////////////////////////

		// function showResponse(html){
		// 	if(!form.hasClass('nomessage')){
		// 		showMessage(messagehtml);
		// 	}
		// 	if(!form.hasClass('noclear')){
		// 		clearForm(form);
		// 	}
		// }
		// var options={
		// 	success:showResponse
		// };
		// 	form.ajaxForm(options);
		

		// setTimeout(function(){
		// 	if(!form.hasClass('nomessage')){
		// 		//showMessage(messagehtml);
		// 		showMessageByClass(ms);
		// 	}
		// 	if(!form.hasClass('noclear')){
		// 		clearForm(form);
		// 	}
		// },0);

		return false;
		
		if(ms!=null && ms!=''){
			showMessageByClass(ms);
			return false;
		}
	}else{
		//alert('заполните обязательные поля');
		return false;
	}
});



function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(input.val()!=input.attr('data-value')){
			var em=input.val().replace(" ","");
			input.val(em);
		}
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val()==input.attr('data-value')){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	popupOpen('message.'+ms,'');
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		if(!n.hasClass('l')){
			n.val(n.attr('data-value'));
		}
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}
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



//Adaptive functions
	let move_array=[];
if($('*[data-move]')){
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
			$(this).attr('data-move-index',index);
			move_array[index]={
				'parent':$(this).parent(),
				"index":$(this).index()
			};
		}
	});
}
function dynamic_adaptive(){
		let w=$(window).outerWidth();
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
				let dat_array=$(this).data('move').split(',');
				let dat_parent=$('.'+dat_array[0]);
				let dat_index=dat_array[1];
				let dat_bp=dat_array[2];
			if(w<dat_bp){
				if(!$(this).hasClass('js-move_done_'+dat_bp)){
					if(dat_index>0){
						$(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
					}else{
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_'+dat_bp);
				}
			}else{
				if($(this).hasClass('js-move_done_'+dat_bp)){
					dynamic_adaptive_back_all($(this));
					$(this).removeClass('js-move_done_'+dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el){
		let index_original=el.data('move-index');
		let move_place=move_array[index_original];
		let parent_place=move_place['parent'];
		let index_place=move_place['index'];
	if(index_place>0){
		el.insertAfter(parent_place.find('*').eq(index_place-1));
	}else{
		el.prependTo(parent_place);
	}
}
$(window).resize(function(event) {
	dynamic_adaptive();
	
});
	dynamic_adaptive();

//console.log(move_array);


function dynamic_adaptive_back_all(){
	$.each($('*[data-move]'), function(index, val) {
			let index_original=$(this).data('move-index');
			let move_place=move_array[index_original];
			let parent_place=move_place['parent'];
			let index_place=move_place['index'];
		if(index_place>0){
			$(this).insertAfter(parent_place.find('*').eq(index_place-1));
		}else{
			$(this).prependTo(parent_place);
		}
	});
}

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


});
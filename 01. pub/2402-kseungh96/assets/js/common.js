// headerActive
function headerActive() {
	$('.depth01 > li').on('mouseenter focusin',function(){
		$(this).addClass('active');
		$(this).find('.depth02').stop().slideDown();
	}).on('mouseleave focusout',function(){
		$(this).removeClass('active');
		$(this).find('.depth02').stop().slideUp();
	});
	$('.depth02 > li > a').on('focusin',function(){ 
		$(this).parent('li').addClass('active');
	}).on('focusout',function(){
		$(this).parent('li').removeClass('active');
	});
}

// mobileMenuToggle
function mobileMenuToggle(){
	const body = document.querySelector('body');
	const nav = document.querySelector(".navWrap");
	const btnClose = document.querySelector('.moMenu .btnClose');
	const btnMenu = document.querySelector('.moMenu .btnMenu');

	btnMenu.addEventListener("click",() => {
		nav.style.left = "0%";
		nav.classList.add('active');
		btnClose.style.display = "inline-block";
		btnMenu.style.display = "none";
		body.style.overflow = "hidden";
	});

	btnClose.addEventListener("click",() => {
		nav.style.left = "100%";
		nav.classList.remove('active');
		btnClose.style.display = "none";
		btnMenu.style.display = "inline-block";
		body.style.overflow = "hidden auto";
	});
}

// popupToggle
function popupToggle(){
	const body = document.querySelector('body');
	const dim = document.querySelector('.dim');
	const nav = document.querySelector(".navWrap");
	const popupClose = document.querySelector('.popupWrap .btnClose');
	const search = document.querySelector('.search');
	const searchPopup = document.querySelector('.popupWrap .searchPop');

	// 검색 popup open
	search.addEventListener('click',() => {
		searchPopup.style.display = "inline-block";
		dim.style.display = "inline-block";
		body.style.overflow = "hidden";
	});

	// popup close
	popupClose.addEventListener('click',() => {
		searchPopup.style.display = "none";
		dim.style.display = "none";

		if ( nav.classList.contains('active') ) {
			body.style.overflow = "hidden";
		}else{
			body.style.overflow = "hidden auto";
		}
	});
}

// reviewAcitve
function reviewAcitve() {
	$('.reviewContWrap > ol > li > a').on('focusin',function(){
		var reviewNum = $(this).parent('li').index();
		$('.reviewContWrap > ol > li, .reviewContWrap > ul > li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.reviewContWrap > ul > li').eq(reviewNum).addClass('active');
	});
}

// scrollHeaderOn
function scrollHeaderOn() {
	if (document.documentElement.scrollTop > 0) {
		document.querySelector('header').classList.add('on');
	} else {
		document.querySelector('header').classList.remove('on');
	}
}

// scrollActive
function scrollActive() {
	var windowScroll = $(window).scrollTop();
	var headerHeight = $('header').height();
	var menu = $('nav > ul > li'),
		action = $('.action');
		titOn = $('.secTitWrap');

	for (var i = 0; i < action.length; i++) {
		if (windowScroll >= action.eq(i).offset().top - headerHeight) {
			menu.removeClass('active');
			menu.eq(i).addClass('active');
		}
		if (windowScroll >= action.eq(i).offset().top - $(window).height() / 2) {
			action.eq(i).addClass('on');
		} else {
			action.eq(i).removeClass('on');
		}
		if (windowScroll >= titOn.eq(i).offset().top - $(window).height() / 2) {
			titOn.eq(i).addClass('on');
		} else {
			titOn.eq(i).removeClass('on');
		}
	}
}

$(document).ready(function () {
	headerActive(); // pc header hover, focus 시 depth01, depth02 모션
	reviewAcitve(); // 리뷰 컨텐츠 프로필 클릭 시 해당 리뷰 노출
	scrollActive(); // nav에 active class와 본문 컨텐츠 영역에 on class 추가
	popupToggle(); // 팝업 여닫기
	mobileMenuToggle(); // 모바일 메뉴 여닫기
});

window.addEventListener('scroll', function (e) {
	scrollHeaderOn(); // scroll 시 on class 추가하여 header 밑줄 추가
	scrollActive(); // scroll 시 nav에 active class와 본문 컨텐츠 영역에 on class 추가
});



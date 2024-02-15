
// scrollHeaderOn
function scrollHeaderOn() {
	if (document.documentElement.scrollTop > 0) {
		document.querySelector('header').classList.add('on');
	} else {
		document.querySelector('header').classList.remove('on');
	}
}

// headerActive
function headerActive() {
	$('.depth01 > li').on('mouseenter focusin', function(){
		$(this).addClass('active');
		$(this).find('.depth02').stop().slideDown();
	}).on('mouseleave focusout', function(){
		$(this).removeClass('active');
		$(this).find('.depth02').stop().slideUp();
	});
	$('.depth02 > li > a').on('focusin', function(){
		$(this).parent('li').addClass('active');
	}).on('focusout', function(){
		$(this).parent('li').removeClass('active');
	});
}

// mobileMenuOpen
function mobileMenuOpen() {
	$('.btnMenu').on('click',function(){
		$('.navWrap').stop().animate({
			left:0+'%'
		});
		$('.btnClose').css('display','inline-block');
		$('.btnMenu').css('display','none');
		$('body').css('overflow','hidden');
	});
}

// mobileMenuClose
function mobileMenuClose() {
	$('.btnClose').on('click',function(){
		$('.navWrap').stop().animate({
			left:100+'%'
		});
		$('.btnMenu').css('display','inline-block');
		$('.btnClose').css('display','none');
		$('body').css('overflow','hidden auto');
	});
}

// reviewAcitve
function reviewAcitve() {
	$('.reviewContWrap > ol > li > a').on('focusin',function(){
		var reviewNum = $(this).parent("li").index();
		$('.reviewContWrap > ol > li, .reviewContWrap > ul > li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(".reviewContWrap > ul > li").eq(reviewNum).addClass("active");
	});
}



$(document).ready(function () {
	headerActive(); // pc header hover, focus 시 depth01, depth02 모션
	mobileMenuOpen(); // 모바일 메뉴 열기
	mobileMenuClose(); // 모바일 메뉴 닫기
	reviewAcitve(); // 리뷰 컨텐츠 프로필 클릭 시 해당 리뷰 노출
});

window.addEventListener('scroll', function (e) {
	scrollHeaderOn(); // scroll 시 on class 추가하여 header 밑줄 추가
});

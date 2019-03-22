
/*---------------------------------------------EFEITO DE ESCREVER(HOME) ---------------------------------------------*/
var indexLetraPalavra = 0;
var text = document.getElementById('text').innerText;
document.getElementById('text').innerText = ""

function typePalavra() {
	
	if(indexLetraPalavra < text.length) {
		document.getElementById('text').innerHTML += text.charAt(indexLetraPalavra);
		indexLetraPalavra ++;
		setTimeout(typePalavra, 120);
	}

	else {
		document.getElementById('text').style.animation = "blink-caret .75s step-end infinite";
	}

}

/*--------------------------------------------- MENU MOBILE ---------------------------------------------*/
var ativo = false
$('.menu-animado').click(function(){
	if(ativo === false){
		$('#hamburguer').addClass('ativo');
		$('.menu-mobile').css("opacity","1");
		$('.menu-mobile').css("visibility","visible");
		$('.menu-animado').css("box-shadow","0 0 0 130vw wheat, 0 0 0 130vw wheat");
		ativo = true
	}
	else {
		$('#hamburguer').removeClass('ativo');
		$('.menu-mobile').css("visibility","hidden");
		$('.menu-animado').css("box-shadow","0 0 0 0 wheat, 0 0 0 0 wheat");
		$('.menu-mobile').css("opacity","0");
		ativo = false
	}
	
});

$('.menu-mobile a').click(function(){
	if(ativo === true){
		$('#hamburguer').removeClass('ativo');
		$('.menu-animado').css("box-shadow","0 0 0 0 wheat, 0 0 0 0 wheat");
		$('.menu-mobile').css("visibility","hidden");
		$('.menu-mobile').css("opacity","0");
		
		ativo = false;
	}
	else {
		$('.menu-mobile').css("opacity","1");
		$('.menu-mobile').css("visibility","visible");
		
	}
	
});


/*--------------------------------------------- SCROLL SUAVE ---------------------------------------------*/

/* Função aprendida no curso de scrollSuave no vídeo gratuito disponibilizado no Youtube pelo
canal Origamid */
function scrollSuave(){
	$('.menu-mobile a').click(function(e){
		e.preventDefault();
		var secaoId = $(this).attr('href'),
			distanciaTopSecao = $(secaoId).offset().top,
			menuHeight = $('.menu-animado').innerHeight();
		$('html, body').animate({
			scrollTop: distanciaTopSecao - menuHeight //como coloca no topo a secao, o menu cobre, por isso subtrai a altura do menu
		}, 500);
	});
}

function teste(){
	$('.translate').click(function(){
		$(".quadro").toggleClass("fixe");
	});
}

/*--------------------------------------------- SLICK ---------------------------------------------*/

/*=============================================================
| Plugin--> slick.js 
|
| License:
| Copyright (c) 2017 Ken Wheeler
| Licensed under the MIT license.
===============================================================*/ 

function slider() {
	$('.slider').slick({
		autoplay: true,
		prevArrow: $(".slick-prev"),
    	nextArrow: $(".slick-next"),
		autoplaySpeed: 7000,
		fade: true,
		cssEase: 'linear',
		arrows: true, 
		draggable: true
	});

	$('.trabalhos-secao').slick({
		prevArrow: $(".prev"),
		nextArrow: $(".next"),
		dots: false,
		autoplaySpeed: 7000,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		variableHeight: true,
		infinite: true,
		
		responsive: [
			{
			  breakpoint: 951,
			  settings: {
				centerMode: false,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false,
				
				
	
			  }
			}
		]
		
	});
}

/*--------------------------------------------- CHAMADA DAS FUNÇÕES ---------------------------------------------*/

window.addEventListener("orientationchange", function() {
	if(window.orientation == 0){
     	$("#header").removeClass("fixed");
	}
});

window.addEventListener('load', function() {
	typePalavra();
	scrollSuave();
	slider();
	teste();
	
});

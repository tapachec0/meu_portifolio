let distanciaTopHeader = $("#header").offset().top; //posição do topo inicial do objeto
let fixo = false
/* Função para verificar se a posição do topo da window é maior do que a do objeto.Se sim, o
cabeçalho fica com posicao fixa e no topo. Caso contrário, o topo da window é menor, então 
há conteudo acima e volta ao normal*/
function fixarHeader() {
	console.log('header',distanciaTopHeader);
	console.log('window',$(window).scrollTop());
	
	if($(window).scrollTop() >= distanciaTopHeader) {
		$("#header").addClass("fixed");
		console.log('rntrou')
		console.log()
		console.log('window',$(window).scrollTop());
	}

	else {
		console.log()
		if($("#header").hasClass('fixed')){
			$("#header").removeClass("fixed");	
		}
		
		
	}
}

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

var ativo = false
$('.icone-hamburguer').click(function(){
	if(ativo === false){
		$('#hamburguer').addClass('ativo');
		ativo = true
	}
	else {
		$('#hamburguer').removeClass('ativo');
		ativo = false
	}
	$('.menu-mobile').fadeToggle( "slow", "linear" );
});

$('.menu-mobile a').click(function(){
	if(ativo === true){
		$('#hamburguer').removeClass('ativo');
		ativo = false;
	}
	
	$('.menu-mobile').fadeToggle( "slow", "linear" );
	
});


/* Função aprendida no curso de scrollSuave no vídeo gratuito disponibilizado no Youtube pelo
canal Origamid */
function scrollSuave(){
	$('#header nav a').click(function(e){
		e.preventDefault();
		var secaoId = $(this).attr('href'),
			distanciaTopSecao = $(secaoId).offset().top,
			menuHeight = $('#header').innerHeight();
			console.log(secaoId);
			console.log(distanciaTopSecao);
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
		responsive: [
			{
			  breakpoint: 951,
			  settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				variableWidth: false,
				variableHeight: false,
				dots: false,
				infinite:true,
				
	
			  }
			}
		]
		
	});
}

//Função que controla o scroll
window.addEventListener('scroll', function() {
	fixarHeader();
	
});

window.addEventListener('resize', function() {
	distanciaTopHeader =  $("#header").offset().top;
	console.log(distanciaTopHeader)
	
});

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

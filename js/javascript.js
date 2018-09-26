var distanciaTopHeader = $("#header").offset().top; //posição do topo inicial do objeto

/* Função para verificar se a posição do topo da window é maior do que a do objeto.Se sim, o
cabeçalho fica com posicao fixa e no topo. Caso contrário, o topo da window é menor, então 
há conteudo acima e volta ao normal*/
function fixarHeader() {
	if($(window).scrollTop() >= distanciaTopHeader) {
		$("#header").addClass("fixed");
	}

	else {
		$("#header").removeClass("fixed");
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
}

//Função que controla o scroll
window.addEventListener('scroll', function() {
	fixarHeader();
	
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

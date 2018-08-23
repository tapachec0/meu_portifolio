var distanciaTopHeader = $("#header").offset().top; //posição do topo inicial do objeto

/* Função para verificar se a posição do topo da window é maior do que a do objeto.Se sim, o
cabeçalho fica com posicao fixa e no topo. Caso contrário, o topo da window é menor, então 
há conteudo acima e volta ao normal*/
function fixarHeader() {
	if($(window).scrollTop() > distanciaTopHeader) {
		$("#header").addClass("fixed");
	}

	else {
		$("#header").removeClass("fixed");
	}
}

//Função que controla o scroll
window.addEventListener('scroll', function() {
	fixarHeader();
});
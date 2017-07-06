$(document).ready(function(){

	//carrusel se desplace automaticamente cada 5000 milisegundos (5 segundos)
	setInterval("$('#divIzquierda').click()",5000);
	setInterval("$('#divDerecha').click()",5000);
	
	//hacer clic en la flecha izquierda
	$('#divIzquierda').click(function(){
		//permita que el ultimo elemento de la lista pase a la ultima posicion
		$('#divCentro ul').prepend($('#divCentro ul li:last'));
	});
	
	// clic en la flecha derecha
	$('#divDerecha').click(function(){
		//para que el primer elemento de la lista y lo trasladamos a la primera posicion
		$('#divCentro ul').append($('#divCentro ul li:first'));
	});
});
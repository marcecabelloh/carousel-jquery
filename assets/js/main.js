$(document).ready(function(){

	//carrusel se desplace automaticamente cada 5000 milisegundos (5 segundos)
	setInterval("$('#flecha-izquierda').click()",5000);
	setInterval("$('#flecha-derecha').click()",5000);
	
	//hacer clic en la flecha izquierda
	$('#flecha-izquierda').click(function(){
		//permita que el ultimo elemento de la lista pase a la ultima posicion
		$('#caja ul').prepend($('#caja ul li:last'));
	});
	
	// clic en la flecha derecha
	$('#flecha-derecha').click(function(){
		//para que el primer elemento de la lista y lo trasladamos a la primera posicion
		$('#caja ul').append($('#caja ul li:first'));
	});
});
// - - - - - - CODIGO JAVASCRIPT PERSONALIZADO - - - - - -

$(function(){


	$( "#pagina_llegar" ).on( "pageshow", function( event, ui ) {
		var cenBanLat=19.44076;
		var cenBanLng=-99.2242912;
		var miGeoLat, miGeoLng;

		var map=new GMaps({
			div: '#mapa',
			lat: cenBanLat,
			lng: cenBanLng,
			zoom: 14,
			disableDefaultUI: true
		});



	/* - - - - - LO del mapa - - - - - */
	/* - - - - - Inicio el map - - - - - */
	var cenBanLat=19.44076;
	var cenBanLng=-99.2242912;
	var miGeoLat, miGeoLng;

	var map=new GMaps({
		div: '#mapa',
		lat: cenBanLat,
		lng: cenBanLng,
		zoom: 14,
		disableDefaultUI: true
	});


	/* - - - - - Agrego Marcador al Centro banamex - - - - - */
	map.addMarker({
		lat: cenBanLat,
		lng: cenBanLng,
	});

	map.drawOverlay({
		lat: cenBanLat,
		lng: cenBanLng,
		content: '<div class="overlay">Centro Banamex</div>'
	});


	/* - - - - - Ahora detecto la ubicacion del usuario - - - - - */
	GMaps.geolocate({
	 success: function(position) {
	 	miGeoLat=position.coords.latitude;
	 	miGeoLng=position.coords.longitude;

	 	//map.setCenter(miGeoLat, miGeoLng);

	 	map.addMarker({
	 		lat: miGeoLat,
	 		lng: miGeoLng,
	 	});

	 	map.drawOverlay({
	 		lat: miGeoLat,
	 		lng: miGeoLng,
	 		content: '<div class="overlay">Tu ubicación</div>'
	 	});

	 	map.drawRoute({
	 		origin: [miGeoLat, miGeoLng],
	 		destination: [cenBanLat, cenBanLng],
	 		travelMode: 'driving',
	 		strokeColor: '#9E5EA5',
	 		strokeOpacity: 0.7,
	 		strokeWeight: 8
	 	});


	 	var centroBanamex = new google.maps.LatLng(cenBanLat,cenBanLng);
	 	var miUbicacion = new google.maps.LatLng(miGeoLat,miGeoLng);

	 	var bounds = new google.maps.LatLngBounds(centroBanamex,miUbicacion);
	 	map.fitBounds(bounds);
	 },
	 error: function(error) {
	 	alert('Error en la GeoLocalización: '+error.message);
	 },
	 not_supported: function() {
	 	alert("Tu navegador no permite GeoLocalización");
	 },
	 always: function() {

	 }
	});

	
	});




/* - - - - - EL FORMULARIO DE CONTACTO - - - - - */

	$( "#pagina_contacto" ).on( "pageshow", function( event, ui ){
		$('#input_nombre').val('');
		$('#input_email').val('');
		$('#input_comentarios').val('');
	});

	$("#boton_enviar_comentario").on('click', function(){

		var nombre=$('#input_nombre').val();
		var email=$('#input_email').val();
		var comentarios=$('#input_comentarios').val();
		var div_popup=$("#status_formulario");

		if(nombre===''){
			$("#txt_status_formulario").html('<strong>INGRESA UN NOMBRE POR FAVOR</strong>');
			$( div_popup ).popup( "open");
			$('#input_nombre').focus();
			return false;
		}

		if(email===''){
			$("#txt_status_formulario").html('<strong>POR FAVOR INGRESA UN E-MAIL</strong>');
			$( div_popup ).popup( "open");
			$('#input_email').focus();
			return false;
		}

		if(comentarios===''){
			$("#txt_status_formulario").html('<strong>POR FAVOR, NO DEJES EN BLANCO LOS COMENTARIOS</strong>');
			$( div_popup ).popup( "open");
			$('#input_comentarios').focus();
			return false;
		}

		$.ajax({
			url: 'http://expooutletmibebeyyo.com/app/contacto.php',
			type: 'post',
			data: {
				'nombre': nombre, 'email': email, 'comentarios': comentarios
			},
			beforeSend: function(){
				$('#txt_status_formulario').html('<strong>Enviando tus comentarios...</strong>');
				$( div_popup ).popup( "open");
			}, 
			success : function (respuestaPHP) {
				$( div_popup ).popup( "close");
				alert('Agradecemos tus comentarios =D');
				$('#input_nombre').val('');
				$('#input_email').val('');
				$('#input_comentarios').val('');
			}, 
		});

	});




	$("#boton_salir").on('click', function(evento){
		evento.preventDefault();
		navigator.app.exitApp();
		//alert('Me doste click');
	});
  







});
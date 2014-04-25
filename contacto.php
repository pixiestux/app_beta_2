<?php

/* - - - - - Para hacerla de emcion - - - - - */
sleep(1);

$nombre=$_POST['nombre'];
$email=$_POST['email'];
$comentarios=$_POST['comentarios'];

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$cabeceras .= 'From: Expo Outler App <info@expooutlet.com>' . "\r\n";

mail('pixiestux@gmail.com', 'Contacto desde la app', 'EL MENSAJE...', $cabeceras);

echo '<strong>Se ha enviado el correo correctamente</strong>';


?>
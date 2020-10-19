<?php
$a 	= $_POST["a"];
$b 	= $_POST["b"];	
$to		= "login@gmail.com";

$shop_message = "письмо с сайта: $a + $b";
$subject = "письмо с сайта";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: order@shop.com" . "\r\n";

mail($to,$subject,$shop_message,$headers);
?>{"message" : "Письмо отправлено"}
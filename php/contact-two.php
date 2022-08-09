<?php

$email = $_POST["emailTwo"];

$body = "";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false;
    $mail->Port = 25;

    //Recipients
    $mail->setFrom('luis@parapenteagencia.com');     // Remitente
    $mail->addAddress('luis@parapenteagencia.com');     // Destinatario
    //$mail->addCC('luis@parapenteagencia.com');     // Con Copia para mí :v

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Suscripción a newsletter Parapente';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}
<?php {
    date_default_timezone_set('Europe/Moscow');
    $dt = date("d F Y, H:i:s"); // дата и время

    $title = "Заявка с сайта Masks test" ; // заголовок(тема) письма

    $phone = htmlspecialchars($_POST["orderTel"]);
    $categoty = htmlspecialchars($_POST["orderTitle"]);
    $uName = htmlspecialchars($_POST["uName"]);
    $uQty = htmlspecialchars($_POST["uQty"]);
    $uAddress = htmlspecialchars($_POST["uAddress"]);

    $mess = "<b>Дата и Время:</b> $dt <br>";

    if (uName) {
        $mess .= "<b>Имя:</b> $uName<br>";
    }
    if ($phone) {
        $mess .= "<b>Телефон:</b> $phone<br>";
    }		
    if ($categoty) {
        $mess .= "<b>Категория:</b> $categoty<br>";
    }	
    if ($uQty) {
        $mess .= "<b>Количество:</b> $uQty<br>";
    }
    if ($uAddress) {
        $mess .= "<b>Адрес доставки:</b> $uAddress<br>";
    }
    
    
   $apiKey = 'API__KEY';
require("sendgrid-php/sendgrid-php.php");

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("info@visaberi.ru", "Visaberi");
$tos = [
    "boris117@yandex.ru" => "Example User3",
    "boris1488ss@gmail.com" => "Example User2"
];
$email->addTos($tos);
$email->setSubject($title);
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", $mess
);
$sendgrid = new \SendGrid($apiKey);
try {
    $response = $sendgrid->send($email);
    print $mess . "\n";
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
}
}
?>
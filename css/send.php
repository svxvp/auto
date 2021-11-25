<?php

$email = $_POST[''];




$email = htmlspecialcharts($email); //преобразует символ в сущности

$email = urldecode($email); //декодируем url 

$email = trim($email); //удаление пробельных символов с обоих сторон

//отправляем данные на почту


if(mail(""
         "Новое письмо с сайта",
         "Email: ".$email."\n".
         "From: arish_1111@mail.ru \r\n")

) {
    echo('Вы подписались на рассылку!');
}

else{
    echo('Err');
}


?>

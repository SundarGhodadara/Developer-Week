<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];



    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Telephone: " . $telephone . "<br>";
    echo "Subject: " . $subject . "<br>";
    echo "Message: " . $message . "<br>";

} else {
    header("Location: index.html");
    exit();
}

?>

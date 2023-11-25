<?php
header('Content-Type: application/json');

$file = 'chat_messages.txt';
$messages = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$messages = array_reverse($messages);

echo json_encode($messages);
?>

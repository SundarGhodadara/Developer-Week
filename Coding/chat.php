<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];

    if (!empty($message)) {
        $file = 'chat_messages.txt';
        $currentMessages = file_get_contents($file);
        $currentMessages .= "[" . date('H:i:s') . "] " . htmlspecialchars($message) . "\n";
        file_put_contents($file, $currentMessages);

        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Empty message']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>

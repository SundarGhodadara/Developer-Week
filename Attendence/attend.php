<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentId = $_POST["studentId"];
    $course = $_POST["course"];
    if (!empty($studentId) && !empty($course)) {
        $attendanceData = [
            'studentId' => $studentId,
            'course' => $course,
            'timestamp' => date('Y-m-d H:i:s'),
        ];

        $file = 'attendance_data.txt';
        $currentData = file_get_contents($file);
        $currentData .= json_encode($attendanceData) . "\n";
        file_put_contents($file, $currentData);

        echo json_encode(['status' => 'success', 'message' => 'Attendance marked successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid data received']);
    }
}
?>

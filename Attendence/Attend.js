function markAttendance() {
  const studentId = document.getElementById('studentId').value;
  const course = document.getElementById('course').value;

  const attendanceStatus = document.getElementById('attendanceStatus');
  attendanceStatus.innerHTML = `Attendance marked for Student ID: ${studentId} in ${course}.`;
}

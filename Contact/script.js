document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact_form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        var formData = new FormData(this);

        // Send data to the PHP backend using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "contact.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle the server response, you can update the UI or show a confirmation message
                console.log(xhr.responseText);
            }
        };

        xhr.send(formData);
    });
});

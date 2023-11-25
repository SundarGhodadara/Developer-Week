function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value.trim();

  if (message !== '') {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'chat.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);

              if (response.status === 'success') {
                  messageInput.value = '';
                  displayMessage('You', message);
              } else {
                  console.error('Error:', response.message);
              }
          }
      };

      xhr.send('message=' + encodeURIComponent(message));
  }
}

function receiveMessage(sender, message) {
  console.log('Received message from', sender, ':', message);
  displayMessage(sender, message);
}

function displayMessage(sender, message) {
  var chatMessages = document.getElementById('chatMessages');
  var listItem = document.createElement('li');
  listItem.textContent = sender + ': ' + message;
  chatMessages.appendChild(listItem);
}

setTimeout(function () {
  receiveMessage('Krish', 'Hello, how are you doing?');
}, 2000);

setTimeout(function () {
  receiveMessage('Ved', 'I\'m doing great! How about you?');
}, 4000);

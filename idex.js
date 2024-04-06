// messaging.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the message button
    var messageBtn = document.getElementById('messageBtn');

    // Add a click event listener to the message button
    messageBtn.addEventListener('click', function () {
        // Open a prompt to get the recipient's name
        var recipient = prompt('Enter the recipient\'s name:');
        
        if (recipient !== null) {
            // Open a prompt to get the message content
            var messageContent = prompt('Enter your message to ' + recipient + ':');

            if (messageContent !== null) {
                // Display the message in the console (replace this with your own logic to display messages)
                console.log('Message to ' + recipient + ': ' + messageContent);
                alert('Message sent!');
            }
        }
    });
});

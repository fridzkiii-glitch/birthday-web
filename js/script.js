welcomeMessage();

// Function to prompt user for their name and display it
function welcomeMessage() {
    // Prompt the user for their name
    let username = prompt("Please enter your name:");

    // If a name was entered, display it in the welcome message
    if (username) {
        document.getElementById('welcome-user').innerText = username;
    }
}

// Form validation function
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        // Show an alert if any field is empty
        alert("All fields must be filled out");
    } else {
        alert("Form submitted successfully! Thank you, " + name + "!");
        // Optionally, you can clear the form here
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}
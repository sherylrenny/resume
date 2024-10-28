document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    
    let errors = [];
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Regex patterns
    const namePattern = /^[a-zA-Z\s]{2,50}$/; // Only letters and spaces, between 2 and 50 characters
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/; // 10-digit number
    const messagePattern = /^.{10,}$/; // At least 10 characters in the message

    if (!namePattern.test(fullname)) {
        errors.push("Please enter a valid full name (only letters and spaces, 2-50 characters).");
    }

    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (!phonePattern.test(phone)) {
        errors.push("Please enter a valid 10-digit phone number.");
    }

    if (!messagePattern.test(message)) {
        errors.push("Message must be at least 10 characters long.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = `<ul><li>${errors.join("</li><li>")}</li></ul>`;
    } else {
        document.getElementById('errorMessages').innerHTML = "Form submitted successfully!";
        // Form submission logic here (e.g., AJAX)
    }
});

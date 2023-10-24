document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const Inquiry = document.getElementById("Inq").value;
        const subject = document.getElementById("subject").value;

        if (fname && lname && email && Inquiry && subject) {
            // Send the form data to a server or perform other actions here
            // For this example, we'll display a confirmation message
            confirmation.innerText = "Message sent! We'll get back to you soon.";
            form.reset();
        } else {
            confirmation.innerText = "Please fill in all the fields.";
        }
    });
});

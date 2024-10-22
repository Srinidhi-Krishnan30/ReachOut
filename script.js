function validateRegister(form) {
    var errors = [];
    if (validator.isEmpty(form.name)) {
        errors.push("Name field is empty");
    }
    if (validator.isEmpty(form.email)) {
        errors.push("Email is required");
    }
    else if (!validator.isEmail(form.email)) {
        errors.push("Email is not valid");
    }
    if (validator.isEmpty(form.contactNumber)) {
        errors.push("Contact number is required");
    }
    else if (!validator.isMobilePhone(form.contactNumber, 'any')) {
        errors.push("Contact number is not valid");
    }
    if (validator.isEmpty(form.subject)) {
        errors.push("Subject must be provided");
    }
    if (validator.isEmpty(form.message)) {
        errors.push("Message must be provided");
    }
    return errors;
}
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var responseDiv = document.getElementById('responseMessage');
    if (contactForm && responseDiv) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var form = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contactNumber: document.getElementById('contactNumber').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            var errors = validateRegister(form);
            if (errors.length > 0) {
                responseDiv.innerHTML = "\n                    <div class=\"error-message\">\n                        ".concat(errors.map(function (error) { return "<p>".concat(error, "</p>"); }).join(''), "\n                    </div>\n                ");
            }
            else {
                responseDiv.innerHTML = "\n                    <div class=\"success-message\">\n                        <p>Form submitted successfully!</p>\n\n                    </div>\n                ";
                contactForm.reset(); // Clear the form
            }
            // Sending data to mock api
            fetch('https://67137e866c5f5ced6626988a.mockapi.io/TestContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form), // form is the data object from the input fields
            })
                .then(function (response) {
                if (response.ok) {
                    // Handle successful submission
                    responseDiv.innerHTML = "<p>Form submitted successfully!</p>";
                }
                else {
                    // Handle error in submission
                    responseDiv.innerHTML = "<p>Failed to submit the form.</p>";
                }
            })
                .catch(function (error) {
                // Handle network or other errors
                responseDiv.innerHTML = "<p>An error occurred: ".concat(error.message, "</p>");
            });
        });
    }
});

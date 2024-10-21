# Contact Us Form with MockAPI

## Project Overview

**ReachOut** is a responsive contact form built with HTML, Typescript, and styled using CSS. This project allows users to easily submit their inquiries, comments, or feedback. Upon submission, the form data is validated to ensure all fields are correctly filled out before sending it to a MockAPI endpoint for storage and management.

## Features

- User-friendly interface with real-time validation.
- Responsive design optimized for various screen sizes.
- Utilizes [MockAPI](https://mockapi.io/) to simulate a backend API for form submissions.
- Validates user input using the `validator` library.
- Clear success and error messages to guide user experience.

## Validation

This project employs the **Validator** module to ensure that all user inputs meet specific criteria before submission. The validation process includes:

- **Name:** Checks that the name field is not empty and contains valid characters.
- **Email:** Validates the email format to ensure it is correctly structured (e.g., `example@domain.com`).
- **Contact Number:** Ensures the contact number is in a valid format, allowing only digits.
- **Subject:** Validates that the subject field is not left empty.
- **Message:** Checks that the message is not empty and has a minimum length to ensure meaningful content.

If any of the fields fail validation, appropriate error messages will be displayed to the user, prompting them to correct the issues before submission.

## MockAPI Integration
This project uses MockAPI, a simple and effective tool to create and manage RESTful APIs. With MockAPI, you can quickly set up a backend to store your data without the need for complex server-side code.

## To use MockAPI:
Go to MockAPI and create a free account.
Create a new resource (e.g., ContactForm) to obtain an API endpoint.
Update the form's action attribute in the HTML to point to your MockAPI endpoint.

## Technologies Used
-HTML
-JavaScript
-Tailwind CSS
-Validator.js
-MockAPI


## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Srinidhi-Krishnan30/ReachOut.git
2. **Run Proejct Files**
   cd ProjectFiles
   open index.html in your web browser


## License
This project is licensed under the MIT License. See the LICENSE file for details.


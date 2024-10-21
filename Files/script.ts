// Work with this code
interface contactForm{
    name:string;
    email:string;
    contactNumber:number;
    subject:string;
    message:string;
}

function validateRegister(form: contactForm):string[]{
    const errors:string[] =[];
    if(validator.isEmpty(form.name)){
        errors.push("Name field is empty");
    }
    if(!validator.isEmail(form.email) || validator.isEmpty(form.email) ){
        errors.push("Email absent or not valid");
    }
    if (form.contactNumber === null || isNaN(form.contactNumber) || !validator.isMobilePhone(form.contactNumber.toString())) {
        errors.push("Contact number absent or not valid");
    }
    if(validator.isEmpty(form.subject)){
        errors.push("Subject must be provided");
    }
    if(validator.isEmpty(form.message)){
        errors.push("Message must be provided");
    }
    return errors;          // this is a list of errors in the given input
}

// Add event handler
document.addEventListener('submit',function(event){
    
      event.preventDefault();
      const form: contactForm = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value, 
        contactNumber: parseInt((document.getElementById('contactNumber') as HTMLInputElement).value),
        subject: (document.getElementById('subject') as HTMLInputElement).value, 
        message: (document.getElementById('message') as HTMLTextAreaElement).value 
    };
    const errors = validateRegister(form);
    if (errors.length > 0) {
        alert(errors.join(", ")); 
    } else {
        alert("Form is valid!");
    }
});

/*
        Running code
declare const validator: any;

interface ContactForm {
    name: string;
    email: string;
    contactNumber: string;  
    subject: string;
    message: string;
}

function validateRegister(form: ContactForm): string[] {
    const errors: string[] = [];
    if(validator.isEmpty(form.name)){
        errors.push("Name field is empty");
    }
    
    if(validator.isEmpty(form.email)){
        errors.push("Email is required");
    } else if(!validator.isEmail(form.email)){
        errors.push("Email is not valid");
    }
    if(validator.isEmpty(form.contactNumber)){
        errors.push("Contact number is required");
    } else if(!validator.isMobilePhone(form.contactNumber, 'any')){
        errors.push("Contact number is not valid");
    }
    if(validator.isEmpty(form.subject)){
        errors.push("Subject must be provided");
    }
    if(validator.isEmpty(form.message)){
        errors.push("Message must be provided");
    }
    return errors;
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('responseMessage');
    
    if (contactForm && responseDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const form: ContactForm = {
                name: (document.getElementById('name') as HTMLInputElement).value,
                email: (document.getElementById('email') as HTMLInputElement).value,
                contactNumber: (document.getElementById('contactNumber') as HTMLInputElement).value,
                subject: (document.getElementById('subject') as HTMLInputElement).value,
                message: (document.getElementById('message') as HTMLTextAreaElement).value
            };
            
            const errors = validateRegister(form);
            
            if (errors.length > 0) {
                responseDiv.innerHTML = `
                    <div class="error-message">
                        ${errors.map(error => `<p>${error}</p>`).join('')}
                    </div>
                `;
            } else {
                responseDiv.innerHTML = `
                    <div class="success-message">
                        <p>Form submitted successfully!</p>
                    </div>
                `;
                (contactForm as HTMLFormElement).reset(); // Clear the form
            }
            // Sending data to mock api
                fetch('https://67137e866c5f5ced6626988a.mockapi.io/TestContactForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form), // form is the data object from the input fields
            })
            .then(response => {
                if (response.ok) {
                    // Handle successful submission
                    responseDiv.innerHTML = `<p>Form submitted successfully!</p>`;
                } else {
                    // Handle error in submission
                    responseDiv.innerHTML = `<p>Failed to submit the form.</p>`;
                }
            })
            .catch(error => {
                // Handle network or other errors
                responseDiv.innerHTML = `<p>An error occurred: ${error.message}</p>`;
            });
        });
    }
    
});*/








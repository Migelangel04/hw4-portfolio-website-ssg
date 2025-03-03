document.addEventListener('DOMContentLoaded', () => {
    let contactForm = document.getElementById('contact');
    let name = document.getElementById('name');
    let nameError = document.getElementById('error-name');
    let email = document.getElementById('email');
    let emailError = document.getElementById('error-email');
    let message = document.getElementById('message');
    let messageError = document.getElementById('error-message');
    let messageCharCount = document.getElementById('char-count');
    let possibleBot = document.getElementById('possible_bot');
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
      if (this.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    });

    message.addEventListener('input', () => {
        const length = message.value.length
        messageCharCount.textContent = length
        
        if (length === 500) {
            messageCharCount.style.color = 'red'
        } else if (length > 400) {
            messageCharCount.style.color = 'orange'
        } else {
            messageCharCount.style.color = ''
        }
    })

    contactForm.addEventListener('input', () => {
        possibleBot.value = "false";
    });

    contactForm.addEventListener('submit', (event) => {
        // Check if the form is valid
        let isValid = true;
        
        // Validate each field individually
        if (!validateName(name)) isValid = false;
        if (!validateEmail(email)) isValid = false;
        if (!validateMessage(message)) isValid = false;
        
        // Bot detection - check if user interacted with form naturally
        if (possibleBot.value === "true") {
          possibleBot.value = "false";
        }
        
        // If not valid, prevent submission
        if (!isValid) {
          event.preventDefault();
        }
    });

    name.addEventListener('input', () => {
        validateName(name);
    });
    
      // Custom validation for email
    email.addEventListener('input', () => {
        validateEmail(email);
    });
    
      // Custom validation for message
    message.addEventListener('input', () => {
        validateMessage(message);
    });

    function validateName(input) {
        const nameRegex = /^[A-Za-z\s\-']+$/;
        const minLength = parseInt(input.getAttribute('minlength'));
        const maxLength = parseInt(input.getAttribute('maxlength'));
        const value = input.value.trim();
        console.log(value)
        
        // Reset custom validity
        input.setCustomValidity('');
        nameError.textContent = '';
        
        // Check if empty
        if (value === '') {
            input.setCustomValidity('Please enter your name');
            nameError.textContent = 'Name is required';
            return false;
        }
        // Check length
        else if (value.length < minLength) {
            input.setCustomValidity(`Name must be at least ${minLength} characters`);
            nameError.textContent = `Name must be at least ${minLength} characters`;
            return false;
        }
        else if (value.length > maxLength) {
            input.setCustomValidity(`Name must be less than ${maxLength} characters`);
            nameError.textContent = `Name must be less than ${maxLength} characters`;
            return false;
        }
        // Check pattern
        else if (!nameRegex.test(value)) {
            input.setCustomValidity('Name should contain only letters, spaces, hyphens or apostrophes');
            nameError.textContent = 'Please use only letters, spaces, hyphens or apostrophes';
            return false;
        }
        
        return input.checkValidity();
    }

    function validateEmail(input) {
        const value = input.value.trim();
        emailError.textContent = '';
        input.setCustomValidity('');
        
        // Check if empty
        if (value === '') {
          input.setCustomValidity('Please enter your email address');
          emailError.textContent = 'Email is required';
          return false;
        }
        // The pattern attribute handles the email format validation
        else if (!input.checkValidity()) {
          input.setCustomValidity('Please enter a valid email address');
          emailError.textContent = 'Please enter a valid email address';
          return false;
        }
        
        return true;
    }

    function validateMessage(input) {
        const value = input.value.trim();
        const minLength = parseInt(input.getAttribute('minlength'));
        const maxLength = parseInt(input.getAttribute('maxlength'));
        messageError.textContent = '';
        input.setCustomValidity('');
        
        // Check if empty
        if (value === '') {
          input.setCustomValidity('Please enter a message');
          messageError.textContent = 'Message is required';
          return false;
        }
        // Check length
        else if (value.length < minLength) {
          input.setCustomValidity(`Message must be at least ${minLength} characters`);
          messageError.textContent = `Message must be at least ${minLength} characters`;
          return false;
        }
        else if (value.length > maxLength) {
          input.setCustomValidity(`Message must be less than ${maxLength} characters`);
          messageError.textContent = `Message exceeds maximum length of ${maxLength} characters`;
          return false;
        }
        
        return true;
    }

        
})
    

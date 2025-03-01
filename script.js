document.addEventListener('DOMContentLoaded', () => {
    let contactForm = document.getElementById('contact');
    let name = document.getElementById('name');
    let nameError = document.getElementById('error-message');
    let email = document.getElementById('email');
    let emailError = document.getElementById('error-email');
    let message = document.getElementById('message');
    let messageError = document.getElementById('error-message');
    let messageCharCount = document.getElementById('char-count');
    let possibleBot = document.getElementById('possible_bot');

    message.addEventListener('input', () => {
        const length = message.value.length
        messageCharCount.textContent = length
        
    })

        
})
    

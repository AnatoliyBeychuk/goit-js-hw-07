const refValidationInput = document.querySelector('#validation-input');

refValidationInput.addEventListener('blur', (event) =>
{
    event.target.classList.add('invalid');
    const validationClass = event.target.value.length === Number(event.target.dataset.length);
    event.target.classList.replace(validationClass ? 'invalid' : 'valid', 
                                    validationClass ? 'valid' : 'invalid');
});
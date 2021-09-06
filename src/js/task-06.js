const refValidationInput = document.querySelector('#validation-input');
const validationInputLength = refValidationInput.dataset.length;

refValidationInput.addEventListener('blur', (event) =>
{
    event.target.classList.add('invalid');
    const validationClass = event.target.value.length === Number(validationInputLength);
    event.target.classList.replace(validationClass ? 'invalid' : 'valid', 
                                    validationClass ? 'valid' : 'invalid');
});
const refNameInput = document.querySelector('#name-input');
const refNameOutput = document.querySelector('#name-output');


refNameInput.addEventListener('input', (event) => 
{
    refNameOutput.textContent = event.target.value === '' ?
    'незнакомец' : event.target.value;
});
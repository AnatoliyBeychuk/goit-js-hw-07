const refInputSizeControl = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refInputSizeControl.addEventListener('input', (event) =>
{
    refText.style.fontSize = `${event.target.value}px`;
});
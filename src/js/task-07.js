const refInputSizeControl = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

/**
 * Функция изменяет размер текста в зависимости от значения value у inputController
*/
const changeTextSize = function (inputController)
{
    refText.style.fontSize = `${inputController.value}px`;
}

//Задаем начальный размер текста исходя из текущего значения inputController
changeTextSize(refInputSizeControl);

refInputSizeControl.addEventListener('input', (event) =>
{
    changeTextSize(event.target);
});
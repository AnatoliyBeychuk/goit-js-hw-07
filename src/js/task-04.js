let counterValue = 0;
const refValue = document.querySelector('#value');
const refDecrementBtn = document.querySelector('[data-action="decrement"]');
const refIncrementBtn = document.querySelector('[data-action="increment"]');

const increment = function()
{
    counterValue += 1;
    refValue.textContent = counterValue;
}

const decrement = function()
{
    counterValue -= 1;
    refValue.textContent = counterValue;
}

refDecrementBtn.addEventListener('click', decrement);
refIncrementBtn.addEventListener('click', increment);
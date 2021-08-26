const refBoxesContainer = document.querySelector('#boxes');
const refInputNumber = document.querySelector('[type="number"');
const refCreateBtn = document.querySelector('[data-action="render"]');
const refClearBtn = document.querySelector('[data-action="destroy"]');

const createBoxes = function(amount)
{
    const width = 30;
    const height = 30;
    let step = 10;
    const elements = [];
    for(let i = 0; i < amount; i += 1)
    {
        const element = document.createElement('div');
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
        element.style.border = `1px solid lightgray`;
        element.style.background = `#${Math.round(Math.random()*1000)}`;
        if(i > 0)
        {
            element.style.width = `${width + step}px`;
            element.style.height = `${height  + step}px`;
            step += 10;
        }
        elements.push(element);

    }
    refBoxesContainer.append(...elements);
}

refCreateBtn.addEventListener('click', () =>
{
    if(refInputNumber.value && Number(refInputNumber.value))
    createBoxes(Number(refInputNumber.value));
});


refClearBtn.addEventListener('click', () =>
{
    while (refBoxesContainer.lastChild) 
    {
        refBoxesContainer.removeChild(refBoxesContainer.lastChild);
    }
})
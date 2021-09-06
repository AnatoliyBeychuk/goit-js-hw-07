const refBoxesContainer = document.querySelector('#boxes');
const refInputNumber = document.querySelector('[type="number"');
const refCreateBtn = document.querySelector('[data-action="render"]');
const refClearBtn = document.querySelector('[data-action="destroy"]');

const createBoxes = function(amount)
{
    //По дефолту высота и ширина 30px
    let width = 30;
    let height = 30;
    let step = 10;
    //Если в контейнере уже есть элементы, то узнаем высоту и ширину у последнего
    //и уже используем их как стартовые
    if(refBoxesContainer.childElementCount > 0)
    {
        const lastElement = refBoxesContainer.lastChild;
        width = lastElement.clientWidth + step;
        height = lastElement.clientHeight + step;
    }
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
    //Очищаю Input после создания элементов
    refInputNumber.value = '';
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
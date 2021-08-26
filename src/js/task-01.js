const refCategories = document.querySelector('#categories');
console.log(`В списке ${refCategories.children.length} категории.`);

const items = refCategories.querySelectorAll('.item');
items.forEach(item =>
{
    const itemTitle = item.querySelector("h2").textContent;
    const itemCount = item.querySelectorAll("li").length;
    console.log(`Категория: ${itemTitle}`);
    console.log(`Количество элементов: ${itemCount}`);
});
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refIngredients = document.querySelector('#ingredients');

const ingredientsElements = ingredients.map(ingredient => 
{
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
});

refIngredients.append(...ingredientsElements);
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulRef = document.querySelector("ul");

ingredients.forEach.call(ingredients, (element) => {
    const item = document.createElement("li");
    item.textContent = `${element}`;
    ulRef.append(item);
})

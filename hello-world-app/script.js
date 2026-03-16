// Находим нужные элементы на странице по их ID
const helloText = document.getElementById('helloText');
const greenButton = document.getElementById('greenButton');
const orangeButton = document.getElementById('orangeButton');

// Добавляем "слушателей событий" на кнопки.
// Код внутри функции выполнится при клике на соответствующую кнопку.

greenButton.addEventListener('click', function() {
    helloText.style.color = 'lightgreen'; // Изменяем цвет текста на зеленый
});

orangeButton.addEventListener('click', function() {
    helloText.style.color = 'orange'; // Изменяем цвет текста на оранжевый
});
// !=================================================!

// Звертаємось до ід в ul
// const list = document.getElementById('list');
// console.log(list);

// Отрімуємо псевдомассив з усіма дітьми цього елемента
// console.log(list.children);

// Робимо перевірку якщо такого елеманту немає

// if (list) {
//     console.log(list.children);
// } else {
//     console.log('this elemebt doesn`t exis');
// }

// !=================================================!

// * Задачка 1

// * Старим методом
// ~Створи список технологій що вивчаються на курсі fullstack за допомогою js
// Показати як це робиться через map та reduce

// const conteiner = document.getElementById('conteiner');
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// 1. Створити контернер для списку тег ul
// const list = document.createElement('ul');

// 2. Створити цікул для перебіру фрагментів масиву
// for (const technology of technologies) {
// console.log(technology);

// 3. Створити тег li
// const li = document.createElement('li');

// 4. Записати текст з масиву у тег li
// li.textContent = technology;

// 5. Помістити наші li в середину списку ul
//     list.append(li);
// }

// 6. Помістити список ul на сторінку
// conteiner.append(list);

// * Переробимо через метод map
// const list = document.createElement('ul');
// const listContent = technologies
//     .map(technology => `<li>${technology}</li>`)
//     .join('');

// list.insertAdjacentHTML('beforeend', listContent);

// conteiner.append(list);

// * Переробимо через метод reduce
// const listContent = technologies.reduce(
//     (acc, technology) => (acc += `<li>${technology}</li>`),
//     '',
// );
// console.log('🚀 ~ listContent', listContent);

// list.insertAdjacentHTML('beforeend', listContent);

// conteiner.append(list);

// * Трошкі відозмінемо цю задачку

// const listContent = technologies.reduce(
//     (acc, technology) => (acc += `<li>${technology}</li>`),
//     '',
// );

// const list = `<ul>${listContent}</ul>`;

// conteiner.insertAdjacentHTML('beforeend', listContent);

// Якщо контейнер буде через class

// const conteinerEl = document.getElementsByClassName('conteiner');
// const conteinerEl = document.querySelector('.conteiner');
// console.log('🚀 ~ conteinerEl', conteinerEl);

// !=================================================!
// * Задачка 2
// Створи кілька кнопок на основі масива з обєктами використовуючи createElement

// const conteiner = document.getElementById('conteiner');
// const colors = [
//     {
//         label: 'red',
//         color: '#ff0000',
//     },

//     {
//         label: 'green',
//         color: '#00ff00',
//     },

//     {
//         label: 'blue',
//         color: '#0000ff',
//     },

//     {
//         label: 'yellow',
//         color: '#ffff00',
//     },
// ];

// 1. Перебрати массив за допомогою цикла
// colors.forEach(({ label, color }) => {
// 2. Створити кнопку
// const buttonEl = document.createElement('button');

// 3. Задамо кольор фону кнопки
// buttonEl.style.backgroundColor = color;

// Додаємо клас який прописали в scc
// buttonEl.classList.add('indents');

// Можно записати в самому js
// buttonEl.style.margin = '5px';

// 4. Задамо текст кнопки
// buttonEl.textContent = label;

// 5. Додаємо кнопку в документ
//     conteiner.appendChild(buttonEl);
// });

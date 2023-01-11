// !------------!==================!++++++++++++++++!

// const parentDiv = document.getElementById('parentDiv');
// const childA = document.getElementById('childA');

// parentDiv.addEventListener('click', e => {
//     alert('Parent Div');
// });

// childA.addEventListener('click', e => {
//     e.preventDefault();
//     alert('Child A');
// });

// !------------!==================!++++++++++++++++!
// * Зв'язок з Data-atribute

// const text = document.getElementById('text');

// console.log(text.dataset);

// !------------!==================!++++++++++++++++!
// * Pанурення та спливаття
// перебираєм всі елементи з нашої розмітки

// for (let elem of document.querySelectorAll('*')) {
//     elem.addEventListener(
//         'click',
//         e => alert(`Занурення: ${elem.tagName}`),
//         true,
//     );
//     elem.addEventListener('click', e => alert(`Спливання: ${elem.tagName}`));
// }

// !------------!==================!++++++++++++++++!
// * Задачка

//* Створити калькулятор вартості продукту взалежності від ціни. При роботі з подіями
// * використовуючі делегування. Відрендерети всю розмітку через js

//* При змінні данних в інпуті №1 чи №2 автоматично має перерахувати загальну кількість

//* Завжди має відображатися валюта - гривна

//* Загальна сума відображається з копійками (2 знаки після коми)

//* В підписі другого інпута має бути кольорова аісказка скількі кілограм
//* вибрав користувач на другому інпуті

//* В пидписі другого інпута має бути совє значення при перетягуванні

// *В інпуті №2 мін та макс поріг встановлює самостійно

//* При завантажені сторінки скрипт має автоматично розрахувати вартість на остновні
//* даних за замовченням, які ви встановите в розмітці.

// Створюємо обєкт в якому будемо зберігати значення
// const data = {
//     quantity: 0,
//     price: 0,
// Додаємо метод який буде рахувати total
//     calcTotalPrice() {
//         return (this.quantity * this.price).toFixed(2);
//     },
// };

// const mainForm = document.getElementById('form');
// const priceInput = document.getElementById('price');
// const quantityInput = document.getElementById('quantity');
// const amount = document.getElementById('amount');
// const total = document.getElementById('total');

// Виносимо частину коду щоб він записувався від разу
// dataFill();
// displayTotal();

// mainForm.addEventListener('change', handleFormChange);

// function handleFormChange({ target }) {
//     const { value } = target;

// Робимо перевірку якщо зробили зміни в певному інпуті
// if (target === priceInput) {
//     if (!Number(value)) {
//         console.log('Не число');
//         priceInput.classList.add('erorr');
//         return;
//     } else if (Number(value)) {
//         priceInput.classList.remove('erorr');
//     }
// } else if (target === quantityInput) {
//     amount.textContent = value;
// }
// Робимо щоб поля value оновлювалися
// target.setAttribute('value', value);

// Щоб знаяення які ми змінюємо заносились
//     dataFill();
//     displayTotal();
// }

// Створюємо функцію яка буде заносити данні
// function dataFill() {
// Дістаємо значення value які зазанчені за замовченням і дадаємо
// data.quantity = quantityInput.getAttribute('value');

// Дістаємо значення value які зазанчені за замовченням і дадаємо
//     data.price = priceInput.getAttribute('value');
// }

// function displayTotal() {
// Записуємо значення в total
//     total.textContent = data.calcTotalPrice() + 'грн';

// !!!!!!!!!!----------------------========================

// * Бібліотека lodash

// * Метод Throttle через scroll

// const outputScrollStandart = document.getElementById('outputScrollStandart');
// const outputScrollThrottling = document.getElementById(
//     'outputScrollThrottling',
// );

// const eventScrollCounter = {
//     standart: 0,
//     throtted: 0,
// };

// document.addEventListener('scroll', () => {
//     eventScrollCounter.standart += 1;
//     outputScrollStandart.textContent = eventScrollCounter.standart;
// });

// document.addEventListener(
//     'scroll',
//     _.throttle(() => {
//         eventScrollCounter.throtted += 1;
//         outputScrollThrottling.textContent = eventScrollCounter.throtted;
//     }, 1500),
// );

// * Метод Throttle через resize - буде працювати при зміні розміру вікна

// const outputResizeStandart = document.getElementById('outputResizeStandart');
// const outputResizeThrottling = document.getElementById(
//     'outputResizeThrottling',
// );

// const eventResizeCounter = {
//     standart: 0,
//     throtted: 0,
// };

// window.addEventListener('resize', () => {
//     eventResizeCounter.standart += 1;
//     outputResizeStandart.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//     'resize',
//     _.throttle(() => {
//         eventResizeCounter.throtted += 1;
//         outputResizeThrottling.textContent = eventResizeCounter.throtted;
//     }, 1500),
// );

// * Метод Debounce

// const nameInput = document.getElementById('nameImput');

// nameInput.addEventListener(
//     'input',
//     _.debounce(
//         ({ target }) => {
//             console.log(target.value);
//         },
//         1000,
//         {
// Не обов'язкові атрибути але дивлячись який тип буде змінюватись поведінка
// Якщо leading = true він одразу виконує функцію trailing = false
//             leading: true,
//             trailing: false,
//         },
//     ),
// );

// !!!!!!!!!!----------------------========================
// * Вводимо значення в input повинно підсвітити зеленим якщо коректні, червоним якщо ні
// * до 3-х символів це помилка, більше 15-х теж помилка

// const CORRECT_INPUT_LENGTH = {
//     min: 3,
//     max: 15,
// };

// const CLASS_NAMES = {
//     wrong: 'wrong',
//     correct: 'correct',
// };

// const signInForm = document.getElementById('signInForm');

// signInForm.addEventListener(
//     'input',
//     _.debounce(({ target }) => {
//         if (
//             target.value.length < CORRECT_INPUT_LENGTH.min ||
//             target.value.length >= CORRECT_INPUT_LENGTH.max
//         ) {
//             target.classList.add(CLASS_NAMES.wrong);
//             target.classList.remove(CLASS_NAMES.correct);
//         } else {
//             target.classList.add(CLASS_NAMES.correct);
//             target.classList.remove(CLASS_NAMES.wrong);
//         }
//     }, 800),
// );

// !!!!!!!!!!----------------------========================
// * Порівняння двох строк

// const characters = ['%', '$', '*', '!'];

// console.log(isStrHadCapitalLetter('qwerty', 'qwerty'));
// console.log(isStrHadCapitalLetter('qwerty', 'Qwerty'));

// function isStrHadCapitalLetter(str1, str2) {
//     return str1.toLowerCase() !== str2;
// }

// Перевірка символів
// console.log(isStrHasSpecialChr('qwerty')); //false
// console.log(isStrHasSpecialChr('qwe*rty')); //true

// function isStrHasSpecialChr(str) {
//     const charArr = str.split('');

//     for (const char of charArr) {
//         if (characters.includes(char)) return true;
//     }
//     return false;
// }

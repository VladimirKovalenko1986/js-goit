// Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// "Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript, то показуй
// alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const question = prompt('Яка офіційна назва JavaScript?');
// console.log(question);
// const answer = 'ECMAScript';

// if (question.toLowerCase() === answer.toLowerCase()) {
//     alert('Правильно');
// } else {
//     alert('Не знаєте? ECMAScript!');
// }

// Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату "14 г. 26 хв.".Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.",
//     без хвилин.

// const hours = 14;
// const minutes = 26;
// let message = '';

// if (minutes === 0) {
//     message = `${hours} г.`;
// } else {
//     message = `${hours} г. ${minutes} хв.`;
// }
// console.log(message);

// Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число",
// якщо у prompt користувач ввів число більше нуля.Якщо було введено нуль,
// виводь в консоль рядок "Це нуль".Якщо передали від'ємне число, у консолі
// повинен бути рядок "Це негативне число".

// const userInput = +prompt('Введіть число');

// if (userInput > 0) {
//     console.log('Це позитивне число');
// } else if (userInput === 0) {
//     console.log('Це нуль');
// } else if (userInput < 0) {
//     console.log('Це негативне число');
// }

// Example 4 - Вкладені розгалуження

// Напиши скрипт, який порівнює числа у змінних a та b.Якщо обидва значення більше
// 100, то виведи в консоль максимальне з них.В протилежному випадку у консолі повинна
// бути сума значення b та числа 512.

// const a = 220;
// const b = 180;

// if (a > 100 && b > 100) {
// 1 variant

// if (a > b) console.log(a);
// else console.log(b);
// 2 variant

// console.log(Math.max(a, b));

// variant 3
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// }

// Example 11 - Цикл for

// Напиши цикл for, який виводить у консоль браузера числа за
// зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
// 1 variant
// for (let i = min; i <= max; i += 5) {
//     console.log(i);
// }

// 2 variant
// for (let i = min; i <= max; i++) {
//     if (i % 5 === 0) console.log(i);
// }

// Swich

// const userNum = Number(prompt('Enter a number:'));

// switch (userNum) {
//     case 0:
//         console.log('Ви вибрали 0й варіант');
//         break;

//     case 1:
//         console.log('Ви вибрали 1й варіант');
//         break;

//     case 2:
//         console.log('Ви вибрали 2й варіант');
//         break;

//     default:
//         console.log('Такого варіанту не існує');
// }

// Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const userLogin = prompt('Введіть логін');
// console.log(userLogin);

// if (userLogin === 'Адмін') {
//     const password = prompt('Введіть пароль:');
// 1 variant
// if (password === 'Я адмін') console.log('Доброго вечора');
// else console.log('Невірний парол');
//     // 2 variant
//     password === 'Я адмін'
//         ? console.log('Доброго вечора')
//         : console.log('Невірний парол');
// } else if (!userLogin) {
// else if (userLogi === '' || userLogi === null)
// Занадто довга перевірка
//     console.log('Скасовано');
// } else {
//     console.log('Я вас не знаю');
// }

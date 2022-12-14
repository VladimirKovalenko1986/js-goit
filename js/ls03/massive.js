// ! =========================

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг
// з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';

//     let message;

//     if (password === ADMIN_PASSWORD) {
//         message = 'Welcome!';
//     } else {
//         message = 'Access denied, wrong password!';
//     }

//     return message;
// }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';

//     if (password === ADMIN_PASSWORD) {
//         return 'Welcome!';
//     }
//     return 'Access denied, wrong password!';
// }

// ! =========================

// Знайдемо індекус порожніх елементів і додамо їх в змінну indexesOfEmptyElements

// const arr = [1, 2, , 4, , 6];
// const indexesOfEmptyElements = [];

// for (let i = 0; i < arr.length; i += 1) {
//     if (typeof arr[i] === 'undefined') indexesOfEmptyElements.push(i);
// }

// console.log(indexesOfEmptyElements);

// ! ============================

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];

// genres.push('Рок-н-рол');

// console.log(genres);

// console.log(genres[0]);

// const arrLength = genres.length - 1;

// console.log(genres[arrLength]);

// 1 variant
// console.log(genres.shift());

// 2 variant
// console.log(genres.splice(0, 1)[0]);
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// ! ============================

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються
// у змінній values у вигляді рядка.Значення гарантовано розділені пробілом.

// const values = '10 11';

// const valuesArray = values.split(' ');

// console.log(valuesArray);

// console.log(valuesArray[0] * valuesArray[1]);

// ! ============================

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.Для кожного елемента масиву
// виведи в консоль рядок у форматі номер_елемента: значення_елемента.Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

// ! ============================

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namerArray = names.split(',');
// console.log(namerArray);
// const phonesArray = phones.split(',');
// console.log(phonesArray);

// for (const i in namerArray) {
//     console.log(`${namerArray[i]}: ${phonesArray[i]}`);
// }

// ! ============================

// Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.Скрипт повинен працювати для будь - якого рядка.

// const string = 'Welcome to the future dfdfdfd dfddf';
// const stringMassive = string.split(' ');
// console.log(stringMassive);

// console.log(stringMassive.slice(1, stringMassive.length - 1));

// ! ============================

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]);
//     if (numbers[i] < min) min = numbers[i];
// }

// for (const number of numbers) {
//     if (number < min) min = number;
// }
// console.log(min);

// Еще не проходили

// ! ============================

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// 1 variant через метод sort

// const langsSorted = langs.sort();

// console.log(langsSorted);

// 2 Variant метод перебору

// for (const i in langs) {
//     let wasSwap = false;
//     for (let j = 0; j < langs.length - 1 - i; j += 1) {
//         if (langs[j].charCodeAt(0) > langs[j + 1].charCodeAt(0)) {
//             const swap = langs[j];
//             langs[j] = langs[j + 1];
//             langs[j + 1] = swap;
//             wasSwap = true;
//         }
//     }
// }

// console.log(langs);

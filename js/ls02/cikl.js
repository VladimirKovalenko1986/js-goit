// ! =========================

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

// ! =========================

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

// ! =========================

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

// ! =========================

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

// ! =========================

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

// ! =========================

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ.Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (link.endsWith('/')) {
//     link = link;
// } else {
//     link += '/';
// }
// console.log(link);

// ! =========================

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link
// символом /.Якщо ні, додай до кінця значення link цей символ, але тільки
// в тому випадку, якщо в link є підрядок "my-site".Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
// } else {
//     link = link;
// }
// console.log(link);

// ! =========================

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about/';
// if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
// }
// (link.includes('my-site') && !link.endsWith('/')) || link.endsWith('/')
//     ? (link += '/')
//     : link;

// console.log(link);

// ! =========================

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// const hours = 23;

// if (hours < 17) {
//     console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//     console.log('Expires');
// } else {
//     console.log('Overdue');
// }

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// ! =========================

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 10;

// if (daysUntilDeadline === 0) {
//     console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Післязавтра');
// } else {
//     console.log('Дата у майбутньому');
// }

// ! =========================

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }

// switch (daysUntilDeadline) {
//     case 0:
//         cost = 'Сьогодні';
//         break;

//     case 1:
//         cost = 'Завтра';
//         break;

//     case 2:
//         cost = 'Післязавтра';
//         break;

//     default:
//         console.log('Дата у майбутньому');
// }
// console.log(cost);

// ! =========================

// Example 12 - Введення користувача та розгалуж ення

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

// ! =========================

// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей
//     (параметр totalSpent) в магазині за весь час(партнерська програма).Знижка записується у змінну discount
//     і повертається з функції як результат її роботи.

// ! =========================

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT,
//     SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else {
//         discount = GOLD_DISCOUNT;
//     }
//     return discount;
// }

// ! =========================

// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }
//     message =
//         ordered > available
//             ? 'Not enough goods in stock!'
//             : 'The order is accepted, our manager will contact you';

//     // Change code above this line
//     return message;
// }

// ! =========================

// Функція checkPassword(password) порівнює переданий їй пароль(параметр password) зі збереженим
// паролем адміністратора(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
//     message =
//         password === ADMIN_PASSWORD
//             ? 'Access is allowed'
//             : 'Access denied, wrong password!';
//     return message;
// }

// ! =========================

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє
// її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case 'starter':
//             price = 0;
//             break;

//         case 'professional':
//             price = 20;
//             break;

//         case 'organization':
//             price = 50;
//             break;
//     }

//     return price;
// }

// ! =========================

// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з
// паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

// if (password === null) {
//     message = 'Canceled by user!';
// } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
// } else {
//     message = 'Access denied, wrong password!';
// }

//     switch (password) {
//         case null:
//             message = 'Canceled by user!';
//             break;

//         case ADMIN_PASSWORD:
//             message = 'Welcome!';
//             break;

//         default:
//             message = 'Access denied, wrong password!';
//     }
//     return message;
// }

// ! =========================

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача(параметр country)
// і повертати повідомлення про результат, що зберігається у змінній message.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;

//     switch (country) {
//         case 'China':
//             message = 'Shipping to China will cost 100 credits';
//             break;

//         case 'Chile':
//             message = 'Shipping to Chile will cost 250 credits';
//             break;

//         case 'Australia':
//             message = 'Shipping to Australia will cost 170 credits';
//             break;

//         case 'Jamaica':
//             message = 'Shipping to Jamaica will cost 120 credits';
//             break;

//         default:
//             message = 'Sorry, there is no delivery to your country';
//     }
//     return message;
// }

// function getNameLength(name) {
//     message = `Name ${name} is ${name.length} characters long`;
//     return message;
// }

// ! =========================

// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних
// елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// ! =========================

// Функція formatMessage(message, maxLength) приймає рядок(параметр message)
// і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і
// додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length > maxLength) {
//         result = message.slice(message, maxLength) + '...';
//     } else {
//         result = message;
//     }
//     return result;
// }

// ! =========================

// Функція normalizeInput(input) приймає рядок(параметр input) і повертає такий самий
// рядок, але в нижньому регістрі.Присвой змінній normalizedInput вираз створення рядка
// у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();

//     return normalizedInput;
// }

// ! =========================

// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false -
//     результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я (параметр fullname).
// Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена

// function checkForName(fullName, name) {
//     const result = name.includes(name) === fullName.includes(name);
//     return result;
// }

// ! =========================

// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст
// заборонених слів spam і sale, і повертає результат перевірки.Слова в рядку параметра message
// можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//     let result;
//     result =
//         message.toLowerCase().includes('spam') ||
//         message.toLowerCase().includes('sale');
//     return result;
// }

// ! =========================

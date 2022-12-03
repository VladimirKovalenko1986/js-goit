// !=======================================================================!

//  перебрати ключі та елементи ключів через оператор for in

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys, values);

// !=======================================================================!

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = false;

// // console.table(user);

// const userKeys = Object.keys(user);
// console.log(userKeys);

// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`);
// }

// !=======================================================================!

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх
// зарплат і збережіть результат у змінній sum.Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// const salariesArr = Object.values(salaries);
// let sum = 0;

// for (const salary of salariesArr) {
//     // console.log(salary);
//     sum += salary;
// }
// console.log(sum);

// !=======================================================================!

// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та
// рядок з назвою каменю.Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Щебінь'));

// function calcTotalPrice(stones, stoneName) {
//     // 1. Створити змінну в яку ми будемо зберігати суму
//     // 2. Створити цикл for of та пройтись по об'єкту
//     // 3. Вибрати об'єкт у я кого поле name яке співпадає з параметром stone.name
//     // 4. Порахувати totalPrice помноживши ціну на вартість

//     // let totalPrice = 0;

//     for (const stone of stones) {
//         // console.log(stone);

//         if (stone.name === stoneName) {
//             // totalPrice = stone.price * stone.quantity;
//             return stone.price * stone.quantity;
//         }
//     }
//     // return totalPrice;
// }

// !=======================================================================!

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.Є об'єкт account в якому
// необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const transactionTypes = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         // 1. Створює об'єкт транкзакції з полями id, amount, type
//         // 2. Задамо в якості поля id pадамо довжіну транзакції масиву
//         return {
//             id: this.transactions.length,
//             amount,
//             type,
//         };
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         this.balance += amount;

//         const transaction = this.createTransaction(
//             amount,
//             transactionTypes.DEPOSIT,
//         );

//         this.transactions.push(transaction);
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log('Недостатньо коштів');
//             return false;
//         }

//         this.balance -= amount;

//         const transaction = this.createTransaction(
//             amount,
//             transactionTypes.WITHDRAW,
//         );

//         this.transactions.push(transaction);
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (id === transaction.id) return transaction;
//         }
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let tottal = 0;

//         for (const transaction of this.transactions) {
//             if (type === transaction.type) {
//                 tottal += transaction.amount;
//             }
//         }
//         return tottal;
//     },
// };

// account.deposit(500);
// account.deposit(500);

// account.withdraw(200);
// account.deposit(400);
// account.withdraw(300);
// account.withdraw(200);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(1));

// console.log(account.getTransactionTotal(transactionTypes.WITHDRAW));

// console.log(account.getTransactionTotal(transactionTypes.DEPOSIT));

// console.log(account);

// !=======================================================================!

// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));

//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//     calcBMI({
//         weight: '88,3',
//         height: '1.75',
//     }),
// );
// console.log(
//     calcBMI({
//         weight: '68,3',
//         height: '1.65',
//     }),
// );
// console.log(
//     calcBMI({
//         weight: '118,3',
//         height: '1.95',
//     }),
// );

// !=======================================================================!

// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

// !=======================================================================!

// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//     return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//     getBotReport({
//         companyName: 'Cyberdyne Systems',
//         bots: {
//             repair: 150,
//             defence: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// !=======================================================================!

// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та
// stock та виводила репорт про кількість товарів на складі будь - якої компанії.

// Рішення
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// !=======================================================================!

// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
// function createContact(partialContact) {
//     return {
//         list: 'default',
//         ...partialContact,
//         id: generateId(),
//         createdAt: Date.now(),
//     };
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// !=======================================================================!

// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName,
// замість firstName та lastName.

// Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...otherProps,
//     };
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

// !=======================================================================!

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// const ownerName = apObject.keys(artment.o)wner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.length - 1;

// console.log(apartment.tags[lastTag]);

// !=======================================================================!

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Henry Sibola',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment);

// !=======================================================================!

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const keys = [];

// for (const key in apartment) {
//     keys.push(key);
// }
// console.log(keys);

// const values = [];

// for (const value in apartment) {
//     values.push(apartment[value]);
// }
// console.log(values);

// !=======================================================================!

// Виконай рефакторинг рішення попереднього завдання, додавши в
// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// console.log(keys);
// console.log(values);

// !=======================================================================!

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей
// об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей
// об'єкта.

// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {
//         console.log(key);

//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     console.log(propCount);
//     return propCount;
// }

// countProps({ name: 'Mango', age: 2 });

// !=======================================================================!

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в
// масив values всі значення його властивостей.

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     // console.log(key);

//     values.push(apartment[key]);
// }
// console.log(values);

// !=======================================================================!

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//     можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//     let propCount = 0;

//     const keys = Object.keys(object);

//     for (const key of keys) {
//         console.log(key);
//         propCount += 1;
//     }
//     console.log(propCount);
//     return propCount;
// }

// countProps({ name: 'Mango', age: 2 });

// !=======================================================================!

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну
// values - масив всіх значень його властивостей.Використовуй методи Object.keys() і Object.values().

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// !=======================================================================!

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості -
//     це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати
//     загальну суму зарплат співробітників і повернути її.Використовуй змінну totalSalary для
//     зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const keys = Object.values(salaries);

//     for (const key of keys) {
//         console.log(key);
//         totalSalary += key;
//     }
//     console.log(`Total: `, totalSalary);
//     return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// !=======================================================================!

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors
// значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів
// масиву colors.

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     // console.log(color);
//     // console.log(color.hex);
//     // console.log(color.rgb);

//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// !=======================================================================!

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName -
//     назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві
//     products і повертає його ціну(властивість price).Якщо продукт з такою назвою не знайдений,
//     функція повинна повертати null.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// getProductPrice('Radar1');

// function getProductPrice(productName) {
//     let priceProduct = null;

//     for (const product of products) {
//         // console.log(product);

//         if (product.name === productName) {
//             priceProduct = product.price;
//             console.log(priceProduct);
//             return priceProduct;
//         }
//     }
//     console.log(priceProduct);
//     return priceProduct;
// }

// !=======================================================================!

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ)
// властивості.Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного
// об'єкта в масиві products.Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна
// повернути порожній масив.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const velues = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             velues.push(product[propName]);
//         }
//     }
//     console.log(velues);
//     return velues;
// }

// getAllPropValues('name');
// getAllPropValues('quantity');

// !=======================================================================!

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName -
//     назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару з таким
//     ім'ям з масиву products.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let AllTotalPrice = 0;

//     for (const product of products) {
//         // console.log(product.name);

//         if (product.name === productName) {
//             console.log((AllTotalPrice = product.price * product.quantity));
//             return (AllTotalPrice = product.price * product.quantity);
//         }
//     }
//     console.log(AllTotalPrice);
//     return AllTotalPrice;
// }

// calculateTotalPrice('Grip');

// !=======================================================================!

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за
// три дні(meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією
// операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// !=======================================================================!

// У прогнозі максимальних температур також може бути необов'язкова властивість icon -
// іконка погоди.Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією
// деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для
// icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// !=======================================================================!

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією
// операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за
// замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// !=======================================================================!

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// !=======================================================================!

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
// а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації
// властивостей об'єкта forecast.Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon
// - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
// } = forecast;

// !=======================================================================!

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
//     об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією
// операцією деструктуризації властивостей об'єкта forecast.

// function calculateMeanTemperature(forecast) {
//     const {
//         today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// !=======================================================================!

// У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і
// методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був
// найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);

// !=======================================================================!

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати
// тестування окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [
//     ...firstGroupScores,
//     ...secondGroupScores,
//     ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// !=======================================================================!
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
// які зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину
// налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням
// і поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
// !=======================================================================!
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
//     Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що
//     зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//     const dataObject = {
//         completed: false,
//         category: 'General',
//         priority: 'Normal',
//     };
//     return { ...dataObject, ...data };
// }

// !=======================================================================!

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала
// будь - яку кількість аргументів, рахувала і повертала їх суму.

// function add(...args) {
//     let totalElement = 0;

//     for (const element of args) {
//         console.log(element);
//         totalElement += element;
//     }
//     console.log(totalElement);
//     return totalElement;
// }

// add(15, 27);

// !=======================================================================!

// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum()
// таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.Це число
// повинно бути першим параметром функції.

// function addOverNum(fisrtElement, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > fisrtElement) {
//             total += arg;
//         }
//     }
//     console.log(total);
//     return total;
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// !=======================================================================!

// Функція findMatches() приймає довільну кількість аргументів.Першим аргументом завжди буде
// масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть
// тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//     Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2], тому
// що тільки вони є в масиві першого аргументу.

// function findMatches(firstElement, ...restArgs) {
//     const matches = [];

// 1 Variant
// for (const element of firstElement) {
//     // console.log(element);
//     for (const velues of restArgs) {
//         // console.log(velues);

//         if (element === velues) {
//             matches.push(element);
//         }
//     }
// }
// console.log(matches);
// return matches;

// 2 Variant

//     for (const element of firstElement) {
//         // console.log(element);

//         if (restArgs.includes(element)) {
//             matches.push(element);
//         }
//     }
//     console.log(matches);
//     return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// !=======================================================================!

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з
// getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>",
//     де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book
// < стара назва > to < нова назва > ", де <стара назва> і <нова назва> - це значення параметрів oldName
// і newName відповідно.

// const bookShelf = {
//     books: ['The last kingdom', 'The guardian of dreams'],

//     getBooks() {
//         return 'Returning all books';
//     },

//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },

//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },

//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     },
// };

// !=======================================================================!

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з
// oldName на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний
// елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         this.books.splice(this.books.indexOf(oldName), 1, newName);
//     },
// };

// !=======================================================================!

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     },
// };

// !=======================================================================!

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName
// в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
// };

// !=======================================================================!

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName
// з масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     removePotion(potionName) {
//         this.potions.splice(this.potions.indexOf(potionName), 1);
//     },
// };

// !=======================================================================!

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював
// назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     },
// };

// !=======================================================================!

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
// Change code below this line
// getPotions() {
//     return this.potions;
// },
// addPotion(newPotion) {
//     for (const item of this.potions) {
// console.log(item);

// if (newPotion.name === item.name) {
// console.log(
//     `Error! Potion ${newPotion} is already in your inventory!`,
// );
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
// }
// this.potions.push(newPotion);
// if (this.potions.includes(newPotion)) {
//     return `Error! Potion ${newPotion} is already in your inventory!`;
// }
// this.potions.push(newPotion);
// },
// removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//         // console.log(this.potions[i]);
//         const { name } = potions[i];

//         if (potionName === name) {
//             // console.log(i);
//             this.potions.splice(i, 1);
//         }
//     }

// const potionIndex = this.potions.indexOf(potionName);
// if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
// }
// this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//         // console.log(item);

//         if (oldName === item.name) {
//             item.name = newName;
//             console.log(this.potions);
//             return;
//         }
//     }
//     return `Potion ${oldName} is not in inventory!`;
// },

// const potionIndex = this.potions.indexOf(oldName);
// if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
// }
// this.potions.splice(potionIndex, 1, newName);
// Change code above this line
// };

// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 });
// console.table(atTheOldToad.getPotions());
// atTheOldToad.removePotion('Stone skin');
// console.table(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.table(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Stone skin1', 'Invulnerability potion');
// console.table(atTheOldToad.getPotions());

// !=======================================================================!

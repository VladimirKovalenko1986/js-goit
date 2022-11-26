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

// * Колбек функції

// Напишіть наступні функції

// const productsList = [
//     {
//         name: 'Banana',
//         amount: 5,
//         price: 14,
//     },

//     {
//         name: 'Apple',
//         amount: 10,
//         price: 10,
//     },

//     {
//         name: 'Cherry',
//         amount: 15,
//         price: 35,
//     },
// ];

// function createProduct(obj, callback) {
//     obj.id = Date.now();
//     callback(obj);
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice(product) {
//     console.log(product.price * product.amount);
// }

// createProduct(productsList[0], logProduct);
// createProduct(productsList[1], logTotalPrice);

// !==========================================================!

// const Transaction_Limit = 1000;

// const account = {
//     username: 'Alex',
//     balance: 2000,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError('На жаль на вашому балансі недостатньо коштів');
//         } else if (amount > Transaction_Limit) {
//             onError('На жаль, ви перевищили ліміт');
//         } else {
//             this.balance -= amount;
//             onSuccess(`Гроші знято! Поточний баланс: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > Transaction_Limit) {
//             onError('На жаль ви перевищили ліміт');
//         } else if (amount <= 0) {
//             onError('Сума транзакції повинна бути більша нуля');
//         } else {
//             this.balance += amount;
//             onSuccess(
//                 `Гроші покладено на карту! Поточний баланс: ${this.balance}`,
//             );
//         }
//     },
// };

// function handleSuccess(message) {
//     console.log(`Успішна операція ${message}`);
// }

// function handleError(message) {
//     console.log(`Помилка! ${message}`);
// }

// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(1300, handleSuccess, handleError);
// account.withdraw(3000, handleSuccess, handleError);

// account.deposit(5000, handleSuccess, handleError);
// account.deposit(100, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-100, handleSuccess, handleError);

// !==========================================================!

// function each(array, callback) {
// 1 Створити новий пустий масив
// 2 Перебрати масив arrey за допомогою циклу
// 3 На кожному елементі в викликати callback
// 4 Додати модифікаваний ел в новий масив
// 5 Повернення нового масиву

// const modifiedArrey = [];

// array.forEach(el => modifiedArrey.push(callback(el)));

//     for (const el of array) {
//         modifiedArrey.push(callback(el));
//     }

//     return modifiedArrey;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(each(arr, pow));
// console.log(each(arr, addOne));

// function pow(num) {
//     return num ** 2;
// }

// function addOne(num) {
//     return num + 1;
// }

// !==========================================================!

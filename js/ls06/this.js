// !==================!=====================!
//* Методи this

// function foo(num) {
//     console.log('foo:', num);

//     this.count++;
// }

// foo(6);
// foo.count = 0;

// for (let i = 0; i < 5; i += 1) {
//     foo.call(foo, i);
// }
// console.log(foo.count);

// !==================!=====================!
//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву
// каменю і розраховує та повертає загальну вартість каменів з таким
// ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const currentStoun = this.stones.find(
//             stone => stoneName === stone.name,
//         );

//         return currentStoun.price * currentStoun.quantity;
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// !==================!=====================!
//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: phonebook.generateId(),
//             createdAt: phonebook.getDate(),
//         };
//         this.contacts.push(newContact);
//         return this.contacts;
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     },
// };

// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     phonebook.add({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// !==================!=====================!
//* Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//     a: 0,
//     b: 0,

//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     add() {
//         return this.a + this.b;
//     },

//     mult() {
//         return this.a * this.b;
//     },
// };

// calculator.read(3, 5);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// !==================!=====================!

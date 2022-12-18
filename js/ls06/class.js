// Prototipe
//  __proto__

// class User {
//     constructor({ name, age, salary }) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }

//     sayHello() {
//         return `Hello! My name is ${this.name}, I'm ${this.age} yeasr old!`;
//     }
// }

// const user = new User({ name: 'Alex', age: 30, salary: 1500 });

// console.log(user.sayHello());

// console.dir(user);
// console.log(user.prototype);
// console.log(User.prototype);
// console.log(user.__proto__);
// console.log(User.__proto__);

// !===================================================================!

// class Rectangle {
//     constructor(heigth, width) {
//         this.name = 'Ractangle';
//         this.heigth = heigth;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a', this.name + '.');
//     }
//     get area() {
//         return this.heigth * this.width;
//     }
//     set area(value) {
//         this._area = value;
//     }
// }

// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length);
//         this.name = 'Square';
//     }
// }

// const square = new Square(10);

// console.log(square);
// square.sayName();
// console.log(square.area);

// !===================================================================!
//* Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і
// оголошує одну властивість on - стан вкл / викл(true / false).За замовчуванням
// значення властивості on повинно бути false.

// class Toggle {
//     constructor(settings = false) {
// 1 Variant
//         this.on = settings?.isOpen || false;
// 2 Variant ternatniy
// this.on = settings ? settings.isOpen : false;
// }
// 3 Variant
// constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//     }
//     toggle() {
//         this.on = !this.on;
//     }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// !===================================================================!
//* Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority. Додай класу статичну
// властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };

//     static findNoteIndexByText(items, text) {
//         return items.findIndex(note => note.text === text);
//     }

//     constructor(items) {
//         this.items = items;
//     }
//     addNote(nout) {
//         this.items.push(nout);
//     }

//     removeNote(text) {
//         const index = Notes.findNoteIndexByText(this.items, text);
//         this.items.splice(index, 1);
//     }
//     updateNote(text, newPriority) {
//         const index = Notes.findNoteIndexByText(this.items, text);
//         this.items[index].priority = newPriority;
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.table(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// console.table(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.table(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.table(myNotes.items);

// !===================================================================!
// * Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроби через
// гетер та сетер login та email.

// class User {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     set login(login) {
//         this.#login = login;
//     }

//     get login() {
//         return this.#login;
//     }

//     set email(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// console.log(poly.email); // Poly
// poly.email = 'Polycutie121212@';
// console.log(poly.email); // Polycutie121212@

// !===================================================================!
//* Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${ пошта } is ${ вік } years old
// and has ${кількість постів } posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість
// постів, які потрібно додати користувачеві.

// class Blogger {
//     constructor({ email, age, numberOfPosts, topics }) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old
// and has ${this.numberOfPosts} posts.`;
//     }
//     updatePostCount(value) {
//         return (this.numberOfPosts += value);
//     }
// }

// const mango = new Blogger({
//     email: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// !===================================================================!
//* Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return [...this.items];
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         const index = this.items.findIndex(el => el === item);
//         return this.items.splice(index, 1);
//     }
// }
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍇');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// !===================================================================!

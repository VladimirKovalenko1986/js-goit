// !===================================================================!

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

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів
// нашого сервісу доставки їжі.Виконай рефакторинг методів об'єкта customer, розставивши
// відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код
// перевірятимуть тести.Будь ласка, нічого там не змінюй.

// const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// !===================================================================!

// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.Тобі
// необхідно виправити їх, правильно розставивши this в методах об'єкта historyService,
// щоб методи почали працювати правильно.

// const historyService = {
//     orders: [
//         { email: 'jacob@hotmail.com', dish: 'Burrito' },
//         { email: 'solomon@topmail.net', dish: 'Burger' },
//         { email: 'artemis@coldmail.net', dish: 'Pizza' },
//         { email: 'solomon@topmail.net', dish: 'Apple pie' },
//         { email: 'jacob@hotmail.com', dish: 'Taco' },
//     ],
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(' - ');
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
// };

// !===================================================================!

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// !===================================================================!

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor
// був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// !===================================================================!

// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його
// викликати на newPrice.

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }

// !===================================================================!

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// Клас очікує тільки один аргумент - початковий масив товарів, який записується у
// властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items
// об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості
// items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій
// твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         const index = this.items.findIndex(el => el === itemToRemove);
//         return this.items.splice(index, 1);
//     }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// !===================================================================!

// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
// який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості value
// об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості value
// об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення властивості
// value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій
// код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }

//     padEnd(str) {
//         this.value += str;
//     }

//     padStart(str) {
//         this.value = str + this.value;
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// !===================================================================!

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною,
//     і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//     #brand;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getBrand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }

// !===================================================================!

// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// !===================================================================!

// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class StringBuilder {
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// !===================================================================!

// Виконай рефакторинг класу Car.Зроби властивості model і price приватними, а
// також #brand.Стандартизуй публічний інтерфейс класу, замінивши вже оголошені
// методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.model;
//     }

//     set model(newModel) {
//         this.model = newModel;
//     }

//     get price() {
//         return this.price;
//     }

//     set price(newPrice) {
//         this.price = newPrice;
//     }
// }

// !===================================================================!

// Виконай рефакторинг класу Car.Додай публічну статичну властивість MAX_PRICE зі
// значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо
// воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то
// перезаписує ціну автомобіля.

// class Car {
//     static MAX_PRICE = 50000;

//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (Car.MAX_PRICE >= newPrice) {
//             this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// !===================================================================!

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.
// Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds
// the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як
// буде використовуватися метод checkPrice(price).

// class Car {
//     static #MAX_PRICE = 50000;
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return 'Error! Price exceeds the maximum';
//         }
//         return 'Success! Price is within acceptable limits';
//     }

//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// !===================================================================!

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel(рівень доступу), значення якої —
// це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
// }

// !===================================================================!

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань
// з двома властивостями email і accessLevel.Додай класу Admin публічну властивість
// accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра
// під оголошенням класу.

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
//     constructor({ email, accessLevel }) {
//         super(email);

//         this.accessLevel = accessLevel;
//     }
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// !===================================================================!
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес
// користувачів.Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.Метод повинен
// додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.Метод повинен
// перевіряти наявність значення параметра email в масиві, що зберігається у властивості
// blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];

    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        if (this.blacklistedEmails.includes(email)) {
            return true;
        }
        return false;
    }
}

const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true

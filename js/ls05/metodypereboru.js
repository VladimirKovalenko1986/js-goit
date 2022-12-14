//* Sort

// const arr = [1, 4, 5, 7, 12, 54, 22, 6];

// За зростанням
// console.log(arr.sort((a, b) => a - b));

// За спаданням
// console.log(arr.sort((a, b) => b - a));

// !================================================================!
//* reduce

// const arr = [1, 4, 5, 7, 12, 54, 22, 6];

// const arrSum = arr.reduce((acc, el) => acc + el, 0);

// console.log(arrSum);

// !================================================================!
//* Filter

// const arr = ['Katya', 'TARAS', 'nastya', 'aLonYa', 'ALEX', 'BogDan'];

// const filteredArr = arr.filter(el => el === el.toUpperCase());

// console.log(filteredArr);

// !================================================================!
//* Map

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map(el => el ** 2);

// console.log(newArr);

// !================================================================!
// *FlatMap

// const student = [
//     {
//         name: 'Alex',
//         subjects: ['Chemistrey', 'Computer Sience'],
//     },

//     {
//         name: 'Anastasia',
//         subjects: ['PE', 'Physics'],
//     },
// ];

// const subject1 = student.map(el => el.subjects);
// console.log(subject1);

// const subject2 = student.flatMap(el => el.subjects);
// console.log(subject2);

// !================================================================!

const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true,
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true,
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false,
    },
];

// !================================================================!
//* перша задачка на метод Map
// Нехай функція повертаґ масив моделей (поле modcar) всіх моделей

// const getModcars = cars => cars.map(car => car.model);

// console.table(getModcars(cars));

// !================================================================!
//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із
// змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//     cars.map(car => {
//         car.price -= car.price * discount;
//         return car;
//     });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// !================================================================!
//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша
// ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//     cars.filter(car => car.price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// !================================================================!
//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale === true);

// console.table(getCarsWithDiscount(cars));

// !================================================================!
//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
// зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => (car.type === type));

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// !================================================================!
//* Example 6 - Метод find
// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// !================================================================!
//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів
// відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// !================================================================!
//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів
// відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => cars.sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// !================================================================!
//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за
// назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра order.

// const sortByModel = (cars, order) =>
//     cars.sort((a, b) => {
//         switch (order) {
//             case 'asc':
//                 return a.model.localeCompare(b.model);
//             case 'desc':
//                 return b.model.localeCompare(a.model);
//         }
//     });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// !================================================================!
//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів
//     (значення властивостей amount).

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

// !================================================================!
//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
//але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars =>
//     cars.filter(car => car.onSale === true).map(car => car.model);

// console.table(getModelsOnSale(cars));

// !================================================================!
//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars =>
//     cars.filter(car => car.onSale === true).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// !================================================================!
//* Фільтрація подвійна за декільками умовами

// const filteredArr = cars.filter(car => car.amount >= 10 && car.price <= 25000);

// console.table(filteredArr);

// !================================================================!
// * Автоперевірка
// !================================================================!
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром
// (параметр callback) колбек - функцію і повертала її виклик.Функція deliverPizza
// або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци,
// що доставляється.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// !================================================================!
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом
// інлайн колбек - функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// !================================================================!

// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу order
// таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен
// повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza
// with a name < имя пиццы > in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати
// результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         }
//         return onError(
//             `There is no pizza with a name ${pizzaName} in the assortment.`,
//         );
//     },
// };

// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// !================================================================!
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems -
// масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній
// totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (number, index) {
//         totalPrice += number;
//     });

//     console.log(totalPrice);
//     return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// !================================================================!
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає
// новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші
// за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала
// метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//     }
// }

//     numbers.forEach(function (number, index) {
//         if (number > value) filteredNumbers.push(number);
//     });
//     console.log(filteredNumbers);
//     return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);

// !================================================================!
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної
// довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних
// елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (number, index) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     });

// for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//     }
// }
//     console.log(commonElements);
//     return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// !================================================================!
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// !================================================================!
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну
// функцію.Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => {
//         totalPrice += item;
//     });
//     return totalPrice;
// };

// !================================================================!

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//     значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел
// numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven (numbers, value) {
//     const newNumbers = [];

//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newNumbers.push(number + value);
//         } else {
//             newNumbers.push(number);
//         }
//     });
//     return newNumbers;
// };
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//     }
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// !================================================================!
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);

// !================================================================!

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles);

// !================================================================!
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив
//  усіх жанрів книг(властивість genres) з масиву книг books.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism'],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// !================================================================!
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен
// користувачів(властивість name) з масиву об'єктів в параметрі users.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames);

// !================================================================!

// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних
// чисел з масиву numbers, а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// !================================================================!
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг
//     (властивість genres) з масиву books, а у змінній uniqueGenres - масив
//     унікальних жанрів, без повторень.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction', 'mysticism'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism', 'adventure'],
//     },
// ];
// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter(
//     (element, index, array) => array.indexOf(element) === index,
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// !================================================================!
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість
//     rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям
//     (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         rating: 7.94,
//     },
//     {
//         title: 'Enemy of God',
//         author: 'Bernard Cornwell',
//         rating: 8.67,
//     },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.table(topRatedBooks);
// console.table(booksByAuthor);

// !================================================================!
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона
// повертала масив користувачів, у яких колір очей(властивість eyeColor)
// збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) =>
//     users.filter(user => user.eyeColor === color);

// console.table(getUsersWithEyeColor(users, 'blue'));

// !================================================================!
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб
// вона повертала масив користувачів, вік яких(властивість age) потрапляє у
// проміжок від minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter(user => user.age >= minAge && user.age < maxAge);

// !================================================================!
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона
// повертала масив користувачів, у яких є один з ім'ям в параметрі friendName.
// Масив друзів користувача зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));

// !================================================================!
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів
// всіх користувачів(властивість friends).У декількох користувачів можуть бути однакові
// друзі, зроби так, щоб масив, що повертається, не містив повторень.

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];

// const getFriends = users => {
//     const massiveUsersFriends = users.flatMap(user => user.friends);

//     const unicumFriends = massiveUsersFriends.filter(
//         (user, index, array) => array.indexOf(user) === index,
//     );
//     return unicumFriends;
// };

// !================================================================!
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив
// активних користувачів, значення властивості isActive яких - true.

// const getActiveUsers = users => users.filter(user => user.isActive === true);

// !================================================================!
// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив
// неактивних користувачів, значення властивості isActive яких - false.

// const getInactiveUsers = users => users.filter(user => user.isActive !== true);

// !================================================================!
// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title)
// збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author)
// збігається зі значенням змінної AUTHOR.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.table(bookWithTitle);
// console.table(bookByAuthor);

// !================================================================!
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала
// об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// const getUserWithEmail = (users, email) =>
//     users.find(user => user.email === email);

// console.table(getUserWithEmail(users, 'shereeanthony@kog.com'));

// !================================================================!
// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
// !================================================================!
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
//     чи всі користувачі зараз активні(властивість isActive) і повертала true або false.

// const isEveryUserActive = users =>
//     users.every(value => value.isActive === true);

// !================================================================!
// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsEven);

// !================================================================!
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних
// користувачів(властивість isActive) і повертала true або false.

// const isAnyUserActive = users => users.some(user => user.isActive === true);

// !================================================================!
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного
// в іграх.Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний
// ігровий час з масиву playtimes.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes);

// const totalPlayTime = playtimes.reduce((acc, number) => acc + number, 0);
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
// !================================================================!
// Нашому сервісу необхідно розрахувати середній час, проведений в одній
// грі для кожного гравця, і отримати загальну суму цих значень часу.Розрахувати
// час для кожного з гравців можна, розділивши його час(властивість playtime) на
// кількість ігор(властивість gamesPlayed).

// const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//     (acc, player) => acc + player.playtime / player.gamesPlayed,
//     0,
// );
// console.log(totalAveragePlaytimePerGame);

// !================================================================!
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і
// повертала суму всіх коштів(властивість balance), які зберігають користувачі з масиву users.

// const calculateTotalBalance = users =>
//     users.reduce((acc, user) => acc + user.balance, 0);

// console.log(calculateTotalBalance);

// !================================================================!
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала
// загальну кількість друзів(властивість friends) усіх користувачів з масиву users.

// const getTotalFriendCount = users =>
//     users.reduce((acc, user) => acc + user.friends.length, 0);

// !================================================================!
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія
// масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors -
//     копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     'Tanith Lee',
//     'Bernard Cornwell',
//     'Robert Sheckley',
//     'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// !================================================================!
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//     за її зростанням або спаданням.Доповни код таким чином, щоб у змінній
//     ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за
// зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);
// !================================================================!
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в
// алфавітному і зворотному алфавітному порядку.Доповни код таким чином, щоб у
// змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за
// алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному
// алфавітному порядку.

// const authors = [
//     'Tanith Lee',
//     'Bernard Cornwell',
//     'Robert Sheckley',
//     'Fyodor Dostoevsky',
//     'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);
// !================================================================!
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         rating: 7.94,
//     },
//     {
//         title: 'Enemy of God',
//         author: 'Bernard Cornwell',
//         rating: 8.67,
//     },
// ];

// const sortedByAuthorName = [...books].sort((a, b) =>
//     a.author.localeCompare(b.author),
// );
// console.table(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//     b.author.localeCompare(a.author),
// );
// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.table(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.table(sortedByDescentingRating);
// !================================================================!
// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за зростанням їх балансу(властивість balance).

// const sortByAscendingBalance = users =>
//     [...users].sort((a, b) => a.balance - b.balance);
// !================================================================!
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив
// користувачів, відсортований за спаданням кількості їхніх друзів(властивість friends).
// const sortByDescendingFriendCount = users =>
//     [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.table(sortByDescendingFriendCount);
// !================================================================!
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = users =>
//     [...users].sort((a, b) => a.name.localeCompare(b.name));

// !================================================================!
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному
// порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     {
//         title: 'The Dreams in the Witch House',
//         author: 'Howard Lovecraft',
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a, b) => a.localeCompare(b));
// console.log(names);

// !================================================================!
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона
// повертала масив імен користувачів, відсортований за зростанням кількості
// їхніх друзів(властивість friends).

// const getNamesSortedByFriendCount = users =>
//     [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name);
// console.table(getNamesSortedByFriendCount);

// !================================================================!
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив
// унікальних імен друзів(властивість friends), відсортований за алфавітом.

// const getSortedFriends = users =>
//     users
//         .flatMap(user => user.friends)
//         .filter((user, index, array) => array.indexOf(user) === index)
//         .sort((a, b) => a.localeCompare(b));

// !================================================================!
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона
// повертала загальний баланс користувачів(властивість balance), стать яких(властивість gender)
// збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) =>
//     users
//         .filter(user => user.gender === gender)
//         .reduce((acc, user) => acc + user.balance, 0);

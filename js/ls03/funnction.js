// ! ============================

// function addPosition(a, b) {
//     if (a >= 0 && b >= 0) {
//         return a + b;
//     } else {
//         return 0;
//     }
// }
// const sum = addPosition(-1, 5);
// console.log(sum);

// const sum2 = addPosition(sum, 15);
// console.log(sum2);

// ! ============================

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла
// людини.Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.Не цілі числа можуть бути задані у
// вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const str = '88,3';

// Функція яка замінить крапку на кому
// function replaceCommaToDot(string) {
//     return string.replace(',', '.');
// }

// Функція яка зробить округлення після коми на один знак
// function getRoundedNumber(number) {
//     return Number(number.toFixed(1));
// }

// функція calcBMI яка буед вироховувати
// function calcBMI(weight, height) {
//     weight = replaceCommaToDot(weight);
//     height = replaceCommaToDot(height);
//     return getRoundedNumber(weight / height ** 2);
// }

// const bmi = calcBMI('88,3', '1.75');
// const bmy = calcBMI('85,3', '3.75');
// console.log(bmi); // 28.8
// console.log(bmy);

// ! ============================

// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//     let max = numbers[0];
//     for (let number of numbers) {
//         if (number > max) max = number;
//     }
//     return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));

// ! ============================

// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і
// повертає їхнє середнє значення.Усі аргументи будуть лише числами.

// function calAverage() {
//     const numbers = arguments;
//     const numbersAmount = numbers.length;
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum / numbersAmount;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ! ============================

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної
// довжини.Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//     console.log([array[0], array[array.length - 1]]);
//     return [array[0], array[array.length - 1]];
// }

// getExtremeElements([1, 2, 5, 4]);

// ! ============================

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
//     що складається зі слів, розділених лише пробілами(параметр message) та ціну гравірування одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const massiveMassage = message.split(' ').length;
//     console.log(massiveMassage * pricePerWord);
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);

// ! ============================

// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

//     Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна зробити slug з назви статті.
// В результаті адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//     return title.toLowerCase().split(' ').join('-');
// }

// ! ============================

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// ! ============================

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray
// і secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
// В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
// }

// ! ============================

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }
// return += number;

// ! ============================

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// ! ============================

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order -
//     масив чисел, і обчислює загальну суму його елементів.Загальна сума елементів
// повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i += 1) {
//         console.log(order[i]);
//         total += order[i];
//     }
//     console.log('total:', total);
//     return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// ! ============================

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//     const massiveSrtring = string.split(' ');
//     let longWord = massiveSrtring[0];

//     for (let i = 0; i < massiveSrtring.length; i += 1) {
//         if (massiveSrtring[i].length > longWord.length)
//             longWord = massiveSrtring[i];
//     }
//     console.log(longWord);
//     return longWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');

// ! ============================

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     console.log(numbers);
//     return numbers;
// }

// createArrayOfNumbers(1, 3);

// ! ============================

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// function filterArray(numbers, value) {
//     const bigNumbersValue = [];
//     for (let i = 0; i <= numbers.length; i += 1) {
//         console.log(numbers[i]);
//         if (numbers[i] > value) bigNumbersValue.push(numbers[i]);
//     }
//     console.log(bigNumbersValue);
//     return bigNumbersValue;
// }

// filterArray([1, 2, 3, 4, 5, 10, 12], 3);

// ! ============================

// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//     const fruits = ['apple', 'plum', 'pear', 'orange'];

//     for (let i = 0; i < fruits.length; i += 1) {
//         console.log(fruits[i]);
//     }
//     console.log(fruits.includes(fruit));
//     return fruits.includes(fruit);
// }

// checkFruit('peara');

// ! ============================

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//     Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох
// вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і
// повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//     // Створити масив
//     const elmentIdenticalMassive = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         console.log(array1[i]);
//         if (array2.includes(array1[i])) elmentIdenticalMassive.push(array1[i]);
//     }
//     console.log(elmentIdenticalMassive);
// }

// getCommonElements([1, 2, 3, 4], [2, 4]);

// ! ============================

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }

//     return total;
// }

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const lot of order) {
//         total += lot;
//     }
//     console.log(total);
//     return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// ! ============================

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     const number = numbers[i];
//     for (const number of numbers) {
//         console.log(number);
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     console.log(filteredNumbers);
//     return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);

// ! ============================
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// ! ============================

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     const doublNumbers = [];
//     for (let i = start; i <= end; i += 1) {
//         console.log(i);
//         if (i % 2 === 0) doublNumbers.push(i);
//     }
//     console.log(doublNumbers);
//     return doublNumbers;
// }

// getEvenNumbers(2, 5);

// ! ============================

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// ! ============================
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }

//     return i;
// }

// ! ============================

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) -
//     перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//     for (const singl of array) {
//         // console.log(singl);
//         if (singl === value) {
//             console.log(true);
//             return true;
//         }
//     }
//     console.log(false);
//     return false;
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);

// ! ============================

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// функція яка змінить кому на крапку
// function replaceCommaToDo(symbol) {
//     return symbol.replace(',', '.');
// }

// // Функція яка зробить округлення до десятої
// function numberRounding(number) {
//     return Number(number.toFixed(1));
//     // Делаем из строки число
// }

// function calcBMI(weight, height) {
//     weight = replaceCommaToDo(weight);
//     height = replaceCommaToDo(height);
//     return numberRounding(weight / height ** 2);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// ! ============================

// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// ! ============================
// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.Значення гарантовано розділені пробілом.

// функція для переведення в масив
// function repleceMassive(meaning) {
//     return meaning.split(' ');
// }

// function getRectArea(dimensions) {
//     dimensions = repleceMassive(dimensions);
//     return dimensions[0] * dimensions[1];
// }
// console.log(getRectArea('7 22'));

// ! ============================

// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для
// кожного елемента масиву буде виводити в консоль повідомлення у форматі < номер елемента
//     > - <значення елемента >.Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 -
//     Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} позиція: ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ! ============================

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний
// номер користувача.У параметри names та phones будуть передані рядки імен та телефонних номерів,
//     розділені комами.Порядковий номер імен та телефонів у рядках вказують на відповідність.
//     Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     const namesMassive = names.split(',');
//     const phonesMassine = phones.split(',');

//     for (let i = 0; i < namesMassive.length; i += 1) {
//         console.log(`${i + 1} ${namesMassive[i]} - ${phonesMassine[i]}`);
//     }
//     return;
// }

// printContactsInfo(
//     'Jacob,William,Solomon,Artemis',
//     '89001234567,89001112233,890055566377,890055566300',
// );

// ! ============================
// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//     let bigNumberMassive = numbers[0];
//     // console.log(bigNumberMassive);

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > bigNumberMassive) bigNumberMassive = numbers[i];
//     }

//     return bigNumberMassive;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));

// ! ============================

// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає
// їхнє середнє значення.Усі аргументи будуть лише числами.

// function calAverage(...arg) {
//     let total = 0;
//     let totalAverage = 0;
//     for (let i = 0; i < arg.length; i += 1) {
//         // console.log(arg[i]);
//         total += arg[i];
//         totalAverage = total / arg.length;
//     }

//     return totalAverage;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

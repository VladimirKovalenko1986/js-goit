// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді
// рядків(спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
//     тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3';
let height = '1.75';

// 1. Замінити кому на крапку, знайти індекс коми
// 2.Скопіюємо число після коми
// 3. Склеїти частину з другою і поставимо првильний розділювач

// variant 1
// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));

// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// Variant 2
const commaIndex = weight.indexOf(',');
const valueAfterComma = weight.slice(commaIndex + 1);
const valeuBeforeComma = Number.parseInt(weight);

weight = +`${valeuBeforeComma}.${valueAfterComma} `;

const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
console.log(bmi); // 28.8

// console.log(+weight.replace(',', '.'));
// + це пріведення типів тобто Number
// Метод replace міняє один знак на інший

// console.log(Number.parseFloat(weight));

// const bmi = ;
// console.log(bmi); // 28.8

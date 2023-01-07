// !------------!==================!++++++++++++++++!

// const parentDiv = document.getElementById('parentDiv');
// const childA = document.getElementById('childA');

// parentDiv.addEventListener('click', e => {
//     alert('Parent Div');
// });

// childA.addEventListener('click', e => {
//     e.preventDefault();
//     alert('Child A');
// });

// !------------!==================!++++++++++++++++!
// * Зв'язок з Data-atribute

// const text = document.getElementById('text');

// console.log(text.dataset);

// !------------!==================!++++++++++++++++!
// * Pанурення та спливаття
// перебираєм всі елементи з нашої розмітки

// for (let elem of document.querySelectorAll('*')) {
//     elem.addEventListener(
//         'click',
//         e => alert(`Занурення: ${elem.tagName}`),
//         true,
//     );
//     elem.addEventListener('click', e => alert(`Спливання: ${elem.tagName}`));
// }

// !------------!==================!++++++++++++++++!
// * Задачка

//* Створити калькулятор вартості продукту взалежності від ціни. При роботі з подіями
// * використовуючі делегування. Відрендерети всю розмітку через js

//* При змінні данних в інпуті №1 чи №2 автоматично має перерахувати загальну кількість

//* Завжди має відображатися валюта - гривна

//* Загальна сума відображається з копійками (2 знаки після коми)

//* В підписі другого інпута має бути кольорова аісказка скількі кілограм
//* вибрав користувач на другому інпуті

//* В пидписі другого інпута має бути совє значення при перетягуванні

// *В інпуті №2 мін та макс поріг встановлює самостійно

//* При завантажені сторінки скрипт має автоматично розрахувати вартість на остновні
//* даних за замовченням, які ви встановите в розмітці.

// Створюємо обєкт в якому будемо зберігати значення
const data = {
    quantity: 0,
    price: 0,
    // Додаємо метод який буде рахувати total
    calcTotalPrice() {
        return (this.quantity * this.price).toFixed(2);
    },
};

const mainForm = document.getElementById('form');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const amount = document.getElementById('amount');
const total = document.getElementById('total');

// Виносимо частину коду щоб він записувався від разу
dataFill();
displayTotal();

mainForm.addEventListener('change', handleFormChange);

function handleFormChange({ target }) {
    const { value } = target;

    // Робимо перевірку якщо зробили зміни в певному інпуті
    if (target === priceInput) {
        if (!Number(value)) {
            console.log('Не число');
            priceInput.classList.add('erorr');
            return;
        } else if (Number(value)) {
            priceInput.classList.remove('erorr');
        }
    } else if (target === quantityInput) {
        amount.textContent = value;
    }
    // Робимо щоб поля value оновлювалися
    target.setAttribute('value', value);

    // Щоб знаяення які ми змінюємо заносились
    dataFill();
    displayTotal();
}

// Створюємо функцію яка буде заносити данні
function dataFill() {
    // Дістаємо значення value які зазанчені за замовченням і дадаємо
    data.quantity = quantityInput.getAttribute('value');

    // Дістаємо значення value які зазанчені за замовченням і дадаємо
    data.price = priceInput.getAttribute('value');
}

function displayTotal() {
    // Записуємо значення в total
    total.textContent = data.calcTotalPrice() + 'грн';
}

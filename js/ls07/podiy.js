// !========!=========!==========!===========!
// const textEl = document.querySelector('.text');

// const textId = document.getElementById('text');
// textId.style.backgroundColor = 'red';

// const texts = document.getElementsByClassName('text');
// !========!=========!==========!===========!

// * Завдання 1

// 1. Створіть модельне вікно яке буде відкриватися при коіку на кнопку всередині тега body
// Модельне вікно буде закриватися при кліку на надпівпрозорий оверлдей, та на кногпку
// хрестика всередині модалки

// 2. Додати в модалку логіку закриття при натисканні на кнопку escape

const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const openClass = 'open';

openModalBtn.addEventListener('click', handleModalOpen);
overlay.addEventListener('click', handleModalClose);
closeModalBtn.addEventListener('click', handleModalClose);
document.body.addEventListener('keydown', hendleModalCloseOnESC);

// function toggleModal() {
// Метод tagle якщо є клас він його додать якщо ні прібере
//     document.body.classList.toggle(openClass);
// }

function hendleModalCloseOnESC({ key }) {
    if (key === 'Escape') handleModalClose();
}

function handleModalOpen() {
    document.body.classList.add(openClass);
}

function handleModalClose() {
    document.body.classList.remove(openClass);
}

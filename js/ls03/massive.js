// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг
// з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';

//     let message;

//     if (password === ADMIN_PASSWORD) {
//         message = 'Welcome!';
//     } else {
//         message = 'Access denied, wrong password!';
//     }

//     return message;
// }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';

//     if (password === ADMIN_PASSWORD) {
//         return 'Welcome!';
//     }
//     return 'Access denied, wrong password!';
// }

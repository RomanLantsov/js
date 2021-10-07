"use strict";

// let login, password;
// login = prompt("Логин: ");
// if (login === null | login === '') alert("Отменено");
// else if (login.toLowerCase() === "админ" ) {
//   password = prompt("Пароль: ");
//   if (password === null || password ==='') alert("Отменено");
//   else if ((password.toLowerCase() ) === "я главный") alert("Здравствуйте!");
//   else alert("Неверный пароль");
// } else alert("Я вас не знаю");

// for (let index = 2; index <= 10 ; index++) {
//   if (index%2!=0) continue
//   console.log(index)
// }

// let i = 0;
// while(i<3) alert(`number ${i++}`)

// // простые числа!!

// let n = 10000;

// i_cycle: for (let i = 1; i < n; i++) {
//   let j = 1;
//   while (++j < i) if (i % j === 0) continue i_cycle;
//   console.log(i);
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//   case 0:  alert('Вы ввели число 0'); break;
//   case 1:  alert('Вы ввели число 1'); break;
//   case 2: case 3: alert('Вы ввели число 2, а может и 3');
// }

let ask = (header, acceptFunc, cancelFunc) =>
  confirm(header) ? acceptFunc() : cancelFunc();

ask(
  "are u accepte this!?",
  () => alert("Mhahahaaa! Accepted!!!"),
  () => alert("hate u!")
);

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

/*
let ask = (header, acceptFunc, cancelFunc) =>
  confirm(header) ? acceptFunc() : cancelFunc();

ask(
  "are u accepte this!?",
  () => alert("Mhahahaaa! Accepted!!!"),
  () => alert("hate u!")
);
*/

/*
let a = prompt("Введите число");
a = Number(a);
isNaN(a) ? alert("Введено не числовое значение") : alert(2 * a);
*/

// function pow(a, b) {
//   let res = 1;
//   for (let i = 0; i < b; i++) {
//     res *= a;
//   }
//   return res;
// }

// let Student = { name: "John", age: 20, gender: "male" };
// Student.id = "123213";
// alert(Student.id);
// delete Student.id;

/* let user = {
  name: "Джон",
  hi() {
    alert(this.name);
  },
  bye: function bye() {
    alert("bye!");
  },
};

//user.hi(); // Джон (простой вызов метода работает хорошо)
console.log(user.hi);

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!
 */

/* //Логорифмы
 alert(user1.name);
function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  while (--n > 0) x *= x;
  return x;
}

console.log(pow(3, 3));
 */

class user {
  constructor(name) {
    this.name = name;
    this.admin = false;
  }
}

let user1 = new user("John");

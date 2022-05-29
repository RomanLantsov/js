"use strict";

function co(text){
    console.log(text)
}

// alert(confirm("ты занимаешься хуйней?"));
//let inputText = prompt("2Х2=");
/*
if(inputText==4){alert("correct!")} 
else {alert("wrong!")}*/

/*let result = inputText==4 ? alert("correct!") : alert("wrong!");*/

/*
confirm("comtinue?")
&&confirm("and now?")
&&confirm("You shure?")
&&confirm("please! stop it")
&&alert("ok! anough!")
*/

/*
function TRUE_user(user1=null,user2=null,user3=null,user4=null){
    return user1||user2||user3||user4
}

alert(TRUE_user(null,null,"john"))
*/

/* 
let styles  = ['Джаз','Блюз'];
co(styles)

styles.push('Рок-н-ролл');
co(styles)

styles[Math.round ((styles.length-1)/2)] = 'Классика';

co(styles)

co(styles.shift(0));
styles.unshift("Рэп","Рэгги")


co(styles)
let arr = ["a", "b"];

arr.push(function() {
    co( ""+this );
})

arr[2](); */

 
/* function sumInput(){
    
    let arr1 = [];

    for(;;){
        let i=prompt("Веедите число");
        if(i == null || i.trim()=="" || isNaN( +i) ) break;
        arr1.push(+i);
     }
     let summ = 0;
     for (let i of arr1){
        summ += i;
     }

     return summ;

} */
/* 
 let arr1 = ["q","w","e","r","t",]

//delete arr1[2];

arr1.splice(2,2,"w1","w2","w3","w4",)

 co(String(arr1));
 co(String(arr1.slice(2,6)));

 co(String(arr1.concat("|",arr1,"|",arr1.slice(2,6),)))

 //// добавленное в объект свойство Symbol.isConcatSpreadable, делает его конкатенируемым! 
 let obj1 = {
     0:"a",
     1:"b",
     2:"c",
     length: 3,
     [Symbol.isConcatSpreadable]: true
 }

 co(String(arr1.concat("|",obj1)))

let coForEach = (index,number,array)=>co(`${index}\t is on \t [${number}]`);
 arr1.forEach(coForEach) */

 /* let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true,
      toJSON(){return this.isAdmin? "Admin":this.isEditor?"editor":undefined}
    }
  };
let userStringed =  JSON.stringify(user);
  co(userStringed);

 */

  /* let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

co( JSON.stringify(meetup, function replacer(key, value) {
    return value == this? undefined: value => { 
    for (let prop in value){
        

    }

    }
  })); */

/* function spy(func){
  func.calls1 = [];
  return function(...args){
    func.calls1.push(args);
    return func(...args)
  }
}


  function work(a, b) {
    alert( a + b ); // произвольная функция или метод
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  // for (let args of work.calls1) {
  //   co( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  // }
  co( 111) */

/* 

  function f(x,y){
    co(`Hello ! ${x} - ${y}`)
  }

  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 100);
  
  f1000(1,1); // показывает 1
  f1000(2,2); // (ограничение, 1000 мс ещё нет)
  f1000(3,3); // (ограничение, 1000 мс ещё нет)

 

  function throttle(f,ms){
    
    let throttled = false;
    let SavedArgs;
    return function wrapper(...args){
      
      SavedArgs = args;
      if(throttled) return;
      
        throttled = true;
        f(...SavedArgs);

        setTimeout(function () {
          throttled = false;
          if(SavedArgs) {wrapper(...SavedArgs); 
            SavedArgs=null
          };

        },ms); 

  }}
 */


  /* function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user,true), user.login.bind(user,false)); // ? */


/*   let obj1 = {
    name:"Iakov",

  };

  // Object.defineProperty(obj1,'name',{value:'Petr', writable:true, configurable:false});
  // Object.defineProperty(obj1,'age',{ value:23,  enumerable:false, configurable:true });
  Object.defineProperties(obj1,{
    name:{value:'Petr', writable:true, configurable:false},
    age:{ value:23,  enumerable:false, configurable:true }
  });
  co(Object.getOwnPropertyDescriptors(obj1));
obj1.name = 'Iacov';
delete obj1.age;
  co(obj1);
 */
/* 
  let objUser = {
    name:'Grigory',
    surname:'Rasputin',
    get fullName(){
      return `${this.name} ${this.surname}`
    },
    set fullName(val){
      [this.name,this.surname] = val.split(" ");
    }
 };

co(objUser.fullName);
objUser.fullName = "Maoh Dze Dun";
co(objUser.fullName);
 */


/* function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age',{
    get(){
      return new Date().getFullYear() - this.birthday.getFullYear();
    },
     set(val){
      let birthday = new Date();
      birthday.setFullYear(new Date().getFullYear() - val );
      this.birthday = birthday;
    } 
  });
    
}

let john = new User("John", new Date(1992, 6, 1));
co(john.age) ;
co(john.birthday)
john.age = 35;
co(john.age) ;
co(john.birthday) */


/*  function User(name, birthday) {
  let _user = {name,birthday};
  return {
    get name(){ return name},
    set name(val){name = val;},
    get birthday(){ return birthday},
    set birthday(val){birthday = val;}
  }
    
}

let john = new User("John", new Date(1992, 6, 1));
let jill = new User("Jill", new Date(1992, 6, 1));
co(john.name);
co(jill.name);
john.name  = "Pete";
co(john.name);
 */
/* 
let creature = {gender:"male",age:20,
set name(val){
  this._name = val;
},
get name(){return this._name}

};
let human = {
};
let student = {speciality:"programming"};


human.__proto__ = creature;
student.__proto__ = human;

creature.name = "Paul";
human.name = "Igor";
student.name = "John";
human.name = "Steve";
 

co(" - "+ creature.name);
co("   - "+ human.name);
co("     - "+student.name);
co("-----------------");

for(let prop in student){
  if(!student.hasOwnProperty(prop)) continue;
  co(prop);
} */

/* let hamster = {

  eat(food) {
    this.stomach = this.stomach || [];
    this.stomach.push(food);
  }
};

let speedy = {
 
  __proto__: hamster
};

let lazy = {
 
  __proto__: hamster
};
// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("apple");
speedy.eat("apple");
co(`speedy: ${speedy.stomach}`  ); // apple

lazy.eat("apple");
co( `lazy: ${lazy.stomach}`  ); // apple */

/* function Hamster1(...args){
  [this.name, this.age] = args;
  Object.defineProperties(Hamster1.prototype,{
    sayHi:{value:function(){
      co(`hi!!! I'm ${this.name} and i'm ${this.age} years old!`)},
    enumerable:false} 
  });
}

class Hamster2{
  constructor(...args){[this.name, this.age] = args;}
  sayHi(){co(`hi!!! I'm ${this.name} and i'm ${this.age} years old!`)}
}

let joeh = new Hamster1('Joeh',5);
let bill = new Hamster2('Bill0',3);

joeh.sayHi();
bill.sayHi();

co(typeof Hamster1 === typeof Hamster2);

for (let key in joeh) {
  co(`joeh - ${key}`)
}
for (let key in bill) {
  co(`bill - ${key}`)
} */

/* class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays(title = "Сегодняшний дайджест") {
    // помним, что this = Article
    return new this(title, new Date());
  }
  static publisher = "Роман Ланцов"
}

class Note extends Article{

}

let article = Article.createTodays("Новая статья");
co(article);
co(Note); */

/* class Animal   {
  #species = "";
  constructor(species) {
      this.#species = species;
  }
  get species(){return this.#species}
  #getSpecies(){return `${this.#species} :)`}
  getSpecies(){return this.#getSpecies()}

}
 
class Rabbit extends Animal  {
  constructor(species,name) {
    super(species)  
    this.name = name;
  }
}

let cat = new Animal("cat");
let rabbit = new Rabbit("Кроль","Григорий");

 co( rabbit.species  ); // Ошибка
co( rabbit.getSpecies()  ); // Ошибка
co( cat.species  ); // Ошибка
 */
/* 
function findSum(...args){
  if(args.find((val)=>val<0)) return -1;  
  return args.reduce((acc,cur)=> acc+cur,0)
}

co(findSum(1,-2,3,5)) */

// class PowerArray extends Array{
//   isEmpty(){
//     return this.length === 0;
//   }
  
//   //static get [Symbol.species](){return Array}
// }
// let arr1 = new Array(1,2,3,4,5);
// let arr2 = new PowerArray(1,2,3,4,5);
// co(arr1);

// let arr3 = arr2.map((val)=>val*2)
// co(arr3.__proto__.constructor)
// co(arr3.constructor)
// co(Array)
// co(Date)
//  co(arr2 instanceof PowerArray)
//  co(arr2 instanceof Array)
//  co(arr2 instanceof Object)
//  co(arr2.__proto__.toString())

//  let obj1 = {a:1};
//  co(toString.call(obj1))


//  let user = {
//    'login':'',
//    'password':'',
//    'validatePassword': function(){
//      if (this.password.length > 6){
//        return true;
//      }
//      else{
//        return false;
//      }
//    },

//  }

// let user_profile = {
//   "username": '',
//   "photo": '',
//   "age": 0,
//   __proto__: user
// }

class User {
  constructor( login){
     this.login = login;
  }

  #ValidateText = 'Not enough strong password! '

  set password(pass){
     this._password = pass.trim();
     if (!this.validatePassword()){
       alert(this.#ValidateText);
       this._password = undefined;
     }

  }

  get password(){
    return this._password;
  }

 

   validatePassword(){
      if (this._password.length > 6){
       return true;
     }
     else{
       return false;
     }
   }

}

class Student extends User{
  constructor(login,nickname){
    super(login);
    this.nickname = nickname;
  }
  validatePassword(){
    super.validatePassword();
    if (this._password.length > 10){
      return true;
    }
    else{
      return false;
    } 
  }

}



let person1 = new User('ivan');
person1.password = ' 12345 ' 

co(person1);
co(person1.password)
co(person1.test)
let student1 = new Student('Igor', 'megasuperman');
student1.password = '12345678910'


co(student1);

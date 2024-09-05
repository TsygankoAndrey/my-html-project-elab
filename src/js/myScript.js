//вывод в консоль
// console.log('Hello from JS!')

//многострочный комментарий
/*
переменные
для объявления переменной вводим
let userName = "Марк";
*/

/*{
    let userName = "Bob";
    console.log(userName);

    var someNumber = 10;
    console.log(someNumber);
} */

// console.log(userName);
/*console.log(someNumber);
*/

//============ типы переменных ============
// по умолчанию используем const,
// когда явно понятно, что переменная будет менять занчение, тогда let

//============== типы данных ===============
 /*let userName = 'Mark'; // строка - в кавычках - string
 let age = 30; //число - без кавычек - number
 let isMarried = true; //логические значения true/ false - Boolean
 */

 //динамическая типизация
/* let someVariable = 'some value'; //someVariable типа string
 someVariable = 50; //someVariable типа number
 someVariable = true; //someVariable типа Boolean   

 console.log(someVariable);
 */

 /*let age = 32;
 age = null;*/


 //=============операторы сравнения===========
/* >, <, >=, <=
== нестрогое сравнение
=== строгое сравнения
!= нестрогое неравенство
!== строгое неравенство
*/

//=============логические операторы============
/*
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/
 
console.log('5' === 5); //напишет false
console.log('5' == 5); //напишет true


//============= условие ==================

/* 
if (условие) {
    //код который будет выполнен если условие верно
} else {
    //код который будет выполнен если условие НЕ верно
}
*/


//=========== пример с двойным условием ============= 
/* const time = 19;

if (time < 12) {
    console.log('Good morning!');
} else if (time >=12 && time <18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
} */

//=========== пример с тройным условием ============= 
/*

let time = 4;

if (time >3 && time <12 ) {
    console.log('Good morning!'); 
} else if (time >=12 && time <18) {
    console.log('Good afternoon!');
} else if (time >=18 && time <22) {
    console.log('Good evening!');
} else {
    console.log('Good night!');
} */

//========== ТЕРНАРНЫЙ ОПЕРАТОР ===========

// (условие) ? (значение если ИСТИНА) : (занчение если ЛОЖЬ); 

// обычное условие с IF

// if (10 < 12) {
//     console.log('Условие верно');
// } else {
//     console.log('Условие НЕ верно');
// }

// будет выглядеть так в Тернарном операторе:

// (20 < 12) ? console.log('Условие верно') : console.log('Условие НЕ верно');

// еще одни пример:

// let greeting;
// let time = 20;

// if (time < 12) {
//     greeting = 'Good morning!';
// } else {
//     greeting = 'Good afternoon!'
// }

// console.log(greeting);

// в Тернарном операторе будет выглядеть так:

// let time = 10;

// let greeting = time < 12 ? 'Good morning' : 'Good afternoon!';

// console.log(greeting);

//=========== КОНКАТЕНАЦИЯ СТРОК ================

// let greeting = 'Привет, Андрюшка!';
// let howAreYou = ' Как твои дела?';

// let sayHi = greeting + howAreYou; 
// console.log(sayHi);

// // или вариант ДВА (строка + переменная + строка):

// let userName = 'Андрюшка';
// console.log('Привет, ' + userName + '! Как твои дела?');


//============ ШАБЛОННЫЕ СТРОКИ и интерполяция ================
// используем обратные кавычки

// console.log(`Привет, ${userName} ! Как твои дела?`)

// let time = 23;
// let greeting;

// if (time >=3 && time <12) {
//     greeting = 'Good morning!';
// } else if (time >=12 && time <18) {
//     greeting = 'Good afternoon!';
// } else if (time >=18 && time <22) {
//     greeting = 'Good evening!';
// } else {
//     greeting = 'Good night!';
// }

// console.log(greeting);

// то же самое в тернарном коде

// let greeting = time >= 3 && time <12 ? 'Good morning': (time >=12 && time < 18 ? 'Good afternoon!' : (time >=18 && time <22 ? 'Good evening' : 'Goood night'));

// console.log(greeting); 

// let age = 19;

// let result = age >=18 ? 'Вы совершеннолетний' : 'Вы несовршеннолетний';
// console.log(result);

// let result = age >=18 ? 'Вы совершеннолетний' : (age >=13 ? 'Вы подросток' : 'Вы ребенок');
// console.log(result);


//================== ФУНКЦИИ ======================
// DRY - don't repeat yourself


// function sayHi() {
//     console.log('Привет, уважаемый пользователь!');
// }
// sayHi();
// sayHi();

//function declaration
//можно вызвать до объявления

// sayHi();

// function sayHi() {
//     console.log('Hello!');
// }

// sayHi();

//function expression
//можно вызвать только после объявления

// const sayHi = function () {
//     console.log('Hello!');
// }
// sayHi();

//============== ПАРАМЕТРЫ И АРГУМЕНТЫ ДЛЯ ФУНКЦИИ =============

// const userName = 'Andrew';
// console.log('Hello, ' + userName + '! How are you!');
//или так
// console.log(`Hello, ${userName}! How are you?`);

function sayHi(name) {
    console.log(`Hello, ${name}! How are you?`);
}

sayHi('Andrew');
sayHi('Elena');
sayHi('Antony');
sayHi('Dmitry');

//============== ФУНКЦИИ RETURN=============

// function summ(a, b) {
//     const result = a + b;
//     console.log(result);
// } 

// summ(10, 15);

//============== ФУНКЦИЯ КАК АГРУМЕНТ=============
// function summ(a, b, c) {
//     return a + b + c;
// }
// console.log(summ(15, 15, 10));

// let result = summ(summ(15, 15, 10), summ(30, 30, 0), summ(20, 20, 10));
// console.log(result);

// function summ(a, b) {
//     return a + b;
// }

// function doSomething(func) {
//     let result = func(10, 20);
//     console.log(result);
// }

// function diff(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         return "Деление на ноль невозможно";
//     } else {
//         return a / b;
//     }    
// }

// doSomething(summ); //30
// doSomething(diff); //-10
// doSomething(multiply); //200
// doSomething(divide); //0.5

//============= IIFE (самовызывающаяся функция)==============

//обернуть фунцию в выражение =взять в круглые скобки= и запустить это выражение на выполнение =поставить парные круглые скобки в конце

(function sayHi() {
    console.log('Hello dear User!');
}) ();

// (function summ(a, b) {
//     console.log(a + b);
// }) (5, 10);

//======================== JUST PRACTISE ==========================

// function summ(a, b) {
//     let result = a + b;
//     return result;
// } 

// let result = summ(32, 15);
// console.log(result);

// function summ(a, b) {
//     let result = a + b;
//     return result;
// }

// function divide(a,b) {
//     return a / b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function doSomething(func) {
//     let x = 12;
//     let y = 14;
//     let result = func(x, y);
//     console.log(result);
// }

// doSomething(summ);
// doSomething(divide);
// doSomething(multiply);


//============== СТРЕЛОЧНАЯ ФУНКЦИЯ ====================

const summ = (a, b) => a + b;

let res = summ(13,23);
console.log(res);
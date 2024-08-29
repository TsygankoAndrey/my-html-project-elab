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

// (условие) ? (условие верно) : (условие НЕ верно); 

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

let greeting = 'Привет, Андрюшка!';
let howAreYou = ' Как твои дела?';

let sayHi = greeting + howAreYou; 
console.log(sayHi);

// или вариант ДВА (строка + переменная + строка):

let userName = 'Андрюшка';
console.log('Привет, ' + userName + '! Как твои дела?');


//============ ШАБЛОННЫЕ СТРОКИ и интерполяция ================
// используем обратные кавычки

console.log(`Привет, ${userName} ! Как твои дела?`)

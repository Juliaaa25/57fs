// вывод в консоль
// console.log("hello world")

// Создание переменных
// const, let и var

let dog = "Tuzik";
dog = "Sharik";
dog = 35;
// console.log(dog);

let bird;
bird = "Woody";

const car = "opel";
// car = "Tesla";
console.log(car);

var age = 35;

// Примитивные типы данных
//1. string - является примитивом

let str1 = "Можно в двойных";
let str2 = "Можно в одинарных";

let str3 = "13"; // это стринг
let str4 = str1 + " " + str2;
console.log(str1.toUpperCase());
console.log(str4);

// 2.Number
let num1 = 9;
let num2 = 9.6;

// 3. bigInt
let num3 = 1239n; //больший диапозон,чем у number

// 4. Boolean

let isDrunk = false;

// условная конструкция
// if (isDrunk){
//     console.log("Ты пьян");
// }
const result = isDrunk ? "Ты пьян!!" : "Ты трезвый";
console.log(result);

// .5 undefined

let my_name;
console.log(my_name);

// 6. null
// null - отсутствие значения
let empty = null;
console.log(empty);

// .7 symbol
// Новый тип,раньше его не было и сейчас остается малопопулярным
// Используется для создания уникальных значений внутри программы
let s1 = Symbol("something");
console.log(s1);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// неявное преобразование
// 1. Преобразование в строку
let str7 = "" + 9; // '' + '9' = '9'
// явное преобразование
const num4 = 10;
let str8 = String(num4); // '10'

//Пример
const res = 9 + 12 + "5"; // '215'
const res2 = "5" + 9 + 12; // "5" + "9" = "59"+"12" = "5912"

// 2. Преобразование в число неявное
const num5 = +"6"; // 6
const sum = +"9" + +"10"; // 19
console.log(sum);

// Явное преобразование
const num6 = Number("117"); // число 117
const num7 = Number("129&8*#"); // NaN - not a number появляетсся при неудачном преобразовании
// или неудачной математической операции
console.log(typeof str8);

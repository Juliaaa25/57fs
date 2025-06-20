// 1. Деление 100 на остаток от деления 25 на 3
let myNumber = 100 / (25 % 3);
console.log("myNumber:", myNumber);

// 2. Конкатенация строк и числа
let myString = "Hello, " + "world" + "!" + 2024;
console.log("myString:", myString);

// 3. Сравнение числа 42 и строки "42"
let isHuman = 42 == "42";
console.log("isHuman:", isHuman);

// 4. Преобразование строки "123smth" в число
let myNumber2 = parseInt("123smth");
console.log("myNumber2:", myNumber2);

// 1. Создание переменных
let age = 18;
let hasPassport = true;

// 2. Тернарный оператор для проверки условий
let canTravel =
  age >= 18 && hasPassport
    ? "Вы можете путешествовать ✈️"
    : "Путешествие невозможно ❌";

// 3. Вывод результата в консоль
console.log(canTravel);

// 1. Создание переменной со строкой
let inputString = "500€";

// 2. Преобразование строки в число с помощью parseInt
let price = parseInt(inputString);

// 3. Вывод результата в консоль
console.log(price);

// 1. Случайное целое число от 1 до 50
let randomNumber = Math.floor(Math.random() * 50) + 1;

// 2. Вывод randomNumber в консоль
console.log("Случайное число:", randomNumber);

// 3. Проверка на чётность
let isEven = randomNumber % 2 === 0;

// 4. Вывод результата проверки
console.log("Чётное число?", isEven);

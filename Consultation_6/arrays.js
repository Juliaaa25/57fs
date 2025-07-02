const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

// Метод

// слова element/ brother -это всего лишь имя переменной (может быть любым)
// Удобно выбирать слово в единственном числе,
// пример массив cars - переменную в колбеке назвать car

// Пример 4:
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = mrothers.map((brother) => {
  if (brother.height >= 170) {
    return "высокий";
  }
  return "маленький";
});
console.log(sizes);

// Пример 1
//Состарим всех героев на 1 год

brothers.forEach((brother) => (brother.age += 1));
console.log(brothers);
// Метод forEach-  для изменния исходного массива

// iteration -- acc -- current
// 1         -- 0   -- 45
// 2         -- 45  -- 46
// 3         -- 91  -- 110
// 4         -- 201 -- 150
// 5         -- 351 -- 200

// Аккумулятор (accumulator) - значение,
// которое накапливает результат применения функции.
// Текущий элемент массива (currentValue).
// Текущий индекс (currentIndex) элемента в массиве.
// Сам массив (array), к которому применяется метод reduce.
// Функция callback должна возвращать новое значение аккумулятора
// после обработки текущего элемента.

// initialValue (необязательный): Начальное значение аккумулятора.
// Если это значение указано,
//  то оно будет использовано в качестве начального значения аккумулятора
// при первом вызове функции callback.
// Если initialValue не указан, то первый элемент массива станет
// начальным значением аккумулятора.

// Комбинация map+reduce
// общая высота наших героев

const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
const namesArr = str.split(", "); // метод сплит принимает разделитель
console.log(namesArr); // ["Gandalf", "Sauron", "Saruman", "Legolas", "Elrond"]

// Метод join
const newString = namesArr.join("!");
console.log(newString); // Gandalf!Sauron!Saruman!Legolas!Elrond

// Метод find-  возвращает первое совпадение с заданным условием
const person = brothers.find((brother) => brother.race === "human");
console.log(person);

// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет
const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);

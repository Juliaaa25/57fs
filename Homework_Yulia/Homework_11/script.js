const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// 1.1. Создайте массив только с name и isJedi:
function getNameAndJediStatus(heroes) {
  return heroes.map((hero) => ({
    name: hero.name,
    isJedi: hero.isJedi,
  }));
}

console.log("1.1:", getNameAndJediStatus(starWarsHeroes));

// 1.2 Создайте новый массив с джедаями младше 40 лет:
const getYoungJedis = (heroes) =>
  heroes.filter((hero) => hero.isJedi && hero.age < 40);

console.log("1.2:", getYoungJedis(starWarsHeroes));

// 1.3 Посчитайте возраст всех джедаев:
function getTotalJediAge(heroes) {
  return heroes
    .filter((hero) => hero.isJedi)
    .reduce((sum, hero) => sum + hero.age, 0);
}

console.log("1.3:", getTotalJediAge(starWarsHeroes));

// 1.4 Повысьте возраст героев на 10 лет:
const increaseAgeByTen = (heroes) =>
  heroes.map((hero) => ({
    ...hero,
    age: hero.age + 10,
  }));

console.log("1.4:", increaseAgeByTen(starWarsHeroes));

// 1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
function replaceAnakin(heroes) {
  return heroes.map((hero) =>
    hero.name === "Anakin Skywalker"
      ? { name: "Darth Vader", isJedi: false, age: 50 }
      : hero
  );
}

console.log("1.5:", replaceAnakin(starWarsHeroes));

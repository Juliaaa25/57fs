const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// const frodo = brothers[0]
// console.log(frodo);
const [frodo, aragorn, legolas, gymly, gandalf] = brothers;
console.log(legolas);

const ageOfFrodo = frodo.age; // дотавли по ключу
console.log(ageOfFrodo);

const user = { id: 1, email: "user@mail.com", login: "funny_user" };
// const email = user.email;
const { email, id, login } = user;
console.log(email);

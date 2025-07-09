// Promise

// fullfilled
// rejected
// pending

const burgerPromise = new Promise(function (res, rej) {
  setTimeout(() => {
    // res("Burger");
    rej(new Error("Error: No bread!"));
  }, 5000);
});

console.log(burgerPromise); // Promise { <pending> }

// setTimeout(() => {
//   console.log(burgerPromise);
// }, 6000);

// then - можем получить значение без таймера -> fullfilled
// catch - обработать ошибку - в случае reject -> rejected

// Раскрыть промис без сет таймаут
burgerPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err);
  });

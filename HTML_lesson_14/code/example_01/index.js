let x = 12;
console.log(x);

x = 10;
console.log(x);
let myName;

setTimeout(() => {
  console.log("Hello 0 sec");
  myName = "Alisher";
}, 0);

console.log(myName);

// timers
setTimeout(() => {
  console.log("Hello 3 sec");
  console.log("Name: " + myName);
}, 3000);

console.log("Hello, no timer");

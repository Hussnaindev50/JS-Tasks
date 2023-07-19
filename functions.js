//Adding function
function sum(a, b) {
  let sum = a + b;
  console.log(sum);
}
sum(2, 4);
//Subtracting function
function subt(a, b) {
  let subtract = a - b;
  console.log(subtract);
}
subt(12, 4);
//simple program of calculating age in seconds using simple functions
function ageCalSecs(age) {
  let month = 12;
  let days = 365;
  let day = 24;
  let hour = 60;
  let mint = 60;
  let sec = age * days * month * day * hour * mint;
  console.log(`His age is ${age} in years and his age in seconds is ${sec}`);
}
ageCalSecs(24);

// program to show the change in global variable inside a function, it gives value according to functional scope but when check its value outside the function scope it never changes

let subject = "Physics";
//by passing param
function authur(subject) {
  console.log(`The author of ${subject} book is Mickey`);
}
authur("Computer");
console.log(subject);


let book = "Maths";
function authur() {
  //by declaring seperately
  let book = "English";
  console.log(`The author of ${book} book is jamie`);
}
authur();
console.log(book);










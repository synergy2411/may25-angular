// ARROW FUNCTIONS

// function sum(n1, n2) {
//   return n1 + n2;
// }

// let sum = (n1, n2) => n1 + n2;

// console.log("Sum : ", sum(3, 5));

// let square = (n1) => n1 * n1;

// console.log("Square : ", square(4));

// let mul = (n1, n2) => {
//   console.log(n1, n2);
//   return n1 * n2;
// };

// console.log("Multiply : ", mul(4, 5));

// let randomNumber = () => Math.round(Math.random() * 100);
// console.log("Random Number : ", randomNumber());

// LIMITATIONS - Don't have arguments keyword
// let demoFn = () => {
//   console.log(arguments);
// };

// demoFn("test@test.com", 23);

// LIMITATIONS - Can't call with new operator
// Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = this.age;
// }

// let john = new Person("John Doe", 23);

// BLOCK SCOPING - let, const

// function demoFn(args) {
//   if (args.length > 2) {
//     let loading = "LOADING...";
//     console.log(flash); // ?
//   } else {
//     let flash = "FLASHING...";
//   }
// }

// demoFn([2, 3, 4, 5]);

// const USERNAME = "Jenny Doe";

// USERNAME = "John Doe";

// const user = {
//   // x0x9x877
//   name: "John",
// };

// Option 1 - Changing memory address
// user = {         // xxx09876
//   name: "Jenny",
// };

// Option 2 - Changing values inside reference
// user.name = "Jenny";

// console.log(user.name);

// const friends = ["Monica", "Joey", "Ross"];
// friends[1] = "Rachel";
// console.log(friends); // ["Monica", "Rachel", "Ross"]

// friends = [];

// REST OPERATOR (...)
// - creates collection (array)
// - must be last argument in function parameter list

// function demoFn(userEmail, ...args) {
//   console.log(args[1]);
// }

// demoFn("test@test.com");
// demoFn("test@test.com", 23);
// demoFn("test@test.com", 23, true);

// SPREAD OPERATOR (...)
// - spreads the collection

// let numbers = [3, 4, 5];
// let marks = [1, 2, ...numbers, 6, 7, 8];
// console.log(marks);

// let userA = {
//   name: "John",
//   company: "Xyz Inc",
// };

// let userB = {
//   ...userA,
//   name: "Jenny",
// };

// console.log(userB);

// const userC = Object.assign({}, userA);

// console.log("User C :", userC);

// function demoFn(email, age, isAdmin) {
//   console.log(age);
// }

// let user = ["john@test", 23, true];

// demoFn(...user);

// DESTRUCTURING : unpacking the collection
// let employee = {
//   firstName: "Monica",
//   lastName: "Geller",
//   age: 22,
//   address: {
//     city: "Pune",
//     street: "201 Main Road, Wakad",
//   },
// };

// let { age } = employee;

// console.log(age);

// console.log(firstName + " " + lastName);
// console.log(city + " " + street);

// let friends = ["Monica", "Joy", "Ross", "Rachel"];
// let [f1, f3, f4, f2] = friends;

// console.log(f2); // ?

// let employees = [
//   { email: "john@test", salary: 10 },
//   { email: "jenny@test", salary: 12 },
//   { email: "james@test", salary: 14 },
// ];

// let [e1, e2, e3] = employees;

// let { email, salary } = e1;

// let [{ email: e1, salary: s1 }, { email: e2, salary: s2 }, {}] = employees;

// console.log(e2, s2);
// console.log(employees[0].email);

// console.log(emailA, salaryA);

// Swapping two variables value without using third variable
// let x = 10;
// let y = 20;

// [y, x] = [x, y];

// console.log(x, y);

// TEMPLATE LITERALS - back tick (``)
// - Embed variables within strings without concatenation (+)
// - Multiline strings with new line operator (\n)

// let username = "John Doe";
// let userAge = 23;

// let greetings = `Hello from ${username}!

// I'm ${userAge} years old.
// `;

// console.log(greetings);

// DEFAULT PARAMETER
// function demoFn(args = []) {
//   if (args.length > 2) {
//     console.log("Too much value");
//   } else {
//     console.log("Too few values");
//   }
// }

// demoFn();
// demoFn([1, 2, 3, 4]);

// PROMISES

// Producer
function buildPromise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ message: "SUCCESS" });
      reject(new Error("Something went wrong!"));
    }, 1500);
  });

  return promise;
}

// Consumer
// 1. then().catch()
// 2. async...await keywords

function consumePromise() {
  console.log("Start");
  buildPromise()
    .then((response) => {
      console.log("RESPONSE : ", response);
    })
    .catch((err) => console.error(err));
  console.log("End");
}

consumePromise();

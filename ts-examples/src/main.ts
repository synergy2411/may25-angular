// Explicit types
let username: string = "John Doe";

username = "Jenny Doe";

// implicit types - type inference
let marks = 99;

// marks = true;

console.log(marks);

class Student {}

let john: Student = new Student();

let mystryVar: unknown;

mystryVar = "Hello";

if (typeof mystryVar === "string") {
  console.log(mystryVar.toUpperCase());
}

mystryVar = 201;

mystryVar = true;

let anyVar: any;

anyVar = "Hello";

anyVar = 101;

anyVar = true;

let stringVar: string = "";

let numberVar: number = 201;

let booleanVar: boolean = false;

let tupleVar: [string, number] = ["test@test", 23];

let unionType: string | number = 32;

unionType = "Thirty-two";

let user: { firstName: string; lastName: string };

user = {
  firstName: "john",
  // middleName : "",
  lastName: "doe",
};

let friends: Array<string>;

friends = ["Monica", "Joey", "Ross"];

let numbers: number[];

numbers = [99, 98, 97, 100];

let demoFn: () => string;

demoFn = () => {
  return "";
};

// Never return any value
function throwErrorAlways(): never {
  throw new Error("Throwing Error");
}

// Custom Types
type User = {
  email: string;
  age: number;
  isAdmin: boolean;
};

let me: User;

me = {
  email: "test@test",
  age: 21,
  isAdmin: true,
};

interface IEmployee {
  empId: string;
  salary: number;
  name: string;
}

let jenny: IEmployee;

jenny = {
  empId: "e001",
  name: "Jenny Doe",
  salary: 20,
};

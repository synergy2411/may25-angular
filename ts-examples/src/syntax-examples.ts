// // Explicit types
// let username: string = "John Doe";

// username = "Jenny Doe";

// // implicit types - type inference
// let marks = 99;

// // marks = true;

// console.log(marks);

// class Student {}

// let john: Student = new Student();

// let mystryVar: unknown;

// mystryVar = "Hello";

// if (typeof mystryVar === "string") {
//   console.log(mystryVar.toUpperCase());
// }

// mystryVar = 201;

// mystryVar = true;

// let anyVar: any;

// anyVar = "Hello";

// anyVar = 101;

// anyVar = true;

// let stringVar: string = "";

// let numberVar: number = 201;

// let booleanVar: boolean = false;

// let tupleVar: [string, number] = ["test@test", 23];

// let unionType: string | number = 32;

// unionType = "Thirty-two";

// // Custom Object type
// let user: { firstName: string; lastName: string };

// user = {
//   firstName: "john",
//   // middleName : "",
//   lastName: "doe",
// };

// Custom Array Type
// let friends: Array<string>;

// friends = ["Monica", "Joey", "Ross"];

// let numbers: number[];

// numbers = [99, 98, 97, 100];

// Function Type
// let demoFn: () => string;

// demoFn = () => {
//   return "";
// };

// // Never - never returns any value
// function throwErrorAlways(): never {
//   throw new Error("Throwing Error");
// }

// Custom Types
// type User = {
//   email: string;
//   age: number;
//   isAdmin: boolean;
// };

// let me: User;

// me = {
//   email: "test@test",
//   age: 21,
//   isAdmin: true,
// };

// interface IEmployee {
//   empId: string;
//   salary: number;
//   name: string;
// }

// let jenny: IEmployee;

// jenny = {
//   empId: "e001",
//   name: "Jenny Doe",
//   salary: 20,
// };

// Classes in TypeScript

export interface IAnimal {
  species: string;
  legs: number;
}

export class Animal {
  // private species: string;
  // private legs: number;

  constructor(private animal: IAnimal) {
    // constructor(private species: string, private legs: number) {
    // this.species = species;
    // this.legs = legs;
  }

  getDetails(): string {
    return `${this.animal.species} does have ${this.animal.legs} legs.`;
  }
}

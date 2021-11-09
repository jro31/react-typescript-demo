// Primitives: number, string, boolean (and null and undefined)
// More complex types: arrays, objects
// Function types, parameters

// Primitives
// Alternatively 'let age: number = 24;' to set a value
let age: number;
age = 12;

let userName: string;
userName = 'Jethro';

let isGod: boolean;
isGod = true;

// More complex types
let hobbies: string[]; // For an array of strings
hobbies = ['sitting', 'eating'];

let person: {
  name: string;
  age: number;
}; // Requires 'person' to be an object with 'name: string' and 'age: number' properties. Both properties MUST be present (although setting them to null/undefined seems to be ok). It cannot have any other properties.
person = {
  name: 'Jethro',
  age: 21,
};

let people: {
  name: string;
  age: number;
}[]; // Requires an array of objects
people = []; // Is ok
people = [{ name: 'Jethro', age: 19 }]; // Is ok
// 'people = [{}]' is not ok

// Type inference
let course = 'React - The Complete guide'; // Is equivalent to 'let course: string = 'React - The Complete guide'' - Because you didn't set a type, it infers the type 'string' from the value
// 'course = 123;' is not ok

let magic;
magic = 'Magic';
magic = 1234;
// This seems to be ok though

// Union types
let unionType: string | number = "I'm a union type";
unionType = 123; // Is ok
// unionType = true; is not ok

// Type aliases
// 'type' is a typescript keyword (it's not used in javascript). This function wouldn't appear in the final compiled javascript.
type dogType = {
  breed: string;
  age: number;
};

let dog: dogType;
dog = {
  breed: 'Border terrier',
  age: 20,
};

let dogs: dogType[];
dogs = [
  {
    breed: 'Border terrier',
    age: 20,
  },
  {
    breed: 'Flat-coated retriever',
    age: 32,
  },
];

// Functions and types
// Typescript infers the return type (it gets this by looking at the parameters both being numbers, so knows that the return should be a number)
// Therefore it is usually not necessary to state the return type. However, to do so, the syntax is:
function add(a: number, b: number): number {
  return a + b;
}

// The return type for a function that doesn't return anything is 'void', for example 'function printOutput(value: any): void'
function printOutput(value: any) {
  console.log(value);
}

// Generics
// The problem:
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [2, 3, 4];
const updatedArray = insertAtBeginning(demoArray, 1); // returns [1, 2, 3, 4]
// Because we set the parameter as 'array: any[]', the return from 'insertAtBeginning' can be an array of any type ('any[]'), therefore 'updatedArray' is type 'any[]'
// We cannot change the parameter to be 'array: number[]', because this function should be able to take all data types
// So 'updatedArray' cannot benefit from using Typescript

// The solution:
// The 'T' stands for 'type'
function insertAtBeginningTwo<T>(array: T[], value: T) {
  // This says that the values in 'array', and the value 'value' should be the same
  const newArray = [value, ...array];
  return newArray;
}
const demoArrayTwo = [2, 3, 4];
const updatedArrayTwo = insertAtBeginningTwo(demoArrayTwo, 1); // Typescript looks at 'demoArrayTwo' and '1' both being numbers, and infers that 'updatedArrayTwo' should be an array of numbers
const updatedArrayThree = insertAtBeginningTwo(['b', 'c', 'd'], 'a'); // Typescript also knows that this should be an array of strings ('string[]')

// Notes
let anyType; // Without setting the type, the default is 'any'. Equivalent to 'let anyType: any'
let newObject: {}; // This does not set newObject as an empty object (such as 'let newObject = {}' would); this just sets the 'type' as an object

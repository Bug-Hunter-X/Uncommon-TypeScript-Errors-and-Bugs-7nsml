function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

console.log(result1, result2); // Output: 8 5

// Type narrowing issue with optional parameters:

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}, you are ${age} years old!`;
  } else {
    return `Hello, ${name}!`;
  }
}

const greeting1 = greet("Alice", 30); // greeting1 is a string
const greeting2 = greet("Bob"); // greeting2 is a string

console.log(greeting1, greeting2); // Output: Hello, Alice, you are 30 years old! Hello, Bob!

// Type assertion:
let message: any = "Hello";
let upperMessage: string = <string>message.toUpperCase(); // Type assertion is not always safe!

console.log(upperMessage); // Output: HELLO

// Incorrect usage of generics:
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(5); // num is 5
const str = identity<string>("hello"); // str is "hello"

// Type compatibility issues:
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let person: Person = { name: "John", age: 30 };
let employee: Employee = { name: "Jane", age: 25, employeeId: 123 };

// person = employee; // This is allowed
// employee = person; // This is NOT allowed

// Control Flow Analysis:
function checkNumber(num: number | string): number {
  if (typeof num === 'number') {
    return num * 2; // Correct usage of Type Guard
  } else {
    return parseInt(num) * 2; // Possible runtime error if num is not a parsable string
  }
}

console.log(checkNumber(5)); // Output: 10
console.log(checkNumber("5")); // Output: 10
console.log(checkNumber("hello")); // Output: NaN

// Unintentional Type Coercion: 
let x: number = 5;
let y: string = "5";
console.log(x == y); // Output: true (loose comparison)
console.log(x === y); // Output: false (strict comparison)

// Type narrowing with optional parameters:
function greet(name: string, age?: number): string {
  return age !== undefined ? `Hello, ${name}, you are ${age} years old!` : `Hello, ${name}!`;
}

// Safer type assertion (use as a last resort and with caution):
let message: any = "Hello";
let upperMessage: string = message.toUpperCase() as string; 

// Correct usage of generics (avoiding implicit type any):
function identity<T>(arg: T): T {
  return arg;
}

// Type compatibility handling (using type guards):
function isEmployee(person: Person | Employee): person is Employee {
  return (person as Employee).employeeId !== undefined;
}

let person: Person = { name: "John", age: 30 };
let employee: Employee = { name: "Jane", age: 25, employeeId: 123 };

if (isEmployee(employee)) {
  console.log(employee.employeeId); // Access employeeId safely
}

// Improved control flow analysis (using Type Guard and null check):
function checkNumber(num: number | string): number {
  if (typeof num === 'number') {
    return num * 2;
  } else if (typeof num === 'string' && !isNaN(parseInt(num))) {
    return parseInt(num) * 2;
  } else {
    return 0; // Handle non-numeric strings appropriately
  }
}

// Avoid unintentional type coercion using strict equality:
let x: number = 5;
let y: string = "5";
console.log(x == y); // Output: true (loose comparison)
console.log(x === y); // Output: false (strict comparison)

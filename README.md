# Uncommon TypeScript Errors and Bugs

This repository demonstrates several uncommon errors and subtle bugs that can arise in TypeScript code.  It's designed to help developers understand these issues and avoid them in their own projects.

## Examples:

The `bug.ts` file contains examples showcasing different types of TypeScript errors and unexpected behaviors, including:

* **Type narrowing issues with optional parameters:** Incorrect handling of optional parameters can lead to runtime errors or unexpected type behavior.
* **Type assertion pitfalls:** While type assertions can be useful, they can also bypass TypeScript's type checking and lead to runtime errors if not used carefully.
* **Incorrect usage of generics:**  Misuse of generics can cause type errors or unexpected behavior.
* **Type compatibility issues:** Understanding type compatibility between interfaces and classes is crucial for avoiding errors.
* **Control flow analysis:** Issues with type guards and how TypeScript infers types during control flow.
* **Unintentional type coercion:** Loose comparisons can lead to unexpected results.

The `bugSolution.ts` provides solutions or safer alternatives for each of the example bugs shown in `bug.ts`.  It demonstrates how to address the issues using TypeScript's features effectively and prevent unexpected behavior.

## How to Use:

1. Clone the repository.
2. Run `tsc bug.ts` to see the TypeScript compiler errors (if any).
3. Run `tsc bugSolution.ts` to see the corrected code compile successfully.
4. Compare the `bug.ts` and `bugSolution.ts` files to understand how the errors were addressed.

This repository serves as a learning resource to improve your understanding of TypeScript and to help you write more robust and error-free code.
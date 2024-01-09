/*In JavaScript, the rest and spread operators are both denoted by three dots (...), but they are used in different contexts and serve different purposes.

1) Rest Operator (...):

The rest operator is used in function parameters to collect all the remaining arguments into a single array.

It allows a function to accept any number of arguments, making it flexible in terms of the number of parameters.

Example: */

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/*

2) Spread Operator (...):

The spread operator, when used outside of a function parameter context, is used to spread elements of an array or object into another array or object.

It allows you to copy the elements of an array or properties of an object into another array or object.

Example with arrays:

javascript */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

/*Example with objects:*/

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

//It's worth noting that while the rest operator collects items into an array, the spread operator spreads items out of an array or object.

//In summary, the rest operator is used in function parameters to collect arguments into an array, while the spread operator is used to spread elements of an array or properties of an object into another array or object.







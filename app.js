import multiply, { add, subtract, addAndUppercase } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arraymodule.js';

console.log('Add:', add(5, 3)); 
console.log('Subtract:', subtract(12, 4)); 
console.log('Multiply:', multiply(2, 3)); 

addAndUppercase(10, 20); 

console.log('Uppercase:', toUpperCase('hello')); 
console.log('Lowercase:', toLowerCase('Hi')); 

console.log('Max:', findMax([1, 2, 3, 4, 5])); 
console.log('Reversed:', reverseArray([1, 2, 3])); 



function processArray(arr, multiplier) {
    const maxNumber = findMax(arr); 
    const multipliedValue = multiply(maxNumber, multiplier); 
    return toUpperCase(multipliedValue.toString());
}
const numbers = [20, 10, 15, 40, 25]; 
const multiplier = 2;

console.log("Final Result:", processArray(numbers, multiplier));






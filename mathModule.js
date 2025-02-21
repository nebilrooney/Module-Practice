import { toUpperCase } from './stringModule.js';

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

export function addAndUppercase(a, b) {
    const sum = add(a, b); // Get the sum
    const result = toUpperCase(sum.toString()); 
    console.log('Uppercase Sum:', result); 
}

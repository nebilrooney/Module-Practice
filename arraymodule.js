export function findMax(arr) {
    if (arr.length === 0) return undefined; 
    return Math.max(...arr);
}

export function reverseArray(arr) {
    return [...arr].reverse(); 
}

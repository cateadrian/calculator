function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

 
// Test cases
console.log(add(1,2)); // 3 
console.log(add(0,0)); // 0

console.log(subtract(4,2)); // 2
console.log(subtract (5,10)); // -5

console.log(multiply(1,2)); // 2
console.log(multiply(10,0)); // 0

console.log(divide(2,0)); // Infinity
console.log(divide (16,4)); // 4
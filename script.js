let firstNum = 0;
let secondNum = 0;
let operator = "";

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

function operate(firstNum, secondNum, operator){
    switch (operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    };
}

// Test cases
console.log(operate(1,2, "+")); // 3 
console.log(operate(0,0, "+")); // 0
console.log(operate(4,2, "-")); // 2
console.log(operate(5,10, "-")); // -5
console.log(operate(1,2, "*")); // 2
console.log(operate(10,0, "*")); // 0
console.log(operate(2,0, "/")); // Infinity
console.log(operate(16,4, "/")); // 4
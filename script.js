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

let displayValue = "";

function populateDisplay(targetId){
    switch(targetId){
        case "oneBtn":
            display.textContent += "1"; 
            return "1";
        case "twoBtn":
            display.textContent += "2";
            return "2";
        case "threeBtn":
            display.textContent += "3";
            return "3";
        case "fourBtn":
            display.textContent += "4";
            return "4";
        case "fiveBtn":
            display.textContent += "5";
            return "5";
        case "sixBtn":
            display.textContent += "6";
            return "6";
        case "sevenBtn":
            display.textContent += "7";
            return "7";
        case "eightBtn":
            display.textContent += "8";
            return "8";
        case "nineBtn":
            display.textContent += "9";
            return "9";
        case "zeroBtn":
            display.textContent += "0";
            return "0";
        case "plusBtn":
            display.textContent += " + ";
            return " + ";
        case "minusBtn":
            display.textContent += " - ";
            return " - ";
        case "multiplyBtn":
            display.textContent += " * ";
            return " * ";
        case "divideBtn":
            display.textContent += " / ";
            return " / ";  
    };
}

const buttons = document.querySelector(".buttons");
const display = document.querySelector("#textField");
buttons.addEventListener("click", (e) => {
    let target = e.target;
    displayValue += populateDisplay(target.id);
    //console.log(displayValue);
});


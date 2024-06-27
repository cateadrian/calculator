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

let displayValue = [];

function populateDisplay(targetId){
    switch(targetId){
        case "oneBtn":
            display.textContent += "1"; 
            displayValue.push("1");
            break;
        case "twoBtn":
            display.textContent += "2";
            displayValue.push("2");
            break;
        case "threeBtn":
            display.textContent += "3";
            displayValue.push("3");
            break;
        case "fourBtn":
            display.textContent += "4";
            displayValue.push("4");
            break;
        case "fiveBtn":
            display.textContent += "5";
            displayValue.push("5");
            break;
        case "sixBtn":
            display.textContent += "6";
            displayValue.push("6");
            break;
        case "sevenBtn":
            display.textContent += "7";
            displayValue.push("7");
            break;
        case "eightBtn":
            display.textContent += "8";
            displayValue.push("8");
            break;
        case "nineBtn":
            display.textContent += "9";
            displayValue.push("9");
            break;
        case "zeroBtn":
            display.textContent += "0";
            displayValue.push("0");
            break;
        case "plusBtn":
            display.textContent += " + ";
            displayValue.push("+");
            break;
        case "minusBtn":
            display.textContent += " - ";
            displayValue.push("-");
            break;
        case "multiplyBtn":
            display.textContent += " * ";
            displayValue.push("*");
            break;
        case "divideBtn":
            display.textContent += " / ";
            displayValue.push("/");
            break;
    };
}

const buttons = document.querySelector(".buttons");
const display = document.querySelector("#textField");
buttons.addEventListener("click", (e) => {
    let target = e.target;
    populateDisplay(target.id);
    console.log(displayValue);
});


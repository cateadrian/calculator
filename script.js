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

const numbers = document.querySelector(".numberBtns");
const display = document.querySelector("#textField");
numbers.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "oneBtn":
            display.textContent += "1"; 
            displayValue += "1";
            break;
        case "twoBtn":
            display.textContent += "2";
            displayValue += "2";
            break;
        case "threeBtn":
            display.textContent += "3";
            displayValue += "3";
            break;
        case "fourBtn":
            display.textContent += "4";
            displayValue += "4";
            break;
        case "fiveBtn":
            display.textContent += "5";
            displayValue += "5";
            break;
        case "sixBtn":
            display.textContent += "6";
            displayValue += "6";
            break;
        case "sevenBtn":
            display.textContent += "7";
            displayValue += "7";
            break;
        case "eightBtn":
            display.textContent += "8";
            displayValue += "8";
            break;
        case "nineBtn":
            display.textContent += "9";
            displayValue += "9";
            break;
        case "zeroBtn":
            display.textContent += "0";
            displayValue += "0";
            break;
    };
    //console.log(displayValue);
})

const operatorBtns = document.querySelector(".operatorBtns");


function populateDisplay(){

}
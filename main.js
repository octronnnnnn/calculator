let currentNum = "";
let previousNum = "";
let operator = "";
let step = 0;
let result ="";

// reference all components
document.addEventListener("DOMContentLoaded", () => {
    let calculationDisplay = document.querySelector("#calculation");
    let outcomeDisplay = document.querySelector("#outcome");
    const numberBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator");
    const clearBtn = document.querySelector("#clear");
    const decimalBtn = document.querySelector("#decimal");
    const deleteBtn = document.querySelector("#delete");
    const equalBtn = document.querySelector("#equal");

    // add event listeners
    window.addEventListener("keydown", handleKeyPress);

    numberBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            handleNumber(e.target.textContent);
        })
    })

    operatorBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            handleOperator(e.target.textContent);
        })
    })

    equalBtn.addEventListener("click", compute)

    clearBtn.addEventListener("click", clearAll)

    deleteBtn.addEventListener("click", deleteLastEntry)

    decimalBtn.addEventListener("click", appendDecimal)

    // functions
    function handleNumber(n) {
        if (step === 0) {
            outcomeDisplay.textContent = "";
            currentNum = "";
            previousNum = "";
        }
        if (outcomeDisplay.textContent.length <= 15) {
            step = 1;
            currentNum += n;
            outcomeDisplay.textContent = currentNum; 
        }       
    }

    function handleOperator(op) {  
        if (previousNum !== "" && currentNum !== "") {
            return;
        }
        if (step === 0 && op === "×" && currentNum === "" ||
        step === 0 && op === "÷" && currentNum === "" ||
        step === 0 && op === "+" && currentNum === "") {
            return;
        }
        else if (step === 0 && op === "-" && currentNum === "") {
            operator = op;
            currentNum = op;
            outcomeDisplay.textContent = currentNum;
            step = 2;
        }  
        else if (step !== 2) {
            step = 2;
            operator = op;
            previousNum = currentNum;
            calculationDisplay.textContent = outcomeDisplay.textContent;
            calculationDisplay.textContent += ` ${operator}`;
            outcomeDisplay.textContent = "";
            currentNum = "";
        }
    }

    function compute() {
        if (step === 0 && previousNum === "" || step === 1 && previousNum === "" || previousNum !== "" && step === 2) {
            return;
        }
        else {
            if (operator === "÷" && currentNum <= "0") {
                clearAll();
                outcomeDisplay.textContent = "Can't divide by 0!"
                return;
            }
            calculate(operator, previousNum, currentNum);
            result = round(result);
            if (result.length <= 12) {
                outcomeDisplay.textContent = result;
            }
            else {
                outcomeDisplay.textContent = result.slice(0, 15) + "...";
            }
            
            calculationDisplay.textContent = "";
            currentNum = result;
            previousNum = "";
            step = 0;
        }
    }

    function clearAll() {
        currentNum = "";
        previousNum = "";
        operator = "";
        step = 0;
        result ="";
        calculationDisplay.textContent = "";
        outcomeDisplay.textContent = "";
    }

    function deleteLastEntry() {
        if(outcomeDisplay.textContent !== "") {
            currentNum = currentNum.slice(0, -1);
            outcomeDisplay.textContent = outcomeDisplay.textContent.slice(0, -1);
        }
    }

    function appendDecimal() {
        if (step === 1 && !outcomeDisplay.textContent.includes(".")) {
            outcomeDisplay.textContent += ".";
            currentNum += ".";
        }
    }

    function calculate(operator, a, b) {
        a = Number(a);
        b = Number(b);
        switch (operator) {
            case "+":
                result = add(a, b);
                break;
            case "-":
                result = subtract(a, b);
                break;
            case "×":
                result = multiply(a, b);
                break;
            case "÷":
                result = divide(a, b);
                break; 
            default:
                return;
        }
    }

    function round(n) {
        n = parseFloat(n).toFixed(2);
        return n;
    }

    function handleKeyPress(e) {
        e.preventDefault();
        if (e.key >= 0 && e.key <= 9) {
            handleNumber(e.key);
        }
        if (
            e.key === "Enter" ||
            (e.key === "=" && currentNum != "" && previousNum != "")
        ) {
            compute();
        }
        if (e.key === "+" || e.key === "-") {
            handleOperator(e.key);
        }
        if (e.key === "*") {
            handleOperator("×");
        }
        if (e.key === "/") {
            handleOperator("÷");
        }
        if (e.key === ",") {
            appendDecimal();
        }
        if (e.key === "Backspace") {
            deleteLastEntry();
        }
    }
    
    // math
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    } 
    
    function multiply(a, b) {
        return a * b;
    }
    
    function divide(a, b) {
        return a / b;
    }
}) 
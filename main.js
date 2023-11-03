    let currentNum = "";
    let previousNum = "";
    let operator = "";
    let step = 0;
    let result ="";

    // reference all components
    let calculationDisplay = document.querySelector("#calculation");
    let outcomeDisplay = document.querySelector("#outcome");
    const numberBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator");
    const clearBtn = document.querySelector("#clear");
    const decimalBtn = document.querySelector("#decimal");
    const deleteBtn = document.querySelector("#delete");
    const equalBtn = document.querySelector("#equal");
    
    // add event listeners
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

    equalBtn.addEventListener("click", () => {
        if (step === 1 && previousNum === "") {
            return;
        }
        else {
            calculate(operator, previousNum, currentNum);
            outcomeDisplay.textContent = result;
            calculationDisplay.textContent = "";
            currentNum = result;
            previousNum = "";
            step = 0;
            console.log(step);
        }
    })

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
        step = 1;
        console.log(step);
        currentNum += n;
        outcomeDisplay.textContent = currentNum;
        console.log(currentNum);
    }

    function handleOperator(op) {  
        if (step === 0 && op === "×" && currentNum === "" ||
        step === 0 && op === "÷" && currentNum === "" ||
        step === 0 && op === "+" && currentNum === "") {
            return;
        }
        else if (step === 0 && op === "-") {
            operator = op;
            currentNum = op;
            outcomeDisplay.textContent = currentNum;
            console.log(currentNum)
            step = 2;
        }  
        else if (step !== 2) {
            step = 2;
            console.log(step);
            operator = op;
            previousNum = currentNum;
            calculationDisplay.textContent = outcomeDisplay.textContent;
            calculationDisplay.textContent += operator;
            outcomeDisplay.textContent = "";
            currentNum = "";
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
                alert("error");
        }
    }

    //math
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

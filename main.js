    let currentNum = "";
    let previousNum = "";
    let operator = "";
    let result;

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
        calculate(operator, previousNum, currentNum);
        outcomeDisplay.textContent = result;
        calculationDisplay.textContent = "";
        currentNum = result;
        previousNum = "";
    })

    // functions
    function handleNumber(n) {
        currentNum += n;
        outcomeDisplay.textContent = currentNum;
    }

    function handleOperator(op) {
        operator = op;
        previousNum = currentNum;
        calculationDisplay.textContent = outcomeDisplay.textContent;
        calculationDisplay.textContent += operator;
        outcomeDisplay.textContent = "";
        currentNum = "";
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



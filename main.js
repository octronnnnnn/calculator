document.addEventListener("DOMContentLoaded", () => {
    // reference all components/buttons 
    const numberBtns = document.querySelectorAll(".number");
    numberBtns.forEach((number) => {
        number.addEventListener("click", () => {
            alert("im a number!");
        })
    })

    const operatorBtns = document.querySelectorAll(".operator");
    operatorBtns.forEach((operator) => {
        operator.addEventListener("click", () => {
            alert("im an operator");
        })
    })

    const dotBtn = document.querySelector("#dot");
    dotBtn.addEventListener("click", () => {
        alert(".");
    })

    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", () => {
        alert("i clear things!");
    })

    const equalBtn = document.querySelector("#equal");
    equalBtn.addEventListener("click", () => {
        alert("i calculate things!");
    })

    let operator = "";
    let firstOperand = "";
    let secondOperand = "";
})


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
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "/":
        divide(a, b);
        break; 
        default:
            alert("error");
    }
}
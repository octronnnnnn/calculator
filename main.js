document.addEventListener("DOMContentLoaded", () => {
    // reference all components/buttons 
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            alert("hi");
        })
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
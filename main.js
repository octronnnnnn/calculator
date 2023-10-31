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

let operator = "";
let firstOperand = "";
let secondOperand = "";

function operate(operator, a, b) {
    switch (operator) {
        case 0:
            operator = "+";
            add(a, b);
            break;
        case 1:
            operator = "-";
            subtract(a, b);
            break;
        case 2:
            operator = "*";
            multiply(a, b);
            break;
        case 3:
        operator = "/";
        divide(a, b);
        break; 
    }
}
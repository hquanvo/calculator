// contains AC, C, %, +/-, .
const specials = document.querySelectorAll(".special");
// contains 7, 8, 9, 4, 5, 6, 1, 2, 3, 0
const nums = document.querySelectorAll(".num");
// contains +, -, x, /, =
const operators = document.querySelectorAll(".operator");

let first = 0;
let operation = '';
let second = 0;
let displayString = first + " " + operation + " " + second;

// operate
function operate() {
    switch (operation) {
        case "+": {
            first = add(first, second);
            break;
        }
        case "-": {
            first = subtract(first, second);
            break;
        }
        case "*": {
            first = multiply(first, second);
            break;
        }
        case "/": {
            first = divide(first, second)
            break;
        }
    }
}

// arithmetic functions
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

// TODO: add a clear function, a clear all function
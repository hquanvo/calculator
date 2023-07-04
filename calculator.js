let first = 0;
let operation = '';
let second = 0;

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
// declare variables
// contains AC, C, %, +/-, .
const specials = document.querySelectorAll(".special");
// contains 7, 8, 9, 4, 5, 6, 1, 2, 3, 0
const nums = document.querySelectorAll(".num");
// contains +, -, x, /, =
const operators = document.querySelectorAll(".operator");
const displayTop = document.querySelector(".display > .top");
const displayBottom = document.querySelector(".display > .bottom");

let firstOperand = 0;
let operation = '';
let secondOperand = 0;
let isOperationPreviousInput = false;

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (displayBottom.innerHTML === '0' || isOperationPreviousInput) {
            displayBottom.innerHTML = '';
        }
        if (isOperationPreviousInput) isOperationPreviousInput = false;
        displayBottom.innerHTML += num.innerHTML;
    })
})

specials[0].addEventListener('click', clearAll);
specials[1].addEventListener('click', clearOne);
specials[2].addEventListener('click', percentage);
specials[3].addEventListener('click', () => {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    if (displayBottom.innerHTML === "0") return;
    if (displayBottom.innerHTML.startsWith("-")) {
        displayBottom.innerHTML = displayBottom.innerHTML.slice(1);
    } else {
        displayBottom.innerHTML = "-" + displayBottom.innerHTML;
    }
})
specials[4].addEventListener('click', () => {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    if (!displayBottom.innerHTML.includes(".") && displayBottom.innerHTML != '0') {
        displayBottom.innerHTML += ".";
    }
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        handleOperatorClick(operator);
    })
})


// operate
function operate() {
    switch (operation) {
        case "+": {
            firstOperand = add(firstOperand, secondOperand);
            break;
        }
        case "-": {
            firstOperand = subtract(firstOperand, secondOperand);
            break;
        }
        case '×': {
            firstOperand = multiply(firstOperand, secondOperand);
            break;
        }
        case '÷': {
            firstOperand = divide(firstOperand, secondOperand)
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
    if (b === 0) return "Syntax error";
    return a / b;
}

function clearAll() {
    displayTop.innerHTML = '';
    displayBottom.innerHTML = '0';
    firstOperand = 0;
    operation = '';
    secondOperand = 0;
    isOperationPreviousInput = false;
}

function clearOne() {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    let numsRemain;
    if (displayBottom.innerHTML.startsWith('-')) {
        numsRemain = displayBottom.innerHTML.length - 1;
    } else {
        numsRemain = displayBottom.innerHTML.length;
    }
    if (numsRemain > 1) {
        displayBottom.innerHTML = 
        displayBottom.innerHTML.slice(0, displayBottom.innerHTML.length - 1);
    } else {
        displayBottom.innerHTML = "0";
    }
}

function percentage() {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    displayBottom.innerHTML = 
    parseFloat(displayBottom.innerHTML)/100;
}

function handleOperatorClick(operator) {
    if (operator.innerHTML === "=") {
        if (operation != '' && !isOperationPreviousInput) {
            secondOperand = parseFloat(displayBottom.innerHTML);
        }
        operate();
        displayTop.innerHTML = displayTop.innerHTML + " " + secondOperand;
        displayBottom.innerHTML = firstOperand;
        operation === '';
    } else {
        if (operation === '') {
            firstOperand = parseFloat(displayBottom.innerHTML);
            isOperationPreviousInput = true;
            operation = operator.innerHTML;
            displayTop.innerHTML = displayTop.innerHTML + firstOperand + " " + operation;
        }
    }
}

function enterFirstValue() {
    
}
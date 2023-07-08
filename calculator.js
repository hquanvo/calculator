let firstOperand = 0;
let operation = '';
let secondOperand = 0;
let isOperationPreviousInput = false;

// handling keyboard inputs
document.addEventListener('keydown', (event) => handleKeyboardInput(event))

// declare variables
// contains AC, C, %, +/-, .
const specials = document.querySelectorAll(".special");
// contains 7, 8, 9, 4, 5, 6, 1, 2, 3, 0
const nums = document.querySelectorAll(".num");
// contains +, -, x, /, =
const operators = document.querySelectorAll(".operator");
const displayTop = document.querySelector(".display > .top");
const displayBottom = document.querySelector(".display > .bottom");

nums.forEach((num) => {
    num.addEventListener('click', () => {handleNumberInput(num.innerHTML)})
})

specials[0].addEventListener('click', clearAll);
specials[1].addEventListener('click', clearOne);
specials[2].addEventListener('click', percentage);
specials[3].addEventListener('click', handleSignFlip);
specials[4].addEventListener('click', handleDecimal);

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        handleOperatorInput(operator.innerHTML);
    })
})


// operate
function operate() {
    switch (operation) {
        case "+": {
            return add(firstOperand, secondOperand);
        }
        case "-": {
            return subtract(firstOperand, secondOperand);
        }
        case '×': {
            return multiply(firstOperand, secondOperand);
        }
        case '÷': {
            return divide(firstOperand, secondOperand);
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

function handleOperatorInput(operator) {
    if (operator === "=") {
        if (operation != '' && !isOperationPreviousInput) {
            secondOperand = parseFloat(displayBottom.innerHTML);
            if (secondOperand === 0) {
                alert("The second operand cannot be 0.");
                return;
            }
        }
        firstOperand = Math.round(operate() * 1000) / 1000;
        if (operation != '') {
            displayTop.innerHTML = displayTop.innerHTML + " " + secondOperand;
        }
        displayBottom.innerHTML = firstOperand;
        operation = '';
    } else {
        if (operation === '') {
            firstOperand = parseFloat(displayBottom.innerHTML);
            isOperationPreviousInput = true;
            operation = operator;
            displayTop.innerHTML = "" + firstOperand + " " + operation;
        }
    }
}

function handleNumberInput(num) {
    if (displayBottom.innerHTML === '0' || isOperationPreviousInput) {
        displayBottom.innerHTML = '';
    }
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    displayBottom.innerHTML += num;
}

function handleDecimal() {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    if (!displayBottom.innerHTML.includes(".")) {
        displayBottom.innerHTML += ".";
    }
}

function handleSignFlip() {
    if (isOperationPreviousInput) isOperationPreviousInput = false;
    if (displayBottom.innerHTML === "0") return;
    if (displayBottom.innerHTML.startsWith("-")) {
        displayBottom.innerHTML = displayBottom.innerHTML.slice(1);
    } else {
        displayBottom.innerHTML = "-" + displayBottom.innerHTML;
    }
}

function handleKeyboardInput(event) {
    let key = event.key;
    if (!isNaN(key)) {
        handleNumberInput(+key);
    } else {
        switch (key) {
            case "Backspace": {
                clearOne();
                break;
            }
            case "c": {
                clearAll();
                break;
            }
            case "f": {
                handleSignFlip();
                break;
            }
            case "%": {
                percentage();
                break;
            }
            case ".": {
                handleDecimal();
                break;
            }
            case "+": {
                handleOperatorInput("+");
                break;
            }
            case "-": {
                handleOperatorInput("-");
                break;
            }
            case "x": {
                handleOperatorInput("×");
                break;
            }
            case "/": {
                handleOperatorInput("÷");
                break;
            }
            case "=": {
                handleOperatorInput("=");
            }
        }
    }
}
// declare consts
// contains AC, C, %, +/-, .
const specials = document.querySelectorAll(".special");
// contains 7, 8, 9, 4, 5, 6, 1, 2, 3, 0
const nums = document.querySelectorAll(".num");
// contains +, -, x, /, =
const operators = document.querySelectorAll(".operator");
const displayTop = document.querySelector(".display > .top");
const displayBottom = document.querySelector(".display > .bottom");

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (displayBottom.innerHTML === '0') {
            displayBottom.innerHTML = '';
        }
            displayBottom.innerHTML += num.innerHTML;
    })
})

specials[0].addEventListener('click', clearAll);
specials[1].addEventListener('click', clearOne);
specials[2].addEventListener('click', percentage);

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

function clearAll() {
    displayBottom.innerHTML = '0';
}

function clearOne() {
    displayBottom.innerHTML = 
    displayBottom.innerHTML.slice(0, displayBottom.innerHTML.length - 1);
}

function percentage() {
    displayBottom.innerHTML = 
    parseFloat(displayBottom.innerHTML)/100;
}
// TODO: add a clear function, a clear all function
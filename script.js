let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(currentInput) === 0 ? 'Error' : parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

// Add keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key)) { // Number keys
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) { // Operator keys
        setOperator(key);
    } else if (key === 'Enter') { // Enter key for equals
        calculate();
    } else if (key === 'Backspace') { // Backspace key for clear
        clearDisplay();
    }
});

let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let isScientificMode = false;

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
        case 'sqrt':
            result = Math.sqrt(parseFloat(currentInput));
            break;
        case '%':
            result = parseFloat(currentInput) / 100;
            break;
        case 'sin':
            result = Math.sin(parseFloat(currentInput) * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(parseFloat(currentInput) * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(parseFloat(currentInput) * Math.PI / 180);
            break;
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function scientificMode() {
    isScientificMode = !isScientificMode;
    document.getElementById('scientific-buttons').style.display = isScientificMode ? 'grid' : 'none';
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key)) { // Number keys
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});

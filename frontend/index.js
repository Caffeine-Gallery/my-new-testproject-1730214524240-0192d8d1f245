import { backend } from 'declarations/backend';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const loading = document.getElementById('loading');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

async function handleButtonClick(value) {
    if (value === 'Clear') {
        currentInput = '';
        operator = '';
        firstOperand = '';
        display.value = '';
    } else if ('+-*/'.includes(value)) {
        operator = value;
        firstOperand = currentInput;
        currentInput = '';
    } else if (value === '=') {
        if (firstOperand && operator && currentInput) {
            try {
                loading.classList.remove('hidden');
                const result = await backend.calculate(parseFloat(firstOperand), parseFloat(currentInput), operator);
                display.value = result;
                currentInput = result.toString();
                firstOperand = '';
                operator = '';
            } catch (error) {
                display.value = 'Error';
            } finally {
                loading.classList.add('hidden');
            }
        }
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}

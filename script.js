let inputField = document.getElementById('inputField');

function appendToInput(value) {
    inputField.value += value;
}

function calculate() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = 'Error';
    }
}

function clearInput() {
    inputField.value = '';
}

document.addEventListener('keydown', (event) => {
    if (
        (event.key >= '0' && event.key <= '9') ||
        event.key === '.' ||
        event.key === '+' ||
        event.key === '-' ||
        event.key === '*' ||
        event.key === '/' ||
        event.key === '%' ||
        event.key === 'Enter' // Including 'Enter' key here
    ) {
        if (event.key === 'Enter') {
            calculate(); // Call calculate function on 'Enter'
        } else {
            appendToInput(event.key);
        }
    } else if (event.key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
    }
});

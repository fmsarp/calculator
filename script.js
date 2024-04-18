const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // if current display value is 0, replace it , if not, add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue ==='0' ? number : displayValue + number;
}

function addDeciaml() {
    // if no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// add event listners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
    }
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDeciaml())
    }
});

// reset display
function resetAll() {
    calculatorDisplay.textContent = '0';
};

// event listener
clearBtn.addEventListener('click', resetAll);
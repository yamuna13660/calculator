// Get all the buttons and display input element
const display = document.getElementById('displaytext');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        // Handle numbers and operators
        if (buttonText === 'C') {
            // Clear the display
            currentInput = '';
            display.value = '';
        } else if (buttonText === '=') {
            // Evaluate the expression
            try {
                currentInput = eval(currentInput).toString(); // Use eval to calculate the expression
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '/') {
            // Handle operators
            if (buttonText === 'x') {
                buttonText = '*'; // Change 'x' to '*' for multiplication
            }
            if (currentInput !== '') {
                // If there's an input already, append the operator
                currentInput += buttonText;
                display.value = currentInput;
            }
        } else {
            // Handle numbers
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});
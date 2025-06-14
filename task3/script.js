document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            // Handle clear button
            if (value === 'C') {
                result.value = '';
            }
            // Handle equals button
            else if (value === '=') {
                try {
                    // Replace parentheses with multiplication for proper evaluation
                    let expression = result.value.replace(/\)\(/g, ')*(');
                    // Remove any spaces
                    expression = expression.replace(/\s/g, '');
                    result.value = eval(expression);
                } catch (error) {
                    result.value = 'Error';
                }
            }
            // Handle other buttons
            else {
                // Prevent consecutive operators
                if (value.match(/[\+\-\*\/]/) && result.value.match(/[\+\-\*\/]$/)) {
                    result.value = result.value.slice(0, -1) + value;
                } else {
                    result.value += value;
                }
            }
        });
    });
});

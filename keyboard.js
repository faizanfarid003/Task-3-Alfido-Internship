document.addEventListener('keydown', function(event) {
    handleKeyPress(event.key);
});

// This function handles keyboard input
function handleKeyPress(key) {
    if (key >= '0' && key <= '9') {
        display(key);
    } else if (key === '.') {
        display('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'c' || key === 'C') {
        clearScreen();
    } else if (key === 'Backspace') {
        backspace();
    }
}

// This function handles backspace
function backspace() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}


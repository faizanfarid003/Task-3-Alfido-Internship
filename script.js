// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
    var expression = document.getElementById("result").value;

    try {
        var result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

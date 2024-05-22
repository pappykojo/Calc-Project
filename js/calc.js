// Initialize variables
var a = '';
var b = '';
var num = [];
var ans = 0;

// Function to handle number and operator inputs
function sendNum(digit) {
    num.push(digit);
    if (num.length !== 1) {
        a = '';
        document.getElementById('screen').innerHTML = a; // Clearing the screen.
    }
    a = num.join(''); // Concatenate the elements of the array "num" into a single string.
    document.getElementById('screen').innerHTML = a; // Display the concatenated string.
}

// Function to calculate and display the result
function equalTo() {
    document.getElementById('screen').innerHTML = '';
    b = num.join(''); // Concatenate the array "num" into a single string.
    ans = eval(b);
    if (isNaN(ans) || !isFinite(ans)) {
        document.getElementById('screen').innerHTML = 'Error';
    } else {
        document.getElementById('screen').innerHTML = ans; // Display the result.
    }
    num = [ans.toString()]; // Reset "num" with the result.
}

// Function to clear the screen and reset variables
function clearScr() {
    document.getElementById('screen').innerHTML = '';
    num = [];
    a = '';
    b = '';
}

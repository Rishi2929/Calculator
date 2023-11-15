// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
//This function clears the last character
function clearLastCharacter() {
    var resultInput = document.getElementById("result");
    var currentValue = resultInput.value;
  
    if (currentValue.length > 0) {
      resultInput.value = currentValue.slice(0, -1);
    }
  }
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
//This function caculates the values
function calculate() {
    var p = document.getElementById("result").value;
    var q;
//This was used because x wasnt being recognised as an arithetic operator but we wanted to display x instead of *
    p = p.replace(/x/g, '*');

    try {
        q = new Function('return ' + p)();
        document.getElementById("result").value = q;
    } catch (error) {
        console.error('Invalid input:', error);
    }
}



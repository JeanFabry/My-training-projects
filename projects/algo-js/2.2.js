// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

// Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)

var min = parseInt(prompt("Please enter a number"));
var max = parseInt(prompt("Now enter a higher number"));

if (max < min) {
    alert(min + " is greater than " + max + ". It seems you didn't understand much...");
    window.location.reload()
} 

else {
    var current = parseInt(prompt("Finally, enter a last number"));
    if (min < current && current < max) {
        alert(current + " is between " + min + " and " + max + ".");
    } else {
        alert(current + " is not between " + min + " and " + max + ". :(");
    }
}
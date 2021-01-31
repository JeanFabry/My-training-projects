// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number.
// At the end display the sum of all the numbers collected this way.

var n = parseInt(prompt("Please, enter a number."));
let i = 0;
var sum_n = 0;
while (i < n) {
    var next_n = parseInt(prompt("Please, enter another number."));
    sum_n += next_n;
    i += 1;
};
alert("the sum of the entered numbers is " + sum_n);
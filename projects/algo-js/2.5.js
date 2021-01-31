// Make a program that asks the favorite number of the user. 
// If that number is anything other than 42 display "Are you sure?" and ask again. 
// (This program should never end as long as the user didn't chose 42).

var fav_num = prompt("What's your favorite number?");
if (fav_num != 42) {
    alert("Are you sure?");
    window.location.reload()
} else {
    alert("You chose the right answer ;) ");
}
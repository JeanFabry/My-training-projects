// Make a program that ask the user to enter a number between 1 and 7. Depending on the number,
// display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

var day = parseInt(prompt("Please, enter a number between 1 and 7."));
switch (day) {
    case 1:
        alert("That's Monday !");
        break;
    case 2:
        alert("That's Tuesday !");
        break;
    case 3:
        alert("That's Wednesday !");
        break;
    case 4:
        alert("That's Thursday !");
        break;
    case 5:
        alert("That's Friday !");
        break;
    case 6:
        alert("That's Saturday !");
        break;
    case 7:
        alert("That's Sunday !");
        break;
    default:
        alert("You didn't write a number between 1 and 7!");
}
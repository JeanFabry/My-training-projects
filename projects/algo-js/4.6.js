// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.

console.log("the list pattern of numbers multiplied is :");
function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        console.log(num);
        return (num * factorial(num - 1));
    }
  }
  console.log("the result of the factorial is " + factorial(5));
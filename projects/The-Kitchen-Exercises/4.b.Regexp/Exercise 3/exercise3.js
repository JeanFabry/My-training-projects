// Create a function (multiple patterns) to validate a password. The password should:

//     Contain at least 1 lowercase letter
//     Contain at least 1 uppercase letter
//     Contain at least 1 number
//     Contain a special character (+, ?, $, ^)
//     Be between 8 and 18 characters long

 const creditCard = () => {
   pattern1 = /[a-z]+/g;
   pattern2 = /[A-Z]+/g;
   pattern3 = /([0-9]+)/g;
   pattern4 = /^[+\?\$\^]+$/g;
   pattern5 = /^[\s\S]{8,18}$/g;
 };

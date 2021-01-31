//     Write a program that will add all the elements of an array.
// Test it with the following arrays:
//     [1, 2, 3, 4, 5] => 15
//     [100, 101, 102] => 303

var arr = [1, 2, 3, 4, 5]; 
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum);

var arr_b = [100, 101, 102]; 
var sum_b = 0;
for (var i = 0; i < arr_b.length; i++) {
  sum_b += arr_b[i]
}
console.log(sum_b);
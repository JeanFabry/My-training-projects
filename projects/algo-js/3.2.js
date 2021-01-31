// Write a program that will calculate the average value of a given array.
// Test it with the following arrays:
// [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101

var arr = [1, 2, 3, 4, 5]; 
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
  average=sum/arr.length
}
console.log(average);

var arr_b = [100, 101, 102]; 
var sum_b = 0;
for (var i = 0; i < arr_b.length; i++) {
  sum_b += arr_b[i]
  average_b=sum_b/arr_b.length
}
console.log(average_b);
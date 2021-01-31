// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). 
// Make a second version that uses a single method call to perform the copy.
// (You'll have to search on the MDN or Google for this one.)

let arr = [1,2,3,4,5];
let dupli=[];
for (let elem in arr) {
    dupli.push(arr[elem]);
};
console.log(dupli);

var dupli_b= arr.slice();
console.log(dupli_b);
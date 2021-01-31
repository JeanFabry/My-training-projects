// Display all even numbers between 1 and 100.

for (let i = 0; i <= 100;) {
    console.log(i);
    i += 2;
}

// Bonus: do two different versions. The first one should use while and 
// make a loop that will execute 100 times. The second one should use for and make 
// a loop that will execute 50 times (see first formula).

let i = 0
while (i <= 100) {
    i += 1;
    if (i % 2 == 1) {
        continue
    } else {
        console.log(i);
    }
}
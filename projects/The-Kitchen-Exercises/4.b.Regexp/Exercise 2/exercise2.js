// Write a regex pattern to validate that credit card number are well encrypted in the database. It can be encrypted with X or Y or Z and must be exactly 4 blocks of 4 chars.

// Example: XXYX XYYY XXXX YYYY is valid

const patternB = /^((((X|Y|Z){4})\s){3}(X|Y|Z){4})$/gi;

const test = [
  "XXYX XYYY XXXX YYYY",
  "XXYX XYYY XXHX YYYY",
  "XXYX XYYY XXXX YYY",
  "XXYX XYYY XXXX YYYY XXXX",
  "XXYX XYYY XXXX YYYY XXX",
];

for (let elements of test){
    const answerDiv = document.createElement('div');
    document.body.appendChild(answerDiv)
if (elements.match(patternB)) {
  answerDiv.innerHTML=`${elements} matches the pattern`
    console.log("found");
} else {
      answerDiv.innerHTML = `${elements} doesn't match the pattern`;
  console.log("not found");
}
}
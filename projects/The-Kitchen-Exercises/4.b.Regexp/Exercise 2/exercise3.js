// Write 2 regex patterns to verify that blog posts starts with a greetings that could be either:

//     Hello
//     Hi
//     Hey
//     Hej
//     Greetings

// And ends with at least 2 ending formulas:

//     Thank you
//     Thanks
//     Merci
//     Cheers
//     I am grateful



const patternD = /^((Hello|Hi|Hey|Hej|Greetings){1})/gi

const patternE = /((Thank you|Thanks|Merci|Cheers|I am grateful)( |, |.)?){2,}$/gi;

const testB = [
  "Hello, how are you doing ? Thanks I am grateful",
];
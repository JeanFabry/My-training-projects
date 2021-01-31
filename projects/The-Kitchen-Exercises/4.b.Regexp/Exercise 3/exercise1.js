// Create a regular expression that validates if the sentence is a question. A question starts with :

//     What
//     Why
//     How
//     When
//     Who

// and ends with a question mark ?. It should have at least 3 words.

// Examples:

//     Why am I ugly? valid
//     How do you make babies? valid
//     What the fuck NOT valid (no question mark)
//     Who? NOT valid (single word)

const patternG = /^(What|Why|How|When|Who)( [a-zA-Z]{1,}( )?){2,}\?$/gi;
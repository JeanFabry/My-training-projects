// Validate a credit card number. A credit card number is in the form of 4 group of 4 numbers separated by a space.

// Examples:

//     3567 2587 1212 9978 valid
//     A123 GG78 9017 1245 NOT valid (contains letters)
//     1113 14 NOT valid (too short)
//     3567 2587 1212 9978 9096 NOT valid (too long)

const patternH = /^(([0-9]{4}( )?){4})$/gi;
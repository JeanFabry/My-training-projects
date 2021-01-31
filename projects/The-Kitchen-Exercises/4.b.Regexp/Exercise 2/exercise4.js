// Write a regex to find out which message only contains laughing comments in English or Spanish. In Spanish laughing is expressed with jaja in english using haha or lmao (with at least one o but as many as you want, ex: lmaoooooooooo). Examples:

//     jajajaja should work
//     lmaooooooooo should work
//     ja should NOT work
//     lma should NOT work
//     I said haha should NOT work


let patternF = /^((ja|ha){2,}|lma((o){1,}))$/gi;
// In english, the word "fuck" is a rather common swear word. It is often used in combination with other letters to express an even deeper insult such as fucking or motherfucker

// Write a single regex that catches all of these slurs and replace them by a word of stars of the same length.

// ex: motherfucker (12 letters) becomes ************


let sentenceExo2 = document.querySelector('body').children[1].innerHTML

let patternExo2 = /\w*fuck\w*/gi;

const remplacement = (toutLePattern) => {
    let stars = '';
    for (let i = 0; i < toutLePattern.length; i++)
        stars += "*"
    return stars;
}

document.querySelector("body").children[1].innerHTML = sentenceExo2.replace(
    patternExo2,
    remplacement
);
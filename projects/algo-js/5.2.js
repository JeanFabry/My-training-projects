// Create a function named randomizeCast(tvSerie) that will take as argument the data structure 
// you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a 
// TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

const readlineSync = require('readline-sync'); //Adapting prompt for console

const randomizeCast = (array) => { // creates a function for shuffling the content of an array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const askTvSerie = () => {

        let favTvSerie = { //Create an object 'favTvSerie'
            Name: readlineSync.question("What's the name of the serie ? "),  //gives it 2 keys : Name and Names of the cast members
            "Names of the cast members": [] //creates an array for the cast members
        }

        let numberCast = readlineSync.question('How many people are part of the cast? '); // creates a function asking for the number of people in the cast
        for (let i = 0; i < numberCast; i += 1) {
            favTvSerie["Names of the cast members"].push(readlineSync.question('give me the name of each cast member '));   // for each person in the cast ask for a name and push it in the array associated with "Names of the cast members"
        }

        return ('The cast of next year\'s season of ' + favTvSerie.Name + " will be: " + randomizeCast(favTvSerie["Names of the cast members"])); //Return the object favTvSerie with its cast members shuffled by the function randomizeCast
        
    }
        
console.log(JSON.stringify(askTvSerie())); //Asking the console to call askTvSerie and write its return as a JSON











 //write the object facTvSerie as a JSON in the console
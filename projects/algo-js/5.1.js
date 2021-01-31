// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//     Name
//     Production year
//     Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const readlineSync = require('readline-sync'); //Adapting prompt for console

const askTvSerie = () => { 
    
    let favTvSerie = { //Create an object 'favTvSerie'
        Name: readlineSync.question('give me a name '), //gives it 3 keys : Name, Production year and Names of the cast members
        "Production year": readlineSync.question('give me a production year '),  //ask the user for the name and production year
        "Names of the cast members": [] //creates an array for the cast members
    }

    let numberCast = readlineSync.question('give me the number of cast '); // creates a function asking for the number of people in the cast
    for (let i = 0; i < numberCast; i += 1) {
        favTvSerie["Names of the cast members"].push(readlineSync.question('give me the name of the cast member ')); // for each person in the cast ask for a name and push it in the array associated with "Names of the cast members"
    }
    return favTvSerie //Return the object favTvSerie
}

console.log(JSON.stringify(askTvSerie())); //write the object facTvSerie as a JSON in the console
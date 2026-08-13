const list = document.querySelector("ul");

const greetings = [
    "Happy Birthday!",
    "Merry Christmas my love",
    "A happy Christmas to all the family",
    "You're all I want for Christmas",
    "Get well soon",
];

// Iterate/Loop all messages in greetings
for (greeting of greetings) {

    // return only messages that includes 'Christmas'
    if (greeting.includes('Christmas')) {
        // console.log(greeting)
        const li = document.createElement('li');
        li.textContent = greeting;
        list.appendChild(li);
        // return;
    }

    // return all messages

    // if (greeting) {
    //     // console.log(greeting)
    //     const li = document.createElement('li');
    //     li.textContent = greeting;
    //     list.appendChild(li);

    // }
}

// Challenge 2

/*
    Convert the whole of the string contained in the city variable to lowercase and store it in a new variable.
    Grab the first letter of the string in this new variable and store it in another variable.
    Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replacement procedure in another new variable.
    Change the value of the result variable to equal to the final result, not the city.
*/
// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

// for (const city of cities) {
//     // write your code just below here

//   // Make the string lowercase  
//   let cityLowerCase = city.toLowerCase();

//   // Get the first letter  
//   // let firstLetter = cityLowerCase.charAt(0);
//   let firstLetter = cityLowerCase.slice(0,1);

//   // let capitaLize = firstLetter.toUpperCase() + cityLowerCase.slice(1);
//   let capitaLize = cityLowerCase.replace(firstLetter, firstLetter.toUpperCase());

//     const result = capitaLize;

//     const listItem = document.createElement("li");

//     listItem.textContent = result;
//     list.appendChild(listItem);
// }

// Challenge 3
/*
    Extract the three-letter station code and store it in a new variable.
    Find the character index number of the semicolon.
    Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
    Concatenate the two new variables and a string literal to make the final string.
    Change the value of the result variable to the final string, not the station.
*/

const list = document.querySelector("ul");
const stations = [
    "MAN675847583748sjt567654;Manchester Piccadilly",
    "GNF576746573fhdg4737dh4;Greenfield",
    "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
    "SYB4f65hf75f736463;Stalybridge",
    "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
    // write your code just below here

    // Extract the three-letter station code and store it in a new variable.
    const code = station.slice(0, 3);

    // Find the character index number of the semicolon.
    const index = station.indexOf(';');

    /*Extract the human-readable station name using the semicolon character 
    index number as a reference point, and store it in a new variable.
    */
    const stationName = station.slice(index + 1)

    // Concatenate the two new variables and a string literal to make the final string.
    const result = `${code}: ${stationName}`;

    const listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
}


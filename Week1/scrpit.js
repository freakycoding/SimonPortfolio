/*
What is a variable?
- A variable is a container for a value

Note: 
We say variables contain values. 
This is an important distinction to make. 
Variables aren't the values themselves; they are containers for values. 
You can think of them being like little cardboard boxes that you can store things in.
- We should end the line of code with a semicolon in JS.
- not existing would mean there's no box (variable) for a value to go in
- No value defined would mean that there is a box, but it has no value inside it.
*/

// get a button and a h3 heading
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = 'Try again!';
    headingA.textContent = `${count} clicks so far`

    // increament count by 1
    count += 1;
};

//  Init variables & assign a value
let myName = 'Agent1C';
let myAge;

// update variable value
myAge = 'Freaky Coding';


/*
#Numbers
- we store numbers in a varible.
- it could be a floating number, interger

*/
const numberInt = 800;
const numberFloat = 6.665;
let myNumber = "500"; //string number(String treated)
// get typeof 
typeof myNumber;

// Strings: - are pieces of text.
let dolphinGoodbye = "So long and thanks for all the fish";

/*
#Booleans
- Booleans are true/false values — they can have two values, true or false.
*/
let isAlive = true;
let isUser = false;
//Whereas in reality it would be used more like this:
let test = 6 < 3;

/*
#Arrays
- An array is a single object that contains multiple values enclosed in square brackets and separated by commas.
*/
let nameArrays = ['Simon', 'Ndlovu', 'Freaky Coding']

// accessing arrays
nameArrays[0]
nameArrays[1]
nameArrays[2]

/*
#Objects
- an object is a structure of code that models a real-life object.
*/

let dog = { name: "Spot", breed: "Dalmatian" };
const bird = { species: "Kestrel" };
// retrieve information in Object or access it
dog.name;
dog.breed;

// update
dog.name = 'Danger';
dog.breed = 'Chuwawa';

/*
#Constants in JavaScript
- you must initialize them when you declare them
- you can't assign them a new value after you've initialized them
*/
let constVariable;
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
}
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
const section = document.querySelector('section');
const para = document.createElement('p');
const para2 = document.createElement('p');

let myName = "Default Name";
// update
myName = 'Simon';

// Fix the following code from const to let
let myAge = 32;

// create paragraphs
para.textContent = myName;
para2.textContent = `in 20 years, ${myName} i will be ${myAge + 20}`

// append to section in html
section.appendChild(para)
section.appendChild(para2)
// Arrays 1

// Add your code here
// const myArray = ["Simon Ndlovu", "Web Developer", "simon.ndlovu1sa@gmail.com"];
// myArray[0] = 'Freaky Coding';
// myArray[1] = 'Business Enterprise';
// myArray.unshift("Welcome");


// Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = `Array: ${myArray}`;
// section.appendChild(para1);

// Arrays 2
// const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// // Add your code here
// const myArray = myString.split("+");

// const arrayLength = myArray.length;

// const lastItem = myArray[arrayLength -1];
// // Don't edit the code below here!


// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = `Array: ${myArray}`;
// const para2 = document.createElement("p");
// para2.textContent = `The length of the array is ${arrayLength}.`;
// const para3 = document.createElement("p");
// para3.textContent = `The last item in the array is "${lastItem}".`;
// section.appendChild(para1);
// section.appendChild(para2);
// section.appendChild(para3);

// Arrays 3

// const myArray = [
//     "Ryu",
//     "Ken",
//     "Chun-Li",
//     "Cammy",
//     "Guile",
//     "Sakura",
//     "Sagat",
//     "Juri",
// ];

// Add your code here

// // Remove the last item in the array.
// myArray.pop()

// // Add two new names to the end of the array.
// myArray.push("rasta", "Welcome");

// /*Iterate over each item in the array 
// and add its index number after the name*/
// const ul = document.createElement('ul');

// // Loop through each item by its index
// myArray.forEach((index, name) => {
//     const li = document.createElement('li');
//     li.textContent = `(${name}): ${index}`
//     ul.appendChild(li);
// });

// const myString = myArray.join("-")
// // Update the item by adding the formatted index string


// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = myString;
// section.appendChild(para1);
// section.appendChild(ul);

// Arrays 4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
const index = birds.indexOf("Eagles");
// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
if (index !== -1) {
    birds.splice(index, 1)
}
console.log(birds)
/*
Make a new array from this one, called eBirds, 
that contains only birds from the original 
array whose names begin with the letter "E". 
Note that startsWith() is a great way to check 
whether a string starts with a given character.
*/
const eBirds = birds.filter(bird => bird.toUpperCase().startsWith("E"))
// const eBirds = birds.filter(bird => bird.startsWith("E"))

// birds.startsWith("E")
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
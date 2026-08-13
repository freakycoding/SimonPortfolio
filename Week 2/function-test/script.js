// const names = [
//     "Chris",
//     "Li Kang",
//     "Anne",
//     "Francesca",
//     "Mustafa",
//     "Tina",
//     "Bert",
//     "Jada",
// ];
// const para = document.querySelector("p");

// // Don't edit the code above here!

// // Add your code here
// function chooseName(name) {

//     let random = Math.floor(Math.random() * names.length); // randomise names
//     name = names[random]

//     para.textContent = name;
// }

// chooseName();


// Function 2
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// const x = 50;
// const y = 60;
// const width = 100;
// const height = 75;
// const color = "blue";

// // Don't edit the code above here!

// // Add your code here
// function draw(x, y, width, height) {
//     // ctx.fillStyle = "rgb(0 153 255 / 40%";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height)
// }

// draw(x, y, width, height)

// Function 3
// const names = [
//     "Chris",
//     "Li Kang",
//     "Anne",
//     "Francesca",
//     "Mustafa",
//     "Tina",
//     "Bert",
//     "Jada",
// ];
// const para = document.querySelector("p");

// // Don't edit the code above here!

// // Update the code below here

// function random(min, max) {
//     const number = Math.floor(Math.random() * (max - min)) + min;
//     return number;
// }

// function chooseName(arr) {
//     const name = arr[random(0, arr.length)]
//     return name;
// }

// para.textContent = chooseName(names);

// function 4
const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
];

const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

// function isShort() {
//     // return name.length < 5;
//     shortNames = names.filter((name) => name.length < 5)
//     // return name
//     return shortNames;
// }

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
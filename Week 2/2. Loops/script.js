// // const btn = document.querySelector("button");
// // const canvas = document.querySelector("canvas");
// // const ctx = canvas.getContext("2d");

// // // Randomising function
// // function random(number) {
// //     return Math.floor(Math.random() * number);
// // }

// // // Draw function
// // function draw() {

// //     //initialisation setup
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     //start drawing
// //     for (let i = 0; i < 100; i++) {
// //         ctx.beginPath();
// //         ctx.fillStyle = "rgb(255 0 0 / 50%)";
// //         ctx.arc(
// //             random(canvas.width),
// //             random(canvas.height),
// //             random(50),
// //             0,
// //             2 * Math.PI,
// //         );
// //         ctx.fill();
// //     }
// // }

// // // call button Event
// // btn.addEventListener("click", draw)


// // const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// // // for (const cat of cats) {
// // //     console.log(cat);
// // // }

// // function toUpper(text) {
// //     return text.toUpperCase();
// // }

// // // Capitalise Names
// // // const upperNames = cats.map(toUpper);
// // // for(const ct of upperNames){
// // //     console.log(ct)
// // // }

// // function lCat(cat){
// //     return cat.startsWith("L");
// // }

// // // const filteredA = cats.filter(lCat);
// // // console.log(filteredA)

// // // const filtered = cats.filter((cat) => cat.startsWith("L"));
// // const filtered = cats.filter((cat) => lCat(cat));

// // console.log(filtered)

// // const results = document.querySelector("#results");

// // function calculate() {
// //     for (let number = 1; number <= 10; number++) {
// //         const newNum = `${number} x ${number} = ${number * number}`
// //         results.textContent += `${newNum}\n`;
// //     }
// //     results.textContent += "\nFinished!\n\n"
// // }

// // const calculateBtn = document.querySelector("#calculate")
// // const clearBtn = document.querySelector("#clear");

// // calculateBtn.addEventListener("click", calculate);

// // clearBtn.addEventListener("click", () => (results.textContent = ""));

// // const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// // for(let cat = 0; cat < cats.length; cat++){
// //     console.log(cats[cat])
// // }

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavCat = 'My cats are called'

// // for (const cat of cats) {
// //     myFavCat += ` ${cat}, `;

// // }
// // console.log(myFavCat)

// // Do....while
// let i = 0;
// do {
//     if (i === cats.length - 1) {
//         myFavCat += `and ${cats[i]}.`
//     } else {
//         myFavCat += `${cats[i]}, `
//     }
//     i++;
// } while (i < cats.length);
// console.log(myFavCat)


// navigation ToggleEvent

// event btn
// const btn = document.querySelector('#toggle');
// let navBar = document.querySelector('#navBar');

// btn.addEventListener("click", e => {
//     // prevent default
//     e.preventDefault();

//     // check if it has a class 'active', if not add active it
//     navBar.classList.toggle("nav-hidden");
//     navBar.classList.toggle("nav-visible");

//     // e.target.classList.remove('active')
// })


// Implementing a launch countdown
// const output = document.querySelector(".output");
// output.textContent = "";

// let i = 10;

// while (i >= 0) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         // console.log('Countdown 10');
//         para.textContent = `Countdown ${i}`
//     } else if (i === 0) {
//         // console.log('Blast off!')
//         para.textContent = 'Blast off!'
//     } else {
//         para.textContent = i;
//     }
//     output.appendChild(para);
//     i--;
// }


// Filling in a guest list
const people = [
    "Chris",
    "Anne",
    "Colin",
    "Terri",
    "Phil",
    "Lola",
    "Sam",
    "Kay",
    "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += `${person} ,`
    } else {
        admitted.textContent += `${person}, `;
    }
    console.log('Successfully');
}
//remove the command and add. At the end using  slice
refused.textContent += `${refused.textContent.slice(0, -2)}.`

admitted.textContent += `${admitted.textContent.slice(0, -2)}.`
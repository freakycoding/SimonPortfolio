// let shoppingDone = false;
// let childAllowanc;

// if (shoppingDone === true) {
//     console.log(childAllowanc = 10)
// } else {
//     console.log(childAllowanc = 5)
// }

// const select = document.querySelector("select");
// const para = document.querySelector("p");
// const temperature = 95;
// const houseStatus = "on fire1";
// const iceCreamVanOutside = true;

// select.addEventListener("change", setWeather);

// function setWeather() {
//     const choice = select.value;

//     if (choice === "sunny") {
//         // para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";

//         // Nested if statement
//         if (temperature < 86) {
//             para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//         } else if (temperature >= 86) {
//             para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//         } else {
//             console.log()
//         }

//     } else if (choice === "rainy") {
//         para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//     } else if (choice === "snowing") {
//         para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//     } else if (choice === "overcast") {
//         para.textContent =
//             "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//     } else {
//         para.textContent = "";
//     }
// }


/*2. Logical operators: AND, OR and NOT*/
// function setWeather() {
//     const choice = select.value;

//     if (choice === "sunny" && temperature < 86) {
//         // para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//         para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;

//         // Nested if statement
//         /*if (temperature < 86) {
//             para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//         } else if (temperature >= 86) {
//             para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//         } else {
//             console.log()
//         }*/

//     } else if (choice === "sunny" && temperature >= 86) {
//         para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;

//     } else if (choice === "rainy") {
//         para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//     } else if (choice === "snowing") {
//         para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//     } else if (choice === "overcast") {
//         para.textContent =
//             "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//     } else {
//         para.textContent = "";
//     }
// }

// if (!(iceCreamVanOutside || houseStatus === "on fire")) {
//     console.log("Probably should just stay in then.");
// } else {
//     console.log("You should leave the house quickly.");
// }

/*
- you've got to specify a complete test on either side of each OR operator

    if (x === 5 || x === 7 || x === 10 || x === 20) {
    // run my code
    }

*/

/*
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
  */

/* 3. Switch */
// select.addEventListener("change", setSwitch)

// function setSwitch() {
//     let choice = select.value;

//     switch (choice) {
//         case "sunny":
//             para.textContent =
//                 "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//             break;
//         case "rainy":
//             para.textContent =
//                 "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//             break;
//         case "snowing":
//             para.textContent =
//                 "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//             break;
//         case "overcast":
//             para.textContent =
//                 "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//             break;

//         default:
//             para.textContent = "The imposible shame"
//     }
// }


/* Ternary operator */
// const isBirthday = false;

// const greeting = isBirthday ? "Happy birthday Mrs. i-Man 'Rastafarian' — we hope you have a great day!" : "Good morning Mrs. Smith.";
// console.log(greeting)

const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function changeTheme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change", () => {
    select.value === "orange" ? changeTheme("#ff7f50", "#001452") : changeTheme("#001452", "#ff7f50");
})
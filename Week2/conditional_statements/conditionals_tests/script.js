// Conditionals 1
/*
let season = "spring";
let response;
console.log(season)

// Add your code here
if (season=== "summer") {
    response = `${season} It's probably nice and warm where you are; enjoy the sun!`
} else if (season === "winter") {
    response = `${season} Winter is fallow and renewal. It is a time when external progress may appear paused, but it serves as a vital season for deep inner rest, healing, and preparing the soil of your life for the next spring.`
} else if (season === "spirng") {
    response = `${season}: Spring is beginnings and cultivation. It is a time for planting new ideas, stepping out in faith, and laying the groundwork for future success.`
} else if (season === "autumn") {
    response = `${season}: Autumn is gratitude and gathering. It is a season to enjoy the fruits of your labor, celebrate victories, and reap the rewards of your past consistency.`
} else {
    response = 'Out of season, try again.'
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
*/

// Conditionals 2
/*

let response;
let score = 75;
let machineActive = false;

// Add your code here
if (machineActive) {
    if (score < 0 || score > 100) {
        response = "This is not possible, an error has occurred."
    } else if (score >= 0 && score < 20) {
        response = "That was a terrible score — total fail!"
        // machineActive = true;
    } else if (score >= 20 && score < 40) {
        response = "You know some things, but it's a pretty bad score. Needs improvement.";
    } else if (score >= 40 && score < 70) {
        response = "You did a passable job, not bad!";
    } else if (score >= 70 && score < 90) {
        response = "That's a great score, you really know your stuff.";
    } else if (score >= 90 && score === 100) {
        response = "What an amazing score! Did you cheat? Are you for real?";
    }

} else {
    response = "The machine is turned off. Turn it on to process your score."

}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");

para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
*/

// Conditional 3

let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
    machineResult = "Machine is active. Trying login.";
    pwdResult = pwd === "cheese" ? "Logged in successfully" : "Login attempt was not successful"
    // if (pwd === "cheese") {
    //     pwdResult = "Logged in successfully"
    // } else {
    //     pwdResult = "Login attempt was not successful"
    // }

} else {
    machineResult = "The machine is turned off. Turn it on to process your Login."
}
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
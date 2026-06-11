// // Math 1
// let finalResult;
// let evenOddResult;

// // Don't edit the code above here!

// // Add your code here
// let num1 = 4;
// let num2 = 8;
// let addition = num1 + num2;

// let num3 = 0;
// let num4 = 8;
// let subtract = num3 - num4;

// finalResult = addition * subtract;

// // Check if finalResult is an even number using one of the arithmetic operators
// // Store the result (0 for even, 1 for odd) in a variable called evenOddResult
// evenOddResult = finalResult % 2;
// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");

// const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
// para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;

// const para2 = document.createElement("p");
// const evenOddResultCheck = evenOddResult === 0 ? "The final result is even!" : "The final result is odd. Hrm.";
// para2.textContent = evenOddResultCheck;

// section.appendChild(para1);
// section.appendChild(para2);

// Math 2
// Final result should be 4633.33

// let result = 7 + 13 / 9 + 7;
// let result2 = (100 / 2) * 6;

// // Add your code here
// // assign the result back to result (use assignment shorthand).
// result *= result2;

// // Format result so that it has two decimal places
// let finalResult = result.toFixed(2);

// // Check the data type of finalResult using typeof
// // if (typeof finalResult === "string") {
// //     finalNumber = Number(finalResult);
// // }

// finalNumber = Number(finalResult);
// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = `Your finalResult is ${finalResult}`;
// const para2 = document.createElement("p");

// const finalNumberCheck =
//     isNaN(finalNumber) === false
// ? "finalNumber is a number type. Well done!"
//         : `Oops! finalNumber is not a number.`;
// para2.textContent = finalNumberCheck;

// section.appendChild(para1);
// section.appendChild(para2);

// Math 3

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
weightComparison = eleWeight < mouseWeight;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";
pwdMatch = pwd1 === pwd2;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

const weightTest = weightComparison ? "True — elephants do weigh less than mice!?" : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
    ? "True — an ostrich is indeed taller than a duck!"
    : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
    ? "True — the passwords match."
    : "False — the passwords do not match; please check them";
para1.textContent = weightTest;

section.appendChild(para1);
para2.textContent = heightTest;

section.appendChild(para2);

para3.textContent = pwdTest;
section.appendChild(para3);
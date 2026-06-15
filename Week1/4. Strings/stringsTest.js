// Test 1
// const quoteStart = 'Don\'t judge each day by the harvest you reap ';

// // Add your code here
// const quoteEnd = 'but by the seeds that you plant.'
// // Concatenate the two strings together to make a single string containing the complete quote.

// // const finalQuote = quoteStart + quoteEnd;
// const finalQuote = `${quoteStart}${quoteEnd};`
// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = finalQuote;
// section.appendChild(para1);


// Test 2
// const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
// const substring = "green eggs and ham";
// // Don't edit the code above here!

// // Add your code here
// const quoteLength = quote.length;
// const index = quote.indexOf(substring); // find where substring starts

// // const revisedQuote = `${quote.slice(0, index)} ${substring}`
// const revisedQuote = `${quote.slice(0, index + substring.length +1)}`
// // Don't edit the code below here!

// const section = document.querySelector("section");
// section.innerHTML = " ";

// const para1 = document.createElement("p");
// para1.textContent = `The quote is ${quoteLength} characters long.`;

// const para2 = document.createElement("p");
// para2.textContent = revisedQuote;

// section.appendChild(para1);
// section.appendChild(para2);

// Test 3
// const quote = "I dO nOT lIke gREen eGgS anD HAM";

// // Don't edit the code above here!
// // Add your code here
// let fixedQuote = quote.toLocaleLowerCase()

// // Get the first letter
// const firstLetter = fixedQuote.slice(0, 1);

// // Replace new line of statement to start with 'I'
// fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());

// // Replace "green eggs and ham" <- with -> "Nigerian Food.'
// fixedQuote = fixedQuote.replace("green eggs and ham", 'nigerian food.');

// const finalQuote = fixedQuote;
// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = finalQuote;
// section.appendChild(para1);

// Test 4
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!
// const total = Math.hypot(a, b)
const total = Math.sqrt(a **2 + b **2)
// Edit the string literal
const myString =
    `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${total}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
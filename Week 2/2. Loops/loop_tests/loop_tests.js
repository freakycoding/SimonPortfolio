// Loops 1
/*
const myArray = ["tomatoes",
    "chick peas",
    "onions",
    "rice",
    "black beans"];

const list = document.createElement("ul");
const section = document.querySelector("section");

section.appendChild(list);

// Don't edit the code above here!


// Add your code here
for (const veggie of myArray) {
    //create li tag to hold array items.
    const li = document.createElement("li");

    li.textContent = veggie; //assign viggies to li
    list.appendChild(li) //append
}
*/

// Loop 2
/*
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
    { name: "Chris", number: "1549" },
    { name: "Li Kang", number: "9634" },
    { name: "Anne", number: "9065" },
    { name: "Francesca", number: "3001" },
    { name: "Mustafa", number: "6888" },
    { name: "Tina", number: "4312" },
    { name: "Bert", number: "7780" },
    { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here
let findName = phonebook.findIndex(entry => entry.name === name); //findIndex Method

if (findName === - 1) {
    para.textContent = 'item not found!';
} else {
    para.textContent += `${phonebook[findName].name} number is ${phonebook[findName].number}`;
}

// B
let findName = phonebook.find(entry => entry.name === name); // find Method

if (!findName) {
    para.textContent = 'item not found!';
} else {
    para.textContent += `${findName.name} number is ${findName.number}`;
}*/

// Loops 3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Don't edit the code above here!

// Add your code here
while (i >= 2) {
    if (isPrime(i)) {
        para.textContent += `${i}, `
        console.log(i);
    }
    i--;
}
// Don't edit the code below here!

section.appendChild(para);

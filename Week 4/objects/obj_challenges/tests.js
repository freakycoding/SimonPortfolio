// Chaallenge 1
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here
const catName = cat["name"];
cat.color = "black";
cat.greeting();

// Don't edit the code below here!

// const section = document.querySelector("section");
// let para1 = document.createElement("p");
// let para2 = document.createElement("p");
// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;
// section.appendChild(para1);
// section.appendChild(para2);

// Test Challenge 2
let bandInfo;

// Don't edit the code above here!
const band = {
  name: "6Lack",
  nationality: "USA",
  genre: ["Hip-Hop", "RnB", "Rap"],
  members: 4,
  formed: 2020,
  is_Split: "Active" || false,
  albums: [
    {
      name: "Sunday Again",
      released: 2026,
    },
    {
      name: "Seasons",
      released: 2022,
    },
  ],
};

// Add your code here
bandInfo = `
The ${band.name} and his crew are active currently ${band.is_Split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.
`;
// Don't edit the code below here!

// Test Challenge 3
const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);

const catCustomObj = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

// Don't edit the code above here!

// Add your code here
const cat2 = {
  name: "Goffy",
  breed: "Evil",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};
// catCustomObj.greeting();
// cat2.greeting();

// Option 1
function CatClass(name,breed,color){
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = ()=>{
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }

}

// Option 2
function CatClass(name, breed, color) {
  // constructor(name,breed,color);
  this.name = name;
  this.breed = breed;
  this.color = color;
}
CatClass.prototype.greeting = function () {
  console.log(`Hello, said ${this.name} the ${this.breed}.`);
};

let cat1 = new CatClass("Kat", "ginger", "black")
cat1.greeting()

// Option 3
class CatClass {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

let cat1 = new CatClass("Kat", "ginger", "black");
cat1.greeting();

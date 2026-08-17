// const catString = [
//   {
//     name: "Lindy",
//     breed: "Cymric",
//     color: "white",
//     kittens: [
//       {
//         name: "Percy",
//         gender: "m",
//       },
//       {
//         name: "Thea",
//         gender: "f",
//       },
//       {
//         name: "Annis",
//         gender: "f",
//       },
//     ],
//   },
//   {
//     name: "Mina",
//     breed: "Aphrodite Giant",
//     color: "ginger",
//     kittens: [
//       {
//         name: "Doris",
//         gender: "f",
//       },
//       {
//         name: "Pickle",
//         gender: "f",
//       },
//       {
//         name: "Max",
//         gender: "m",
//       },
//     ],
//   },
//   {
//     name: "Antonia",
//     breed: "Ocicat",
//     color: "leopard spotted",
//     kittens: [
//       {
//         name: "Bridget",
//         gender: "f",
//       },
//       {
//         name: "Randolph",
//         gender: "m",
//       },
//     ],
//   },
// ];

const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  // paerse the string into JSON
  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    // 1st Approach: Build mother names
    if (i === cats.length - 1) {
      // console.log(cat.name)
      motherInfo += `and ${cat.name}.`;
    } else {
      motherInfo += `${cat.name}, `;
    }
    // 2st Approach:  Build mother names
    // motherInfo += cats.map((cat) => cat.name).join(", ") + "and .";

    for (const kitty of cat.kittens) {
      // console.log(kitty);
      total++;
      if (kitty.gender === "m") {
        male++;
      }
    }
  }

  const female = total - male;
  kittenInfo = `total cats: ${total}, Total male cats: ${male}, Total Female cats:${female}`;

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

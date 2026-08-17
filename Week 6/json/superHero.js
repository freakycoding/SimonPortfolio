async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

const superHeros = [
  {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes",
        ],
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel",
        ],
      },
    ],
  },
];

const section = document.querySelector("section");
const header = document.querySelector("header");

// Populating the header
for (const s of superHeros) {
  // create superhero header
  const h1 = document.createElement("h1");
  h1.textContent = s.squadName;

  header.appendChild(h1);

  const para = document.createElement("p");
  para.textContent = `Hometown: ${s.homeTown} // Formed: ${s.formed} still act`;
  header.appendChild(para);
}

// Creating the hero information cards
for (const heroes of superHeros) {
  // console.log(member.members)
  let heroName = heroes.members;

  for (const hero of heroName) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const myList = document.createElement("ul");

    // Populate members
    h2.textContent = hero.name;
    para1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    para2.textContent = `Age: ${hero.age}`;
    para3.textContent = `Superpowers`;

    // populate super powers
    const superPower = hero.powers;
    for (const power of superPower) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.append(listItem);
    }

    // Append all text
    article.appendChild(h2);
    article.appendChild(para1);
    article.appendChild(para2);
    article.appendChild(para3);
    article.appendChild(myList);
    section.appendChild(article);
  }
}

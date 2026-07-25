// const button = document.querySelector("button");
// const button = document.querySelectorAll("button");

// button.addEventListener("mouseover", () => {
//     const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`
//     document.body.style.backgroundColor = randomColor;
//     console.log(randomColor)
// })

// Event handler property
// button.onclick = () => {
//     const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`
//     document.body.style.backgroundColor = randomColor;
//     console.log(randomColor)
// }

// set the handler property to a named function
// function changeColor(e) {
//     const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`
//     // document.body.style.backgroundColor = randomColor;
//     e.target.style.backgroundColor = randomColor;
//     // Print the RGB Values
//     // console.log(e)
// }

// button.onclick = changeColor;

// For many buttons
// for (const btn of button) {
//     btn.onclick = changeColor;

// }
// // Random color function
// function random(number) {
//     return Math.floor(Math.random() * (number + 1))
// }

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (e) => {
//     output.textContent = `${e.key}`
// })


// const fname = document.querySelector("#fname")
// const lname = document.querySelector("#lname")
// const para = document.querySelector("p")
// const form = document.querySelector("form")

// para.textContent = ""

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if (!fname.value || !lname.value) {
//         para.textContent = 'You need to fill both names!'
//         return null;
//     }
//     alert("Message sent!")
// });

// const output = document.querySelector("#output");
// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// function handleClick(e) {
//     output.textContent += `You clicked ${e.currentTarget.tagName} element\n`
// }
// document.body.addEventListener("click", handleClick)
// container.addEventListener("click", handleClick)
// button.addEventListener("click", handleClick)

// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", (e) => {
//     e.stopPropagation();
//     video.play();
// });
// box.addEventListener("click", () => box.classList.add("hidden"));

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

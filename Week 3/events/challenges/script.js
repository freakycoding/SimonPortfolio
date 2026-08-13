// Events 1
const btn = document.querySelector("button");

// Add your code here
btn.addEventListener("click", (e) => {
    if (e.target.textContent === "Machine is on") {
        e.target.textContent = "Machine is off";
    } else {
        e.target.textContent = "Machine is on";
    }
})
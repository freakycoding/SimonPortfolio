const btn = document.querySelector("button");

// Add your code here

btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (btn.textContent == "Machine is off") {
        btn.textContent = "Machine is on"
    } else {
        btn.textContent = "Machine is off"

    }
})

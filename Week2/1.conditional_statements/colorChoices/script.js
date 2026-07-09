const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
    const choice = select.value;

    // ADD SWITCH STATEMENT
    switch (choice) {
        case "white":
            // select.value === "white" ? update("white", "black") : update("black", "white"); //ternary operator 
            update("white", "black")
            break;
        case "black":
            // select.value === "black" ? update("black", "white") : update("white", "black"); //ternary operator 
            update("black", "white")
            break;
        case "purple":
            // select.value === "purple" ? update("purple", "yellow") : update("yellow", "purple"); //ternary operator 
            update("purple", "yellow")
            break;
        case "yellow":
            // select.value === "yellow" ? update("yellow", "black") : update("black", "yellow"); //ternary operator 
            update("yellow", "black")
            break;
        case "psychedelic":
            update("lime", "purple")
            // select.value === "psychedelic" ? update("lime", "purple") : update("purple", "lime"); //ternary operator 
            break;

    }
});

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

const body = document.body;

// Create a div and set its attribute to class and named msgBox
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);

// Create message para and append to panel
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

// Create a close btn
const closeBtn = document.createElement("button");
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

// closeBtn Event Listiner
closeBtn.addEventListener("click", () => body.removeChild(panel));

const btn = document.querySelector('button');

// function displayMessage(msgText, msgType) {
//     // Create a div and set its attribute to class and named msgBox
//     const panel = document.createElement("div");
//     panel.setAttribute("class", "msgBox");
//     body.appendChild(panel);

//     // Create message para and append to panel
//     const msg = document.createElement("p");
//     msg.textContent = "This is a message box";
//     panel.appendChild(msg);

//     // Create a close btn
//     const closeBtn = document.createElement("button");
//     closeBtn.textContent = 'x';
//     panel.appendChild(closeBtn);

//     // closeBtn Event Listiner
//     closeBtn.addEventListener("click", () => body.removeChild(panel));
// }
// btn.addEventListener("click", displayMessage);

function displayMessage(msgText, msgType) {
    // initial Mode
    msgType = 'warning'

    if (msgType === "warning") {
        msg.style.backgroundImage = 'url("./images/warning.png")';
        panel.style.backgroundColor = 'red';
    } else if (msgType === "chat") {
        msg.style.backgroundImage = 'url("./images/chat.png")';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = "20px"
        // panel.style.backgroundColor = "yellow"
    }
    msg.textContent = msgText;
}

//Warning
btn.addEventListener("click", () => displayMessage("Your inbox is almost full — delete some mails", "warning"),
);

//Chat
// btn.addEventListener("click", () => displayMessage("Brian: Hi there, how are you today?", "chat"),
// );

const sect = document.querySelector('section')
const para = document.createElement('p');

para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para)

const text = document.createTextNode(" — the premier source for web development knowledge.");

const linkPara = document.querySelector('p')
linkPara.appendChild(text)

// to remove a node
// sect.removeChild(linkPara)

// When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove():
// linkPara.remove()

// Manupilation Style
para.style.color = "#155"
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// To add this class name to your element, use the element's classList's add() method:
para.classList.add("highlight");
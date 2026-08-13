const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

// Part 1
// "Underpants:6.99",
//     "Socks:5.99",
//     "T-shirt:14.99",
//     "Trousers:31.99",
//     "Shoes:23.99",

// const products = [
//     {
//         item: "Underpants",
//         price: 6.99
//     },
//     {
//         item: "Socks",
//         price: 5.99
//     },
//     {
//         item: "T-shirt",
//         price: 14.99
//     },
//     {
//         item: "Trousers",
//         price: 31.99
//     },
//     {
//         item: "Shoes",
//         price: 23.99
//     },
// ]

// Part 1
const products = [
    "Underpants:6.99",
    "Socks:5.99",
    "T-shirt:14.99",
    "Trousers:31.99",
    "Shoes:23.99"
]

// Part 2
for (const product of products) {

    // splits the current array item (name:price) into two separate items
    const productItem = product.split(":");

    // Part 3
    const item = productItem[0]
    let price = Number(productItem[1]); //converts to Number
    
    // Part 4
    // const productInvoice = `Product: ${item} - R${price}`;
    total += price;

    // Part 5
    let itemText = 0;

    itemText = `${item} - R${price}`

    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);

};

// Part 6

totalBox.textContent = `Total: R${total.toFixed(2)}`;
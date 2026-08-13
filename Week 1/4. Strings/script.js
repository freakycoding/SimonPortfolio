// const button = document.querySelector('button');

// function greetUser() {
//     const name = prompt('What is your name ? ');

//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to see you!.`;
//     // greeting.appendChild(name);
// }

// button.addEventListener('click', greetUser);

// const song = 'Fight for you';
// const score = 9;
// const highestScore = 10;

// const output = `I like the song ${song}. i gave it a score of ${(score / highestScore) * 100}%`;

// console.log(output)



/*the includes('String') method */
// const myName = 'Freaky Coding';

// if (myName.includes('oding')) {
//     console.log('oding was found in ', myName);
// } else {
//     console.log('No oding Match found!.')
// }


/*
    The indexOf(para, -1) method - retunrn the substring of searched
    if found, else returns the -1 ('Not found').

    - slice() for subtracting strings.
    **If you know that you want to extract all, you don't have to include the second parameter.
*/
// const tagline = "MDN - Resources for developers, by developers";
// console.log(tagline.indexOf('for'));

// console.log(tagline.slice(15))
// console.log(tagline)


// const cartItems = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];

// const itemsInCart = cartItems.at();

// if(itemsInCart === 'Laptop'){
//     console.log(`Laptop Category: ${itemsInCart}`)
// }else{
//     console.log('Catergory not Found!')
// }
// console.log(itemsInCart)
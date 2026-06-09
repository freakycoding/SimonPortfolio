/*
#Number's
- Converting strings to numbers with Number()
- Interger is a fractinoal number, it can be positive or negative (Pos: 2, Neg: -5)
- Floating number, numbers with decimal or decimal places (12.5, 56.58545)
- Decimal is base 10 (meaning it uses 0–9 in each digit);

- Binary — The lowest level language of computers; 0s and 1s
- Octal — Base 8, uses 0–7 in each digit.
- Hexadecimal — Base 16, uses 0–9 and then a–f in each digit.

MATH THEORY
- Returns the remainder left over after you've divided the left number 
into a number of integer portions equal to the right number.

- 8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).
- Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.
- 5 ** 2 (returns 25, which is the same as 5 * 5).

*/

// const canvas = document.getElementById('canvas');
// const para = document.querySelector('p');
// const ctx = canvas.getContext("2d");  // Extract the 2D context

// // let x = 50;
// // let x = 43+7;
// let x = (300 - 100) / 2;
// // let y = 50;
// // let y = 25*3;
// let y = x * 2

// ctx.clearRect(0, 0 , canvas.width, canvas.height);
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, x, y);
// para.textContent = `The rectangle is ${x}px wide and ${y}px height`

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);
function updateBtn() {
    if (btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        btn.textContent = 'The machine has started!'
    } else {
        btn.textContent = 'Start machine'
        btn.textContent = 'The machine is stopped.'
    };
};
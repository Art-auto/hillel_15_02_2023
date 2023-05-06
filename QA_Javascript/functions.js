let a = 6;
let b = 2;

if (a % b === 0) {
  console.log("Делиться: " + (a / b));
} else {
  console.log("Делиться c остатком: " + (a % b));
}

/* ----------------------------------------------------------- */


function drawTriangle(height, symbol) {
  let row = '';
  for (let i = 1; i <= height; i++) {
    row += symbol;
    console.log(row);
  }
}

drawTriangle(9, '/');


/* ----------------------------------------------------------- */


for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}


/* ----------------------------------------------------------- */
let n = 1000;
let iterations = 0;

while (n >= 50) {
  n /= 2;
  iterations++;
}

console.log("Результат: " + n);
console.log("Количество итераций: " + iterations);












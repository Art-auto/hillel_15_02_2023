// Задача #1
// Ділиться без залишку
var a = 15;
var b = 3;
var result = a % b;
if (result != 0) {
	console.log('Ділиться із залишком: ' + result);
} else {
	console.log('Ділиться, результат ділення: ' + (a / b));
}
// Ділиться із залишком

var a = 17;
var b = 2;
var result = a % b;
if (result != 0) {
	console.log('Ділиться із залишком: ' + result);
} else {
	console.log('Ділиться, результат ділення: ' + (a / b));
}

// Задача #2
function drawTriangle(size, symb) {
  let result = '';
  for (let i = 0; i < 10; i++) {
    for (let x = 0; x <= i; x++) {
      result += '#' ;
    }
    result += '\n';
  }
  return result;
}

console.log(drawTriangle(10, '#'));

  // Задача #3

  for (let i = 0; i < 100; i++){
    if(i%2 === 0){
    continue
    }
    console.log("непарні числа: i =", i )
    }


    // Задача #4
    var n = 1000;
    var num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log('Результат поділу менше 50: ' + n);
console.log('Кількість ітерацій: ' + num);






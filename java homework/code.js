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
function drawTriangle(length) {
    let line = '*';
    for (let i = 1; i < length; i++) {
      line += ' *';
    }
    return line;
  }
  for (let i = 1; i <= 5; i++) {
    console.log(drawTriangle(i));
  }

  // Задача #3

  for (let i = 0; i < 1000; i++){
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

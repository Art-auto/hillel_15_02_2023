 alert ('Hello! How are you doing?')

 var apples = 13 + 14
console.log (apples)

var lesson
lesson = 'Javascript'
var lesson_number = 20
console.log (lesson)
console.log (lesson_number)

var test=5
console.log(test)
var x
console.log(x)

var length
console.log(typeof length)
length = 16
console.log(typeof(length))
length = '16'
console.log(typeof(length))

var x = true
console.log(typeof x)
var cars = ["Volvo", "BMW", "Audi"]
console.log (typeof cars)
var date = new Date ()
console.log (date)


const PI = 3.14
console.log(PI)
 console.log (typeof PI)

 var a = "5"
var b = 2
var c = a + b
console.log(c)
console.log(typeof c)

var x = true
var y = false
var c = x || y
console.log(c)

var i=0
while (i<10){
    console.log('i=',i)
    i=i+1
}

for (let i=0; i<10; i++){
    if(i%2===0){
    continue}
    console.log("тільки непарні: i = ", i )
    }
    function sayHi() { 
        var x = 2+2
        console.log("Hello user")
        console.log("2+2=",x)
    }
    sayHi()

    function sum(a,b) {
        return a + b
        }
        let fin = sum(333,400)
        console.log(fin)


        for (let i = 0; i < 1000; i++){
            if(i%2 === 0){ 
            continue
            }
            console.log("непарні числа: i =", i )
            }
            
            

function drawTriangle(length)
 {
var line = ""; for (var і = 1; і <= length; і++) 
{ 
line += "*" 
} 
return line + "\n"; } 
console.log(drawTriangle(1));
console.log(drawTriangle(2));
console.log(drawTriangle(3));
console.log(drawTriangle(4));
console.log(drawTriangle(5));

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

 


var a = 15;
var b = 3;
var result = a % b;
if (result != 0) {
	console.log('Ділиться із залишком: ' + result);
} else {
	console.log('Ділиться, результат ділення: ' + (a / b));
}


var a = 17;
var b = 2;
var result = a % b;
if (result != 0) {
	console.log('Ділиться із залишком: ' + result);
} else {
	console.log('Ділиться, результат ділення: ' + (a / b));
}



    


var n = 1000;
var num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log('Результат поділу менше 50: ' + n);
console.log('Кількість ітерацій: ' + num);

var length
console.log(typeof length)


var i = 15
while (i<56){
console.log("i =", i )
i = i + 2
}

for (let i = 0; i<10; i++) {
    console.log("i =", i)
    }
    

    for (let i = 1; i<10; i+=2) {
        console.log("i =", i)
        }
        
       
      
        for (let i=2; i<100; i++){
            if(i%2===1){ 
            continue
            }
            console.log("тільки парні: i =", i )
            }
            
            function sum(a,b) {
                return a + b
                }
                let calculator = sum(100,10)
                console.log(calculator)
                
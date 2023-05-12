var a = 8
var b = 3
var c = a % b
console.log('Ділиться з залишком', c )




function  drawTriangle(c,s) {
    var d = ''
    for (var increment = 0; increment < c; increment++){
        d = d  + s;
        console.log(d);  
        }
    }
drawTriangle(5,'*')



for (var i=0; i<100;i++) {
    if (i%2 == 1) {
        console.log(i);  
    }
  }


  var n = 1000
var d = 0
while (n > 50){
    n = n / 2
    d = d + 1
  console.log(n)  
}
//console.log(n)
console.log('кількість ділень ' + d)
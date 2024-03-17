alert("как вычислить площадь а??????")
var a = prompt("Введите сторону а")
var b = prompt("Введите сторону b")
var s
var p
a = parseInt(a)
b = parseInt(b)
s = a*b
p = 2*(a+b)
console.log(`${s} = ${a} * ${b}`)
console.log(`${p} = 2 * (${a} + ${b})`)
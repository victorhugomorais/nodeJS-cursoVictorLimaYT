var fsoma = require("./soma")
var fsub = require("./sub")
var fdiv = require("./div")
var fmult = require("./mult")

var sum = fsoma(1,2)
console.log("soma é: " + sum)

var sub = fsub(5,4)
console.log("subtração é: " + sub)

var div = fdiv(4,2)
console.log("divisao é :" + div)

mult = fmult(10,10)
console.log(mult)
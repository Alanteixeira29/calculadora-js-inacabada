var result = 0.0
var num1 = prompt("Qual é o primeiro número?")
num1 = parseFloat(num1)
var op = prompt("Qual o operador?")
var num2 = prompt("Qual o segundo número?")
num2 = parseFloat(num2)

switch( op ){
    case "+" :
        result = num1 + num2; break;
    case "-" :
        result = num1 - num2; break;
    case "*" :
        result = num1 * num2; break;
    case "/" :
        result = num1 / num2; break;
    default :
        alert("Operação inválida")
}
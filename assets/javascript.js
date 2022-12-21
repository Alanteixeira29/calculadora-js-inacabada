
var result = 0.0
var num1 = prompt("Qual é o primeiro número? (Utilize ponto e não virgula!)")
num1 = parseFloat(num1)
var op = prompt("Qual o operador?")
var num2 = prompt("Qual o segundo número? (Utilize ponto e não virgula!)")
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
    case "%" :
        result = ((num2 / 100) * num1); break;
    default :
        alert("Operação inválida"); break;
}

    alert("Resultado: " + result)
    alert("Pressione F5 para utilizar a calculadora novamente!")
    reload(forceReload)
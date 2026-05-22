
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Erro: Divisão por zero!" : a / b;

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+': return somar(num1, num2);
        case '-': return subtrair(num1, num2);
        case '*': return multiplicar(num1, num2);
        case '/': return dividir(num1, num2);
        default: return "Operação inválida. Use: +, -, * ou /.";
    }
}
console.log("Soma (10 + 5):", calculadora(10, 5, '+'));
console.log("Subtração (10 - 5):", calculadora(10, 5, '-'));
console.log("Multiplicação (10 * 5):", calculadora(10, 5, '*'));
console.log("Divisão (10 / 2):", calculadora(10, 2, '/'));
console.log("Divisão por zero:", calculadora(10, 0, '/'));

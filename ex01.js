function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { 
    if (b === 0) return "Erro: Divisão por zero!";
    return a / b; 
}

console.log("Soma (5 + 3):", somar(5, 3));
console.log("Subtração (10 - 4):", subtrair(10, 4));
console.log("Multiplicação (6 * 7):", multiplicar(6, 7));
console.log("Divisão (20 / 4):", dividir(20, 4));

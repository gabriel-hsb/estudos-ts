"use strict";
// typescript infere o tipo da variável
// é boa prática não tipar sempre
let preco = 200;
const precoBarato = preco < 300 ? true : "ta caro";
// precoBarato pode ser
//   true | "ta caro"
// não posso fazer o seguinte:
// const precoBarato2: boolean = preco < 300 ? true : 'ta caro'
// pois precoBarato2 pode ser string também (ts sabe mesmos em executar o código)
// correto para o caso:
const precoBarato3 = preco < 300 ? true : "ta caro";
// ** NÃO PRECISA TIPAR NESSE CASO
// -- fim apenas educativo
//--------------
//--------------
// exercício
// Conserte a função com TypeScript
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("  BEatRIz   "));
//--------------
//--------------
// exercício
// Conserte as funções com TypeScript
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (total && input) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const number = Number(value);
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${number + 100 - number * 0.2}`;
    }
}
function totalMudou() {
    const value = Number(input?.value);
    localStorage.setItem("total", String(value));
    calcularGanho(value);
}
input?.addEventListener("keyup", totalMudou);

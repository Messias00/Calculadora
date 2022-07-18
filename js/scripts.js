let valor;

function botao(num) {
    valor = document.calc.visor.value += num;
}

function reset() {
    document.calc.visor.value = '';
}

function calcula() {
    let resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}
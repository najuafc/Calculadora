function calcularValores() {

    let operacao = document.getElementById('operacao').value;
    let valor1 = parseFloat(document.getElementById('txtValor1').value);
    let valor2 = parseFloat(document.getElementById('txtValor2').value);
    let resultado;

    if (operacao === '+') {
        resultado = valor1 + valor2
        console.log(resultado)
    } else if (operacao === '-') {
        resultado = valor1 - valor2
    } else if (operacao === '*') {
        resultado = valor1 * valor2
    } else if (operacao === '/') {
        resultado = valor1 / valor2
    }

    document.getElementById('txtResultado').innerHTML = resultado;
}
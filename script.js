const form = document.querySelector("#form");
const elementoResultado = document.querySelector("#resultado");

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const numero = Number(evento.target.elements['numero'].value);

    let numeroValidado = validarNumero(numero);
    let resultado = somarDivisores(numeroValidado);

    if (numeroValidado) {
        elementoResultado.innerHTML = `
        <span class="box">Resultado: ${resultado}</span>
        `
    } else {
        elementoResultado.innerHTML = '';
    }
});

function validarNumero(numero) {
    if ((numero <= 0)) {
        alert("Digite um número positivo maior que ZERO");
    } else if (!Number.isInteger(numero)) {
        alert("Digite um número inteiro!")
    } else {
        return numero;
    }
}

function somarDivisores(numero) {
    let resultado = 0;

    for (let i = 0; i < numero; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            resultado += i;
        }
    }
    return resultado;
}
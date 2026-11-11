const formulario= document.querySelector("#formularioDesconto")
const valorInput= document.querySelector("#valor")
const descontoInput= document.querySelector("#desconto")
const spanResultado= document.querySelector("#resultado")

function calcularDesconto(valor, desconto) {
    let resultado =valor - (valor * desconto /100);
    return resultado;
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let resultado = calcularDesconto(valorInput.value, descontoInput.value);
    spanResultado.textContent = resultado;
})
function pratoSelecionado(item) {
    const verificacao = document.querySelector(".pratos .selecionado")
    const iconeItem = item.querySelector(".prato-check.escondido")

    if (verificacao) {
        verificacao.classList.remove("selecionado")
        const verificaIcone = verificacao.querySelector(".prato-check")
        verificaIcone.classList.add("escondido")
    }

    if (verificacao === item) {
        item.classList.toggle("selecionado")
    }

    if (iconeItem) {
        iconeItem.classList.remove("escondido")
    }

    item.classList.toggle("selecionado")
    
    habilitaBotao()
}

function bebidaSelecionada(item) {
    const verificacao = document.querySelector(".bebidas .selecionado")
    const iconeItem = item.querySelector(".bebida-check.escondido")
  
    if (verificacao) {
        verificacao.classList.remove("selecionado")
        const verificaIcone = verificacao.querySelector(".bebida-check")
        verificaIcone.classList.add("escondido")
    }
    
    if (verificacao === item) {
    item.classList.toggle("selecionado")
    }

    if (iconeItem) {
    iconeItem.classList.remove("escondido")
    }

    item.classList.toggle("selecionado")

    habilitaBotao()
}

function sobremesaSelecionada(item) {
    const verificacao = document.querySelector(".sobremesas .selecionado")
    const iconeItem = item.querySelector(".sobremesa-check.escondido")
   
    if (verificacao) {
        verificacao.classList.remove("selecionado")
        const verificaIcone = verificacao.querySelector(".sobremesa-check")
        verificaIcone.classList.add("escondido")
    }

    if (verificacao === item) {
        item.classList.toggle("selecionado")
    }

    if (iconeItem) {
    iconeItem.classList.remove("escondido")
    }

    item.classList.toggle("selecionado")

    habilitaBotao()
}

let verificaPrato;
let verificaBebida;
let verificaSobremesa;

function habilitaBotao() {

    const botao = document.querySelector(".botao")

    verificaPrato = document.querySelector(".pratos .selecionado");
    verificaBebida = document.querySelector(".bebidas .selecionado");
    verificaSobremesa = document.querySelector(".sobremesas .selecionado");

    if (verificaPrato && verificaBebida && verificaSobremesa) {
        botao.innerHTML = "Fechar pedido";
        botao.classList.add("botao-selecionado");

    } else {
        botao.innerHTML = "Selecione os 3 itens<br> para fechar o pedido"
        botao.classList.remove("botao-selecionado");
    }
}

function finalizaPedido(botao) {
    const botaoAtivo = document.querySelector(".botao-selecionado")
    const telaBranca = document.querySelector(".transparencia")

    if (botaoAtivo) {
        telaBranca.classList.remove("escondido")

        calculaValores()
    }

}

let nomeDoPrato;
let nomeDaBebida;
let nomeDaSobremesa;
let total = 0;

function calculaValores() {

    // Nome e preço do prato

    const elementoPratoNome = verificaPrato.querySelector("h3")
    nomeDoPrato = elementoPratoNome.innerHTML

    const elementoPratoValor = verificaPrato.querySelector(".preco")
    const precoPratoComCifrao = elementoPratoValor.innerHTML
    const precoPratoSemCifrao = precoPratoComCifrao.replace(/[^0-9,]/g, '')
    const precoPratoComPonto = parseFloat(precoPratoSemCifrao.replace(',', '.'))
    const precoPratoComPontoDoisZeros = precoPratoComPonto.toFixed(2)

    const elementoResultadoNomePrato = document.querySelector(".prato-escolhido .nome-prato")
    const elementoResultadoPrecoPrato = document.querySelector(".prato-escolhido .valor-prato")
    elementoResultadoNomePrato.innerHTML = nomeDoPrato
    elementoResultadoPrecoPrato.innerHTML = precoPratoComPontoDoisZeros

    // Nome e preço da bebida
    const elementoBebidaNome = verificaBebida.querySelector("h3")
    nomeDaBebida = elementoBebidaNome.innerHTML

    const elementoBebidaValor = verificaBebida.querySelector(".preco")
    const precoBebidaComCifrao = elementoBebidaValor.innerHTML
    const precoBebidaSemCifrao = precoBebidaComCifrao.replace(/[^0-9,]/g, '')
    const precoBebidaComPonto = parseFloat(precoBebidaSemCifrao.replace(',', '.'))
    const precoBebidaComPontoDoisZeros = precoBebidaComPonto.toFixed(2)

    const elementoResultadoNomeBebida = document.querySelector(".bebida-escolhida .nome-bebida")
    const elementoResultadoPrecoBebida = document.querySelector(".bebida-escolhida .valor-bebida")
    elementoResultadoNomeBebida.innerHTML = nomeDaBebida
    elementoResultadoPrecoBebida.innerHTML = precoBebidaComPontoDoisZeros

    // Nome e preço da sobremesa
    const elementoSobremesaNome = verificaSobremesa.querySelector("h3")
    nomeDaSobremesa = elementoSobremesaNome.innerHTML

    const elementoSobremesaValor = verificaSobremesa.querySelector(".preco")
    const precoSobremesaComCifrao = elementoSobremesaValor.innerHTML
    const precoSobremesaSemCifrao = precoSobremesaComCifrao.replace(/[^0-9,]/g, '')
    const precoSobremesaComPonto = parseFloat(precoSobremesaSemCifrao.replace(',', '.'))
    const precoSobremesaComPontoDoisZeros = precoSobremesaComPonto.toFixed(2)

    const elementoResultadoNomeSobremesa = document.querySelector(".sobremesa-escolhida .nome-sobremesa")
    const elementoResultadoPrecoSobremesa = document.querySelector(".sobremesa-escolhida .valor-sobremesa")
    elementoResultadoNomeSobremesa.innerHTML = nomeDaSobremesa
    elementoResultadoPrecoSobremesa.innerHTML = precoSobremesaComPontoDoisZeros

    // Somando valores
    const elementoTotal = document.querySelector(".total .valor-total")
    const somaDeValores = Number(precoPratoComPontoDoisZeros) + Number(precoBebidaComPontoDoisZeros) + Number(precoSobremesaComPontoDoisZeros)
    const totalArredondado = Math.round(somaDeValores * 100) / 100;
    total = totalArredondado.toFixed(2)
    elementoTotal.innerHTML = total
}

function cancelarPedido() {
    const telaBranca = document.querySelector(".transparencia")
    telaBranca.classList.add("escondido")
}

function enviaPedido() {
    
const mensagem =
`Olá, gostaria de fazer o pedido:
- Prato: ${nomeDoPrato}
- Bebida: ${nomeDaBebida}
- Sobremesa: ${nomeDaSobremesa}
Total: ${total}`

    const url = `https://wa.me/+5512992109379?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

}
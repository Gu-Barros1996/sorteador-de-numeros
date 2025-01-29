function sortear() {
    //na declaração colocamos .value para atribuir valor ao documento hmtl
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    //declaração do loop de repetição muito utilizada quando você sabe exatamente quantas vezes 
    // deseja repetir um bloco de código "for (inicialização; condição; incremento)
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(ate,ate);
        //declaração de uma estrurura de repetição q permite executar um bloco de código enquanto uma condição específica for verdadeira.
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }
        if (de >=ate) {
            alert('Campo "de número" deve ser inferior ao campo "até o numero". VERIFIQUE! ');
            return
        }
        if (quantidade >(ate - de + 1)){
            alert('Campo "Quantidade"deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Reveja se inseriu os dados corretos!');
            return
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorteados}</label>`
    alterarStatusBotao();
}

//função para gerar um numero aleatorio.
function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    
}
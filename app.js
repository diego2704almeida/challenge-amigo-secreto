//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomesInclusos = [];
let numeroSorteado = [];
function adicionarAmigo() {
    let nomeIncluso = document.querySelector('input').value;
    if (nomeIncluso == [])
    {
        alert('Digite um Nome!');
        limparCampo();
    } else { 
            if (listaDeNomesInclusos.includes(nomeIncluso))
            {
                alert('Nome já Existe na Lista!');
            } else { 
                    listaDeNomesInclusos.push(document.querySelector('input').value);
                    }
           }
    console.log(listaDeNomesInclusos);
    console.log(listaDeNomesInclusos.length);
    limparCampo();
    exibirListaNomes();
    
}

function exibirListaNomes() {
    exibirTextoNaTela('ul', listaDeNomesInclusos);    
}

function sortearAmigo(){
    //console.log(listaDeNomesInclusos.length);
    exibirNomeSorteado();    //alert(listaDeNomesInclusos);
}

function exibirNomeSorteado() {
    if (listaDeNomesInclusos.length == 0)
        {
            alert('Lista Vazia!');
        } else { 
                    numeroSorteado = (parseInt(Math.random() * listaDeNomesInclusos.length + 1));
                    //console.log (numeroSorteado);
                    //console.log (numeroSorteado - 1);
                    exibirTextoNaTela('ul2',`O Nome Sorteado foi:           ${listaDeNomesInclusos[numeroSorteado - 1]}`);
               }
}

function limparCampo() {
    let nomeIncluso = [];
    nomeIncluso = document.querySelector('input');
    nomeIncluso.value = '';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
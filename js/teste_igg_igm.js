
function mostra(frase) {

    alert(frase);
    //pulaLinha(); 
}

var igmInformado = document.querySelector("#igm").value;
var iggInformado = document.querySelector("#igg").value;

function resultado () {

    if (igmInformado <= 0.8  && iggInformado < 1.4) {mostra("IgM e IgG não reagentes. Você não teve o vírus SARS-CoV-2.");}

    if (igmInformado > 1.2  && iggInformado < 1.4) {mostra("IgM reagente e IgG não reagente. Você tem o vírus SARS-CoV-2 e está transmitindo.");}

    if (igmInformado > 1.2  && iggInformado >= 1.4) {mostra("IgM e IgG reagentes. Já passou a fase viral, mas está transmitindo.");}

    if (igmInformado <= 0.8  && iggInformado >= 1.4) {mostra("IgM não reagente e IgG reagante. Você tem o vírus SARS-CoV-2 e está transmitindo.");}

}

var button = document.querySelector("#botao-diagnostico");

button.onclick = resultado;

/* Caso queira adicionar o resultado embaixo do formulário */

/*
function exibirResultadoTela(frase) {
    alert(frase);
    //pulaLinha(); 

    // cria um elemento 'p'
    var paragrafo = document.createElement("p");
    // cria o texto que vai na tela
    var conteudo = document.createTextNode(frase);
    // adiciona o texto dentro do elemento 'p'
    paragrafo.appendChild(conteudo);

    // pega na tela um elemento pra gente se basear onde deve colcoar a frase
    var elemento = document.getElementById("form-group");
    // agora adiciona o elemento 'p' que a gente criou ali em cima (já com a frase) dentro do elemento que a gente pegou na tela
    elemento.appendChild(paragrafo);
}

// Precisaria criar esse botão no html fora da tag <form>
var botaoResultado = document.querySelector("#botao-exibir-resultado");
botaoResultado.onclick = resultado;
*/
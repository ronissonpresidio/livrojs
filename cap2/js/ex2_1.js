// Declara a função mostraOla
function mostraOla() {

 // obtém o conteúdo do campo (com id="nome")
 let nome = document.getElementById("nome").value;

 // exibe o parágrafo (resposta): "Olá" e o nome informado
 document.getElementById("resposta").textContent = "Olá " + nome;

}
// cria uma referência ao botao (com id="mostrar")
let mostrar = document.getElementById("mostrar");

// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostraOla
mostrar.addEventListener("click", mostraOla);
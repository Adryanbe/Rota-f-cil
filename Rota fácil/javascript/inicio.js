const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// essa é a parte que verifica se o usuario está cadastrado
if (!usuarioLogado) {
    window.location.href = "index.html";
} else {
    // nome na pagina inicial
    document.getElementById("mensagem").textContent =
        "Bem-vindo, " + usuarioLogado.nome + "!";
}

// link do batão de sair
const linkSair = document.getElementById("sair");

// remoção do ususario ao clicar em sair
linkSair.addEventListener("click", function() {
    localStorage.removeItem("usuarioLogado");
});
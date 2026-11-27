
// Busca o formulário de login
const formLogin = document.getElementById("formLogin");

// Verifica se o formulário foi encontrado
if (formLogin) {

    // Executa quando o formulário é enviado
    formLogin.addEventListener("submit", function(event) {

        // Impede o recarregamento da página
        event.preventDefault();

    

        // Pega os dados digitados
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // procura se os dados colocados corespodem a um usuario cadastrado
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // procura o usuário
        const usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.email === email && usuario.senha === senha;
        });

        // verifica se o usuario está no local storage
        if (usuarioEncontrado) {

            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            // direcionamento para a página inicial
            window.location.href = "inicio.html";

        } else {
            alert("E-mail ou senha incorretos.");
        }
    });

} else {
    alert("Erro: formulário de login não encontrado!");
}

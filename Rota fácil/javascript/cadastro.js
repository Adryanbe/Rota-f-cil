const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    // dados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // local storage dos usuarios já cadastrados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o e-mail já está cadastrado
    const existe = usuarios.find(function(usuario) {
        return usuario.email === email;
    });

    if (existe) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // push para colocar o novo usuario da lista
    usuarios.push(novoUsuario);

    // salvamento da lista de ususarios no local storage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado!");
    // a pós o cadastro o usuario é redirecionado para a tela de longin
    window.location.href = "index.html";
});
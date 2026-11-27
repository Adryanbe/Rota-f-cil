// lista de alguns destinos
const destinos = [
    // Rio de Janeiro 🦜
    {
        id: 1,
        nome: "Rio de Janeiro",
        pais: "Brasil",
        tipo: "Nacional",
        descricao: "Conheça o Cristo Redentor e as praias cariocas."
    },
    //Salvador 🛟
    {
        id: 2,
        nome: "Salvador",
        pais: "Brasil",
        tipo: "Nacional",
        descricao: "Visite o Pelourinho e conheça a cultura baiana."
    },
    //Paris 🗼
    {
        id: 3,
        nome: "Paris",
        pais: "França",
        tipo: "Internacional",
        descricao: "Conheça a Torre Eiffel e os museus da cidade."
    },
    //Roma V
    {
        id: 4,
        nome: "Roma",
        pais: "Itália",
        tipo: "Internacional",
        descricao: "Explore o Coliseu e os monumentos históricos."
    }
];

// olha se tem um usuario on-line
const usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioAtual) {
    window.location.href = "index.html";
}

// a lista de destinos
const listaDestinos = document.getElementById("listaDestinos");

// mostra os favoritos ou a tela sem nenhum destino
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// mostra os destinos
function mostrarDestinos(lista) {
    // limpa a área onde ficam os destinos
    listaDestinos.innerHTML = "";

    // se não tiver um destino aparecera uma mensagem
    if (lista.length === 0) {
        listaDestinos.innerHTML = '<p class="mensagem">Nenhum destino encontrado.</p>';
        return;
    }

    // olha cada destino na lista
    lista.forEach(function(destino) {
        // criação de um cartão para o destino
        const cartao = document.createElement("article");
        cartao.className = "destino";
        // Coloca a imagem do destino como fundo do cartão

        // olha se o destino está nos favoritos
        const estaFavorito = favoritos.includes(destino.id);

        // estrutura do cartão dos destinos
    cartao.innerHTML = `
    <h3>${destino.nome}</h3>
    <p><strong>País:</strong> ${destino.pais}</p>
    <p><strong>Categoria:</strong> ${destino.tipo}</p>
    <p>${destino.descricao}</p>

    <!-- Botão de favoritos -->
    <button class="botaoFavorito">
        ${estaFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    </button>

    <!-- Botão para abrir a rota no Google Maps -->
        <button class="botaoRota">Ver rota no Google Maps</button>
`;

        // botão dentro do cartão
        // Busca o botão de favoritos
const botao = cartao.querySelector(".botaoFavorito");

// Busca o botão do Google Maps
const botaoRota = cartao.querySelector(".botaoRota");

// Quando clicar, abre o Google Maps com o destino escolhido
botaoRota.addEventListener("click", function() {
    const destinoCompleto = destino.nome + ", " + destino.pais;

    const endereco = encodeURIComponent(destinoCompleto);

    window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" + endereco,
        "_blank"
    );
});

        // botão de colocar e retirar do sfavoritos
        botao.addEventListener("click", function() {
            if (favoritos.includes(destino.id)) {
                // Retira o destino da lista de favoritos
                favoritos = favoritos.filter(function(id) {
                    return id !== destino.id;
                });
            } else {
                // adiciona aos favoritos
                favoritos.push(destino.id);
            }

            // salva os itens no local storage
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

            // atualiza os cartões na tela
            mostrarDestinos(lista);
        });

        // põe o cartão no site
        listaDestinos.appendChild(cartao);
    });
}

// botão que mostra todos os destinos
document.getElementById("mostrarTodos").addEventListener("click", function() {
    mostrarDestinos(destinos);
});

// botão para mostrar os favoritos
document.getElementById("mostrarFavoritos").addEventListener("click", function() {
    const destinosFavoritos = destinos.filter(function(destino) {
        return favoritos.includes(destino.id);
    });

    mostrarDestinos(destinosFavoritos);
});

// mostra todos os destinos ao abrir a página das rotas
mostrarDestinos(destinos);
// Array de produtos (com URLs de imagens adicionadas)
const produtos = [
    { id: 1, nome: "Bolo de Chocolate", preco: 29.90, imagem: "/resource/img/produtos/bolodechocolate.png" },
    { id: 2, nome: "Pudim", preco: 12.50, imagem: "/resource/img/produtos/pudim.png" },
    { id: 3, nome: "Brigadeiro", preco: 1.50, imagem: "/resource/img/produtos/brigadeiro.png" },
    { id: 4, nome: "Bolo de Cenoura", preco: 25.00, imagem: "/resource/img/produtos/bolodecenoura.png" },
    { id: 5, nome: "Coxinha", preco: 5.00, imagem: "/resource/img/produtos/coxinha.png" }
];

// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o contador do carrinho
const contadorCarrinho = document.getElementById('contador-carrinho');
contadorCarrinho.textContent = carrinho.length;

// Função para exibir os produtos
function mostrarProdutos() {
    const produtosLista = document.getElementById('produtos-lista');
    produtosLista.innerHTML = ''; // Limpa a lista antes de exibir

    // Loop pelos produtos para gerar o HTML
    produtos.forEach((produto) => {
        const produtoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>`;
        produtosLista.innerHTML += produtoHTML; // Adiciona o produto à lista
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId); // Encontra o produto pelo ID
    if (produto) {
        carrinho.push(produto); // Adiciona o produto ao carrinho
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
        contadorCarrinho.textContent = carrinho.length; // Atualiza o contador
        alert(`${produto.nome} foi adicionado ao carrinho!`); // Alerta ao usuário
    }
}

// Inicializa a exibição dos produtos ao carregar a página
mostrarProdutos();
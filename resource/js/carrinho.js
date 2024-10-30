document.addEventListener('DOMContentLoaded', onInit);

// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o contador do carrinho na navbar
const contadorCarrinho = document.getElementById('contador-carrinho');
contadorCarrinho.textContent = carrinho.length;

// Função para exibir os itens do carrinho
function mostrarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    carrinhoLista.innerHTML = ''; // Limpa a lista antes de exibir

    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = '<p class="text-center">Seu carrinho está vazio.</p>';
        document.getElementById('total').textContent = '0.00'; // Atualiza o total para 0
        return;
    }

    let total = 0; // Variável para calcular o total

    // Loop pelos itens do carrinho
    carrinho.forEach((produto, index) => {
        const produtoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                        <button class="btn btn-danger" onclick="removerDoCarrinho(${index})">Remover</button>
                    </div>
                </div>
            </div>`;
        carrinhoLista.innerHTML += produtoHTML; // Adiciona o produto à lista
        total += produto.preco; // Soma o preço do produto ao total
    });

    // Atualiza o total na página
    document.getElementById('total').textContent = total.toFixed(2);
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto); // Adiciona o produto ao carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    const contadorCarrinho = document.getElementById('contador-carrinho');
    contadorCarrinho.textContent = carrinho.length; // Atualiza o contador
    mostrarCarrinho(); // Atualiza a exibição do carrinho
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o produto pelo índice
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    mostrarCarrinho(); // Atualiza a exibição do carrinho
    const contadorCarrinho = document.getElementById('contador-carrinho');
    contadorCarrinho.textContent = carrinho.length; // Atualiza o contador
}

// Evento para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', function () {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
    } else {
        window.location.href = "pagamento.html"; // Redireciona para a página de pagamento
    }
});

// Inicializa a exibição dos itens do carrinho ao carregar a página
function onInit() {
    mostrarCarrinho(); // Chama para mostrar o carrinho ao inicializar
}








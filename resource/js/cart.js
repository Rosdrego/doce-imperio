// Inicializa o contador de itens do carrinho
let contadorCarrinho = 0;

// Função para carregar o contador do carrinho do armazenamento local
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('contadorCarrinho');
    if (carrinhoSalvo) {
        contadorCarrinho = parseInt(carrinhoSalvo);
        document.getElementById('contador-carrinho').textContent = contadorCarrinho;
    }
}

// Função para adicionar item ao carrinho
function adicionarItem(nome, preco) {
    contadorCarrinho++; // Incrementa o contador

    // Atualiza o contador no elemento da navbar
    document.getElementById('contador-carrinho').textContent = contadorCarrinho;

    // Salva o contador no armazenamento local
    localStorage.setItem('contadorCarrinho', contadorCarrinho);

    // Alerta ao usuário
    alert(`${nome} adicionado ao carrinho!`);
}

// Adiciona um evento que é chamado quando o DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    carregarCarrinho(); // Carrega o contador do carrinho quando a página é carregada
});






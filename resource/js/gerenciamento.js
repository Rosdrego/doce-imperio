// Simulação de autenticação do usuário
const usuarioAutenticado = true; // Mude para false para ocultar

// Função para verificar e carregar produtos do localStorage
function carregarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    return produtos;
}

// Função para salvar produtos no localStorage
function salvarProdutos(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para cadastrar um produto
function cadastrarProduto(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const preco = parseFloat(document.getElementById('precoProduto').value);

    const produtos = carregarProdutos(); // Carrega produtos existentes
    const novoProduto = { nome, descricao, preco };
    produtos.push(novoProduto); // Adiciona novo produto
    salvarProdutos(produtos); // Salva a lista atualizada
    listarProdutos(); // Atualiza a lista de produtos no gerenciamento
    document.getElementById('cadastroProduto').reset();
}

// Função para editar um produto
function editarProduto(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('idProduto').value);
    const nome = document.getElementById('novoNomeProduto').value;
    const descricao = document.getElementById('novaDescricaoProduto').value;
    const preco = parseFloat(document.getElementById('novoPrecoProduto').value);

    const produtos = carregarProdutos(); // Carrega produtos existentes

    if (id >= 0 && id < produtos.length) {
        produtos[id] = { nome, descricao, preco }; // Atualiza o produto
        salvarProdutos(produtos); // Salva a lista atualizada
        listarProdutos(); // Atualiza a lista de produtos no gerenciamento
        document.getElementById('edicaoProduto').reset();
    } else {
        alert('Produto não encontrado.');
    }
}

// Função para remover um produto
function removerProduto(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('idProdutoExcluir').value);

    const produtos = carregarProdutos(); // Carrega produtos existentes

    if (id >= 0 && id < produtos.length) {
        produtos.splice(id, 1); // Remove o produto
        salvarProdutos(produtos); // Salva a lista atualizada
        listarProdutos(); // Atualiza a lista de produtos no gerenciamento
        document.getElementById('idProdutoExcluir').value = '';
    } else {
        alert('Produto não encontrado.');
    }
}

// Função para listar produtos
function listarProdutos() {
    const produtos = carregarProdutos(); // Carrega produtos existentes
    const lista = document.getElementById('listaProdutos');
    lista.innerHTML = ''; // Limpa a lista

    if (produtos.length === 0) {
        lista.innerHTML = '<p>Nenhum produto cadastrado.</p>';
    } else {
        produtos.forEach((produto, index) => {
            lista.innerHTML += `<p><strong>ID:</strong> ${index} <strong>Nome:</strong> ${produto.nome} <strong>Descrição:</strong> ${produto.descricao} <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>`;
        });
    }
}

// Exibir o gerenciamento de produtos apenas para usuários autenticados
if (!usuarioAutenticado) {
    alert('Você não tem permissão para acessar esta página.');
    window.location.href = 'produtos.html'; // Redireciona para a página de produtos
} else {
    listarProdutos(); // Carrega e exibe produtos se o usuário estiver autenticado
}





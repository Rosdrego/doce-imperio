// Inicialização do carrinho
let cart = [];

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCountElement = document.getElementById('contador-carrinho');
    cartCountElement.innerText = cart.length;
}

// Função para adicionar um produto ao carrinho
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1; // Aumenta a quantidade se já existir
    } else {
        cart.push({ ...product, quantity: 1 }); // Adiciona o novo produto
    }
    updateCartCount();
}

// Função para exibir os produtos na página
function displayProducts(products) {
    const productsContainer = document.querySelector('.row');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Preço: R$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Função para lidar com o cadastro de produtos
function handleProductRegistration(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);

    // Simular um ID para o produto, você pode implementar um sistema de ID mais robusto
    const newProduct = { id: Date.now(), name: nome, price: preco };
    
    // Exibe o novo produto na página
    displayProducts([newProduct]);

    // Limpa o formulário
    document.getElementById('cadastro-form').reset();
}

// Função para alternar a exibição da seção de cadastro
function toggleCadastro() {
    const cadastroSection = document.getElementById('cadastro-section');
    cadastroSection.style.display = cadastroSection.style.display === 'none' ? 'block' : 'none';
}

// Função para lidar com o envio da newsletter
function handleNewsletterSubscription(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value;

    // Aqui você pode adicionar lógica para enviar o email, por exemplo, usando uma API

    // Exibe uma mensagem de sucesso
    const message = document.getElementById("message");
    message.textContent = `Obrigado por se inscrever, ${email}!`;
    message.classList.add("alert", "alert-success");
    
    // Limpa o campo de entrada
    document.getElementById("newsletterForm").reset();
}

// Adiciona o evento para o formulário de cadastro de produtos
document.getElementById('cadastro-form').addEventListener('submit', handleProductRegistration);

// Adiciona o evento ao botão de cadastro
document.getElementById('toggle-cadastro').addEventListener('click', toggleCadastro);

// Adiciona o evento para o formulário de newsletter
document.getElementById("newsletterForm").addEventListener("submit", handleNewsletterSubscription);

// Exibir produtos iniciais (você pode carregar isso de um banco de dados ou API)
const initialProducts = [
    { id: 1, name: 'Doce de Leite', price: 10.00, image: 'doces/2072308678-doce-de-leite-cremoso (1).webp' },
    { id: 2, name: 'Brigadeiro Gourmet', price: 15.00, image: 'brgadeirogourmet/brigadeirogourmet2.webp' },
    { id: 3, name: 'Bolo de Pote', price: 20.00, image: 'doces/355179-original.jpg' }
];

// Inicializa a exibição dos produtos
displayProducts(initialProducts);








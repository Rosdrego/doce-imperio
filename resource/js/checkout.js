document.addEventListener("DOMContentLoaded", onInit);


function onInit() {
    
    const deliveryForm = document.getElementById('delivery-form');
    const paymentForm = document.getElementById('payment-form');
    const orderSummary = document.querySelector('.order-summary');
    const finalizeButton = document.getElementById('finalizar-compra');

    finalizeButton.addEventListener('click', (event) => finalizePurchase(event, deliveryForm, paymentForm, orderSummary));
}


function finalizePurchase(event, deliveryForm, paymentForm, orderSummary) {
    event.preventDefault();

    const name = deliveryForm.name.value.trim();
    const city = deliveryForm.city.value.trim();
    const address = deliveryForm.address.value.trim();
    const postalCode = deliveryForm['postal-code'].value.trim();
    const state = deliveryForm.state.value.trim();
    
    
    if (!name || !city || !address || !postalCode || !state) {
        alert("Por favor, preencha todos os campos de entrega.");
        return;
    }

    
    const paymentMethod = paymentForm.querySelector('input[name="payment-method"]:checked');
    if (!paymentMethod) {
        alert("Por favor, selecione um método de pagamento.");
        return;
    }

    
    if (paymentMethod.value === "credit-card") {
        const cardName = paymentForm['card-name'].value.trim();
        const cardNumber = paymentForm['card-number'].value.trim();
        const expiryDate = paymentForm['expiry-date'].value.trim();
        const cvv = paymentForm['cvv'].value.trim();

        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            alert("Por favor, preencha todos os campos do cartão de crédito.");
            return;
        }
    }

    
    orderSummary.innerHTML = `
        <h4>Resumo do Pedido</h4>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cidade:</strong> ${city}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>CEP:</strong> ${postalCode}</p>
        <p><strong>Estado:</strong> ${state}</p>
        <p><strong>Método de Pagamento:</strong> ${paymentMethod.nextSibling.textContent.trim()}</p>
    `;

    
    if (paymentMethod.value === "credit-card") {
        orderSummary.innerHTML += `
            <p><strong>Nome no Cartão:</strong> ${paymentForm['card-name'].value}</p>
            <p><strong>Número do Cartão:</strong> ${paymentForm['card-number'].value.replace(/\d(?=\d{4})/g, "*")}</p>
            <p><strong>Data de Validade:</strong> ${paymentForm['expiry-date'].value}</p>
            <p><strong>CVV:</strong> ${paymentForm['cvv'].value.replace(/./g, "*")}</p>
        `;
    }

    
    alert("Compra finalizada com sucesso!");
}

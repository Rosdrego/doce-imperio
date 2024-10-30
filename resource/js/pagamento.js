// pagamento.js
document.getElementById('form-pagamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const numeroCartao = document.getElementById('numero-cartao').value.trim();
    const dataExpiracao = document.getElementById('data-expiracao').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Validação simples dos campos
    if (nome === '' || numeroCartao === '' || dataExpiracao === '' || cvv === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação do número do cartão (apenas números e tamanho)
    const numeroCartaoRegex = /^\d{16}$/;
    if (!numeroCartaoRegex.test(numeroCartao)) {
        alert('Número do cartão inválido. Deve conter 16 dígitos.');
        return;
    }

    // Validação da data de expiração (formato MM/AA)
    const dataExpiracaoRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!dataExpiracaoRegex.test(dataExpiracao)) {
        alert('Data de expiração inválida. Use o formato MM/AA.');
        return;
    }

    // Validação do CVV (apenas 3 dígitos)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
        alert('CVV inválido. Deve conter 3 dígitos.');
        return;
    }

    // Simula o sucesso do pagamento
    alert('Pagamento realizado com sucesso!');

    // Redireciona para a página de confirmação ou de finalização
    window.location.href = "index.html"; // Mude para a página que desejar após o pagamento
});


document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    const terms = document.getElementById('terms').checked;

    // Valida se as senhas correspondem
    if (password !== confirmPassword) {
        alert('As senhas não correspondem!');
        return;
    }

    // Aqui você pode adicionar lógica para verificar se o email já está em uso
    // Exemplo: se (emailExiste(email)) { alert('Email já cadastrado!'); return; }

    if (!terms) {
        alert('Você deve aceitar os termos de serviço.');
        return;
    }

    // Aqui você pode adicionar lógica para enviar os dados para o servidor
    alert('Conta criada com sucesso!');

    // Redireciona para a página inicial após criar conta
    window.location.href = 'index.html'; // Altere para o caminho correto do seu arquivo de início
});
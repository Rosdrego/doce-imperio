document.getElementById("recover-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const messageElement = document.getElementById("message");

    // Validação simples de e-mail
    if (!validateEmail(email)) {
        messageElement.textContent = "Por favor, insira um e-mail válido.";
        messageElement.style.color = "red";
        messageElement.classList.remove("hidden");
        return;
    }

    // Simulando o envio de um link de recuperação
    sendRecoveryLink(email)
        .then(() => {
            messageElement.textContent = `Um link de recuperação foi enviado para ${email}.`;
            messageElement.style.color = "green";
            messageElement.classList.remove("hidden");
            emailInput.value = ""; // Limpa o campo de e-mail
        })
        .catch((error) => {
            messageElement.textContent = `Erro: ${error}`;
            messageElement.style.color = "red";
            messageElement.classList.remove("hidden");
        });
});

// Função para validar e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função simulada para enviar o link de recuperação
function sendRecoveryLink(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulando uma condição de sucesso ou erro
            const success = Math.random() > 0.1; // 90% de chance de sucesso
            if (success) {
                resolve();
            } else {
                reject("Falha ao enviar o e-mail. Tente novamente mais tarde.");
            }
        }, 1000); // Simula um atraso de 1 segundo
    });
}

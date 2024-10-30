document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pedido-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

       
        const tipoDoce = document.getElementById('tipo-doce').value;
        const sabores = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        const quantidade = document.getElementById('quantidade').value;
        const embalagem = document.getElementById('embalagem').value;
        const notas = document.getElementById('notas').value;

        
        if (sabores.length === 0) {
            alert('Por favor, escolha pelo menos um sabor.');
            return;
        }

        const mensagem = `
            Pedido Confirmado!\n
            Tipo de Doce: ${tipoDoce}\n
            Sabores: ${sabores.join(', ')}\n
            Quantidade: ${quantidade}\n
            Embalagem: ${embalagem}\n
            Notas: ${notas ? notas : 'Nenhuma nota adicionada.'}
        `;
        
        alert(mensagem);
        
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
        // Por exemplo, usando fetch ou XMLHttpRequest
    });
});

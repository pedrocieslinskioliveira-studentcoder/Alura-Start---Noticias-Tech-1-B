// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnInteragir');
    const feedback = document.getElementById('feedback');

    // Adiciona evento de clique ao botão
    botao.addEventListener('click', () => {
        // Altera o texto do botão e exibe a mensagem de agradecimento
        botao.textContent = "Curtido!";
        botao.style.backgroundColor = "#28a745";
        botao.style.color = "#ffffff";
        botao.disabled = true; // Desativa o botão após o clique
        
        // Revela a mensagem de feedback tirando a classe 'escondido'
        feedback.classList.remove('escondido');
    });
});
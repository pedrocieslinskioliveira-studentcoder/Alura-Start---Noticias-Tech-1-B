// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de interagir da página
    const botoes = document.querySelectorAll('.btnInteragir');

    botoes.forEach(botao => {
        // Encontra o feedback específico deste artigo (o elemento irmão seguinte)
        const feedback = botao.nextElementSibling;

        botao.addEventListener('click', () => {
            const estaCurtido = botao.getAttribute('data-curtido') === 'true';

            if (!estaCurtido) {
                // Ação de Curtir
                botao.setAttribute('data-curtido', 'true');
                botao.textContent = "Curtido!";
                botao.classList.add('curtido');
                feedback.classList.remove('escondido');
            } else {
                // Ação de Descurtir (Retirar feedback)
                botao.setAttribute('data-curtido', 'false');
                botao.textContent = "Gostou da notícia? Deixe seu curtir!";
                botao.classList.remove('curtido');
                feedback.classList.add('escondido');
            }
        });
    });
});

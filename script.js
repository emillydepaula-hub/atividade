const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const passoAtual = botao.closest('.passo');
        const proximoId = botao.getAttribute('data-proximo');
        
        // Oculta o passo atual
        passoAtual.classList.remove('ativo');
        
        // Mostra o próximo passo
        const proximoPasso = document.getElementById(`passo-${proximoId}`);
        if(proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});
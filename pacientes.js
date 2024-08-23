
const excluirBotoes = document.querySelectorAll('.excluir');


excluirBotoes.forEach(botao => {
    botao.addEventListener('click', function() {
        
        const linha = this.closest('tr');
        
        
        linha.querySelectorAll('td').forEach(td => {
            td.innerHTML = '';  
        });
    });
});
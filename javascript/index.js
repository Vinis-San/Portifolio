function trocarDiv(divId, botaoId) {
    document.querySelectorAll('.conteudo').forEach(div => div.classList.remove('ativo'));
    document.getElementById(divId).classList.add('ativo');

    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('botao-ativo'));
    document.getElementById(botaoId).classList.add('botao-ativo');
}

// Exibir a primeira seção como padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    trocarDiv('Connect', 'btnConnect');
});

// Redirecionamento ao clicar no botão
function redirecionar(url) {
    window.open(url, "_blank"); // Abre em nova aba
}

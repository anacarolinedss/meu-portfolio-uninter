// Função responsável por mudar o conteúdo das abas
function mudaTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Oculta todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões de navegação
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba clicada e adiciona a classe "active" ao botão correspondente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Para garantir que a primeira aba seja mostrada ao carregar a página
// Este código foi movido para um <script> no final do <body> em index.html
// para garantir que todos os elementos HTML estejam carregados antes de tentar acessá-los.
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.tablink').click(); // Simula o clique no primeiro botão ('Início')
// });

function mudaTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Este código foi movido para um <script> no final do <body> em index.html
// para garantir que todos os elementos HTML estejam carregados antes de tentar acessá-los.
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.tablink').click(); // Simula o clique no primeiro botão ('Início')
// });
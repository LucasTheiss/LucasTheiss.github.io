document.addEventListener('DOMContentLoaded', function () {
    // Quando carrega o html, define variaveis para o hover dos cursos acontecer adequadamente
    var outros = document.getElementById('outros') 
    var imersao = document.getElementById('imersao')

    outros.value = 0 // Mantém uma variável para o hover
    imersao.value = 1

    outros.addEventListener('mouseover', function () {
        if (outros.value == 0) {
            outros.style.opacity = 1
        }
    })

    outros.addEventListener('mouseout', function () {
        if (outros.value == 0) {
            outros.style.opacity = 0.5
        }
    })

    imersao.addEventListener('mouseover', function () {
        if (imersao.value == 0) {
            imersao.style.opacity = 1
        }
    })

    imersao.addEventListener('mouseout', function () {
        if (imersao.value == 0) {
            imersao.style.opacity = 0.5
        }
    })

    // Função para mudar o fundo da pagina inicial infinitamente
    function switchBackground() {
        var background = document.getElementById("background");
        var divTexto = document.getElementById('div-texto');

        var backgrounds = [
            'assets/background1.png',
            'assets/background2.png'
        ]

        var textos = [
            '<center class="texto" id="texto">A excelência é conquistada <br>através da prática constante</center>',
            '<center class="texto" id="texto">Mova-se com a <span style="color: rgb(0, 213, 255)">Move</span></center><br>',
        ]

        var currentIndex = 1;

        function updateContent() {
            background.style.opacity = 0.8;
            divTexto.style.opacity = 0.8;

            setTimeout(function() {
                background.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
                divTexto.innerHTML = textos[currentIndex];

                setTimeout(function() {
                    background.style.opacity = 1;
                    divTexto.style.opacity = 1;
                }, 150);

                currentIndex = (currentIndex + 1) % backgrounds.length;
            }, 50);
        }

        setInterval(updateContent, 7000);
    }
    switchBackground()
})

function mudarCursos(num){
    // Renderiza os cursos conforme a aba selecionada
    var cursoImagens = document.getElementById('cursos-imagens')

    if (num == 0){
        outros.style.opacity = 0.5 
        imersao.style.opacity = 1

        outros.value = 0 // Value mantem uma variavel para saber qual versao da aba cursos esta ativada
        imersao.value = 1

        cursoImagens.innerHTML = '<div onclick="mostrarDescricao(1)"><img src="assets/harmonizacaofacial.jpg"></div>'
    }
    else if (num == 1){
        cursos = [// Nome das imagems dos cursos
            'botox', 
            'harmonizacaofacial-mini', 
            'rinomodelacao', 
            'tricologia'
        ]
        outros.style.opacity = 1
        imersao.style.opacity = 0.5

        outros.value = 1
        imersao.value = 0

        cursoImagens.innerHTML = ''
        for (var i = 0, l = cursos.length; i < l; i++){
            cursoImagens.innerHTML += `<div onclick="mostrarDescricao(${i + 1})"><img src="assets/${cursos[i]}.jpg"></div>`
        }
    }
}

// Função para mostrar a descrição no modal
function mostrarDescricao(num) {
    var modal = document.getElementById('myModal');
    var title = document.getElementById('modal-title');
    var description = document.getElementById('modal-description');

    // Atualiza o conteúdo do modal conforme o card clicado
    if (num == 1) {
        title.innerHTML = 'Curso de Botox';
        description.innerHTML = 'Breve descrição sobre o curso de Botox.';
    } else if (num == 2) {
        title.innerHTML = 'Curso de Harmonização Facial';
        description.innerHTML = 'Breve descrição sobre o curso de Harmonização Facial.';
    } else if (num == 3) {
        title.innerHTML = 'Curso de Rinomodelação';
        description.innerHTML = 'Breve descrição sobre o curso de Rinomodelação.';
    } else if (num == 4) {
        title.innerHTML = 'Curso de Tricologia';
        description.innerHTML = 'Breve descrição sobre o curso de Tricologia.';
    }

    // Exibe o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clicar fora da janela do modal
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function diferenciais(){
    // Renderiza a aba de diferenciais
    var diferenciais = document.getElementById('image-grid')
    for (i = 0; i < 6; i++){
        diferenciais.innerHTML += `<img src="assets/diferencial${i + 1}.png">`
    }
}

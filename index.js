document.addEventListener('DOMContentLoaded', function () {
    // Quando carrega o html, define variaveis para o hover dos cursos acontecer adequadamente
    
    if (window.innerWidth > 958){
        var botaoCurso = document.getElementById('botaoCurso') 
        var imersao = document.getElementById('imersao')

        botaoCurso.value = 1 // Mantém uma variável para o hover
        imersao.value = 0

        botaoCurso.addEventListener('mouseover', function () {
            if (botaoCurso.value == 0) {
                botaoCurso.style.opacity = 1
            }
        })

        botaoCurso.addEventListener('mouseout', function () {
            if (botaoCurso.value == 0) {
                botaoCurso.style.opacity = 0.5
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
    }
    mudarCursos(1)
    mudarCursos(0)
    const estruturaswiper = new Swiper('.swiper-estrutura', {
        direction: 'horizontal',
        // loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '#estrutura-next',
            prevEl: '#estrutura-prev',
        },
        pagination: {
            el: '.estrutura-pagination',
            clickable: true,
        },
    });
    const depoimentoswiper = new Swiper('.swiper-depoimento', {
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        
        navigation: {
            nextEl: '#depoimento-next',
            prevEl: '#depoimento-prev',
        },
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            1049: {
                slidesPerView: 3,
            },
            1388: {
                slidesPerView: 4,
            },
        },
    });
})

function mobileMenuToggle(){
    let menu = document.getElementById("mobile-menu-list")
    let menuIcon = document.getElementById("menu-icon")
    
    if (menuIcon.classList.contains('active')){
        menuIcon.classList.remove("active")
        menu.classList.remove("active")
        return
    }
    menuIcon.classList.toggle("active")
    menu.classList.toggle("active")
}

let swiper
async function mudarCursos(num){
    // Renderiza os cursos conforme a aba selecionada
    let response = await fetch('assets/cursos/cursos.json') 
    let data = await response.json()
    let cursoImagens = document.getElementById('swiper-wrapper')

    let listaCursos = num == 1 ? data.imersao : data.curso

    botaoCurso.style.opacity = num == 1 ? 0.5 : 1
    imersao.style.opacity = num == 0 ? 0.5 : 1

    botaoCurso.value = num == 1 ? 0 : 1
    imersao.value = num == 0 ? 0 : 1
    
    // let elements = [
    //     document.getElementById('swiper-pagination'), 
    //     document.getElementById('swiper-button-prev'), 
    //     document.getElementById('swiper-button-next')
    // ]
    // if (listaCursos.length <= 1){
    //     elements.forEach(element => {
    //         element.style.display = 'none'
    //     })
    // } else {
    //     elements.forEach(element => {
    //         element.style.display = 'block'
    //     })
    // }

    cursoImagens.innerHTML = '' 
    listaCursos.forEach(curso => {
        cursoImagens.innerHTML += `
                <div class='swiper-slide'>
                    <img onclick="mostrarDescricao(${curso.id})" src="assets/cursos/${curso.imagem}" alt="${curso.nome}">
                </div>
            `
    })

    if (swiper) {
        swiper.destroy(true, true);
    }

    // Inicializar o Swiper novamente
    swiper = new Swiper('.swiper', {
        // Configurações do Swiper
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        centeredSlides: listaCursos.length == 1 ? true : false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1049: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1388: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
    });
}
mudarCursos(0)

function mostrarDescricao(num) {
    var modal = document.getElementById('myModal');
    var title = document.getElementById('modal-title');
    var description = document.getElementById('modal-description');

    let conteudos
    if (botaoCurso.value == 1){
        conteudos = [
            {
                "titulo": "Curso de Botox",
                "descricao": "Breve descrição sobre o curso de Botox.",
            },
            {
                "titulo": "Curso de Harmonização Facial",
                "descricao": "Breve descrição sobre o curso de Harmonização Facial.",
            },
            {
                "titulo": "Curso de Rinomodelação",
                "descricao": "Breve descrição sobre o curso de Rinomodelação.",
            },
            {
                "titulo": "Curso de Tricologia",
                "descricao": "Breve descrição sobre o curso de Tricologia.",
            }
        ]
    } else {
        conteudos = [
            {
                "titulo": "Curso de Botox",
                "descricao": "Breve descrição sobre o curso de Botox.",
            }
        ]
    }

    title.innerHTML = conteudos[num].titulo
    description.innerHTML = conteudos[num].descricao

    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function diferenciais(){
    var diferenciais = document.getElementById('image-grid')
    for (i = 0; i < 6; i++){
        diferenciais.innerHTML += `<img src="assets/diferencial${i + 1}.png">`
    }
}
diferenciais()
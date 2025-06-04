document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 958){
        function switchBackground() {
            var background = document.getElementById("background");
            var divTexto = document.getElementById('div-texto');

            var backgrounds = [
                '../assets/background1.png',
                '../assets/background2.png'
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
    const estruturaswiper = new Swiper('.swiper-estrutura', {
        direction: 'horizontal',
        grabCursor: true,
        // centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.estrutura-next',
            prevEl: '.estrutura-prev',
        },
        pagination: {
            el: '.estrutura-pagination',
            clickable: true,
        },
    });
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        grabCursor: true,
        // centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
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
                slidesPerView: 3,
            },
        },
    });
    depoimentoswiper.on('slideChange', () => {
  document.querySelectorAll('.video-depoimento').forEach(video => {
    video.pause();
    video.style.display = 'none';
    const img = video.closest('.card-depoimento').querySelector('.imagem-depoimento');
    if (img) img.style.display = 'block';
  });
});
})

window.onscroll = function () {
    const botao = document.getElementById("voltar-topo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    botao.style.display = "flex";
    } else {
    botao.style.display = "none";
    }
};

// Função para voltar ao topo 
function voltarAoTopo() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
}

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
        diferenciais.innerHTML += `<img src="../assets/diferenciais/Slogans.zip - ${22 + i}.png">`
    }
}
diferenciais()

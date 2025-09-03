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

function carregarHeader() {
    const pathname = window.location.pathname;
    const pages = pathname.endsWith('paciente-modelo/') || pathname.endsWith('quem-somos/');
    const cursos = ['tricologia/', 'perfiloplastia/', 'harmonizacao-facial/'].some(curso => pathname.endsWith(curso));
    const imersao = pathname.endsWith('harmonizacao-facial/');
    const politica = pathname.endsWith('politica/') || pathname.endsWith('politica');
    const index = !(pages || cursos || imersao || politica);

    let headerHTML = `
        <header class="header"
    `;

    headerHTML += `>
            <div>
                <a`;
    if (index) {
        headerHTML += ` href=""`;
    } else if (cursos) {
        headerHTML += ` href="../../"`;
    } else if (pages || politica) {
        headerHTML += ` href="../"`;
    }
    headerHTML += `>
                    <div class="logo" id="div-logo">
                        <img src="../../assets/logo.png">
                    </div>
                </a>
            </div>
            <div id="menu">
                <ul>`;
    if (index) {
        headerHTML += `
                    <li><a href="#scroll-cursos">Nossos cursos</a></li>
                    <li><a href="#diferenciais">Diferenciais</a></li>  
                    <li><a href="#depoimento">Depoimentos</a></li>  
                    <li><a href="quem-somos/">Quem somos</a></li>  
                    <li><a href="../paciente-modelo">Paciente modelo</a></li>
                `;
    } else if (cursos) {
        headerHTML += `
                    <li><a href="../../">Início</a></li>
                    <li><a href="#conteudo-programatico">`;
        headerHTML += !imersao ? `Conteúdo programático` : `Módulos`;
        headerHTML += `</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="../../quem-somos/">Quem somos</a></li>  
                    <li><a href="../../paciente-modelo/">Paciente modelo</a></li>
                `;
    } else {
        headerHTML += `<li><a href="../">Início</a></li>`;
        headerHTML += `<li><a href="../quem-somos">Quem somos</a></li>`;
        headerHTML += `<li><a href="../paciente-modelo">Paciente Modelo</a></li>`;
    }

    headerHTML += `
                </ul>
                <div class="mobile-menu" id="mobile-menu">
                    <div class="menu-icon" id="menu-icon" onclick="mobileMenuToggle()">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                </div>
            </div>
        </header>
        <ul class="mobile-menu-list" id="mobile-menu-list">
    `;

    if (index) {
        headerHTML += `
                <li class="mobile-menu-item"><a href="#scroll-cursos">Nossos cursos</a></li>
                <li class="mobile-menu-item"><a href="#diferenciais">Diferenciais</a></li>  
                <li class="mobile-menu-item"><a href="#depoimento">Depoimentos</a></li>  
                <li class="mobile-menu-item"><a href="quem-somos/" target="_blank">Quem somos</a></li>  
                <li class="mobile-menu-item"><a href="paciente-modelo/">Paciente modelo</a></li>
            `;
    } else if (cursos) {
        headerHTML += `
                <li class="mobile-menu-item"><a href="../../">Início</a></li>
                <li class="mobile-menu-item"><a href="../../quem-somos/">Quem somos</a></li>
                <li class="mobile-menu-item"><a href="../../paciente-modelo/">Paciente Modelo</a></li>
                <li class="mobile-menu-item"><a href="#conteudo-programatico">`;
        headerHTML += !imersao ? `Conteúdo programático` : `Módulos`;
        headerHTML += `</a></li>
                <li class="mobile-menu-item"><a href="#faq">FAQ</a></li>
            `;
    } else {
        headerHTML += `<li class="mobile-menu-item"><a href="../">Início</a></li>`;
        headerHTML += `<li class="mobile-menu-item"><a href="../quem-somos/">Quem somos</a></li>`;
        headerHTML += `<li class="mobile-menu-item"><a href="../paciente-modelo/">Paciente Modelo</a></li>`;
    }

    headerHTML += `</ul>`;

    let element = document.querySelector('main');
    let mudanca = false;
    if (!element) {
        element = document.body;
        mudanca = true;
    }
    element.insertAdjacentHTML('afterbegin', headerHTML);

    if (mudanca || cursos || imersao || politica) {
        document.querySelector('header').style.backgroundColor = '#00244a';
        document.querySelector('header').style.paddingLeft = '10px';
        document.querySelector('header').style.paddingRight = '10px';
        document.querySelector('header').style.height = '75px';
        document.querySelector('#mobile-menu-list').style.marginTop = '75px';
    }
}

function carregarFooter() {
    const pathname = window.location.pathname;
    const politica = pathname.endsWith('politica/') || pathname.endsWith('politica');

    let footerHTML = `
        <footer>
            <center id="footer-titulo">
                <div id="suporte">
                    Contate o suporte
                    <form>
                        <input id="email" name="email" placeholder="E-mail" type="email">
                        <input id="nome" name="nome" placeholder="Nome" type="text">
                        <input id="mensagem" name="mensagem" placeholder="Mensagem" type="text"> 
                        <button>Enviar</button>
                    </form>
                </div>
                <hr>
                <div class="informacoes">
                    <div>Rua Miguel Matte, 687, Edifício Evolution Corporate<br class="mobile-no-display"><br>Bairro Pioneiros, Balneário Camboriú - SC, 88331 - 030<br><br>Telefone: +55 (47) 99616-0560<br class="mobile-no-display"><br>E-mail: contato@movemedical.com.br</div>
                    <div>
                        <center id="redes">
                            <br>Redes sociais<br>
                            <a style="text-decoration: none" href="https://www.instagram.com/move.medical" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 400" fill="#fff">
                                    <path d="M349.33 69.33H162.67C108.45 69.33 69.33 108.45 69.33 162.67v186.66c0 54.22 39.12 93.34 93.34 93.34h186.66c54.22 0 93.34-39.12 93.34-93.34V162.67c0-54.22-39.12-93.34-93.34-93.34zM464 349.33c0 63.57-51.1 114.67-114.67 114.67H162.67C99.1 464 48 412.9 48 349.33V162.67C48 99.1 99.1 48 162.67 48h186.66C412.9 48 464 99.1 464 162.67v186.66z"/>
                                    <path d="M256 144c-61.86 0-112 50.14-112 112s50.14 112 112 112 112-50.14 112-112-50.14-112-112-112zm0 186.67c-41.23 0-74.67-33.44-74.67-74.67s33.44-74.67 74.67-74.67 74.67 33.44 74.67 74.67-33.44 74.67-74.67 74.67z"/>
                                    <circle cx="393.6" cy="118.4" r="17.07"/>
                                </svg>
                            </a> &nbsp;&nbsp;
                            <a style="text-decoration: none" target="_blank" href="https://www.tiktok.com/@move.medical"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 200" fill="#ffffff">
                                    <path d="M208 64c-17.67 0-32-14.33-32-32V16a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v144a24 24 0 1 1-24-24 8 8 0 0 0 8-8V96a8 8 0 0 0-8-8 72 72 0 1 0 72 72v-57a64 64 0 0 0 32 8 8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8z"/>
                                </svg>
                            </a> &nbsp;&nbsp;
                            <a style="text-decoration: none; overflow: hidden; border-radius: 20px;" target="_blank" href="https://youtube.com/@movemedical-z5w">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 100 70">
                                    <defs>
                                        <mask id="cutout">
                                            <rect width="100" height="70" fill="white"/>
                                            <polygon points="40,22 68,35 40,48" fill="black"/>
                                        </mask>
                                    </defs>
                                    <rect width="100" height="70" rx="25" fill="#FFFFFF" mask="url(#cutout)"/>
                                </svg>
                            </a><br>
                        </center>
                        <center>
    `;

    if (politica) {
        footerHTML += `     <a id="politica" href="" style="color: white;">Política de privacidade</a>`;
    } else {
        footerHTML += `     <a id="politica" href="../../politica/" style="color: white;">Política de privacidade</a>`;
    }

    footerHTML += `
                        </center>
                    </div>
                    <br><div id="right-side-desktop">RESIMED LTDA<br  class="mobile-no-display"><br>CNPJ 46.976.124/0001-08<br></div><br>
                </div>
            </center>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

carregarHeader();
carregarFooter();

function alternarFAQ(event) {
    const titulo = event.currentTarget;
    const sinal = titulo.querySelector('.sinal');
    const conteudo = titulo.nextElementSibling;

    if (!sinal || !conteudo) return;

    const isAbrindo = !sinal.classList.contains('abrir');

    sinal.classList.toggle('abrir', isAbrindo);
    sinal.classList.toggle('fechar', !isAbrindo);

    if (!isAbrindo) {
        conteudo.classList.add('mostrar');
        conteudo.classList.remove('oculto');
    } else {
        conteudo.classList.remove('mostrar');

        conteudo.addEventListener('transitionend', function handleTransitionEnd(e) {
            if (e.propertyName === 'max-height') {
                conteudo.classList.add('oculto');
                conteudo.removeEventListener('transitionend', handleTransitionEnd);
            }
        });
    }
}

document.querySelectorAll('.titulo-faq').forEach(titulo => {
    titulo.addEventListener('click', alternarFAQ);
});

// Script dos videos
const cards = document.querySelectorAll('.card-depoimento') || null;

if (cards != null){
    cards.forEach(card => {
        const img = card.querySelector('.imagem-depoimento');
        const video = card.querySelector('.video-depoimento');

        // Mostrar vídeo e tocar
        img.addEventListener('click', () => {
            // Pausa todos os outros vídeos
            document.querySelectorAll('.video-depoimento').forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.style.display = 'none';
                    const parent = v.closest('.card-depoimento');
                    const siblingImg = parent.querySelector('.imagem-depoimento');
                    if (siblingImg) siblingImg.style.display = 'block';
                }
            });

            img.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        // Pausar vídeo e voltar para imagem
        video.addEventListener('click', () => {
            video.pause();
            video.style.display = 'none';
            img.style.display = 'block';
        });
    });
}

const path = window.location.pathname;
if (path == "/index.html" || path == "/"){
    document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 958){
        function switchBackground() {
            var background = document.querySelector(".background-content");
            var divTexto = document.getElementById('div-texto');

            var backgrounds = [
                '../assets/background2.avif',
                '../assets/background3.avif'  
            ]

            var textos = [
                '<center class="texto" id="texto">A excelência é conquistada <br>através da prática constante</center>',
                '<center class="texto" id="texto">Mova-se com a <span style="color: rgb(0, 213, 255)">Move</span></center><br>',
            ]

            var currentIndex = 0; 

            function updateContent() {
                background.style.opacity = 0;
                divTexto.style.opacity = 0;

                setTimeout(function() {
                    currentIndex = (currentIndex + 1) % backgrounds.length; 
                    background.src = backgrounds[currentIndex];
                    divTexto.innerHTML = textos[currentIndex];

                    background.style.opacity = 1;
                    divTexto.style.opacity = 1;
                }, 1000); 
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
}
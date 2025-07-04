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
    const pages = pathname.endsWith('paciente-modelo/') || pathname.endsWith('quem-somos/')
    const cursos = ['tricologia/', 'perfiloplastia/', 'harmonizacao-facial/'].some(curso => pathname.endsWith(curso));
    const imersao = pathname.endsWith('harmonizacao-facial/')
    const index = !(pages || cursos || imersao);

    let headerHTML = `
        <header class="header"` 

        
        headerHTML += `>
            <div>
                <a` 
                if (index){
                    headerHTML += ` href=""`
                } else if (cursos) {
                    headerHTML += ` href="../../"`
                } else if (pages){
                    headerHTML += ` href="../"`
                }
                headerHTML +=`>
                    <div class="logo" id="div-logo">
                        <img src="../../assets/logo.png">
                    </div>
                </a>
            </div>
            <div id="menu">
                <ul>`
            if (index){
                headerHTML += `
                    <li><a href="#scroll-cursos">Nossos cursos</a></li>
                    <li><a href="#diferenciais">Diferenciais</a></li>  
                    <li><a href="#depoimento">Depoimentos</a></li>  
                    <li><a href="quem-somos/">Quem somos</a></li>  
                    <li><a href="../paciente-modelo">Paciente modelo</a></li>
                `
            } else if (cursos){
                headerHTML += `
                    <li><a href="../../">Início</a></li>
                    <li><a href="#conteudo-programatico">
                `
                headerHTML += !imersao ? `Conteúdo programático` : `Módulos`
                
                headerHTML += `</a></li>`

                headerHTML += `
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="../../quem-somos/">Quem somos</a></li>  
                    <li><a href="../../paciente-modelo/">Paciente modelo</a></li>
                `
            } else{
                headerHTML += `<li><a href="../">Início</a></li>`
                headerHTML += `<li><a href="../quem-somos">Quem somos</a></li>`
                headerHTML += `<li><a href="../paciente-modelo">Paciente Modelo</a></li>`
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
        `
        if (index){
            headerHTML += `
                <li class="mobile-menu-item"><a href="#scroll-cursos">Nossos cursos</a></li>
                <li class="mobile-menu-item"><a href="#diferenciais">Diferenciais</a></li>  
                <li class="mobile-menu-item"><a href="#depoimento">Depoimentos</a></li>  
                <li class="mobile-menu-item"><a href="quem-somos/" target="_blank">Quem somos</a></li>  
                <li class="mobile-menu-item"><a href="paciente-modelo/">Paciente modelo</a></li>
            `
        } else if (cursos){
            headerHTML += `
                <li class="mobile-menu-item"><a href="../../">Início</a></li>
                <li class="mobile-menu-item"><a href="../../quem-somos/"">Quem somos</a></li>
                <li class="mobile-menu-item"><a href="../../paciente-modelo/"">Paciente Modelo</a></li>
                <li class="mobile-menu-item"><a href="#conteudo-programatico">
            `
            headerHTML += !imersao ? `Conteúdo programático` : `Módulos`
            
            headerHTML += `</a></li>`

            headerHTML += `
                <li class="mobile-menu-item"><a href="#faq">FAQ</a></li>
            `
        } else {
            headerHTML += `<li class="mobile-menu-item"><a href="../">Início</a></li>`
            headerHTML += `<li class="mobile-menu-item"><a href="../quem-somos/"">Quem somos</a></li>`
            headerHTML += `<li class="mobile-menu-item"><a href="../paciente-modelo/"">Paciente Modelo</a></li>`
        }

        headerHTML += `</ul>`

    let element = document.querySelector('main')
    let mudanca = false
    if (element == null){
        element = document.body
        mudanca = true
    }
    element.insertAdjacentHTML('afterbegin', headerHTML)
    if (!mudanca){return}
    document.querySelector('header').style.backgroundColor = '#00244a'
    document.querySelector('header').style.paddingLeft = '10px'
    document.querySelector('header').style.paddingRight = '10px'
    document.querySelector('header').style.height = '75px'
    document.querySelector('#mobile-menu-list').style.marginTop = '75px';
}
carregarHeader()

function carregarFooter() {
    const footerHTML = `
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
                            <br>Redes sociais<br><a href="https://www.instagram.com/move.medical?igsh=MXJ4NXZ1cTR4bHRkZw%3D%3D&utm_source=qr" target="_blank"><img src="../../assets/iconinstagram.png"></a> &nbsp&nbsp
                            <a target="_blank" href="https://www.tiktok.com/@move.medical?_t=ZM-8tGPtzKThDy&_r=1"><img src="../../assets/icontiktok.png"></a> &nbsp&nbsp
                            <a style="overflow: hidden; border-radius: 20px;" target="_blank" href="https://youtube.com/@movemedical-z5w?si=If7uknZQT9vMbFcy">
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
                        <!-- <a style="display: none;" href=""><img src=""></a> -->
                    </div>
                    <br><div id="right-side-desktop">RESIMED LTDA<br  class="mobile-no-display"><br>CNPJ 46.976.124/0001-08<br></div><br>
                </div>
            </center>
            
        </footer>
    `

    document.body.insertAdjacentHTML('beforeend', footerHTML)
}
carregarFooter()
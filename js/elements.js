function carregarHeader() {
    let headerHTML = `
        <header class="header">
            <div>
                <a` 
    if (window.location.href == 'index.html'){
        headerHTML += ` href="index.html"`
    } else {
        headerHTML += ` href="../index.html"`
    }
    headerHTML +=`>
                    <div class="logo" id="div-logo">
                        <img src="../assets/logo.png">
                    </div>
                </a>
            </div>
            <div id="menu">
                <ul>
                    <li><a href="#scroll-cursos" onclick="scrollIntoView()">Nossos cursos</a></li>
                    <li><a href="quemSomos.html" target="_blank">Quem somos</a></li>  
                    <li><a href="#diferenciais" onclick="scrollIntoView()">Diferenciais</a></li>  
                    <li><a href="pacienteModelo.html" target="_blank">Paciente modelo</a></li>
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
            <li class="mobile-menu-item"><a href="#scroll-cursos" onclick="scrollIntoView()">Nossos cursos</a></li>
            <li class="mobile-menu-item"><a href="quemSomos.html" target="_blank">Quem somos</a></li>  
            <li class="mobile-menu-item"><a href="#diferenciais" onclick="scrollIntoView()">Diferenciais</a></li>  
            <li class="mobile-menu-item"><a href="pacienteModelo.html" target="_blank">Paciente modelo</a></li>
        </ul>
    `

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
                            <br>Redes sociais<br><a href="https://www.instagram.com/move.medical?igsh=MXJ4NXZ1cTR4bHRkZw%3D%3D&utm_source=qr" target="_blank"><img src="../assets/iconinstagram.png"></a> &nbsp&nbsp<a target="_blank" href="https://www.tiktok.com/@move.medical?_t=ZM-8tGPtzKThDy&_r=1 "><img src="../assets/icontiktok.png"></a><br>
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
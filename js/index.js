// Cabeçalho, rodapé, WhatsApp e componentes compartilhados por todas as páginas.
// Caminhos absolutos ("/") porque o site é servido na raiz de movemedical.com.br.

const WHATSAPP_NUMERO = '5547996160560';
const WHATSAPP_PADRAO = 'Olá! Gostaria de saber mais sobre os cursos da Move Medical.';
const reduzirMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

const pagina = document.body.dataset.pagina || 'pagina';
const caminho = window.location.pathname;

const MENUS = {
    inicio: [
        ['#cursos', 'Cursos'],
        ['#diferenciais', 'Diferenciais'],
        ['#depoimentos', 'Depoimentos'],
        ['/quem-somos/', 'Quem somos'],
        ['/paciente-modelo/', 'Paciente modelo'],
    ],
    curso: [
        ['/', 'Início'],
        ['#programa', 'Programa'],
        ['#faq', 'Dúvidas'],
        ['/quem-somos/', 'Quem somos'],
        ['/paciente-modelo/', 'Paciente modelo'],
    ],
    paciente: [
        ['#como-funciona', 'Como funciona'],
        ['#faq', 'Dúvidas'],
        ['/', 'Site da Move'],
    ],
    pagina: [
        ['/', 'Início'],
        ['/#cursos', 'Cursos'],
        ['/quem-somos/', 'Quem somos'],
        ['/paciente-modelo/', 'Paciente modelo'],
    ],
};

const ICONE_WHATSAPP = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.018,17.048c-0.96,-1.484 -1.518,-3.253 -1.518,-5.151c0,-5.243 4.257,-9.5 9.5,-9.5c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-1.777,0 -3.44,-0.489 -4.863,-1.339l-4.637,1.545l1.518,-4.555Z" fill="#f3f3f3"/><path d="M5.795,16.304c-0.886,-1.244 -1.407,-2.765 -1.407,-4.407c0,-4.201 3.411,-7.612 7.612,-7.612c4.201,0 7.612,3.411 7.612,7.612c0,4.201 -3.411,7.611 -7.612,7.611c-1.59,0 -3.066,-0.488 -4.288,-1.323l-2.862,0.954l0.945,-2.835Z" fill="#00a82d"/><path d="M9.714,13.873c-1.124,-1.374 -1.874,-3.056 -2.109,-4.88c-0.063,-0.508 0.106,-1.018 0.461,-1.387c0.355,-0.369 0.858,-0.558 1.368,-0.515l0.049,0.005c0,0 0.561,0.15 0.868,0.233c0.122,0.033 0.219,0.124 0.26,0.243c0.138,0.41 0.464,1.373 0.618,1.826c0.05,0.147 0.004,0.31 -0.114,0.41c-0.233,0.196 -0.618,0.52 -0.858,0.723c-0.129,0.109 -0.17,0.29 -0.1,0.443c0.279,0.608 0.635,1.176 1.057,1.69c0.434,0.502 0.933,0.949 1.485,1.327c0.14,0.095 0.325,0.085 0.454,-0.024c0.241,-0.202 0.626,-0.526 0.858,-0.722c0.119,-0.1 0.287,-0.117 0.424,-0.043c0.42,0.228 1.314,0.712 1.694,0.918c0.111,0.06 0.185,0.172 0.196,0.297c0.029,0.317 0.083,0.895 0.083,0.895l-0.004,0.049c-0.044,0.51 -0.315,0.974 -0.739,1.261c-0.424,0.288 -0.955,0.368 -1.445,0.22c-1.772,-0.545 -3.313,-1.581 -4.479,-2.937l-0.027,-0.032Z" fill="#f3f3f3"/></svg>`;

function linkWhatsapp(mensagem) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem || WHATSAPP_PADRAO)}`;
}

function carregarCabecalho() {
    const itens = MENUS[pagina] || MENUS.pagina;
    const links = itens.map(([href, texto]) => {
        const atual = href.startsWith('/') && !href.includes('#') && href !== '/' && caminho.startsWith(href);
        return `<li><a href="${href}"${atual ? ' aria-current="page"' : ''}>${texto}</a></li>`;
    }).join('');

    document.body.insertAdjacentHTML('afterbegin', `
        <a class="pular-conteudo" href="#principal">Pular para o conteúdo</a>
        <header class="site-header">
            <a class="logo" href="/" aria-label="Move Medical, página inicial">
                <img src="/assets/logo.png" alt="" width="500" height="500">
            </a>
            <button type="button" class="menu-botao" aria-expanded="false" aria-controls="menu-lista" aria-label="Abrir menu">
                <span></span><span></span><span></span>
            </button>
            <nav aria-label="Principal">
                <ul class="menu-lista" id="menu-lista">${links}</ul>
            </nav>
        </header>`);

    const botao = document.querySelector('.menu-botao');
    const lista = document.getElementById('menu-lista');
    const alternar = (aberto) => {
        botao.setAttribute('aria-expanded', aberto);
        botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        lista.classList.toggle('aberto', aberto);
    };
    botao.addEventListener('click', () => alternar(botao.getAttribute('aria-expanded') !== 'true'));
    lista.addEventListener('click', (e) => { if (e.target.closest('a')) alternar(false); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lista.classList.contains('aberto')) { alternar(false); botao.focus(); }
    });
}

function carregarRodape() {
    const mensagem = document.body.dataset.whatsapp;
    document.body.insertAdjacentHTML('beforeend', `
        <footer class="site-footer">
            <div class="wrap rodape-grid">
                <div class="rodape-contato">
                    <h2>Fale com a Move</h2>
                    <p>Tire dúvidas sobre cursos, datas e inscrição direto com a nossa equipe.</p>
                    <div class="acoes">
                        <a class="botao botao-primario" data-whatsapp="${mensagem || ''}" href="${linkWhatsapp(mensagem)}">WhatsApp (47) 99616-0560</a>
                        <a class="botao botao-contorno" href="mailto:contato@movemedical.com.br">contato@movemedical.com.br</a>
                    </div>
                </div>
                <address class="rodape-endereco">
                    Rua Miguel Matte, 687, Edifício Evolution Corporate<br>
                    Bairro Pioneiros, Balneário Camboriú, SC, 88331-030
                </address>
                <ul class="rodape-redes" aria-label="Redes sociais">
                    <li><a href="https://www.instagram.com/move.medical" target="_blank" rel="noopener" aria-label="Instagram da Move Medical">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
                    </a></li>
                    <li><a href="https://www.tiktok.com/@move.medical" target="_blank" rel="noopener" aria-label="TikTok da Move Medical">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c0 2.8 2.2 5 5 5"/></svg>
                    </a></li>
                    <li><a href="https://youtube.com/@movemedical-z5w" target="_blank" rel="noopener" aria-label="YouTube da Move Medical">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>
                    </a></li>
                </ul>
            </div>
            <div class="wrap rodape-legal">
                <span>RESIMED LTDA · CNPJ 46.976.124/0001-08</span>
                <a href="/politica/"${caminho.startsWith('/politica') ? ' aria-current="page"' : ''}>Política de privacidade</a>
            </div>
        </footer>
        <a class="whatsapp-flutuante" data-whatsapp="${mensagem || ''}" href="${linkWhatsapp(mensagem)}" aria-label="Conversar no WhatsApp">${ICONE_WHATSAPP}</a>
        <button type="button" class="voltar-topo" aria-label="Voltar ao topo">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>`);

    const topo = document.querySelector('.voltar-topo');
    topo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduzirMovimento ? 'auto' : 'smooth' }));
    const atualizarTopo = () => topo.classList.toggle('visivel', window.scrollY > 600);
    window.addEventListener('scroll', atualizarTopo, { passive: true });
    atualizarTopo();
}

// Todo link com data-whatsapp abre a conversa com a mensagem certa para a página.
function prepararWhatsapp() {
    document.querySelectorAll('[data-whatsapp]').forEach((link) => {
        link.href = linkWhatsapp(link.dataset.whatsapp || document.body.dataset.whatsapp);
        link.target = '_blank';
        link.rel = 'noopener';
    });
}

// Vídeos que só carregam quando a pessoa pede (depoimentos e imersão).
function prepararVideos() {
    const cartoes = document.querySelectorAll('.video-cartao');

    const resetar = (cartao) => {
        const video = cartao.querySelector('video');
        video.pause();
        video.hidden = true;
        cartao.querySelector('.video-play').hidden = false;
        cartao.classList.remove('carregando');
    };

    cartoes.forEach((cartao) => {
        const botao = cartao.querySelector('.video-play');
        const video = cartao.querySelector('video');
        const erro = cartao.querySelector('.video-erro');

        botao.addEventListener('click', () => {
            cartoes.forEach((outro) => { if (outro !== cartao) resetar(outro); });
            if (erro) erro.hidden = true;
            botao.hidden = true;
            video.hidden = false;
            cartao.classList.add('carregando');
            video.focus();
            video.play().catch(() => {});
        });
        video.addEventListener('playing', () => cartao.classList.remove('carregando'));
        video.addEventListener('ended', () => resetar(cartao));
        video.addEventListener('error', () => {
            resetar(cartao);
            if (erro) erro.hidden = false;
        }, true);
    });

    return resetar;
}

function prepararCarrosseis(resetarVideo) {
    if (typeof Swiper === 'undefined') return;

    // Rótulos em português: o módulo a11y do Swiper troca os aria-label das setas pelos dele.
    const a11y = (anterior, proximo) => ({
        prevSlideMessage: anterior,
        nextSlideMessage: proximo,
        firstSlideMessage: 'Primeiro item',
        lastSlideMessage: 'Último item',
        paginationBulletMessage: 'Ir para o item {{index}}',
    });

    if (document.querySelector('.carrossel-estrutura')) {
        new Swiper('.carrossel-estrutura', {
            a11y: a11y('Foto anterior', 'Próxima foto'),
            loop: true,
            grabCursor: true,
            navigation: { nextEl: '.carrossel-estrutura .swiper-button-next', prevEl: '.carrossel-estrutura .swiper-button-prev' },
            pagination: { el: '.carrossel-estrutura .swiper-pagination', clickable: true },
        });
    }

    const grade = { 0: { slidesPerView: 1.15 }, 640: { slidesPerView: 2 }, 1050: { slidesPerView: 3 } };

    if (document.querySelector('.carrossel-depoimentos')) {
        const depoimentos = new Swiper('.carrossel-depoimentos', {
            a11y: a11y('Depoimento anterior', 'Próximo depoimento'),
            loop: true,
            spaceBetween: 24,
            grabCursor: true,
            breakpoints: grade,
            navigation: { nextEl: '.carrossel-depoimentos .swiper-button-next', prevEl: '.carrossel-depoimentos .swiper-button-prev' },
            pagination: { el: '.carrossel-depoimentos .swiper-pagination', clickable: true },
        });
        depoimentos.on('slideChange', () => document.querySelectorAll('.carrossel-depoimentos .video-cartao').forEach(resetarVideo));
    }

    if (document.querySelector('.carrossel-modelos')) {
        new Swiper('.carrossel-modelos', {
            spaceBetween: 24,
            grabCursor: true,
            // 2 por vez no desktop: fotos de antes e depois maiores e inteiras.
            breakpoints: { 0: { slidesPerView: 1.08 }, 760: { slidesPerView: 2 } },
            a11y: a11y('Foto anterior', 'Próxima foto'),
            navigation: { nextEl: '.carrossel-modelos .swiper-button-next', prevEl: '.carrossel-modelos .swiper-button-prev' },
            pagination: { el: '.carrossel-modelos .swiper-pagination', clickable: true },
        });
    }
}

// Troca suave da foto de fundo na home, junto com a frase do título (mesma ordem de data-fundos).
// No celular e com movimento reduzido fica fixo em "Mova-se com a Move".
function alternarFundoHero() {
    const imagem = document.querySelector('[data-fundos]');
    if (!imagem || reduzirMovimento || window.innerWidth < 960) return;
    const fundos = imagem.dataset.fundos.split(',');
    const titulo = document.querySelector('.hero-frases');
    const frases = titulo ? [...titulo.querySelectorAll('.hero-frase')] : [];
    if (titulo) titulo.classList.add('rotativo');
    fundos.forEach((src) => { new Image().src = src; });
    let indice = 0;
    setInterval(() => {
        if (document.hidden) return;
        imagem.style.opacity = 0;
        frases[indice]?.classList.remove('ativa');
        setTimeout(() => {
            indice = (indice + 1) % fundos.length;
            imagem.src = fundos[indice];
            imagem.style.opacity = 1;
            frases[indice % frases.length]?.classList.add('ativa');
        }, 700);
    }, 8000);
}

// Dúvidas (details): abre e fecha deslizando em vez de pular. Sem JS ou com movimento
// reduzido, continua o details nativo.
function animarDuvidas() {
    if (reduzirMovimento) return;
    const efeito = { duration: 380, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' };
    document.querySelectorAll('.faq-lista details').forEach((item) => {
        const pergunta = item.querySelector('summary');
        let animacao = null;
        pergunta.addEventListener('click', (e) => {
            e.preventDefault();
            const abrindo = !item.open || item.classList.contains('fechando');
            const inicio = item.offsetHeight;
            animacao?.cancel();
            item.style.overflow = 'hidden';
            item.open = true;
            item.classList.toggle('fechando', !abrindo);
            const bordas = item.offsetHeight - item.clientHeight;
            const fim = abrindo ? item.scrollHeight + bordas : pergunta.offsetHeight + bordas;
            animacao = item.animate({ height: [`${inicio}px`, `${fim}px`] }, efeito);
            const resposta = [...item.children].filter((el) => el !== pergunta);
            resposta.forEach((el) => el.animate(
                abrindo ? { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] } : { opacity: [1, 0] },
                { ...efeito, fill: 'both' },
            ).finished.then((a) => a.cancel?.()).catch(() => {}));
            animacao.onfinish = () => {
                if (!abrindo) item.open = false;
                item.classList.remove('fechando');
                item.style.overflow = '';
                animacao = null;
            };
        });
    });
}

// O WhatsApp flutuante some enquanto um botão de WhatsApp já está à vista (hero e rodapé),
// para não cobrir botões nem textos no celular.
function ocultarWhatsappFlutuante() {
    const flutuante = document.querySelector('.whatsapp-flutuante');
    const alvos = document.querySelectorAll('.hero, .curso-hero, .site-footer');
    if (!flutuante || !alvos.length || !('IntersectionObserver' in window)) return;
    const visiveis = new Set();
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => (e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target)));
        flutuante.classList.toggle('oculto', visiveis.size > 0);
    }, { threshold: 0.15 });
    alvos.forEach((alvo) => observador.observe(alvo));
}

carregarCabecalho();
carregarRodape();
prepararWhatsapp();
ocultarWhatsappFlutuante();
animarDuvidas();
const resetarVideo = prepararVideos();

document.addEventListener('DOMContentLoaded', () => {
    prepararCarrosseis(resetarVideo);
    alternarFundoHero();
});

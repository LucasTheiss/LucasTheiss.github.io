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

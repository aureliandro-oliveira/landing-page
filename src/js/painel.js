(() => {
    const imagensPainel = document.querySelectorAll('.imagem-painel');
    if (!imagensPainel.length) return;

    const setaAvancar = document.getElementById('btn-avacar');
    const setaVoltar = document.getElementById('btn-voltar');
    let imagemAtual = 0;

    const esconderImagem = () => {
        imagensPainel.forEach(imagem => {
            imagem.classList.remove('mostrar');
        });
    };

    const mostrarImagem = () => {
        imagensPainel[imagemAtual].classList.add('mostrar');
    };

    setaAvancar.addEventListener('click', () => {
        const totalImagens = imagensPainel.length - 1;
        if (imagemAtual === totalImagens) return;

        imagemAtual++;
        esconderImagem();
        mostrarImagem();
    });

    setaVoltar.addEventListener('click', () => {
        if (imagemAtual === 0) return;

        imagemAtual--;
        esconderImagem();
        mostrarImagem();
    });
})();

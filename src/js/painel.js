/*
1. Quando clicarmos no botão seta temos que esconder todas as imagens para mostrar a   proxima imagem

   a-) a imagem atual começa em 0 porque é a primeira imagem, assim que clicar no botão avançar adiciona + 1 ao contador de imagem, para saber qual vai ser a próxima imagem a ser mostrada. 
   
2. para esconder todas as imagens
    pegartodas as usando o DOM e remover a classes mostrar

3. mostrar a proxima imagem
    pegar  as iamgens e descobrir quual é a proxima, e colocar a classe mostrar nela (na imagem atual)
 */

const imagensPainel = document.querySelectorAll('.imagem-painel');

const setaAvancar = document.getElementById('btn-avacar');

const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

// 1. Quando clicarmos no botão seta temos que esconder todas as imagens para mostrar a   proxima imagem

setaAvancar.addEventListener('click', function () {
    //testa se contador da imagemAtual é igual ao total de imagens
    const totalImagens = imagensPainel.length - 1;

    if (imagemAtual === totalImagens) {
        console.log('não pode avançar mais');
        return;
    }

    // a-) a imagem atual começa em 0 porque é a primeira imagem, assim que clicar no botão avançar adiciona + 1 ao contador de imagem, para saber qual vai ser a próxima imagem a ser mostrada. 

    imagemAtual++;

    // 2. para esconder todas as imagens
    // pegartodas as usando o DOM e remover a classes mostrar

    esconderImagem();

    // 3. mostrar a proxima imagem
    // pegar  as iamgens e descobrir quual é a proxima, e colocar a classe mostrar nela (na imagem atual)

    mostrarImagem();

});

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        console.log('Não tem mais como voltar');
        return;
    }

    imagemAtual--;

    esconderImagem();
    
    mostrarImagem();

})

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

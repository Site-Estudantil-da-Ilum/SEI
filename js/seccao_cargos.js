const itens = document.querySelectorAll('.cargo-item');
const setaEsc = document.querySelector('.seta-esquerda');
const setaDir = document.querySelector('.seta-direita');

let indexAtivo = 0;

function mudarCargo(direcao) {

    itens[indexAtivo].classList.remove('ativo');

    let deslocamentoInicial = direcao === 'proximo' ? '50px' : '-50px';

    if (direcao === 'proximo') {
        indexAtivo = (indexAtivo + 1) % itens.length;
    } else {
        indexAtivo = (indexAtivo - 1 + itens.length) % itens.length; 
    }

    const novoItem = itens[indexAtivo];
    novoItem.classList.add('ativo');

    novoItem.animate([
        { opacity: 0, transform: `translateX(${deslocamentoInicial})` }, 
        { opacity: 1, transform: 'translateX(0)' }                       
    ], {
        duration: 600, // ms
        easing: 'ease-out'
    });
}

setaDir.addEventListener('click', () => mudarCargo('proximo'));
setaEsc.addEventListener('click', () => mudarCargo('anterior'));
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else {
        console.log('Elemento ou seletor não encontrado.');
    }
}

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    //teclado
    tecla.onkeydown = (event) => {
        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('.ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('.ativa');
    }

}

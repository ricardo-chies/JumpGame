const pikachu = document.querySelector('.pikachu');
const pipe = document.querySelector('.pipe');
const reload = document.querySelector('.reload');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && pikachuPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pikachu.style.animation = 'none';
        //mario.style.bottom = `${marioPosition}px`;

        pipe.src = './images/charizardDancing.gif';
        pipe.style.bottom = '10px';

        pikachu.src = './images/pikachuGameOver.png';
        pikachu.style.width = '120px';
        pikachu.style.marginLeft = '50px';

        reload.src = './images/reload.png'

        clearInterval(loop);
    }

}, 10);

function gameReload() {
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.left = '';
    pipe.src = './images/charizard.gif';
    pipe.style.bottom = '-15px';

    pikachu.src = './images/pikachu.gif';
    pikachu.style.animation = '';
    reload.src = '';

    // const loop = setInterval(() => {
    //     const pipePosition = pipe.offsetLeft;
    //     const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
    
    //     if(pipePosition <= 120 && pipePosition > 0 && pikachuPosition < 80) {
    //         pipe.style.animation = 'none';
    //         pipe.style.left = `${pipePosition}px`;
    
    //         pikachu.style.animation = 'none';
    //         //mario.style.bottom = `${marioPosition}px`;

    //         pipe.src = './images/charizardDancing.gif';
    //         pipe.style.bottom = '10px';
    
    //         pikachu.src = './images/pikachuGameOver.png';
    //         pikachu.style.width = '120px';
    //         pikachu.style.marginLeft = '50px';
    
    //         reload.src = './images/reload.png'
    
    //         clearInterval(loop);
    //     }
    
    // }, 10);
}

document.addEventListener('keydown', jump);
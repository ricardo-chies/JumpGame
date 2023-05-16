const pikachu = document.querySelector('.pikachu');
const pipe = document.querySelector('.pipe');

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

        pikachu.src = './images/pikachuGameOver.png';
        pikachu.style.width = '120px';
        pikachu.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
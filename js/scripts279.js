const responses = JSON.parse(localStorage.getItem('response'));

const handleGetResponses = () => {
    const count = responses.length;

    if (count < 8) {
        document.querySelector('.intentelo').style.display = 'block';
        document.querySelector('.felicida').style.display = 'none';
        handleSetRemove()

        if (count === 1)
            document.querySelector('#text-intentalo').textContent = `Has completado ${count} pregunta`
        else
            document.querySelector('#text-intentalo').textContent = `Has completado ${count} preguntas`;
    } else {
        document.querySelector('.felicida').style.display = 'block';
        document.querySelector('.intentelo').style.display = 'none';
        document.querySelector('#text-felici').textContent = `Has completado ${count} preguntas`;
    }
}

const handleSetRemove = () => {
    const lives = localStorage.getItem('lives'),
        countLives = parseInt(lives);

    if ((countLives - 1) - 1 === 0) {
        localStorage.setItem('block', new Date());
        localStorage.setItem('lives', countLives - 1);
    } else {
        localStorage.setItem('lives', countLives - 1);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    handleGetResponses();

    document.querySelector('.boton-next').addEventListener('click', () => {
        if (responses.length >= 8)
            window.location.href = './index280.html'
        else
            window.location.href = './index275.html';
    });
})
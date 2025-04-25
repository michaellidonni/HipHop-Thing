window.addEventListener('click', () => {
    const audio = document.getElementById('introSong');
    audio.play();
}, { once: true });

function mute() {
    const audio = document.getElementById('introSong');
    const btnImg = document.getElementById('muteButton');

    if (audio.muted) {
        audio.muted = false;
        btnImg.src = 'imgs/play.png';
    } else {
        audio.muted = true;
        btnImg.src = 'imgs/mute.png'
    }
}
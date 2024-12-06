// script.js
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const vinyl = document.querySelector('.vinyl');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
        vinyl.style.animationPlayState = 'paused';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
        vinyl.style.animationPlayState = 'running';
    }
    isPlaying = !isPlaying;
});

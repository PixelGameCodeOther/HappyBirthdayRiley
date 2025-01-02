window.onload = () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    updateCountdownMessage();
};

function updateCountdownMessage() {
    const now = new Date();
    const deadline = new Date();
    deadline.setHours(1, 0, 0, 0);
    if (now > deadline) deadline.setDate(deadline.getDate() + 1);

    const timeDiff = deadline - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdownMessage").textContent = 
        `Website will be put down later, enjoy while it lasts! Time left: ${hours}h ${minutes}m ${seconds}s . . .`;
}

setInterval(updateCountdownMessage, 1000);

const sound1 = new Audio('one.mp3');
const sound2 = new Audio('two.mp3');

function startFireworks() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    const colors = ['#a5d6a7', '#ffffff'];

    (function frame() {
        const randomSound = Math.random() > 0.5 ? sound1 : sound2;
        randomSound.play();

        confetti({
            particleCount: 100,
            angle: 60,
            spread: 900,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 900,
            origin: { x: 1 },
            colors: colors
        });
        confetti({
            particleCount: 500,
            angle: 90,
            spread: 200,
            startVelocity: 100,
            origin: { x: 0.5, y: 0 },
            colors: colors
        });
        confetti({
            particleCount: 100,
            angle: 360,
            spread: 900,
            origin: { x: 0.5, y: 0.5 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

let count = 0;
const celebrationCount = document.getElementById('celebration-count');

document.querySelector('.celebrate-btn').addEventListener('click', () => {
    count++;
    celebrationCount.textContent = count;
});

function playSong() {
    const audio = new Audio('song.wav'); 
    audio.play();
}

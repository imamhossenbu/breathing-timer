let timeLeft;
let isRunning = false;

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let interval; // Declare interval globally to use it outside

const startTimer = (duration) => {
    let time = duration;

    interval = setInterval(() => {
        const minute = parseInt(time / 60, 10);
        const second = parseInt(time % 60, 10);

        timer.innerText = ('0'+minute) + ':' + (second < 10 ? '0' + second : second); // format seconds

        // Decrease time here, inside the interval
        if (--time < 0) {
            clearInterval(interval);
            timer.innerText = 'Breath Out';

            setTimeout(() => {
                timer.innerText = 'Breath In';
                startTimer(timeLeft); 
            }, 3000);
        }
    }, 1000);
}

start.addEventListener('click', () => {
    if(!isRunning){
        timeLeft = 90;
        startTimer(timeLeft);
        isRunning = true;
    }
});

stop.addEventListener('click', () => {
    clearInterval(interval); // Stop the interval
    timer.innerText = 'Breath In';
    isRunning = false;

});

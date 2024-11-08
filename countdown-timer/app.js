const countdown = document.querySelector('.countdown');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnReset = document.querySelector('.btn-reset');
const btnSet = document.querySelector('.btn-set');
const input = document.querySelector('#time');

let elapsedTime = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let time = 0;
let intervalTimer;
let isPaused = false;

// Start the countdown timer
btnStart.addEventListener('click', () => {
    if(time !== 0) {
        intervalTimer = setInterval(updateTimer, 1000); 
        console.log('Button start!');    
    }
});

// Pause the timer
btnPause.addEventListener('click', () => {
    // Checks if user clicked the pause button
    // then get the current time to use when
    // clicked again
    if(!isPaused) {
        isPaused = true;
        elapsedTime = time;
        // let elapsedTime = countdown.innerText;

        clearInterval(intervalTimer);
        console.log('Button paused!');
        btnPause.innerText = 'Resume';
    } else {
        isPaused = false;
        // time = elapsedTime;

        // Checks if countdown timer is 0,
        // otherwise get the elapsedTime.
        // This is for preventing bugs when clicking
        // the Pause button again
        time = countdown.innerText === '00:00:00' ? 0 : elapsedTime;
        intervalTimer = setInterval(updateTimer, 1000); 
        console.log('Button resume!');
        btnPause.innerText = 'Pause';
    }
});

// Resets the countdown timer
btnReset.addEventListener('click', () => {
    clearInterval(intervalTimer);
    countdown.innerText = '00:00:00';
    time = 0;
    console.log('Button reset!');
    
});

// Sets the initial countdown
btnSet.addEventListener('click', () => {
    if (input.value && !isNaN(input.value)) {
        let startingTime = parseInt(input.value);

        // time (in input) is minutes. Converts
        // it again to seconds to get calculations
        time = startingTime * 60;
        console.log('Timer set!');
        updateTimer();
        input.value = '';
    }
})

// Updates the timer every frame 
function updateTimer() {
    
    // Calculations to get seconds, minutes, and hours
    seconds = time % 60;
    minutes = Math.floor(time / 60) % 60;
    hours = Math.floor(time / 60 / 60);
    // hours = Math.floor(time / 60 / 60) % 24;
    // days = Math.floor(time / 60 / 60 / 24);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    days = days < 10 ? '0' + days : days;

    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    console.log(`${hours}:${minutes}:${seconds}`);
    console.log(time);
    
    countdown.innerText = `${hours}:${minutes}:${seconds}`;

    if(time > 0) {
        time--;
    } else {
        clearInterval(intervalTimer);
        time = 0;
        alert('Time\'s up!');
    }
}

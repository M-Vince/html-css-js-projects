const clock = document.querySelector('.clock');

// Get the current time
function updateTime() {
    const date = new Date();
    // padStart() is a string method, so toString is needed to use
    // the method
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
    console.log(time);

    clock.innerText = time;
}

updateTime();
setInterval(() => {
    updateTime();
}, 1000);
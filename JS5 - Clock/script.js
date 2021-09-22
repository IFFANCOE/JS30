let hourHand = document.querySelector('.hour-hand') //same get elementById
let minuteHand = document.querySelector('.minute-hand')
let secondHand = document.querySelector('.second-hand')

function setDate() {
    let now = new Date()
    let hours = now.getHours();
    let hoursDegrees = Math.round(((hours / 12) * 360) + 90) // is 5.7 > 6  is 5.4 > 5

    let minutes = now.getMinutes();
    let minutesDegrees = Math.round(((minutes / 60) * 360) + 90)

    let seconds = now.getSeconds();
    let secondsDegrees = Math.round(((seconds / 60) * 360) + 90)

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(hours + ":" + minutes + ":" + seconds);
}

setInterval(setDate, 1000)
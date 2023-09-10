const daysEl = document.getElementById ("days")
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")

const birthday = "18 Dec 2023"

function countdown(){
    const birthdaydate = new Date(birthday)
    const currentTime = new Date()
    const totalSeconds = (birthdaydate - currentTime)/1000;

    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600)%24;

    const minute = Math.floor(totalSeconds/60)%60
    const second = Math.floor(totalSeconds%60)
    
    daysEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minute);
    secondEl.innerHTML = formatTime(second);

}
countdown()
function formatTime(time){
    return time < 10 ? (`0${time}`): time
}

setInterval(countdown, 1000)


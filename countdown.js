const Target = new Date("oct 28, 2023 00:00:00").getTime();

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const showTime = setInterval(function () {
    const currentDate = new Date().getTime();
    // const distance = Target - currentDate;
    const distance = (Target - currentDate) / 1000;

    const days = Math.floor(distance / 3600 / 24);
    const hours = Math.floor((distance / 3600) % 24);
    const minutes = Math.floor((distance / 60) % 60);
    const seconds = Math.floor(distance % 60);

    // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(showTime);

        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        seconds.innerHTML = "00";
    }
}, 1000);

const Target = new Date("oct 28, 2023 00:00:00").getTime();

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const showTime = setInterval(function () {
    const currentDate = new Date().getTime();
    const dateLine = (Target - currentDate) / 1000;

    const days = Math.floor(dateLine / 3600 / 24);
    const hours = Math.floor((dateLine / 3600) % 24);
    const minutes = Math.floor((dateLine / 60) % 60);
    const seconds = Math.floor(dateLine % 60);

    // const days = dateLine / 1000 / 3600 / 24;
    // const hours = dateLine / 1000 / 3600 % 24;
    // const minutes = dateLine / 1000 / 60 % 60;
    // const seconds = dateLine / 1000 % 60;

    // const dateLine = Target - currentDate;
    // const days = Math.floor(dateLine / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((dateLine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((dateLine % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((dateLine % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    if (dateLine < 0) {
        clearInterval(showTime);

        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        seconds.innerHTML = "00";
    }
}, 1000);

import React from 'react'

export default function Countdown() {
    function startTimer(targetDate, display) {
        var end = targetDate;

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;
        var displayString = "";

        function showRemaining() {
            var distance = end - Date.now();
            if (distance < 0) {
                displayString = "00:00:00:00";
                console.log(displayString);
                // display.textContent = displayString

                clearInterval(timer);
                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            displayString = days + ":" + hours + ":" + minutes + ":" + seconds; 
            // display.textContent = displayString;
            console.log(displayString);
        };
        // we don't want to wait a full second before the timer starts
        timer = setInterval(showRemaining, 1000);
    }

    window.onload = function () {
        var end = new Date('03/18/2022 00:55 AM'),
            display = document.querySelector('#time');
        startTimer(end, display);
    };

    return (
        <div>

        </div>
    )
}

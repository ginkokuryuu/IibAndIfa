import React from 'react'
import '../css/Countdown.css'

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
                displayString = "00 Day 00 Hrs 00 Min 00 Sec";
                display.textContent = displayString

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

            displayString = days + " Day " + hours + " Hrs " + minutes + " Min " + seconds + " Sec";
            display.textContent = displayString;
        };
        // we don't want to wait a full second before the timer starts
        timer = setInterval(showRemaining, 1000);
    }

    window.onload = function () {
        var end = new Date('05/22/2022 07:00 AM'),
            display = document.querySelector('#timer');
        startTimer(end, display);
    };

    return (
        <div className='countdown'>
            {separator('bot')}
            <div className="imageContainer">
                <img className='imageContained' src="/iib-and-ifa/images/photos/countdown.png" alt='' />
                <div className='imageOverlay'></div>

                <div className='timerText'>
                    <div className='countTitle'>Countdown for the day</div>
                    <div id='timer'>00:00:00:00</div>
                </div>

                {/* <img className='imageFrame-top' src="/iib-and-ifa/images/shapes/t4.png" alt="" />
                <img className='imageFrame-bot' src="/iib-and-ifa/images/shapes/b3-a.png" alt="" /> */}
            </div>
        </div>
    )
}

const separator = (side) => {
    return (
        <div className={'separator-' + side}>

        </div>
    )
}

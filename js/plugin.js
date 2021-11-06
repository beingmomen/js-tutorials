"use strict";

// Get element To Show The Time
let daysElement = document.querySelector(".days");
let hoursElement = document.querySelector(".hours");
let minutesElement = document.querySelector(".minutes");
let secondsElement = document.querySelector(".seconds");
let elementArray = [daysElement, hoursElement, minutesElement, secondsElement];




let userTime = prompt("Please enter your Time In seconds", "");


function runTime(time) {
    let countDown = setInterval(() => {

        // Get modulus from user time to get [days]
        let dayRest = time % 86400
        // Get days
        let  days = (time - dayRest) / 24 / 3600


        // Get modulus from days modulus to get [hours]
        let hoursRest = dayRest % 3600
        // Get hours
        let  hours = (dayRest - hoursRest) / 3600


        // Get modulus from hours modulus to get [minutes]
        let minutesRest = hoursRest % 60
        // Get minutes
        let minutes = (hoursRest - minutesRest) / 60

        // Get modulus from hours modulus to get [seconds]
        let seconds = minutesRest


        // Set all date type in array
        let timesArray = [days, hours, minutes, seconds]

        // Decrement Time
        time--

        // Loop to print timer to users
        for (let i = 0; i < timesArray.length; i++) {
            elementArray[i].textContent = `${timesArray[i].toString().padStart(2, 0)}`
        }


        // Clear interval when time == [0]
        time == -1 ? clearInterval(countDown) : "";

    }, 1000);
}

runTime(userTime)
// runTime(userTime = 186640)
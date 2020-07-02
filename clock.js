// array of all timestamps
var timeArray = [];
// hour minute and second variables
var hour, minute, second;

// runs the main clock
function startClock() {
    var today = new Date(); // get the time from the date object
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    minute = convertDigits(minute); // convert minutes/secs like 6 to 06 for display
    second = convertDigits(second);
    document.getElementById('txt').innerHTML = hour + ":" + minute + ":" + second;
    var t = setTimeout(startClock, 500);
}

function convertDigits(x) {
    // add zero in front of numbers < 10
    return(x < 10 ? "0" + x : x);
}

// stores the current time in the timestamp array
function storeTime() {
    var timeString = '<p>' + hour + ":" + minute + ":" + second + '</p>';
    timeArray.push(timeString)
    document.getElementById('time-list').innerHTML = timeArray.join(' ');
}

// clears all values from the timestamp array and from the HTML
function clearTimeArray() {
    timeArray.length = 0;
    document.getElementById('time-list').innerHTML = '';
}

// if spacebar pressed, store timestamp
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        storeTime();
    }
});
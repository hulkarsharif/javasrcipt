// Generate a random number of seconds between 0 and 86400.
var totalSeconds = Math.floor(Math.random() * 86400);

// Calculate hours, minutes, and seconds.
var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
var seconds = remainingSeconds % 60;

// Format hours, minutes, and seconds to have two digits.
var formattedHours = hours;
var formattedMinutes = minutes;
var formattedSeconds = seconds;

if (hours < 10) {
    formattedHours = "0" + hours;
}
if (minutes < 10) {
    formattedMinutes = "0" + minutes;
}
if (seconds < 10) {
    formattedSeconds = "0" + seconds;
}
//Print the timestamp to the console.
var timestamp = `${formattedHours}: ${formattedMinutes}:${formattedSeconds}`;
console.log(timestamp);

//Use an if-else if-else structure to print a greeting based on the hour:
if (hours < 12) {
    console.log("Good morning!");
} else if (hours < 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

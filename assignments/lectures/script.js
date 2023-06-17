var password = "strongpassword";
var confirmPassword = "strongpasswordd";

// if (password === confirmPassword) {
//     console.log("Password match. You can proceed.");
// } else {
//     console.log("Password fo not match.Please check and enter again.");
// }

var userName = "John";
var userDailyCalorieIntake = 2800;
var userDailyWorkoutDuration = 60; //in minutes

var recommendedCalorienIntake = 2500;
var recommendedWorkoutDuration = 75;

if (userDailyCalorieIntake > recommendedCalorienIntake) {
    console.log(
        "You are exceeding your recommended daily calorie intake. Good job."
    );
}
if (userDailyCalorieIntake < recommendedWorkoutDuration) {
    console.log(
        "You are not meeting recommended daily workout. Try to exercise more."
    );
}

var num = 123;
var str = num.toString();
console.log(typeof str);
console.log(str);

function avg(num1, num2) {
    var total = num1 + num2;
    var average = total / 2;
    return average;
}
console.log(avg(10, 16)); // prints 13

function myFunc() {
    console.log("before return");
    return "a return value";
    console.log("after return");
}
myFunc(); // only prints before return

function capitilize(string) {
    if (typeof string !== "string") {
        console.log(`You provided ${typeof string}`);
    } else {
        console.log(string[0].toUpperCase() + string.slice(1));
    }
}
console.log(capitilize("hello"));

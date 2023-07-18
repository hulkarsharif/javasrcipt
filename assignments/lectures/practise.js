// let totalSeconds = Math.floor(Math.random() * 86400);
// let hours = Math.floor(totalSeconds / 3600);
// let remainingSecond = totalSeconds % 3600;
// let minutes = Math.floor(remainingSecond / 60);
// let seconds = remainingSecond % 60;

// var formattedHours = hours,
//     formattedMinutus = minutes,
//     formattedSeconds = seconds;

// if (hours < 10) {
//     formattedHours = "0" + hours;
// }

// if (minutes < 10) {
//     formattedMinutus = "0" + minutes;
// }

// if (seconds < 10) {
//     formattedSeconds = "0" + seconds;
// }

// let time = `${formattedHours}:${formattedMinutus}:${formattedSeconds}`;
// console.log(time);
// if (hours < 12) {
//     console.log("Good Morning");
// } else if (hours < 17) {
//     console.log("Good afternoon");
// } else {
//     console.log("Good evening");
// }
// console.log(time);

// function stringIndexMultiplier(arr) {
//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let length = arr[i].length;
//         let sum = length * i;
//         totalSum += sum;
//     }
//     return totalSum;
// }

// console.log(stringIndexMultiplier(["Hello", "world", "!"]));

// function divisibilityFilter(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (
//             (arr[i] % 3 === 0 && arr[i] % 5 !== 0) ||
//             (arr[i] % 3 !== 0 && arr[i] % 5 === 0)
//         ) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));
// function printUserProfile(userProfile) {
//     for (let key in userProfile) {
//         console.log(`${key}: ${userProfile[key]}`);
//     }
// }
// console.log(
//     printUserProfile({
//         name: "John Doe",
//         age: 30,
//         email: "john@example.com",
//         isAdmin: true
//     })
// );

function addStock(inventory, newInventory) {
    for (let key in newInventory) {
        if (inventory[key]) {
            inventory[key] += newInventory[key];
        } else {
            inventory[key] = newInventory[key];
        }
    }
    return inventory;
}
console.log(
    addStock(
        { apple: 5, banana: 3, orange: 2 },
        { banana: 2, orange: 3, peach: 5 }
    )
);

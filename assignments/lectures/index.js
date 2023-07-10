// function printUserProfile(userProfile) {
//     for (let key in userProfile) {
//         console.log(`${key}:${userProfile[key]}`);
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

// function addStock(inventory, newInventory) {
//     for (let key in newInventory) {
//         if (inventory[key]) {
//             inventory[key] += newInventory[key];
//         } else {
//             inventory[key] = newInventory[key];
//         }
//     }
//     return inventory;
// }
// console.log(
//     addStock(
//         { apple: 5, banana: 3, orange: 2, ananas: 2 },
//         { banana: 2, orange: 3, peach: 5, ananas: 6 }
//     )
// );

// function filterData(object, key) {
//     return { [key]: object[key] };
// }
// console.log(
//     filterData(
//         {
//             city: "New York",
//             state: "New York",
//             country: "USA",
//             pincode: "10001"
//         },
//         "city"
//     )
// );

// function perfectScore(students) {
//     for (i = 0; i < students.length; i++) {
//         if (students[i].score === 100) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(
//     perfectScore([
//         { name: "John", score: 98 },
//         { name: "Jane", score: 100 },
//         { name: "Bob", score: 95 }
//     ])
// );

// function countOccurrence(str) {
//     let charObject = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charObject[char]) {
//             charObject[char]++;
//         } else {
//             charObject[char] = 1;
//         }
//     }
//     return charObject;
// }
// console.log(countOccurrence("pineapple"));

function averageScore(scores) {
    let result = {};
    for (let key in scores) {
        let scoresArr = scores[key];
        let sum = 0;
        for (let i = 0; i < scoresArr.length; i++) {
            sum = sum + scoresArr[i];
        }
        let avearage = sum / scoresArr.length;
        result[key] = avearage;
    }
    return result;
}
console.log(averageScore({ John: [85, 90, 78], Jane: [92, 88, 91] }));

function findLargest(ages) {
    let maxAge = 0;
    let person = "";
    for (let key in ages) {
        if (ages[key] > maxAge) {
            maxAge = ages[key];
            person = key;
        }
        ages[person] = maxAge;
    }
    return person;
}

console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));

function reverseKeyValue(object) {
    let newObj = {};
    for (let key in object) {
        newObj[object[key]] = key;
    }
    return newObj;
}
console.log(reverseKeyValue({ name: "John", age: 30 }));

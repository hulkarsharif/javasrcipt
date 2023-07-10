//1 Creating User Profiles:
const userProfile = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: true
};
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}:${userProfile[key]}`);
    }
}
printUserProfile();

//2Updating Inventory:
function addStock(inventory, newInventory) {
    for (const fruits in newInventory) {
        if (Object.keys(inventory).includes(fruits)) {
            inventory(fruits);
        }
    }
}

//3Filtered Datae

function filterData(object, key) {
    filteredObject = {};
    if (key in object) {
        filteredObject[key] = object[key];
    }
    return filteredObject;
}
var object = {
    city: "New York",
    state: "New York",
    country: "USA",
    pincode: "10001"
};
var key = "state";
var filteredData = filterData(object, key);
console.log(filteredData);
//4
function perfectScore(students) {
    for (let key in students) {
        if (students[key].score === 100) {
            return true;
        }
    }
    return false;
}
console.log(
    perfectScore([
        { name: "John", score: 98 },
        { name: "Jane", score: 100 },
        { name: "Bob", score: 95 }
    ])
);
console.log(
    perfectScore([
        { name: "Adam", score: 95 },
        { name: "Eve", score: 99 }
    ])
);
//5
function countOccurrence(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countOccurrence("banana"));
console.log(countOccurrence("pineapple"));

//6
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function averageScore(scores) {
    let averageScores = {};
    for (let student in scores) {
        const averageScore = calculateAverage(scores[student]);
        averageScores[student] = averageScore;
    }
    return averageScores;
}

console.log(averageScore({ John: [85, 90, 78], Jane: [92, 88, 91] }));

//7

function findLargest(ages) {
    let oldestAge = "";
    let maxAge = 0;
    for (let key in ages) {
        if (ages[key] > maxAge) {
            maxAge = ages[key];
            oldestAge = key;
        }
    }
    return oldestAge;
}
console.log(findLargest({ Adam: 35, Eve: 30, Abel: 33 }));
console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));

//8
function reverseKeyValue(object) {
    let newObject = {};
    for (let key in object) {
        let value = object[key];
        newObject[value] = key;
    }
    return newObject;
}
console.log(reverseKeyValue({ name: "John", age: 30 }));
console.log(reverseKeyValue({ city: "Los Angeles", state: "California" }));

//9
function countBooleans(array) {
    let count = { true: 0, false: 0 };
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        count[value]++;
    }
    return count;
}
console.log(countBooleans([true, false, true, true, false]));

//10

function calculateTotal(prices, items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += prices[item];
    }
    return total;
}
console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, ["apple", "banana"])
);
console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, [
        "orange",
        "orange",
        "banana"
    ])
);

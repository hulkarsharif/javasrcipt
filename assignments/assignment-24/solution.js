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

//6
function averageScore(scores) {
    for (let ley in scores) {
    }
}

//7

function findLargest(ages) {
    let minimumAge = Object.values(ages);
    let largestAge = minimumAge[0];
    let oldestPerson;
    for (let key in minimumAge.lenght) {
        if (largestAge < minimumAge[key]) {
            largestAge = minimumAge[key];
        }
    }
    for (let key in ages) {
        if ((ages[key] = largestAge)) {
            oldestPerson = key;
        }
    }
    return oldestPerson;
}
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
    let count = 0;
    let array = [];
    for (let key in array) {
    }
}

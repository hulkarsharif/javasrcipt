//Write a function that takes two arguments start and end, and returns the count of numbers between start and end that divisible by 4 and 14. Example: 1, 30
function fourAndFourteen(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(fourAndFourteen(1, 30));

//Write a function that takes two arguments, start and end, that  returns count of numbers which the square is also within the same range

function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}
console.log(squareCount(20, 500));

//Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter = counter + 1;
        }
    }
    return counter;
}

//2. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7

function dibisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if (i % 7 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

//2. Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function arrySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1);

// var arr4 = ["Human"];
// var arr5 = ["Being"];
// var arr6 = arr4.concat(arr5);
// console.log(arr6);

// var arr = ["Human Being"];
// console.log(arr.includes("Human Being"));
// console.log(arr.includes(5));
// var arr = [1, 2, 3];
// var notArr = "How do you do?";
// console.log(Array.isArray(arr));
// console.log(Array.isArray(notArr));

// var arr = ["John", "Bob", "James"];
// arr.reverse();
// console.log(arr);

// var animals = ["ship", "panda", "gorilla", "cow"];
// var domestics = animals.slice(0, 5);
// console.log(domestics);

// var animals = ["ship", "panda", "gorilla", "cow"];
// var domesticsAnim = animals.slice(1);
// console.log(domesticsAnim);

// function combineArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// function reverseOrder(arr) {
//     var result = arr.reverse();
//     return result;
// }
// console.log(reverseOrder([1, 2, 3]));

function checkValue(arr, val) {
    if (arr.includes(val)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkValue([2, 3, 4, 5], 8));

function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray(15, 25, 35, 45));

var str = "Hello, World!";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
var str = "Hello, World!";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === "o") {
        count++;
    }
}
console.log(count);

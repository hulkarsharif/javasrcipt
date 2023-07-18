//1
function findMaxNumber(arr) {
    let maxNum = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (maxNum < arr[i][j]) {
                maxNum = arr[i][j];
            }
        }
    }
    return maxNum;
}

console.log(
    findMaxNumber([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

//2
function countCharacters(arr) {
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let char = arr[i][j];
            if (counter[char]) {
                counter[char]++;
            } else {
                counter[char] = 1;
            }
        }
    }
    return counter;
}

console.log(
    countCharacters([
        ["a", "b", "a"],
        ["c", "a", "d"]
    ])
);

//3
function filterDivisibleByThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        for (let j = 0; j < innerArr.length; j++) {
            if (innerArr[j] % 3 === 0) {
                newArr.push(innerArr[j]);
            }
        }
    }
    return newArr;
}

console.log(
    filterDivisibleByThree([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);
// Output: [3, 6, 9]

//4 Write a function that takes an array of arrays of strings as input. Find the longest string among the nested arrays and return it.

function findLongestString(arr) {
    let longWord = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        for (let j = 0; j < arr[i].length; j++) {
            if (longWord.length < innerArr[j].length) {
                longWord = innerArr[j];
            }
        }
    }
    return longWord;
}

console.log(
    findLongestString([
        ["apple", "banana"],
        ["carrot", "date", "eggplant"],
        ["fig"]
    ])
); // Output: 'eggplant'

//5

// Part 5: Sum of Numbers (including nested arrays)
// Write a function that takes an array as input. The array may contain numbers and/or nested arrays of numbers. Find the sum of all the numbers, including the numbers in the nested arrays. Use Array.isArray() to check if a passed value is an array.
function sumArray(arr) {
    let sum = 0;
    let innerSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                innerSum += arr[i][j];
            }
        } else {
            innerSum += arr[i];
        }
    }
    return sum + innerSum;
}

console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]]));
//Output: 45;

// 6. Capitalize Strings
// Write a function that takes an array of arrays of lowercase strings as input. Return a new nested array with all the strings capitalized.
function capitalizeStrings(arr) {
    let nestArr = [];
    for (let i = 0; i < arr.length; i++) {
        let capitalized = [];
        for (let j = 0; j < arr[i].length; j++) {
            capitalized.push(arr[i][j].toUpperCase());
        }
        nestArr.push(capitalized);
    }
    return nestArr;
}

console.log(
    capitalizeStrings([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
); // Output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

// 7. Find Minimum and Maximum Arrays
// Write a function that takes an array of arrays as input. Return an object with two keys: 'min' and 'max'. The 'min' key should have the value of the inner array with the smallest sum, and the 'max' key should have the value of the inner array with the largest sum.
function findMinMaxArrays(arr) {}

console.log(
    findMinMaxArrays([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ])
); // Output: { min: [4, 5], max: [6, 7, 8, 9] }

// 8. Merge Nested Arrays
// Write a function that takes an array of arrays as input. Merge the nested arrays into a single array, maintaining the order of the nested arrays. Return the merged array.
function mergeNestedArrays(arr) {
    let mergeArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            mergeArr.push(arr[i][j]);
        }
    }
    return mergeArr;
}

console.log(
    mergeNestedArrays([
        [1, 2],
        [3, 4],
        [5, 6]
    ])
); // Output: [1, 2, 3, 4, 5, 6]

// //1
// function characterPairs(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             console.log(str[i], str[j]);
//         }
//     }
// }

// console.log(characterPairs("abc"));
// // Expected output: ['ab', 'ac', 'bc']

//2
function divisibleByThreePairSum(array) {
    let pairs = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}

console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// Output: [[0, 2], [1, 3], [2, 4]]

//3

function sumOfPairs(arr, totalSum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === totalSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(sumOfPairs([1, 2, 3, 4, 5], 5));
// Expected output: [[1, 4], [2, 3]]

//4

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(7));
// Expected output: true
console.log(checkPrime(4)); // Expected output: false

//5

function primeRange(arr) {
    let primesAndCount = {};
    let primeNum = [];
    for (let i = arr[0] + 1; i < arr[1]; i++) {
        if (checkPrime(i)) {
            primeNum.push(i);
        }
    }
    primesAndCount.primes = primeNum;
    primesAndCount.count = primeNum.length;
    return primesAndCount;
}

console.log(primeRange([10, 20]));
// Expected output: {primes: [11, 13, 17, 19], count: 4}

//6
function allSubstrings(str) {
    let subStrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j);
            subStrings.push(subStr);
        }
    }
    return subStrings;
}

console.log(allSubstrings("abc"));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

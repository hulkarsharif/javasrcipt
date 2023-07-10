// function stringIndexMultiplier(arr) {
//     let sum = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var length = arr[i].length;
//         var product = length * i;
//         sum += product;
//     }
//     return sum;
// }
// console.log(stringIndexMultiplier(["Hello", "world", "!"]));

// function divisibilityFilter(arr) {
//     let result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (
//             (arr[i] % 3 === 0 && arr[i] % 5 !== 0) ||
//             (arr[i] % 3 !== 0 && arr[i] % 5 === 0)
//         ) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// loop - one;
// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30, 31]));
// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));
// main;

// function singleDigitSum(arr) {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 10 && arr[i] > -10) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(singleDigitSum([-10, 1, -2, 30, 6, -7]));
// console.log(singleDigitSum([]));

// function binaryCounter(arr) {
//     let numberOfZeroes = 0;
//     let numberOfOnes = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             numberOfOnes++;
//         } else if (arr[i] === 1) {
//             numberOfZeroes++;
//         }
//     }
//     return [numberOfOnes, numberOfZeroes];
// }
// console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]));

// function uniqueStringFilter(arr) {
//     let result = [];
//     let lowerCaseArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         let lowerCaseWord = arr[i].toLowerCase();
//         if (!lowerCaseArr.includes(lowerCaseWord)) {
//             lowerCaseArr.push(lowerCaseWord);
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(
//     uniqueStringFilter([
//         "Hello",
//         "hello",
//         "World",
//         "world",
//         "WORLD",
//         "hello",
//         "HELLO",
//         "Test"
//     ])
// );

// function oddNumberSum(arr) {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }
// console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// function reverseString(arr) {
//     let reversedArr = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
// console.log(reverseString(["H", "e", "l", "l", "o"]));

// console.log(reverseString([]));

// function calculateFactorial(num) {
//     let factorial = 1;
//     for (var i = num; i > 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// console.log(calculateFactorial(5));
// console.log(calculateFactorial(0));

// function arrayElementMultiplier(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 2);
//     }
//     return result;
// }
// console.log(arrayElementMultiplier([1, 2, 3, 4, 5]));

// function evenIndexSum(arr) {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i += 2) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(evenIndexSum([10, 20, 30, 40, 50]));
// console.log(evenIndexSum([]));
// console.log(evenIndexSum([100]));
// //19.1
// function splitByComma(str) {
//     return str.split(",");
// }
// console.log(splitByComma("apple, banan, grape"));
// console.log(splitByComma("grape", "red", "blue"));

// function joinWithDash(arr) {
//     return arr.join("-");
// }
// console.log(joinWithDash(["sun", "moon", "stars"]));
// console.log(joinWithDash(["quick", "brown", "fox"]));

// function splitSentenceIntoWords(sentence) {
//     return sentence.split(" ");
// }
// console.log(splitSentenceIntoWords("The quick brown fox"));
// console.log(splitSentenceIntoWords("Hello World from JavaScript"));

// function createCamelCase(str) {
//     var words = str.split(" ");
//     words[0] = words[0].toLowerCase();
//     for (var i = 1; i < words.length; i++) {
//         var word = words[i];
//         words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }

//     return words.join("");
// }
// console.log(createCamelCase("Hello world"));

// function reverseString(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseString("Hello"));

// function reverseString(arr) {
//     let str = arr.join("");
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseString(["H", "e", "l", "l", "o"]));

// function reverseStr(arr) {
//     let str = arr.join("");
//     return str;
// }
// console.log(reverseStr(["H", "e", "l", "l", "o"]));

function evenIndexSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        }
    } // add the number at the current index to the sum

    return sum;
}
console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

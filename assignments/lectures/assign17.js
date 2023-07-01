// function sliceFromFirstVowel(str) {
//     let vowel = "aeoui";
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             return str.slice(i);
//         }
//     }
// }
// console.log(sliceFromFirstVowel("javascript"));

// //7
// function areConsonantsMore(str) {
//     let countVowels = 0;
//     let countCosnonants = 0;
//     let vowels = "aeoui";
//     let consonants = "bqwrtyplkmjvstc";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             countVowels++;
//         } else if (consonants.includes(str[i])) {
//             countCosnonants++;
//         }
//     }

//     return countCosnonants > countVowels;
// }

// console.log(areConsonantsMore("javascript"));
// //8
// function doubleVowels(str) {
//     let vowels = "aeoui";
//     var result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result += str[i].repeat(2);
//         } else {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(doubleVowels("hello"));

// function sumDigits(num) {
//     let numStr = String(num);
//     let sum = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         sum = sum + parseInt(numStr[i]);
//     }
//     return sum;
// }
// console.log(sumDigits(12345));

// function preserveLetters(str) {
//     let char = "0123456789";
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!char.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(preserveLetters("Hello,123"));

// //assign 18/2
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
// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));
// //18/3

// function singleDigitSum(arr) {
//     let totalSum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         let num = Math.abs(arr[i]);
//         if (num < 10 && num > 0) {
//             totalSum = totalSum + arr[i];
//         }
//     }
//     return totalSum;
// }
// console.log(singleDigitSum([-10, 1, -2, 30, 6, -7]));
// //8/4

// function vowelCounter(str) {
//     var counter = 0;
//     var vowels = "aieou";
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(vowelCounter("responsible"));
function areConsonantsMore(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCounter = 0;
    var consonantCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            vowelCounter++;
        } else {
            consonantCount++;
        }
    }

    return consonantCount > vowelCounter;
}

console.log(areConsonantsMore("javascript"));

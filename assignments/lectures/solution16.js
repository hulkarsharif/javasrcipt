// // function returnArray(start, end) {
// //     let arr = [];
// //     for (var i = start; i <= end; i++) {
// //         arr.push(i);
// //     }
// //     return arr;
// // }
// // console.log(returnArray(11, 15));

// // function numBetween(start, end) {
// //     var arr = [];
// //     for (var i = start; i <= end; i++) {
// //         if (i % 7 === 0) {
// //             arr.push(i);
// //         }
// //     }
// //     return arr;
// // }

// // console.log(numBetween(10, 49));

// // function returnArr(start, end) {
// //     let arr = [];
// //     for (var i = start; i <= end; i++) {}
// //     if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
// //         arr.push(i);
// //     }
// //     return arr;
// // }
// // console.log(returnArr(1, 16));

// function findCharFrequency(str, char) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findCharFrequency("hello world", "o"));

// function vowelCounter(str) {
//     var count = 0;
//     var vowels = "aouei";
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCounter("wonderful"));

// function isAlphaNumeric(str) {
//     var englishLettersAndDigits = "abcdefghijklmnopqrstuvwxyz1234567890";
//     for (var i = 0; i < str.length; i++) {
//         if (!englishLettersAndDigits.includes(str[i].toLowerCase())) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAlphaNumeric("hello123"));
// console.log(isAlphaNumeric("&*???"));

// function isAllVowels(str) {
//     var vowels = "aouei";
//     for (var i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i].toLowerCase())) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAllVowels("aouei"));
// console.log(isAllVowels("aeiouuupyy"));

// function capitilizeVowels(str) {
//     var result = "";
//     var vowels = "aouei";
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result = result + str[i].toUpperCase();
//         } else {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(capitilizeVowels("hello"));

// function sliceFromFirstVowel(str) {
//     var vowels = "aouei";
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             return str.slice(i);
//         }
//     }
// }
// console.log(sliceFromFirstVowel("javascript"));

// function areConsonantMore(str) {
//     var counterConsonants = 0;
//     var vowels = "aoeiu";

//     for (var i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i].toLowerCase())) {
//             counterConsonants++;
//         }
//     }
//     return counterConsonants > vowelCounter(str);
// }
// console.log(areConsonantMore("javascript"));

// function doubleVowels(str) {
//     var vowels = "aoeiu";
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result = result + str[i].repeat(2);
//         } else {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(doubleVowels("hello"));

// function sumDigits(num) {
//     var numStr = String(num);
//     var sum = 0;
//     for (var i = 0; i < numStr.length; i++) {
//         sum = sum + parseInt(numStr[i]);
//     }
//     return sum;
// }
// console.log(sumDigits(12345));

function preserveLetters(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var englishLetters = "abcdefghijklmnopqrstuvwxyz";
        var char = str[i];
        if (englishLetters.includes(char.toLowerCase())) {
            result += char;
        }
    }
    return result;
}
console.log(preserveLetters("Hello,123"));

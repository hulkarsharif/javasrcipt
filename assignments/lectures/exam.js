/**
 * Assignment 1: Fizz Buzz
 * Write a function that takes a number as an argument.
 * The function should return "Fizz" if the number is a multiple of 3,
 * "Buzz" if the number is a multiple of 5,
 * "FizzBuzz" if the number is a multiple of both 3 and 5,
 * and the number itself if it is not a multiple of 3 or 5.
 *
 * Example:
 * fizzBuzz(9) should return "Fizz"
 * fizzBuzz(10) should return "Buzz"
 * fizzBuzz(15) should return "FizzBuzz"
 * fizzBuzz(7) should return 7
 */
function fizzBuzz(num) {
    for (var i = 0; i < num; i++) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num;
        }
    }
}
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

/**
 * Assignment 2: Palindrome Checker
 * Write a function that takes a one word string as an argument and checks if it is a palindrome.
 * A palindrome is a word that reads the same backwards as forwards, ignoring case.
 * The function should return true if the word is a palindrome and false otherwise.
 *
 * Example:
 * isPalindrome("Level") should return true
 * isPalindrome("OpenAI") should return false
 */
function isPalindrome(str) {
    var result = "";
    let polindrome;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === polindrome) {
            return true;
        } else {
            return false;
        }
    }
    return result;
}
console.log(isPalindrome("Level"));
console.log(isPalindrome("OpenAI"));

//  Assignment 3: Array Filter
// * Write a function that takes an array of strings and a number as arguments.
// * The function should return a new array containing strings from the original array
// * that have a length less than or equal to the provided number.
// *
// * Example:
// * filterArray(["apple", "banana", "cherry", "dates", "elderberry"], 5)
// * should return ["apple", "dates"]
// */
function filterArray(arr, num) {
    var filterArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length <= num) {
            filterArray.push(arr[i]);
        }
    }
    return filterArray;
}
console.log(
    filterArray(["apple", "banana", "cherry", "dates", "elderberry"], 5)
);

//  * Assignment 4: Array of Objects
//  * Write a function that takes an array of strings as an argument.
//  * The function should return a new array that contains objects.
//  * Each object in the array should have a single property, with the key being
//  * the string from the input array and the value being the square of the string's length.
//  *
//  * Example:
//  * stringsToObjects(["cat", "window", "prop"])
//  * should return [{cat: 9}, {window: 36}, {prop: 16}]
function stringsToObjects(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        let object = {};
        if ((arr[i].length = object)) {
            result = result + object.repeat(2);
            result.push(object);
        }
    }
    return result;
}
console.log(stringsToObjects(["cat", "window", "prop"]));

// * Assignment 5: Key-Value Multiplication
// * Write a function that takes an object as an argument. In this object, keys are strings and values are also strings.
// * The function should return a new object where each key is a combination of the original key and value,
// * and each value is the product of the number of characters in the key and the number of characters in the value.
// *
// * Example:
// * keyValueMultiplication({apple: "fruit", car: "vehicle"})
// * should return {"applefruit": 25, "carvehicle": 21}
// */

function keyValueMultiplication(object) {}

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
    for (let i = 0; i < num; i++) {
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
function isPalindrome(word) {
    let palindrome = "";
    for (let i = word.length - 1; i >= 0; i--) {
        palindrome += word[i];
    }
    if (word.toLowerCase() === palindrome.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("level"));
console.log(isPalindrome("openAI"));

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
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length <= num) {
            result.push(arr[i]);
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
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj[arr[i]] = arr[i].length * arr[i].length;
        newArr.push(obj);
    }
    return newArr;
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

function keyValueMultiplication(obj) {
    let result = {};
    for (let word in obj) {
        let newKey = word + obj[word];
        let newValue = word.length * obj[word].length;
        result[newKey] = newValue;
    }
    return result;
}
console.log(keyValueMultiplication({ apple: "fruit", car: "vehicle" }));

/**
 * Assignment 6: Array Operations
 * Write a function that takes two arrays of equal length as arguments.
 * The function should return an object with two properties - 'added' and 'multiplied'.
 * The 'added' property should be an array that contains the result of adding each element at the same index
 * in the two input arrays.
 * The 'multiplied' property should be an array that contains the result of multiplying each element at the same index
 * in the two input arrays.
 *
 * Example:
 * arrayOperations([1, 2, 3], [4, 5, 6])
 * should return {added: [5, 7, 9], multiplied: [4, 10, 18]}
 */
function arrayOperations(arr1, arr2) {
    let result = {
        added: [],
        multiplied: []
    };
    for (let i = 0; i < arr1.length; i++) {
        result.added.push(arr1[i] + arr2[i]);
        result.multiplied.push(arr1[i] * arr2[i]);
    }
    return result;
}
console.log(arrayOperations([1, 2, 3], [4, 5, 6]));

// another exam
// Function 1: compareCharCount
/*
Instruction: Create a function named compareCharCount that takes two strings and a character as input. 
This function should return true if the character count is equal in both strings, and false otherwise.
*/
function compareCharCount(str1, str2, char) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === char) {
            count1++;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (!str2[i] === char) {
            count2++;
        }
    }
    return count1 === count2;
}
console.log(compareCharCount("Hello", "World", "l")); // should return false
console.log(compareCharCount("Hello", "World", "o")); // should return true
console.log(compareCharCount("Hello", "Allo", "l")); // should return true
console.log(compareCharCount("Hello", "Allo", "o")); // should return true

// Function 2: isGreaterOrEqual
/*
Instruction: Create a function named isGreaterOrEqual that takes a number up to 10 (inclusive) as an input. 
This function should generate a random number up to 10 (inclusive) and return true if the generated number 
is less than or equal to the input number, and false otherwise.
*/
function isGreaterOrEqual(num) {
    const randomNum = Math.floor(Math.random() * 11);
    return randomNum <= num;
}

console.log(isGreaterOrEqual(5)); // could return true or false
console.log(isGreaterOrEqual(7)); // could return true or false
console.log(isGreaterOrEqual(2)); // could return true or false
console.log(isGreaterOrEqual(9)); // could return true or false
console.log("_________");

// Function 3: isPalindrome
/*
Instruction: Create a function named isPalindrome that takes a string as an input. 
The function should return true if the string is a palindrome, and false otherwise. 
String is one word string. Do not use array reverse method or do not create another string or array.
*/

function isPalindrome(str) {
    let palindrome = "";
    for (let i = str.length - 1; i >= 0; i--) {
        palindrome += str[i];
    }
    if (str === palindrome) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam")); // should return true
console.log(isPalindrome("hello")); // should return false
console.log(isPalindrome("level")); // should return true
console.log(isPalindrome("world")); // should return false
console.log("_________");

// Function 4: reverseArrayInPlace
/*
Instruction: Create a function named reverseArrayInPlace that takes an array as an input. 
This function should return the given array, but reversed in place. Do not use array reverse method, 
do not create another array.
*/

// function reverseArrayInPlace(arr) {
//     let first = 0;
//     let last = 0;
// }

// return arr;

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // should return [5, 4, 3, 2, 1]
// console.log(reverseArrayInPlace([6, 7, 8, 9, 10])); // should return [10, 9, 8, 7, 6]
// console.log(reverseArrayInPlace(["a", "b", "c", "d", "e"])); // should return ['e', 'd', 'c', 'b', 'a']
// console.log("_________");

// Function 5: removeDuplicates
/*
Instruction: Create a function named removeDuplicates that takes an array of numbers as an input. 
This function should return a new array that has all duplicates removed. Do not use indexOf or includes methods of string/array
*/
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // should return [1, 2, 3, 4, 5]
// console.log(removeDuplicates([6, 7, 7, 8, 9, 9, 10])); // should return [6, 7, 8, 9, 10]
// console.log(removeDuplicates(["a", "a", "b", "b", "c", "c", "d", "d"])); // should return ['a', 'b', 'c', 'd']

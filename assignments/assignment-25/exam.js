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

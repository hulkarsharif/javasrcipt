//1. Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.
//findCharFrequency('hello world', 'o');
//  Output: 2
// Explanation: The character 'o' appears twice in the string 'hello world'.
function findCharFrequency(str, char) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (char.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(findCharFrequency("Hello world", "e"));

//2. Create a function vowelCounter that takes in a string and returns the count of vowels in it.
//vowelCounter('beautiful');
// Output: 5
// Explanation: The string 'beautiful' has 5 vowels - 'e', 'a', 'u', 'i', 'u'

function vowelCounter(str) {
    var counter = 0;
    var vowels = "aoeiu";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(vowelCounter("responsible")); // Output 4

//3. Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.
//isAlphaNumeric('hello123');
// Output: true
// Explanation: The string 'hello123' contains only letters and numbers, so the output is true.

//isAlphaNumeric('hello12?$3');
// Output false
// Explanation: The string 'hello12?$3' contains ? and $ chars, so output is false

function isAlphaNumeric(str) {
    var englishLettersAndDigits = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < str.length; i++) {
        if (englishLettersAndDigits.includes(str[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAlphaNumeric("welcome72328937289")); //output false

//4. Write a function isAllVowels that verifies if a string consists only of vowel characters.

//isAllVowels('aeiou');
// Output: true
// Explanation: The string 'aeiou' only contains vowels, so the output is true.

//isAllVowels('aeiouuupu');
// Output: false
// Explanation: The string 'aeiouuupu' has a one consonant (p), so output is false
function isAllVowels(str) {
    var vowels = "aoeiu";
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            return false;
        }
    }
    return true;
}
console.log(isAllVowels("aeiou")); //true
console.log(isAllVowels("aeiouuupyy")); //false

// part 5

// Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.

// capitalizeVowels('hello');
// Output: 'hEllO'
// Explanation: The function converts all vowels 'e' and 'o' in the string 'hello' to uppercase, resulting in the new string 'hEllO'.
function capitalizeVowels(str) {
    var result = "";
    var vowels = "aoeiu";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result = result + str[i].toUpperCase();
        } else {
            result = result + str[i];
        }
    }
    return result;
}
console.log(capitalizeVowels("hello"));

// part 6

// Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.

// sliceFromFirstVowel('javascript');
// Output: 'avascript'
// Explanation: The function slices the string 'javascript' starting from the first vowel 'a' to its end, resulting in the new string 'avascript'.
function sliceFromFirstVowel(str) {
    var vowels = "aoeiu";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            return str.slice(i);
        }
    }
    return str;
}
console.log(sliceFromFirstVowel("javascript"));

// part 7

// Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.

// areConsonantsMore('javascript');
// Output: true
// Explanation: The string 'javascript' contains 7 consonants and 3 vowels. Since the number of consonants is greater than the number of vowels, the output is true.

function areConsonantsMore(str) {
    var counterVowels = 0;
    var counterConsonants = 0;
    var vowels = "aoeiu";
    var consonants = "bgdrwtyxwyz";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counterVowels++;
        } else {
            counterConsonants++;
        }
    }
    return counterConsonants > counterVowels;
}
console.log(areConsonantsMore("javascript")); //true
//8. Implement a function doubleVowels that doubles all the vowels in a given string.
//doubleVowels('hello');
// Output: 'heelloo'
// Explanation: The function doubles all vowels in 'hello', which are 'e' and 'o', resulting in the new string 'heelloo'.

function doubleVowels(string) {
    var result = "";
    var vowels = "aoeiu";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result = result + string[i] + string[i];
        } else {
            result = result + string[i];
        }
    }
    return result;
}

console.log(doubleVowels("hello")); // output: "heelloo"

// part 9

// Write a function sumDigits that takes any valid integer and returns the sum of its digits.
// sumDigits(12345);
// Output: 15
// Explanation: The sum of the digits in the number 12345 is 1+2+3+4+5, which equals 15.
function sumDigits(num) {
    var numString = num.toString();
    var sum = 0;
    for (var i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }
    return sum;
}
console.log(sumDigits(12345));

// part 10

// Create a function preserveLetters that takes a string of a single word and returns a new string with all characters except letters removed.
// preserveLetters('Hello,123');
// Output: 'Hello'
// Explanation: The function removes all characters in 'Hello,123' that are not letters, resulting in the new string 'Hello'.

function preserveLetters1(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var englishLtters = "abcdefghijklmnopqrstuvwxyz";
        if (englishLtters.includes(char.toLowerCase()));
        {
            result += char;
        }
        return result;
    } //ohirgacha etmagan
}
console.log(preserveLetters1("Hello,123"));

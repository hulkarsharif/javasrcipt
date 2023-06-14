//create a function threeAndFive that takes the number as argument and checks if this number devisible by 4 and 7 at the same time
function threeAndFive(number) {
    if (number % 4 === 0 && number % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(threeAndFive(34));
console.log(threeAndFive(14));
console.log(threeAndFive(28));

// create a function that takes two strings, and returns a string that have more characters.
"hello", "hi";
function longerString(str1, str2) {
    if (str1.leng > str2.length) {
        return str1;
    } else {
        return str2;
    }
    console.log(longerString("Hello", "hi"));
}

//Create a function that takes three numbers and checks if the sum of the first two is greater then multiplication of the last two. 3, 4, 6 3+4 4*6 7+24
function threeNum(num1, num2, num3) {
    if (num1 + num2 > num2 * num3) {
        return true;
    } else {
        return false;
    }
}
console.log(threeNum(3, 4, 5));

// create a function that takes two strings as a argument and checks if this both string have letter e and a. "Hello", "animal", elephant, "apple"
function eAndA(str1, str2) {
    if (
        str1.includes("e") &&
        str1.includes("a") &&
        str2.includes("a") &&
        str2.includes("a")
    ) {
        return true;
    } else {
        return false;
    }
}
console.log(eAndA("ele"));

//Creata a function that takes two numbers and a string and checks if the sum of two numbers is greater than the multipication second number and number of characters of the string. 10,5, "sister"
// 10+5=15> 5*6=30
function twoNumbersAndString(num1, num2, str) {
    if (num1 + num2 > num2 * str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(twoNumbersAndString(5, 12, "Hello"));

//Create a function that takes three strings and checks if the concatenation of the first two equal to the one. "book", School, "apple"
function threeStrings(str1, str2, str3) {
    if (`${str1} ${str2} === str3`) {
        return true;
    } else {
        return false;
    }
}
console.log(threeStrings("book", "school", "bookschool"));
console.log(threeStrings("book", "school", "book school"));

// Create a function that takes a string and a number and checks if the number of characters of the string is twice a number.
// "house", 7

function capitilize(string) {
    if (typeof string !== "string") {
        return `You provided ${typeof string}`;
    }
    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitilize("hello world"));

var friend1 = "Alice";
var friend2 = "Bob";
var friend3 = "Charlie";
// And so on...

var post1 = "Hello, world!";
var post2 = "My second post";
var post3 = "Another post!";

var friends = ["Alice", "Bob", "Charlie"];
var posts = ["Hello, world!", "My second post", "Another post!"];

console.log(friends);

var emptyArray = [];
var fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

var fruits = ["apple", "banana", "cherry"];
console.log(fruits[fruits.length - 1]);

var fruits = ["apple", "banana", "cherry"];
fruits[1] = "blackberry";
console.log(fruits);
var fruits = ["apple", "banana", "cherry"];
fruits[2] = "apricot";
console.log(fruits);

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.length = 3;
console.log(arr);
arr.length = 7;
console.log(arr);

var sparseArray = [];
sparseArray[2] = "Hello";
sparseArray[5] = "World";
console.log(sparseArray.length);
// console.log(sparseArray);

// var a = [1, 2, 3, 4];
// var b = a;
// b[0] = 7;
// console.log(a);
// console.log(b);

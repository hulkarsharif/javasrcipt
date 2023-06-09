// task 1
function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log("15 + 20=", addTwo(15, 20));

//task 2
function multiplyTwo(num1, num2) {
    var item = num1 * num2;
    return item;
}
console.log("40 * 20=", addTwo(40, 20));

//task3
function isOdd(num) {
    var result = num % 2 !== 0;
    return result;
}
console.log("Number 6 is odd:", isOdd(6));

// task4
function subtractTwo(num1, num2) {
    var subtraction = num2 - num1;
    return subtraction;
}
console.log(45 - 15, subtractTwo(45, 15));

// task5
function divideTwo(num1, num2) {
    if (num2 !== 0) {
        var devison = num2 / num1;
        return devison;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("45 / 8 = ", divideTwo(45, 8));

//task6
function isEven(num) {
    var result = num % 2 === 0;
    return result;
}
console.log("Number 2 is even:", isEven(2));

//task 7
function maxValue(num1, num2) {
    var result;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Large number is 25 and 18:", maxValue(25, 18));

//task 8
function minValue(num1, num2) {
    var result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Small number is 25 and 18:", minValue(25, 18));

//task 9
function absoluteValue(num) {
    var result = Math.abs(num);
    return result;
}
console.log("Absolute value of -4:", absoluteValue(-4));

//task 10

function roundNumber(num) {
    var result = Math.round(num);
    return result;
}
console.log("Round value of -5.7897 is:", roundNumber(-5.7897));

//task 11
function squareRoot(num) {
    if (num >= 0) {
        var result = Math.sqrt(num);
        return result;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}
console.log("Square root of 18:", squareRoot(18));

//task 12
function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}
console.log("Ceil value of 45.5669 is:", ceilNumber(45.5669));

//task 13
function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}
console.log("Floor value of 25,2555 is:", floorNumber(25, 2555));

//task 14
function modulus(num1, num2) {
    if (num2 !== 0) {
        var result = num1 % num2;
        return result;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("Modulus value of 15 is:", modulus(15));

//task 15
function power(num, exponent) {
    var result = Math.pow(num, exponent);
    return result;
}
console.log("Power value of number 4 and 5:", power(4.5));

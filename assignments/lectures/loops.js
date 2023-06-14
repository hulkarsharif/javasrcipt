//Write a function that takes two arguments start and end, and returns the count of numbers between start and end that divisible by 4 and 14. Example: 1, 30
function fourAndFourteen(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(fourAndFourteen(1, 30));

//Write a function that takes two arguments, start and end, that  returns count of numbers which the square is also within the same range

function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}
console.log(squareCount(20, 500));

//Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter = counter + 1;
        }
    }
    return counter;
}

//2. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7

function dibisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if (i % 7 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

//2. Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function arrySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

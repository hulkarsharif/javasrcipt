// task 1
function countBumbers(start, end) {
    return end - start + 1;
}

//task 2
function num3And4(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(num3And4(10, 49));

//task 3
function divisible3And5(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(divisible3And5(1, 31));

//task 4
function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(squareCount(1, 10));

// task 5
function countOfNumbers(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0));
        counter = counter + 1;
    }
    return counter;
}
console.log(countOfNumbers(1, 16));
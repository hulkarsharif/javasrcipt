// task 1
function returnArray(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.arr.push(i);
    }
    return result;
}
//while loop
function returnArray(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        arr.push(i);
        i++;
    }
    return arr;
}

console.log(returnArray(11, 15));

//task2
function divideBy7(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0);
        arr.push(i);
    }
    return arr;
}
//while loop
function divideBy7(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if (i % 7 === 0);
        {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(divideBy7(10, 49));

//task3
function divisibleBy3And5(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0);
        arr.push(i);
    }
    return arr;
}
//while loop
function divisibleBy3And5(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if (i % 3 === 0 && i % 5 === 0);
        {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(divisibleBy3And5(1, 31));

//task 4
function rangeStartEnd(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            arr.push(i);
        }
    }
    return array;
}
// while loop
function rangeStartEnd(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        var square = i * i;
        if (square >= start && square <= end) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(rangeStartEnd(1, 10));

//task 5
function divideEither3Or5(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return array;
}
//while
function divideEither3Or5(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(divideEither3Or5(1, 16));

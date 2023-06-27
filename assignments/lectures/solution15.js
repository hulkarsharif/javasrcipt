function countNum(start, end) {
    let count = 0;
    for (var i = start; i <= end; i++) {
        count = count + 1;
    }
    return count;
}
console.log(countNum(11, 15));

function returnNum(start, end) {
    let count = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            count++;
        }
    }
    return count;
}
console.log(returnNum(10, 49));

function countBetween(start, end) {
    let count = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countBetween(1, 31));

function returnCounter(start, end) {
    let count = 0;
    for (var i = start; i <= end; i++) {
        let square = i * i;
        if (square >= start && square <= end) {
            count++;
        }
    }
    return count;
}
console.log(returnCounter(1, 10));

function take2(start, end) {
    let count = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            count++;
        }
    }
    return count;
}
console.log(take2(1, 16));

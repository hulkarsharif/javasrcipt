//task 1
function printNumbers() {
    for (var num = 11; num <= 99; num++) {
        console.log(num);
    }
}
// printNumbers();

//task2
function printDivisiblyBy7() {
    for (var num = 6; num <= 76; num++) {
        if (num % 7 === 0) {
            console.log(num);
        }
    }
}
// printDivisiblyBy7();

//task 3
function printDivisiblyBy3And5() {
    for (var num = 1; num <= 99; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(num);
        }
    }
}
// printDivisiblyBy3And5();

//task4
function calculateNumbers() {
    for (var num = 20; num <= 40; num++) {
        var square = num * num;
        console.log(square);
    }
}
// calculateNumbers();

//task 5
function divisiblyBy3Or5() {
    for (var num = 1; num <= 90; num++) {
        if (
            (num % 3 === 0 && num % 5 !== 0) ||
            (num % 3 !== 0 && num % 5 === 0)
        ) {
            console.log(num);
        }
    }
}
// divisiblyBy3Or5();

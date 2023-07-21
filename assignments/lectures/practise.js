function evenIndexSum(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i + 2) {
        if (!i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evenIndexSum([10, 20, 30, 40, 50]));

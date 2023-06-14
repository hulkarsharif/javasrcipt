//task1
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

//task2
function reverseOrder(arr) {
    var result = arr.reverse();
    return result;
}
console.log(reverseOrder([1, 2, 3]));

//task3
function checkValue(arr, val) {
    if (arr.includes(val)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkValue([2, 3, 4, 5], 8));

//task4
function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray(15, 25, 35, 45));

//task5
function arraySlice(arr, num1, num2) {
    return arr.slice(num1, num2);
    return result;
}
console.log(arraySlice([1, 2, 3, 4], 1, 4));

//task6
function removeLast(arr) {
    var result = arr.pop();
    var result = arr;
    return result;
}
console.log(removeLast(["January", "February", "March"]));

//task7
function removeFirst(arr) {
    var result = arr.shift();
    var result = arr;
    return result;
}
console.log(removeFirst(["January", "February", "March"]));

//task8
function addAtBeginning(arr, num) {
    var result = arr.unshift(num);
    var result = arr;
    return result;
}

console.log(addAtBeginning([2, 3, 4], 1));

//task 9
function addAtEnd(arr, val) {
    var result = arr.push(val);
    var result = arr;
    return result;
}
console.log(addAtEnd([1, 2, 3, 4], 5));

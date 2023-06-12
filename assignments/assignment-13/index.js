//task1
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr3);

//task2
var arr = [1, 2, 3];
arr.reverse(arr);
console.log(arr);

//task3
var arr = [1, 2, 3];
console.log(arr.includes(2));

//task4
var arr = [1, 2, 3];
console.log(Array.isArray(arr));

//task5
var arr = [1, 2, 3, 4, 5];
var numbers = arr.slice(1, 4);
console.log(numbers);

//task6
var nums = [1, 2, 3];
var lastElement = nums.pop(nums);
console.log(nums);

//task7
var arr = [1, 2, 3];
var firstElement = arr.shift(arr);
console.log(arr);

//task8
var arr = [1, 2, 3];
var newLength = arr.unshift(0);
console.log(arr);

//task 9
var arr = [1, 2, 3];
var lastElement = arr.push(4);
console.log(arr);

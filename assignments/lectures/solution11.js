//Create a function that takes an array of students ages enrolled into bootcamp. Find and return the average age of the students.
//24+23+18+50
// function studentAge(age) {
//     let totalAge = 0;
//     for (var i = 0; i < age.length; i++) {
//         totalAge = totalAge + age[i];
//     }
//     var averageAge = totalAge / age.length;
//     return averageAge;
// }
// console.log(studentAge([24, 23, 18, 50]));
// function stringIndexMultiplier(str) {
//     var sum = 0;
//     for (var i = 0; i < str.length; i++) {
//         var length = arr[i].length;
//         var product = length * i;
//         sum += product;
//     }
//     return sum;
// }
// function divisibilityFilter(array) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         var num = array[i];
//         if (
//             (num % 3 === 0 && num % 5 !== 0) ||
//             (num % 3 !== 0 && num % 5 === 0)
//         ) {
//             newArray.push(num);
//         }
//     }
//     return newArray;
// }
// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));

//create a function that takes an arrey of numbers and return the greatets one
//Input:[45,56,-19,900,-345,0,67,30]
//Output: 900
// function findGreatestNumber(numbers) {
//     let greatestNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {}
// }

//Create a function that takes the same size(length) two arrays.Return true if both arrays are structural  same
//input:[1,2,3],[1,2,3].output true
//input:[1,2,3]. output[1,2,4].false
//input[1,2,3],[2,3,1]

function equalArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(equalArray([1, 2, 3], [1, 2, 3]));
console.log(equalArray([1, 2, 3], [2, 3, 1]));

// let size = {
//     a: 1,
//     b: 2,
//     c: 5
// };

// let size2 = {
//     c: 5,
//     b: 2,
//     a: 1
// };

function twoObject(obj1, obj2) {
    if (obj1[key] !== obj2[key]) {
        return false;
    }
    return true;
}
console.log(twoObject({ a: 1, b: 2, c: 5 }, { c: 5, b: 2, a: 1 }));

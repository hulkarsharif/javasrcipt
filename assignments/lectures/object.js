// //Create a function that takes an array of student object. {name: "Ali", frades: ["A","F","B"]}=>(A,F);
// const arr = [
//     { name: "Ali", grades: ["A", "C", "C"] },
//     { name: "Durdona", grades: ["C", "C", "C"] },
//     { name: "Asilbek", grades: ["A", "A", "A"] }
// ];

// function studentGrades(arr) {
//     let counter = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (
//             arr[i].grades[0] === "A" &&
//             arr[i].grades[1] === "A" &&
//             arr[i].grades[2] === "A"
//         ) {
//             counter++;
//         }
//     }
// }

// let students = {
//     Ali: 34,
//     Will: 56,
//     Tom: 43
// };

// function someObj(ages) {
//     var totalAge = 0;
//     for (const key in ages) {
//         var totalAge = totalAge + ages[key];
//     }
//     let averageAge = totalAge / Object.keys(ages).length;
//     return averageAge;
// }

// console.log(
//     someObj({
//         Ali: 34,
//         Will: 56,
//         Tom: 43
//     })
// );

function countStart(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        counter = counter + 1;
    }
    return counter;
}
console.log(countStart(11, 15));

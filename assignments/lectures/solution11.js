//Create a function that takes an array of students ages enrolled into bootcamp. Find and return the average age of the students.
//24+23+18+50
function studentAge(age) {
    let totalAge = 0;
    for (var i = 0; i < age.length; i++) {
        totalAge = totalAge + age[i];
    }
    var averageAge = totalAge / age.length;
    return averageAge;
}
console.log(studentAge([24, 23, 18, 50]));

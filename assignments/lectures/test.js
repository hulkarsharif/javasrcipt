// Problem 1
/*
  Write a function that will print the name of all the students
  Example:
  printNames(students1)
  Mike
  Sarah
  Jessica
  */
let students1 = [{ name: "Mike" }, { name: "Sarah" }, { name: "Jessica" }];
function printNames(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name);
    }
}
printNames(students1);

/*2
//Write a function that will print the name and id of all the students
//Example:printStudents(students2)
//Mike is student #0
Sarah is student #1
Jessica is student #2
*/
let students2 = [
    {
        name: "Mike",
        id: 0
    },
    {
        name: "Sarah",
        id: 1
    },
    {
        name: "Jessica",
        id: 2
    }
];

function printStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i].name} is student #${students[i].id}`);
    }
}
printStudents(students2);

// printStudents(students2); // Uncomment when ready to test

// printStudents(students2); // Uncomment when ready to test

// Problem 3

/*
  Write a function that will print the name of the student and their highest test score
  Example:
  printBestGrade(students3)
  Mike 84
  Sarah 100
  Jessica 92
  */
let students3 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];
function printBestGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let highestScore = 0;
        for (let j = 0; j < student.grades.length; j++) {
            let grade = student.grades[j];
            if (grade.score > highestScore) {
                highestScore = grade.score;
            }
        }
        console.log(`${student.name} ${highestScore}`);
    }
}

printBestGrade(students3);

// Problem 4
/*
  Write a function that will print the name of the student and their average test score
  Example:
  printAverageGrade(students3)
  Mike 61.333333333333336
  Sarah 72.66666666666667
  Jessica 73.33333333333333
  */
let students4 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];

function printAverageGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let sum = 0;
        for (let j = 0; j < students[i].grades.length; j++) {
            sum += students[i].grades[j].score;
        }
        const averageGrade = sum / students[i].grades.length;
        console.log(`${students[i].name} ${averageGrade}`);
    }
}

printAverageGrade(students4);

// printAverageGrade(students4); // Uncomment when ready to test

// Problem 5
// Create the data object that this function is expecting

/*
Example:
printUsers(users1)
0: UserName1
1: UserName2
...and so forth, for all the users
*/

// let users1 = Your code here;
let users1 = [
    { id: 0, username: "UserName1" },
    { id: 1, username: "UserName2" }
];

function printUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`${user.id}: ${user.username}`);
    }
}
printUsers(users1);
// printUsers(users1); // Uncomment when ready to test

// Problem 6
//Create the data object that this function is expecting

/*
  Example:
  printUsersWebsites(users2)
  ~~UserName1~~
    -siteName1
    -siteName2
  ~~UserName2~~
    -siteName3
    -siteName4
    -siteName5
  ...and so forth, for all the users
  */

// let users2 = Your code here;

function printUsersWebsites(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`~~${user.username}~~`);
        for (let j = 0; j < user.sites.length; j++) {
            let site = user.sites[j];
            console.log(`  -${site.url}`);
        }
    }
}
printUsersWebsites(users2);
// printUsersWebsites(users2); // Uncomment when ready to test

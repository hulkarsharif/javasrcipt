// var name1 = "john doe";
// var name2 = "Jane smith";
// var name3 = "bob Johnson";

// //For name1
// var spaceIndex1 = name1.indexOf(" ");
// var firstNameInitial1 = name1[0];
// var lastNameInitial1 = name1[spaceIndex1 + 1];
// console.log((firstNameInitial1 + lastNameInitial1).toUpperCase());

// //For name2

// var spaceIndex2 = name2.indexOf(" ");
// var firstNameInitial2 = name2[0];
// var lastNameInitial2 = name2[spaceIndex2 + 1];
// console.log((firstNameInitial2 + lastNameInitial2).toUpperCase());

// //For name3

// var spaceIndex3 = name3.indexOf(" ");
// var firstNameInitial3 = name3[0];
// var lastNameInitial3 = name3[spaceIndex3 + 1];
// console.log((firstNameInitial3 + lastNameInitial3).toUpperCase());

// var str1 = "I live in Tahsken, ";
// var str2 = "which is citiuated in uzbekistan";
// var str3 = str1.concat(str2);
// console.log(str3);

// var str = " welcome to restaurant";
// console.log(str.indexOf("restaurant"));
// console.log(str.indexOf("goodnight"));

// var str = "Happy Holiday, Navruz";
// var newStr = str.replace("Navruz", "Hayit");
// console.log(newStr);

var name1 = "john doe";
var name2 = "Jane smith";
var name3 = "bob Johnson";

var spaceIndex1 = name1.indexOf(" ");
var spaceIndex2 = name2.indexOf(" ");
var spaceIndex3 = name3.indexOf(" ");

var firstNameInitial1 = name1[0];
var firstNameInitial2 = name2[0];
var firstNameInitial3 = name3[0];

var lastNameInitial1 = name1[spaceIndex1 + 1];
var lastNameInitial2 = name2[spaceIndex2 + 1];
var lastNameInitial3 = name3[spaceIndex3 + 1];

console.log((firstNameInitial1 + lastNameInitial1).toUpperCase());
console.log((firstNameInitial2 + lastNameInitial2).toLocaleUpperCase());
console.log((firstNameInitial3 + lastNameInitial3).toLocaleUpperCase());

var str = "Happy Holiday, Navruz";
var newStr = str.replaceAll("Holiday, Navruz", "Hayyit, Ayyom");
console.log(newStr);

var str = "Happy Holiday";
console.log(str.startsWith("Hello"));
console.log(str.startsWith("Happy"));

var str = "HAPPY NAVRUZ";
console.log(str.toLowerCase());

var str = "happy navruz";
console.log(str.toUpperCase());

var str = "Happy Holiday ";
console.log(str.trimEnd());

var str = " Hello world ";
console.log(str.trim());
var str = " Hello world";
console.log(str.trimStart());

var str = "Happy Holiday";
console.log(str.slice(0, 8));

var str = "Happy Holiday";
console.log(str.slice(-1));

var str = "Happy Holiday";
console.log(str.slice(6));

var str = "Happy Holiday";
console.log(str.slice(100, 105));

var message = " Welcome to new Italian Restaurant! ";
var processedMessage = message
    .trim()
    .toLowerCase()
    .replace(`Italian", "Freanch`);
console.log(processedMessage);

console.log(Math.floor(3.6));
console.log(Math.floor(-2.3));
console.log(Math.ceil(4.4));

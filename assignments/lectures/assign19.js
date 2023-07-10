// function createCamelCase(str) {
//     var words = str.split(" ");
//     words[0] = words[0].toLowerCase();

//     for (var i = 1; i < words.length; i++) {
//         var word = words[i];

//         words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }
//     return words.join("");
// }
// console.log(createCamelCase("Hello world"));

// function splitByMultipleCharacters(str, characters) {
//     for (let i = 0; i < characters.length; i++) {
//         let char = characters[i];
//         str = str.split(char).join("&");
//     }
//     return str.split("&");
// }
// console.log(splitByMultipleCharacters("apple-orange-banana", ["-", "a"]));
// console.log(splitByMultipleCharacters("red,green,blue", [",", "e"]));

// function countWordsInSentence(sentence) {
//     return sentence.split(" ").length;
// }

// console.log(countWordsInSentence("The quick brown fox"));

// function swapFirstAndLastName(fullName) {
//     let result = fullName.split(" ").reverse().join(",");
//     return result;
// }
// console.log(swapFirstAndLastName("John Doe"));

// function createHashtag(str) {
//     let words = str.split("");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return `#${words.join("")}`;
// }
// console.log(createHashtag("hello world good to see you"));
// console.log(createHashtag("OpenAI is awesome"));

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    publisher: "Charles Scribner's Sons",
    year: 1925,
    keywords: ["classic", "American", "novel"]
};

console.log(book.title); // Outputs: 'The Great Gatsby'
console.log(book["publisher"]); // Outputs: 'F. Scott Fitzgerald'

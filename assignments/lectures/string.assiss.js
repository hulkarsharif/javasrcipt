//task1.1
function evenIndexSumString(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0);
        {
            sum = sum + parseInt(str[i]);
        }
    }
    return sum;
}
console.log(evenIndexSumString("1234567890"));

//task 1.2

function evenIndexSumString(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            sum = sum + parseInt(str[i]);
        }
    }
    return sum;
}
console.log(evenIndexSumString("1020304050"));
console.log(evenIndexSumString(""));
console.log(evenIndexSumString("1"));

//task 2
function stringToCharArrayAdvanced(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (isAlphabet(str)) {
            return char;
        }
    }
    return result;
}
console.log(stringToCharArrayAdvanced("hello"));
function stringToCharArrayAdvanced(str) {
    var result = [];
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        if (isAlphabet(char)) {
            result.push(char);
        }
    }
    return result;
}
function isAlphabet(char) {
    var alpphaUpAndLow = /[a-zA-Z]/;
    return alpphaUpAndLow.test(char);
}

console.log(stringToCharArrayAdvanced("hello!"));
console.log(stringToCharArrayAdvanced("world?123"));
console.log(stringToCharArrayAdvanced("!/?123"));

//task 3
function evenIndexMultiplyString(str) {
    var product = 1;
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0);
        {
            product = product * parseInt(str[i]);
        }
    }
    return product;
}
console.log(evenIndexMultiplyString("1234567890"));
console.log(evenIndexMultiplyString("1020304050"));
console.log(evenIndexMultiplyString(""));
console.log(evenIndexMultiplyString("1"));

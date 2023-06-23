//An email is deemed valid if it meets the following conditions:
// The email must contain exactly one "@" symbol.
// Username:
// All characters before the "@" symbol (the username) should be alphanumeric, underscores, or dots ".".
// A username cannot start or end with an underscore or dot.
// A username cannot have a dot and an underscore together.
// Domain:
// There must be exactly one dot "." after the "@" symbol (in the domain part).
// Other than the dot ".", all characters in the domain part must be from the alphabet (no numbers or underscores allowed).
// Domain (For example gmail )part should have at least 1 character.
// Domain extension(For example com )part should have at least 2 characters and 3

function isValidEmail(email) {
    var emailParts = email.split("@");
    var alphabet = "abscedghijklmnopqrstuvwxzy";
    var numbers = "1234567890";
    var allowedChars = "._";

    var username = emailParts[0];
    var domain = emailParts[1];

    //cheking if @ is only 1
    if (emailParts.length !== 2) {
        return false;
    }

    //It checks if the username starts or ends with a dot or an underscore. If it does, the function returns false, as this is not allowed in valid emails
    if (
        username[0] === "." ||
        username[0] === "_" ||
        username[username.length - 1] === "." ||
        username[username.length - 1] === "_"
    ) {
        return false;
    }

    //The function loops through each character in the username part. It checks if the character is in the allowed characters list, which consists of lowercase alphabets, numbers, and the characters "." and "_". If a character is found that is not in the allowed list, the function returns false.
    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (
            !alphabet.includes(char.toLowerCase()) &&
            !numbers.includes(char) &&
            !allowedChars.includes(char)
        ) {
            return false;
        }
    }
    for (var i = 0; i < username.length - 1; i++) {
        currentChar = username[i];
        var nextChar = username[i + 1];
        if (
            allowedChars.includes(currentChar) &&
            allowedChars.includes(nextChar)
        ) {
            return false;
        }
    }
    //The function splits the domain part into two at the "." symbol. It then checks if the domain part has been split into exactly two parts, i.e., the domain name and the extension. If not, the function returns false, as a valid domain must contain exactly one "." symbol.
    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }
    //It checks the length of the domain name and the extension. The domain name must be at least one character long, and the extension must be between two and three characters long, inclusive. If these conditions are not met, the function returns false.
    if (
        domainParts[0].length < 1 ||
        domainParts[1].length < 2 ||
        domainParts[1].length > 3
    ) {
        return false;
    }
    //The function then loops through each character in the domain part (both the domain name and the extension), checking if each character is a lowercase alphabet. If a character is found that is not a lowercase alphabet, the function returns false.
    var domainPartsWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartsWithoutDot.length; i++) {
        var char = domainPartsWithoutDot[i];
        if (!alphabet.includes(char.toLowerCase())) {
            return false;
        }
    }
    return true;
}

// Regular and valid email
console.log(isValidEmail("john.doe@example.com") === true); // Should print: true

// Valid email with numbers in username
console.log(isValidEmail("john2.doe3@example.com") === true); // Should print: true

// Valid email with underscore in username
console.log(isValidEmail("john_doe@example.com") === true); // Should print: true

// Valid email with capital letters
console.log(isValidEmail("John.Doe@Example.com") === true); // Should print: true

// Test for an email with three-letter domain extension
console.log(isValidEmail("john.doe@example.net") === true); // Should print: true

// Test for an email with two-letter domain extension
console.log(isValidEmail("john.doe@example.co") === true); // Should print: true
// Test for an email with one letter domain name
console.log(isValidEmail("john@d.com") === true); // Should print: true

// Test for an email with no "@" symbol:
console.log(isValidEmail("johndoexample.com") === false); // Should print: true

// Test for an email with multiple "@" symbols:
console.log(isValidEmail("john@doe@example.com") === false); // Should print: true

// Test for an email where username starts or ends with a dot or an underscore:
console.log(isValidEmail(".john@doe.com") === false); // Should print: true
console.log(isValidEmail("john.@doe.com") === false); // Should print: true
console.log(isValidEmail("_john@doe.com") === false); // Should print: true
console.log(isValidEmail("john_@doe.com") === false); // Should print: true

// Test for an email where username has adjacent dots or underscores:
console.log(isValidEmail("john..doe@example.com") === false); // Should print: true
console.log(isValidEmail("john__doe@example.com") === false); // Should print: true
console.log(isValidEmail("john._doe@example.com") === false); // Should print: true
console.log(isValidEmail("john_.doe@example.com") === false); // Should print: true

// Test for an email where domain does not have exactly one "." character:
console.log(isValidEmail("john@doecom") === false); // Should print: true
console.log(isValidEmail("john@doe.com.com") === false); // Should print: true

// Test for an email where domain name or extension is not of valid length:
console.log(isValidEmail("john@doe.c") === false); // Should print: true
console.log(isValidEmail("john@doe.comm") === false); // Should print: true

// Test for an email where domain name or extension contains invalid characters:
console.log(isValidEmail("john@do3.com") === false); // Should print: true
console.log(isValidEmail("john@doe.c_m") === false); // Should print: true

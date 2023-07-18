function isAlphabetic(char) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.includes(char.toLowerCase());
}
function isNumeric(char) {
    const numbers = "1234567890";
    return numbers.includes(char);
}
function isAllowedChar(char) {
    const allowedChars = "/:?!{}";
    return allowedChars.includes(char);
}
let tld = "com, io, app, dev, ai, tech, co.";
let validSymbol = "?,=,&";
function isValidProtocol(url) {
    if (url.isStartsWith("http://") || url.isStartsWith("https://")) {
        return true;
    }
}
function isValidSubdomain(url) {
    let splitUrl = url.split(".");
    if (!splitUrl[0] === "www" && splitUrl.length === 3) {
        return false;
    } else if (url) {
    }
}
function isValidDomainName() {
    if (!isAllowedChar.includes(isValidSubdomain[1])) {
        return true;
    }
}
function isValidTld() {
    if (!tld.includes(isValidSubdomain[2])) {
        return false;
    }
}
function isValidPath(url) {
    let splitUrlByPath = url.split("/");
    if (
        isAlphabetic.includes(splitUrlByPath[1]) &&
        isNumeric.includes(splitUrlByPath[1])
    ) {
        return true;
    }
}
function isValidQuery(url) {
    let splitQuery = url.split("?");
    if (
        validSymbol.includes(splitQuery[1] && isNumeric.includes(splitQuery[1]))
    ) {
        return true;
    }
}

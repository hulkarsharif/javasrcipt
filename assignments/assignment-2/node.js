//comparison Operators
5 == "5"; // true because both are values
5 === "5"; // false because comparing not types
5 != "5"; // false they are equal
5 !== "5"; // true they are numbers and string
5 > 3; // true 5 is greater than 3
5 < 3; // false 3 is not greater than 5
5 >= 5; // true
5 <= 6; // true

// Logical Operators

true && false; // false
true || false; // true
!true; // false
(true && false) || true; // true
(!false && true) || false; // false

// Combining Logical and Comparison Operators

5 > 3 && 2 == "2"; // true
5 !== "5" && 6 <= 10; // true because 5 is not value
4 < 2 || 3 !== "3"; // true
!(5 > 3 && 2 == "2"); //false

!(3 === "3" || 7 > 10); //true need answer
(5 > 3 && !(2 === "2")) || 4 !== "4"; //true
7 >= "7" || (!(9 < 11) && 2 !== "2"); //true

// More Complex Examples

5 > 3 && 2 == "2" && 7 < 10; // true
5 !== "5" && 6 <= 10 && 2 === 2; // true
3 === "3" || 7 > 10 || 4 !== 4; //false
4 < 2 || 3 !== "3" || 5 == "5"; // true
!((5 > 3 && 2 == "2") || 9 === "9"); // false
!(3 === "3" || (7 > 10 && 5 !== 5)); // true
(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); // true
7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"; // true

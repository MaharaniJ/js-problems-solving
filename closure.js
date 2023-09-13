//closure
//12/9/2023

function multiply(a) {
  return function (b) {
    return function (c) {
      return (a * b) / c;
    };
  };
}
const ans = multiply(4)(5)(6);
console.log(ans);

//palindrom:
function string(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(string("racecar"));

let str = "Hello";
console.log(str.split("")); //output:[ 'H', 'e', 'l', 'l', 'o' ]
console.log(str.split(" ")); //[ 'Hello' ]
console.log(str.split(" ").join("")); //Hello
console.log(str.split(" ").join(" ")); //Hello
console.log(str.split(" ").join("").charAt(0)); //H

//====
let x = "John";
let y = new String("John");
console.log(x === y); //output : false

// The reason for the false result is that x is a string primitive, while y is a String object created using the new keyword.
// The strict equality operator (===) not only compares the values but also checks for the types of operands. In this case, x is a string primitive, and y is an object of the String type.

let str1 = "Hello" - 2;
console.log(str1); //NaN

let letter = " letter";
console.log(letter.trim()); //letter

let printcuttedvalue = "Hello, World!";
console.log(printcuttedvalue.slice(0, 5)); //Hello

// const res = null;
// res.toString(); //TypeError

let word = "Hello, World!";
console.log(word.substr(-3)); //Id!

//Which code snippet checks if a string is empty in JavaScript?
//Answer: c) str.length === 0;

// Which of the following is an example of a multiline string literal?
// Answer: c) `Hello\nWorld`

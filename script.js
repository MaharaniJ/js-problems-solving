//#1 Palindrome

const palindrome = (str) => {
  str = str.toLowerCase();
  return str == str.split("").reverse().join("");
};
let str = "Anna";
console.log(palindrome(str));

//#2 FizzBuzz

const number = (num) => {
  // console.log(num)
  for (let i = 0; i <= num.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
let num = [15, 3, 5, 1, 2, 4];
number(num);

//#4 Find the Vowels

const findVowels = (string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
var string = "Flowers";
console.log(findVowels(str));

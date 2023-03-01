let isCheck = confirm ("Hello, everybode! =)"); 
// 1. Ask for the user's name and display "Hello, *name*" in response;
let firstName = prompt ("I'd like to know your name: ");
alert(`Hello, ${firstName}!`);
// 2. Ask the user's year of birth, calculate his/her age and display the result. Enter the current year in the code as a constant;
let yearOfBirth = prompt ("I'd like to know your full year of birth: ");
const currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
alert(`Your age is ${age} years old.`);
// 3.Ask the user for the length of the side of the square and output the perimeter of this square
let side = prompt ("I'd like to know the length of the side of the square: ");
let perimeter = side * 4;
alert(`The perimeter of the square is ${perimeter.toFixed(2)} with length of side ${side}.`);

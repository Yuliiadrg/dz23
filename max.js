// 1. Ask the user for the radius of a circle and display the area of such a circle.
let radius = prompt ("I'd like to know the radius of a circle: ");
let areaOfCircle = Math.PI * radius ** 2;
alert(`The area of such a circle is ${areaOfCircle.toFixed(2)} with such lenght of radius as ${radius}.`);
// 2. Ask the user the distance in kilometers between two cities and how many hours he wants to get there. Calculate the speed with which you need to move in order to make it on time.
let distance = prompt ("I'd like to know the distance in kilometers between two cities: ");
let hour = prompt ("Enter how many hours you want to arrive there: ");
let speed = distance / hour;
alert(`To overcome the distance ${distance}km for ${hour}hour, your speed should be ${speed.toFixed(2)}km/h .`); 
// 3. Implement a currency converter. The user enters dollars, the program converts them into euros. The exchange rate is kept constant.
let dollars = prompt ("Enter the amount of dollars which will exchange for euros: ");
const exchangeRate = 0.95;
let euros = dollars * 0.95;
alert(`You'll get ${euros.toFixed(2)} euros per ${dollars} dollars.`);

let isCheck = confirm ('Do you like my HW?');

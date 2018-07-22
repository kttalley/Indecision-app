// const square = function (x) {
//     return x*x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x; 



// console.log(square(8));
// console.log(squareArrow(9));
//6:34


//challenge getFirstName('Mike Stench') -> "Mike"
//create regular arrow function
//create arrow function using shorthand syntax

const fullName1 = "Artemis Fowl";
const fullName2 = "Bart Simpson";
let firstName;

const getFirstName = (name) => {
     firstName = name.split(' ')[0];
    console.log(firstName);
}
getFirstName(fullName1);

//shortened arrow functions without curly brackets
//can only have one expression and be used only
//to return one value

//versus logging something to console.

let getFirstNameShortened = (name) => name.split(' ')[0];
console.log(getFirstNameShortened(fullName2));

//long hand arrow, side effect functions
let lastName;
const getLastName = (name) => {
    lastName = name.split(' ')[1];
    console.log('    ' + lastName);
}
getLastName(fullName2);

const getLastNameShortened = (name) => name.split(' ')[1];

console.log( getLastNameShortened(fullName1) );
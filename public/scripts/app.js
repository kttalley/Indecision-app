'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    //the arguments object, which is an array of all inputs given, 
    //is not accessible in arrow functions
    return a + b;
};

var sub = function sub(a, b) {
    return a - b;
};

console.log(add(56, 8));
console.log(sub(56, 8));

//anon functions vs declared
var user = {
    name: 'Kristian',
    cities: ['Santa Cruz', 'Moses Lake', 'Ankara'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        // return cityMessages;
        // console.log(this.name);
        // console.log(this.cities);


        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

//challenge

var multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array of resulting values

    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

//forEach method applies a function to each element of the array
//forEach returns nothing.

//map returns the modified elements


console.log(multiplier.multiply());

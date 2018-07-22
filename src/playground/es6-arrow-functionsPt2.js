//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    //the arguments object, which is an array of all inputs given, 
    //is not accessible in arrow functions
    return a+b;
};

const sub = (a, b) => {
    return a-b;
}

console.log(add(56,8));
console.log(sub(56,8));

//anon functions vs declared
const user = {
    name: 'Kristian',
    cities: ['Santa Cruz', 'Moses Lake', 'Ankara'],
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city);
        // return cityMessages;
        // console.log(this.name);
        // console.log(this.cities);


        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }

};

console.log (user.printPlacesLived() );

//challenge

const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array of resulting values

    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
         return this.numbers.map( (number) => number * this.multiplyBy); 
    }
};

//forEach method applies a function to each element of the array
//forEach returns nothing.

//map returns the modified elements



console.log(multiplier.multiply());
class Person {
    constructor(name = 'Anonymous', age = 0) {
        //before function defaults, this is how you would avoid undefined,
        this.name = name || 'test'; //function default overrides || operator, which would otherwise render test else undefined. 
        this.age = age;
    } //no comma after constructor method
    getGreeting(){
        //return 'Yo, I am ' + this.name + '!';
        return `Hi, I am a ${ this.name}`; //${} to inject expressions into strings
        //es6 string with backtick, next to 1 key
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}
//es6 subclass syntax example
//inherits all the functionality of Person, then some
class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age); //exactly the same as calling parent constructor function
        this.major = major;
        //only need to bind the extended constructor argument
        //IF the initial parent constructor of non-subclass is evaluated
    }
    //methods extend from Person class
    hasMajor() {
        return !!this.major; 
    }
    //empty strings are falsey--fails if test
    //however !'' is true
    //!! '' false
    //!! 'Kristian Talley' True
    getDescription() {
        let description = super.getDescription();
        //change/override behavior of parent method
        if (this.hasMajor()){
            description += ` their major is ${this.major}`;
        }
        return description;
    }
}

//override getGreeting
//1. Hi I am {name}
//2. I'm visiting from {homeLocation}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age, homeLocation);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}


const me = new Student('Kristian Talley', 26, 'Art');
console.log(me.getDescription());


const other = new Student();
console.log(other.getDescription());

const vlad = new Traveler('Vlad', '55', 'Russia');
console.log( vlad.getGreeting() );

const drumpf = new Traveler('Donold', '69', 'Queens');
console.log( drumpf.getGreeting());

const homeward = new Traveler('Ralf');
console.log( homeward.getGreeting() );
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        //before function defaults, this is how you would avoid undefined,
        this.name = name || 'test'; //function default overrides || operator, which would otherwise render test else undefined. 
        this.age = age;
    } //no comma after constructor method


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            //return 'Yo, I am ' + this.name + '!';
            return 'Hi, I am a ' + this.name; //${} to inject expressions into strings
            //es6 string with backtick, next to 1 key
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old.';
        }
    }]);

    return Person;
}();
//es6 subclass syntax example
//inherits all the functionality of Person, then some


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        var major = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Undecided';

        _classCallCheck(this, Student);

        //exactly the same as calling parent constructor function
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        //only need to bind the extended constructor argument
        //IF the initial parent constructor of non-subclass is evaluated
        return _this;
    }
    //methods extend from Person class


    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
        //empty strings are falsey--fails if test
        //however !'' is true
        //!! '' false
        //!! 'Kristian Talley' True

    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            //change/override behavior of parent method
            if (this.hasMajor()) {
                description += ' their major is ' + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

//override getGreeting
//1. Hi I am {name}
//2. I'm visiting from {homeLocation}


var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age, homeLocation));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
            if (this.homeLocation) {
                greeting += ' I am visiting from ' + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Student('Kristian Talley', 26, 'Art');
console.log(me.getDescription());

var other = new Student();
console.log(other.getDescription());

var vlad = new Traveler('Vlad', '55', 'Russia');
console.log(vlad.getGreeting());

var drumpf = new Traveler('Donold', '69', 'Queens');
console.log(drumpf.getGreeting());

var homeward = new Traveler('Ralf');
console.log(homeward.getGreeting());

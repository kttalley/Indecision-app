//even functions are objects in JS
//with their own properties and methods

var regObjFood = {
    name: "kiwi",
    category: "Fruit",
    makeJuice: function () {
        var message = "Making" + this.name + "juice";
        return message;
    }
}

// because functions in javascript are objects
//we can attach properties and objects to it.
//lets take a look.

function Food() {
    //logic goes here
}
// Food.name = "Kiwi";
Food.category = "Fruit";
Food.makeJuice = function () {
    var message = "Making " + this.name + " juice";
    return message;
    console.log(message);
};


Function.prototype.makeJuice = function() {
    console.log("Making " + this.name + " juice");
}

var myFruit = function Food() {
    this.name = "kiwi";
}.makeJuice();

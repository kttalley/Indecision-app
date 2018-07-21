var nameVar = 'kristian';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal'; //function scope
    return petName;
}

const petName = getPetName();
console.log(petName);

//block scoping

var fullName = 'Kristian Talley';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//if using var, not block scope,
//if using const, let, block scope.
console.log(firstName);
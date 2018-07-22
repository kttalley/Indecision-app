// Create a templateTwo var jsx expression
// div
//  h1 -> Kristian Talley
//  p -> age: 26
//  p -> location:
// render templateTwo instead of template

let userName = 'KTHIZZLE';
let userAge = 303;
let counter = 0;
let userLocation = 'urButt';

let user = {
    name: 'KTT',
    age: 33,
    // location: 'beb'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } //else it returns null: rendering nothing!!!
}

//ternary operators are great if you want one of two things to happen.
//the ampersand operator is great if you want only one thing to render,
//else nothing.

//ternary operator example
true ? 'KTT' : 'Anonymous'

//if suchnSuch is true, return KTT. Else, return anon.
//can be written inline versus nesting inside a function.
function getName(name){
    
}

// for ( var x = 0; x < 1000; x++){
//     counter+=x;
//     console.log(counter); //lol
// }

const templateTwo = (
    <div>
        <h1>{ 
            user.name ? user.name : 'Anon'
            //if there is a user name, render it. Otherwise, render anon. 
        }</h1>
        
        {
            //user.age >= 18 && <p>Age: {user.age} </p>
        }
        {
            //if the user age is >= to 18 then render the paragraph element.
            //un-truthy jsx evaluations render no thangs.
        }
        {
            //or to check if there even is a user age..
        }
        { (user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {
            //if there even is a user age, and that user age is greater
            //than 18, go ahead and render the paragraph element.

            //this allows us to have dynamic objects.
        }
        {getLocation(user.location)}
     
    </div>
);
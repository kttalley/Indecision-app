console.log('app.js is running!');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch





//create app object title/subtitle
//use title/subtitle in template
//render template.


//only render the subtitle (and p tag) if subtitle exists -- logical & operator
//render new p tag - if options.length > 0 "here are your options"
//if not, no options.


const rootApp = {
    title: 'Indecision App',
    subTitle: 'Put yo life in the hands of a computah',
    options: [ 'One', 'Two']

}

const indecisonTemplate = (
    <div>
        <h1> {rootApp.title} </h1>
        { rootApp.subTitle && <h3>{rootApp.subTitle}</h3>}
        {/*only render subtitle if it exists*/}
        {rootApp.options.length > 0 ? <p> There be options. </p> : <p>No options.</p>}
        <ol>
            <li> this is a list item </li>
            <li> this is a list item </li>
        </ol>

    </div>
);


const template = ( 
    <div> 
        <h1> Indecision App</h1>
        <h2> Kristian </h2>
        <p> This is some info.</p>
        <ol>
            <li>
                Line item one.
            </li>
            <li>
                Line item two.e
            </li>
        </ol>
    </div>
);

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
let count = 0;
let someId = 'javaScriptVar-forID'
let subId = 'subId';

const addOne = () => {
    console.log('addOne');
};
const subOne = () => {
    console.log('subOne');
};
const resetCount = () => {
    console.log( 'reset' );
};
const templateThree = (
  <div>
    <h1>
        Count: {count}
    </h1>
    <button id = {someId} className = "button" onClick = { addOne }>
        +1
    </button>
    <button id = {subId} className = "subButton" onClick = { subOne }>
        -1
    </button>
    <button id = {someId} className = "button" onClick = { resetCount }>
        Reset
    </button>
  </div>
);


//challenge make button = -1 = setup minusOne function adn register -log "minusOne"
//make reset button 'reset' - setup reset function - log 'reset' 






const appRoot = document.getElementById("app");

ReactDOM.render(
    // indecisonTemplate,
    // templateTwo,
    templateThree,
    appRoot
);
console.log('app.js is running!');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch





//create app object title/subtitle
//use title/subtitle in template
//render template.


var rootApp = {
    title: 'Indecision App',
    subTitle: 'Put yo life in the hands of a computah'
}

var indecisonTemplate = (
    <div>
        <h1> {rootApp.title} </h1>
        <h3> {rootApp.subTitle} </h3>
    </div>
);


var template = ( 
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
    location: 'beb'
}

for ( var x = 0; x < 1000; x++){
    counter+=x;
    console.log(counter); //lol
}

let templateTwo = (
    <div>
        <h1>{
            user.name    //unable to render entire objects, only their props.     
        }</h1>
        <p> 
            Age: {userAge}
        </p>
        <p> 
            Location: {userLocation}
        </p>

    </div>
);







var appRoot = document.getElementById("app");

ReactDOM.render(
    indecisonTemplate,
    appRoot
);
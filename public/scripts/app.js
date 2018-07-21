'use strict';

console.log('app.js is running!');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


//create app object title/subtitle
//use title/subtitle in template
//render template.


var rootApp = {
    title: 'Indecision App',
    subTitle: 'Put yo life in the hands of a computah'
};

var indecisonTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        rootApp.title,
        ' '
    ),
    React.createElement(
        'h3',
        null,
        ' ',
        rootApp.subTitle,
        ' '
    )
);

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Indecision App'
    ),
    React.createElement(
        'h2',
        null,
        ' Kristian '
    ),
    React.createElement(
        'p',
        null,
        ' This is some info.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Line item one.'
        ),
        React.createElement(
            'li',
            null,
            'Line item two.e'
        )
    )
);

// Create a templateTwo var jsx expression
// div
//  h1 -> Kristian Talley
//  p -> age: 26
//  p -> location:
// render templateTwo instead of template

var userName = 'KTHIZZLE';
var userAge = 303;
var counter = 0;
var userLocation = 'urButt';

var user = {
    name: 'KTT',
    age: 33,
    location: 'beb'
};

for (var x = 0; x < 1000; x++) {
    counter += x;
    console.log(counter); //lol
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name //unable to render entire objects, only their props.     

    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(indecisonTemplate, appRoot);

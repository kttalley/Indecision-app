'use strict';

console.log('app.js is running!');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


//create app object title/subtitle
//use title/subtitle in template
//render template.


//only render the subtitle (and p tag) if subtitle exists -- logical & operator
//render new p tag - if options.length > 0 "here are your options"
//if not, no options.


var rootApp = {
    title: 'Indecision App',
    subTitle: 'Put yo life in the hands of a computah',
    options: ['One', 'Two']

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
    rootApp.subTitle && React.createElement(
        'h3',
        null,
        rootApp.subTitle
    ),
    rootApp.options.length > 0 ? React.createElement(
        'p',
        null,
        ' There be options. '
    ) : React.createElement(
        'p',
        null,
        'No options.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' this is a list item '
        ),
        React.createElement(
            'li',
            null,
            ' this is a list item '
        )
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
    age: 33
    // location: 'beb'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } //else it returns null: rendering nothing!!!
}

//ternary operators are great if you want one of two things to happen.
//the ampersand operator is great if you want only one thing to render,
//else nothing.

//ternary operator example
true ? 'KTT' : 'Anonymous';

//if suchnSuch is true, return KTT. Else, return anon.
//can be written inline versus nesting inside a function.
function getName(name) {}

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
        user.name ? user.name : 'Anon'
        //if there is a user name, render it. Otherwise, render anon. 

    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(indecisonTemplate,
// templateTwo,
appRoot);

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
    options: []

};

var optionCount = 0;

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        rootApp.options.push(option);
        e.target.elements.option.value = '';
        // optionCount++;
        optionCount = rootApp.options.length;
    }
    reRenderTemplate();
};

var subButton = function subButton() {
    rootApp.options.length > 0 && rootApp.options.splice(-1);
    optionCount = rootApp.options.length;
    reRenderTemplate();
};

var resetButton = function resetButton() {
    rootApp.options = [];
    optionCount = rootApp.options.length;
    reRenderTemplate();
};
//floor method rounds, random method chooses a number between 0 and 0.999
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * rootApp.options.length);
    var option = rootApp.options[randomNum];
    alert(option);
    // console.log(randomNum);
};

var numbers = [200, 55, 101];

var reRenderTemplate = function reRenderTemplate() {
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
            'p',
            null,
            ' Amount of Options: ',
            optionCount
        ),
        React.createElement(
            'button',
            { disabled: rootApp.options.length === 0, onClick: onMakeDecision },
            ' What should I do? '
        ),
        React.createElement(
            'ol',
            null,
            rootApp.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: subButton },
            'Remove last option.'
        ),
        React.createElement(
            'button',
            { onClick: resetButton },
            'Restart your to-do list.'
        ),

        // [ <p key = '0'>a</p>, <p key = '1'>b</p>, <p key = '2'>c</p>]
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number: ',
                number
            );
        })
    );
    ReactDOM.render(indecisonTemplate, appRoot);
};

var appRoot = document.getElementById('app');

reRenderTemplate();

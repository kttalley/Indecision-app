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
    rootApp.options.splice(-1);
    optionCount = rootApp.options.length;
    reRenderTemplate();
};

var resetButton = function resetButton() {
    rootApp.options = [];
    optionCount = rootApp.options.length;
    reRenderTemplate();
};

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
        )
    );
    ReactDOM.render(indecisonTemplate, appRoot);
};

var appRoot = document.getElementById('app');

reRenderTemplate();

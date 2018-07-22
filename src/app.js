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
    options: []

}

let optionCount = 0;

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if (option) {
        rootApp.options.push(option);
        e.target.elements.option.value = '';
        // optionCount++;
        optionCount = rootApp.options.length;
    
    }
    reRenderTemplate();
};

const subButton = () => {
    rootApp.options.splice(-1);
    optionCount = rootApp.options.length;
    reRenderTemplate();
}

const resetButton = () => {
    rootApp.options = [];
    optionCount = rootApp.options.length;
    reRenderTemplate();
    
}


const reRenderTemplate = () => {
    const indecisonTemplate = (
        <div>
            <h1> {rootApp.title} </h1>
            { rootApp.subTitle && <h3>{rootApp.subTitle}</h3>}
            {/*only render subtitle if it exists*/}
            {rootApp.options.length > 0 ? <p> There be options. </p> : <p>No options.</p>}
            <p> Amount of Options: {optionCount}</p>
            <ol>
                <li> this is a list item </li>
                <li> this is a list item </li>
            </ol>
    
            <form onSubmit = {onFormSubmit}>
                <input type ="text" name = "option"/>
                <button>Add Option</button>
            </form>
            
            <button onClick = {subButton}>
                Remove last option.
            </button>
    
            <button onClick = {resetButton}>
                Restart your to-do list.
            </button>

        </div>
    );
    ReactDOM.render(
        indecisonTemplate,
            appRoot
    );
};



const appRoot = document.getElementById('app');

reRenderTemplate();

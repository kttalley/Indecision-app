let count = 0;
let someId = 'javaScriptVar-forID'
let subId = 'subId';

//modified data does not automatically re-render the template.
//Therefore having the template nested within a function
//that is called everytime a piece of data changes is the solution.

const addOne = () => {
    count++;
    // console.log('addOne', count);
    renderCounterApp();
};
const subOne = () => {
    count > 0 && count--;
    // console.log('subOne');
    
    renderCounterApp();
};
const resetCount = () => {
    count = 0;
    renderCounterApp();
};



//challenge make button = -1 = setup minusOne function adn register -log "minusOne"
//make reset button 'reset' - setup reset function - log 'reset' 






const appRoot = document.getElementById("app");



const renderCounterApp = () => {
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

      ReactDOM.render(
        // indecisonTemplate,
        // templateTwo,
        templateThree,
        appRoot
    );
};

renderCounterApp();
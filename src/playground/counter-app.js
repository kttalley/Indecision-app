class Counter extends React.Component {
    
    //state is an object that allows data to change
    //and re-render components
    //we set the default state in the constructor.
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.resetCount = this.resetCount.bind(this);

        //define default state of component.
        this.state = {
            count: 0
        };
    }
    addOne(){
        //this.setState() is a function that requires a function that
        //returns a new state object. Upon assigning the new state object
        //the component re-renders.
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        });
        //setState() method does not override state, only injects changed props.
    }

    resetCount(){
       this.setState( () => {
           
            //return an object to update the state object and reRender the component.
            //setState does not need an argument since it's not
            //referencing the current count of the component,
            //its only assigning/resetting it to 0, regardless of what it is.
            return {
                count: prevState.count = 0
            }
       });
       //you can use two setStates in conjunction ONLY
       //if you reference the previous state as an arg
       //as it is batched async by react
       this.setState( (prevState) => {
            this.prevState.count +1
       });

    }

    subOne(){
        //this.setState calls are async.
        //react's effeciency batches setState() simulatenouesly,
        //making it impossible to use setState in a linear way.
        //unless you pass in an argument
        
        
        this.setState( (prevState) => {
            return {
                count: 
                prevState.count <= 0 ? prevState.count = 0 : prevState.count -1
               
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick = {this.addOne}> +1 </button>
                <button onClick = {this.subOne}> -1 </button>
                <button onClick = {this.resetCount}> reset </button>
            </div>
        );
    }

}

ReactDOM.render(
    <Counter />,
    document.getElementById('app')
);






// let count = 0;
// let someId = 'javaScriptVar-forID'
// let subId = 'subId';

// //modified data does not automatically re-render the template.
// //Therefore having the template nested within a function
// //that is called everytime a piece of data changes is the solution.

// const addOne = () => {
//     count++;
//     // console.log('addOne', count);
//     renderCounterApp();
// };
// const subOne = () => {
//     count > 0 && count--;
//     // console.log('subOne');
    
//     renderCounterApp();
// };
// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };



// //challenge make button = -1 = setup minusOne function adn register -log "minusOne"
// //make reset button 'reset' - setup reset function - log 'reset' 






// const appRoot = document.getElementById("app");



// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//           <h1>
//               Count: {count}
//           </h1>
//           <button id = {someId} className = "button" onClick = { addOne }>
//               +1
//           </button>
//           <button id = {subId} className = "subButton" onClick = { subOne }>
//               -1
//           </button>
//           <button id = {someId} className = "button" onClick = { resetCount }>
//               Reset
//           </button>
//         </div>
//       );

//       ReactDOM.render(
//         // indecisonTemplate,
//         // templateTwo,
//         templateThree,
//         appRoot
//     );
// };

// renderCounterApp();
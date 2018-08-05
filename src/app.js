// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);


// console.log(getName());

// stateless functional component


class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
                options: []
        };
    }
    
    //handleDeleteOptions
    handleDeleteOptions() {
        this.setState( () => {
            return {
                 options: []
            };
        });
    }
    handlePick() {
       const randomNum = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randomNum];
       alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid item to the list.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item has already been added to the list.'
        }
        this.setState( (prevState) => {
            // prevState.options.push(option); dont modify array
            return {
                options: prevState.options.concat([option])
            };
        });
    } 
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computerrrr';
        return (
            <div>
                <Header title = {title} subTitle = {subTitle} />
                <Action 
                    hasOptions = {this.state.options.length > 0 }
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options = {this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                />             
                <AddOptions 
                    handleAddOption = {this.handleAddOption}    
                />
                
            </div>
        );
    }
}

// Setup options prop for Options component
// Render the length of the array

// class Header extends React.Component {
//     render() {
        
//         return (
//             <div>
//                 <h1>{this.props.title} </h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// }
const Header = (props) => 
    <div>
        <h1>
            {props.title}
        </h1>
        <h2>
            {props.subTitle}
        </h2>
    </div>

//class component
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick = {this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 > 
//                     What should I do next?
//                 </button>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePick}
                disabled = {!props.hasOptions}
            
            >
                What should I do next?
            </button>
        </div>
    )
}

// class Options extends React.Component {
//     render() {
//        return (
//            <div>
//            {
//             this.props.options.map((option) => <Option key={option} optionText={option} />)
//           }
//            <button onClick = {this.props.handleDeleteOptions}> Clear list. </button>
//            </div>
//        );
//     }
// }
const Options = (props) => {
    return (
        <div>
            {props.options.map( (option) => 
                <Option key = {option} optionText = {option} />
            )}
            <button onClick = {props.handleDeleteOptions}>
                Clear list.
            </button>
        </div>
        
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                <p>{this.props.optionText}</p>
//             </div>
//         );
//     }

// }
const Option = (props) => {
    return (
        <div>
            <p>
                {props.optionText}
            </p>
        </div>
    );
}


class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState( () => {
            return {
                error: error
            }
        });
    }
    render () {
        return (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.onFormSubmit}>
                <input type ="text" name = "option"/>
                <button>Add Option</button>
            </form>
          </div>  
        );
    }
}
//stateless functional component
const User = (props) => {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p> Age:{props.age} </p>
        </div>
    );
};

ReactDOM.render (
   <IndecisionApp />,
//    <User name = "Andrew" age = {26}/>, //stateless functional component
    document.getElementById('app')
);
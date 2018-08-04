let b = 'a';
// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);


// console.log(getName());

class IndecisionApp extends React.Component{
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computerrrr';
        const options = ['Thing One', `Thing Two`, `Thing Three`];
        return (
            <div>
                <Header title = {title} subTitle = {subTitle} />
                <Action />
                <Options options = {options} />
                <AddOptions />
            </div>
        );
    }
}

// Setup options prop for Options component
// Render the length of the array

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title} </h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick = {this.handlePick}> What should I do next? </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        //this no longer points to parent
        console.log(this.props.options);
        //  this.props.options.splice(-1);
        // alert('removeAll');

        // optionCount = 0;

    }
    render() {
       return (
           <div>
           {
               this.props.options.map((option) => <Option key={option} optionText={option}/>)
           }
           <button onClick = {this.removeAll}> Start over </button>
           </div>
       );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
               Option:  {this.props.optionText}
            </div>
        );
    }

}


class AddOptions extends React.Component {
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert('option');        
        }
    }
    render () {
        return (
          <div>
            <form onSubmit = {this.onFormSubmit}>
                <input type ="text" name = "option"/>
                <button>Add Option</button>
            </form>
          </div>  
        );
    }
}

// const templateContainer = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOptions />

//     </div>
// )
ReactDOM.render (
   <IndecisionApp />,
    document.getElementById('app')
);